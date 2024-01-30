import { X } from 'lucide-react';
import React, { useRef, useState } from 'react';

function Modal({ onClose }) {
  const [formData, setFormData] = useState({
    leaveType: 'select leave type',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      leaveType: 'select leave type',
      startDate: '',
      endDate: '',
      reason: '',
    });
  };

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div ref={modalRef} onClick={closeModal} className='inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center flex-col'>
      <div className="flex flex-col text-black">
        <form onSubmit={handleSubmit} className='text-xl flex-col rounded-3xl font-bold shadow-2xl mt-16'>
          <div className='flex justify-between rounded-xl px-20 py-10 items-center mx-4'>
            <h1 className='text-md font-extrabold'>Request for Leave</h1>
            <button onClick={() => onClose(true)} className='font-extrabold text-md'><X size={30} /></button>
          </div>
          <div className="flex justify-between w-full">
            <label htmlFor='leaveType'>Type</label>
            <select
              id="leaveType"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              className='border p-2'>
              <option value="select leave type">Select Leave Type</option>
              <option value="casual leave">Casual leave</option>
              <option value="half-day leave">Half-day leave</option>
              <option value="one-day leave">One-day leave</option>
              <option value="special leave">Special Leave</option>
              <option value="sick/medical leave">Sick Leave/Medical Leave</option>
            </select>
          </div>
          <div className="flex justify-between w-full">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className='border p-2'
            />
          </div>
          <div className="flex justify-between w-full">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className='border p-2'
            />
          </div>
          <div className="flex justify-between w-full">
            <label htmlFor="reason">Reason for Leave</label>
            <textarea
              id="reason"
              name="reason"
              placeholder='Enter your Reason'
              value={formData.reason}
              onChange={handleChange}
              required
              className='border p-2'
            />
          </div>
          <button className='btn' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
