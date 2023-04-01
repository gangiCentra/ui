import React from "react";
import '../styles/Modal.css';
import { ShowModal, HideModal } from '../actions.js';
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "./ContactForm.js";

export function Modal(props){
    const showModal = useSelector((state) => state.showModal);
    const dispatch = useDispatch();
    return(
        <div class="modal">
            <div className="modal-content">
                <div class="modal-header">
                    <div id="modal-empty-div"></div>
                    <h2 class="modal-contact-page-title">Contact Us </h2>
                    <button onClick={() => dispatch(HideModal())} class="modal-close-btn"><strong>X</strong></button>
                </div>
                <form class="modal-contact-form">
                    <div>
                        <h3>Name</h3>
                        <div id="modal-name-input-div">
                            <input type="text" class="modal-name-input" id="fname" name="fname" placeholder="First Name" required />
                            <input type="text" class="modal-name-input" id="lname" name="lname" placeholder="Last Name" required />
                        </div>
                        <h3>Email</h3>
                        <input type="text" id="email" name="email" placeholder="example@email.com" required />
                    </div>
                    <h3>Service Requested</h3>
                    <select id="modal-services-options" required>
                        <option value="none" selected disabled hidden>--None--</option>
                        <option value="lead-gen">Lead Generation</option>
                        <option value="ad-manage">Ad Management/Optimization</option>
                        <option value="creative">Creative Marketing Services</option>
                        <option value="other">Other</option>
                    </select>
                    <h3>Budget</h3>
                    <input type="number" id="modal-budget-input" placeholder="Estimated Monthly Budget" required />
                    <h3>Message</h3>
                    <textarea placeholder="Optional Message" />
                    <div id="modal-submit-button-div">
                        <button class="modal-submit-button" id="modal-submit-button" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    );
}