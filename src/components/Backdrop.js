const Backdrop = (props) => {
  console.log(props);
  return <div className='backdrop' onClick={props.onCancel}></div>;
};

export default Backdrop;
