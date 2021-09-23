import { render } from "react-dom"
import Modal from "./Modal"

const createModal = (content) => render(<Modal key={Math.random()} content={content} />, document.getElementById("modal-container"))

export default createModal