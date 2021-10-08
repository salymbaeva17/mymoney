import {useState} from "react";
import {useDispatch} from "react-redux";
import Modal from "react-modal";
import React from 'react';
import {addUser} from "../../redux/actions/userActions";

const ModalWindow = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState("")
    const [modalIsOpen, setIsOpen] = useState(true)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }
    const nameInput = (e) => {
        setUser(e.target.value)
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
        >
            <h2>Привет Бизнесмен!</h2>
            <p>Как я могу тебя величать?</p>
            <form>
                <input type='text' onChange={nameInput} />
                <button
                    onClick={() => {
                        dispatch(addUser(user))
                        setIsOpen(false)
                    }}
                    className='btn btn-sm btn-primary'>Add name</button>
            </form>
        </Modal>
    );
};

export default ModalWindow;