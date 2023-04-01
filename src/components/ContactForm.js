import "../styles/ContactForm.css";
import {useState} from 'react';
import { useDispatch} from "react-redux";
import { sendEmail } from "../actions";

export function ContactForm(props) {
  
  const dispatch = useDispatch();

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [budget, setBudget] = useState('');
    const [message, setMessage] = useState('');


  return (
    <div className="container-parent">
      <h2 class="contact-page-title">Contact Us</h2>
      <form class="contact-form">
        <div>
          <h3>Name</h3>
          <div id="name-input-div">
            <input type="text" class="name-input" id="fname" name="fname" placeholder="First Name" required value={fName} onChange={event => setFName(event.target.value)}/>
            <input type="text" class="name-input" id="lname" name="lname" placeholder="Last Name" required value={lName} onChange={event => setLName(event.target.value)}/>
          </div>
          <h3>Email</h3>
          <input type="text" id="email" name="email" placeholder="example@email.com" value={email} onChange={event => setEmail(event.target.value)}/>
        </div>
        <h3>Service Requested</h3>
        <select id="services-options" required value={service} onChange={event => setService(event.target.value)}>
          <option value="None" selected disabled hidden>--None--</option>
          <option value="Lead Generation">Lead Generation</option>
          <option value="Ad Management/Optimizatio">Ad Management/Optimization</option>
          <option value="Creative Marketing Services">Creative Marketing Services</option>
          <option value="Other">Other</option>
        </select>
        <h3>Budget</h3>
        <input type="number" id="budget-input" placeholder="Estimated Monthly Budget" required value={budget}       onChange={event => setBudget(event.target.value)}/>
        <h3>Message</h3>
        <textarea placeholder="Optional Message" value={message} onChange={event => setMessage(event.target.value)}/>
        <div id="submit-button-div">
          <button class="submit-button" id="submit-button" type="submit" onClick={(ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            dispatch(sendEmail(fName, lName, budget, message, email, service))}
                        }>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}