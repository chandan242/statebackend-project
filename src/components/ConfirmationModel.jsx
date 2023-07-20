import IconBtn from "./IconBtn"

export default function ConfirmationModal({ modalData }) {
  return (
    <div className="confirmation-model-box">
      <div className="confirmation-items">
        <p className="confirmation-items-text1">
          {modalData?.text1}
        </p>
        <p className="confirmation-items-text2">
          {modalData?.text2}
        </p>
        <div className="confirmation-items-iconbtn">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
          />
          <button
            className="confirmation-items-btn"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}