import { Link } from "react-router-dom";
import logo from "../images/logo_c.png";
import { ShowModal, HideModal } from '../actions.js';
import { useDispatch, useSelector } from "react-redux";

export function LeftNav(props) {
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  return (
    <Link className="left-bar-link" to={`/`} onClick={() => dispatch(HideModal())}>
        <img id="logo" src={logo} alt="logo" />
        <h1 id="left-bar-logo-name">Centra Marketing</h1>
    </Link>
  );
}
