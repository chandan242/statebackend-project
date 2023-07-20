export default function IconBtn({
    text,
    onclick,
    disabled,
    type,
  }) {
    return (
      <button
        disabled={disabled}
        onClick={onclick}
        className='iconbtn'
        type={type}
      >
      {text}
      </button>
    )
  }