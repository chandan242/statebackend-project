import React from 'react'
 export const DeviceApprovedStatus = () => {
    const approvalData = [
        {
            id: 1,
            model_name: 'MMI',
            is_irnss: 'Yes',
            certifying_authority: 'Authority X',
            tac_certificate_no: 'TAC123',
            cop_certificate_no: 'COP456',
            permitted_esim: ['ESIM Provider 1', 'ESIM Provider 2'],
            approval_status:'pending'
        },
        {
            id: 2,
            model_name: 'yvyglyuu',
            is_irnss: 'No',
            certifying_authority: 'Authority Y',
            tac_certificate_no: 'TAC456',
            cop_certificate_no: 'COP789',
            permitted_esim: ['ESIM Provider 2', 'ESIM Provider 3'],
            approval_status:'pending'
        },
        {
            id: 3,
            model_name: 'yguygo',
            is_irnss: 'Yes',
            certifying_authority: 'Authority X',
            tac_certificate_no: 'TAC789',
            cop_certificate_no: 'COP012',
            permitted_esim: ['ESIM Provider 1', 'ESIM Provider 3'],
            approval_status:'pending'
        },
        {
            id: 4,
            model_name: 'dududu',
            is_irnss: 'Yes',
            certifying_authority: 'Authority Z',
            tac_certificate_no: 'TAC456',
            cop_certificate_no: 'COP123',
           permitted_esim: ['ESIM Provider 2', 'ESIM Provider 3'],
            approval_status:'pending'
        }
    ];
    const tableHeader = {
        borderBottom: '2px solid #ccc',
        padding: '10px',
        fontWeight: 'bold',
        textAlign: 'left',
    };
    const tableRow = {
        borderBottom: '1px solid #ccc',
        padding: '10px',
        transition: 'background-color 0.2s ease',
        height: '50px'
    };
    const tableRowOdd = {
        ...tableRow,
        backgroundColor: '#F9F9F9',
    };
    const tableRowEven = {
        ...tableRow,
        backgroundColor: '#FFFFFF',
    };
  return (
    <div>
    <div className="device-approval-table">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead style={{ backgroundColor: '#F0F0F0' }}>
                <tr>
                    <th style={tableHeader}>id</th>
                    <th style={tableHeader}>Model Name</th>
                    <th style={tableHeader}>Is IRNSS</th>
                    <th style={tableHeader}>Certifying Authority</th>
                    <th style={tableHeader}>TAC Certificate No</th>
                    {/* <th style={tableHeader}>TAC Approval Date</th> */}
                    <th style={tableHeader}>COP Certificate No</th>
                    {/* <th style={tableHeader}>COP Approval Date</th> */}
                    <th style={tableHeader}>Permitted ESIM</th>
                    <th style={tableHeader}>Approval Status</th>
                </tr>
            </thead>
            <tbody>
            {approvalData.map((data, index) => (
        <tr key={data.id} style={index % 2 === 0 ? tableRowOdd : tableRowEven}>
                        <td>{data.id}</td>
                        <td>{data.model_name}</td>
                        <td>{data.is_irnss}</td>
                        <td>{data.certifying_authority}</td>
                        <td>{data.tac_certificate_no}</td>
                        {/* <td>{data.tac_approval_date}</td> */}
                        <td>{data.cop_certificate_no}</td>
                        {/* <td>{data.cop_approval_date}</td> */}
                        <td>{data.permitted_esim.join(', ')}</td>
                        <td>{data.approval_status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  )
}



