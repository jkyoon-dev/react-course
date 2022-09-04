const Modal = (props) => {
  const btnCancel = () => {
    props.onCancel();
  };
  return (
    <div className='modal'>
      <h2>Are you sure?</h2>
      <button className='btn btn--alt' onClick={btnCancel}>
        Cancel
      </button>
      <button className='btn' onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
