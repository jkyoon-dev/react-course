import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
const Todo = (props) => {
  // useState 컴포넌트 함수를 지접 호출하는 것부터 시작, 훅이라 부름
  // 2개 배열을 반환함. 배열 구조 분헤
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* modalIsOpen ? <Modal /> : null */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default Todo;
