import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true)
            ;
    };
    
    const [name, updateName] = useState(props.name);
    const [role, updateRole] = useState(props.role);


    return (
        <>
            <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='flex flex-row my-3'>
                        <label className='w-20 flex-none font-medium' htmlFor='empName' >Name :</label>
                        < input onChange={(e) => {
                            updateName(e.target.value)


                        }} id='empName' className='  border-solid border-2 focus-within:hover:bg-white  rounded grow pl-2 bg-slate-200' type="text" value={name} />
                    </div>
                    <div className='flex flex-row my-3'>
                        <label htmlFor='empRole' className='w-20 flex-none font-medium' >Role :</label>
                        < input onChange={(e) => {
                            updateRole(e.target.value)

                        }} id="empRole" className='  border-solid border-2 focus-within:hover:bg-white  rounded grow pl-2 bg-slate-200' type="text" value={role} />
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <button onClick={()=>{
                        handleClose();
                        updateName(props.name);
                        updateRole(props.role);
                    }} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Cancel
                    </button>
                    <button onClick={() => {
                        props.updateEmployees(props.id, name, role);
                        handleClose();
                    }} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditEmployee;