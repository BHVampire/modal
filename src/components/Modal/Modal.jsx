import { Fragment, useState } from 'react'
import './Modal.scss'

const Modal = ({ content }) => {
    const [isOpen, setIsOpen] = useState(true)

    return isOpen
        ? <Fragment>
            <div onClick={() => setIsOpen(false)} className="modal-background" />

            <div className="modal" >
                {content}
            </div>
        </Fragment>
        : ''
}

export default Modal