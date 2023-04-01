import { Link } from "react-router-dom";
import { ShowModal, HideModal } from '../actions.js';
import { useDispatch, useSelector } from "react-redux";

export function RightNav(props) {
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  return (
    <div id="right-bar">
      <Link class="right-bar-link" to={`/services`} onClick={() => dispatch(HideModal())}>
        <div class="right-bar-div">
          <h1 class="right-bar-name">Services</h1>
        </div>
      </Link>
      <Link class="right-bar-link" to={`/about`} onClick={() => dispatch(HideModal())}>
        <div class="right-bar-div">
          <h1 class="right-bar-name">About Us</h1>
        </div>
      </Link>
      <Link class="right-bar-link" to={`/whowehelp`} onClick={() => dispatch(HideModal())}>
        <div class="right-bar-div">
          <h1 class="right-bar-name">Who We Help</h1>
        </div>
      </Link>
      <Link class="free-consultation"  to={`/contact`} onClick={() => dispatch(HideModal())}>
          <h1 class="right-bar-name" id="right-bar-free-button-text">free consultation</h1>
      </Link>
    </div>
);
}
