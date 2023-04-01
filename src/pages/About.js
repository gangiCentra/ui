import '../styles/About.css';
import wash from '../images/washington_skyline.jpg';
import stock1 from '../images/business_stock_one.png';
import stock2 from '../images/business_stock_two.png';
import stock3 from '../images/business_stock_three.png';
import stock4 from '../images/business_stock_four.png';


export function About(props) {
    return (
        <div class="about-container">
            <h3>How <mark>Centra</mark> Came To Be</h3>
            <div class="about-top-container">
                <div class="about-image-container">
                    <img src={wash} alt=""></img>
                    <button class="about-page-btn">
                        Together We Will succeed
                    </button>
                </div>
                <div class="about-us-text">
                    <span>Centra was founded in our nations captial with one mission in mind, to help and assist business in a space where they are inexpirenced. Our founders saw a need for advertising optimization and management in the digital world and we work hard everyday to ensure that our clients have every advantage possible to allow them to succeed in achieving their goals.</span><br/><br/>
                    <span>In late 2022 we began our journey building our services to meet the high standards we set for ourselves.</span><br/><br/>
                    <span>Today we are happy to offer assitance to our clients on a number of major digital platforms in order to make certain that our clients recieve added value that otherwise would have been unobtainable.</span>
                </div>
            </div>
            
            <div class="more-details">
                <h2>You work everyday on your passion, here is ours.</h2>
                <div class="section1">
                    <h4>Encouraging mutual critical thinking</h4> 
                    <div class="section-content">
                        <img class="hexagon" src={stock2}/>
                        <p>We debate as many potential solutions as possible and by actively exploring potential solutions through engaged conversation, our team is able to think more deeply and productively. We reject the notion of offering a cookie-cutter product as it would be a waste of both time and resources.</p>
                    </div>
                </div>
                <div class="section2" >
                    <h4>Embracing early and frequent experimentation</h4> 
                    <div class="section-content">
                        <p>No organization is imcapabile of change when the goal is expansion. With this in mind we hold ourselves to the highest standard and refuse to miss any details that would enable our clients to achieve their goals. Our campaigns launch on time and on budget, everytime. Every aspect of our work is thoroughly scrutinized, tested, and refined to attain perfection. </p>
                        <img class="hexagon" src={stock3}/>
                    </div>
                </div>
                <div class="section3">
                    <h4>Use collaboration to ensure success</h4> 
                    <div class="section-content">
                        <img class="hexagon" src={stock1}/>
                        <p>With our team there is no goal that cannot be accomplished! We will work daily to ensure that your return on investment is at a level which you are happy with. If we were to see a metric dip, the reaction is to get in a meeting and figure out the correct course of action to directly address and fix the cause of thet issue.</p>
                    </div>
                </div>
                <div class="section4" hidden='hidden'>
                    <h4>Hitting our mark every time</h4> 
                </div>
                <div class="section5">
                    <h4>Passion to help Business</h4> 
                    <div class="section-content">
                        <p>Centra was founded with the idea that our team could assist business in a digital space in which they are not savvy. Our joy and passion from providing this service comes from watching our clients reach thier goals and achieve what they truly want in life. If we can help our clients do that, Centra has fufilled its purpose. </p>
                        <img class="hexagon" src={stock4}/> 
                    </div>
                </div>
                <div class="work-with-us">
                    <h1>Work With Us.</h1>
                    <button class="contact-now-btn">
                        Contact Now
                    </button>
                </div>
            </div>
        </div>
    );
}