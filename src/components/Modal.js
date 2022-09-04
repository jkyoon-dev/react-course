const Modal = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  };
  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <div className='modal'>
      <h2>Are you sure?</h2>
      <button className='btn btn--alt' onClick={props.onCancel}>
        Cancel
      </button>
      <button className='btn' onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
