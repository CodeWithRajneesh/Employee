import React, { useState } from 'react';
import './index.css';
import Modal from './component/Modal';
// import Time from './component/Time';


function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className=" h-screen flex flex-col float-left items-center  gap-8 bg-black text-white font-bold text-lg px-4" >
        <h1><button onClick={() => setShowModal(true)} className='bg-violet-500 text-xl shadow-lg rounded-lg px-4 py-2 mt-8'> Employee Leave Form </button></h1>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      {/* <Time/> */}
    </>
  );
}

export default App;
