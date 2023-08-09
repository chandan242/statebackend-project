import jsPDF from "jspdf";
import "jspdf-autotable";

export const generatePDF = (headers, data, text="text") => {
    const doc = new jsPDF();
    doc.setFontSize(12);

    const pageWidth = doc.internal.pageSize.width;
    const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const xCoordinate = (pageWidth - textWidth) / 2;

    doc.text(text, xCoordinate, 10);

    doc.autoTable({
        head: [headers],
        body: data,
        startY: 20,
    });

    doc.save(`${text}.pdf`);
};
