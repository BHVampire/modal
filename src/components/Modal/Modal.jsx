import { Fragment, useEffect, useState } from 'react'
import './Modal.scss'

const Modal = ({ content }) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(true)
    }, [])

    return (
        <Fragment>
            {
                isOpen
                    ? <Fragment>
                        <div onClick={() => setIsOpen(false)} className="modal-background" />

                        <div className="modal" >
                            {content}
                        </div>
                    </Fragment>
                    : ''
            }
        </Fragment>
    )
}

export default Modal