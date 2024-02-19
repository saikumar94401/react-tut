import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true)
            ;
    };

    const [name, updateName] = useState('');
    const [role, updateRole] = useState('');
    const [img, updateImg] = useState('');


    return (
        <>
            <button onClick={handleShow} className=" text-lg block mx-auto mt-3  bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">+ Add Employee</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='flex flex-row my-3'>
                        <label className='w-20 flex-none font-medium ' htmlFor='empName' >Name :</label>
                        < input onChange={(e) => {
                            updateName(e.target.value)


                        }} placeholder='John' id='empName' className='  border-solid border-2 focus-within:hover:bg-white  rounded grow pl-2 bg-slate-200' type="text" value={name} />
                    </div>
                    <div className='flex flex-row my-3'>
                        <label htmlFor='empRole' className='w-20 flex-none font-medium' >Role :</label>
                        < input onChange={(e) => {
                            updateRole(e.target.value)

                        }} placeholder='Developer' id="empRole" className='  border-solid border-2 focus-within:hover:bg-white  rounded grow pl-2 bg-slate-200' type="text" value={role} />
                    </div>

                    <div className='flex flex-row my-3'>
                        <label htmlFor='enoImg' className='w-20 flex-none font-medium' >Img Src :</label>
                        < input onChange={(e) => {
                            updateImg(e.target.value)

                        }} placeholder='https://www.google.com/' id="empImg" className='  border-solid border-2 focus-within:hover:bg-white  rounded grow pl-2 bg-slate-200' type="text" value={img} />
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <button onClick={handleClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Cancel
                    </button>
                    <button onClick={() => {
                        props.addEmployee(name, role, img);
                        updateImg('');
                        updateName('');
                        updateRole('');
                        handleClose();
                    }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEmployee;