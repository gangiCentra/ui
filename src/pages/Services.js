import '../styles/Services.css';
import globe from '../images/connect-the-world.png';
import standout from '../images/standout.png';
import centra from "../images/centra-C-no-background.png";


export function Services(props) {
    return (
        <div class="parent-container">
            <div class="services-top-container">
                <img src={centra}/>
                <h1><mark>Ecommerce</mark> Marketing Services<br/> Centered for <mark>Profit Growth</mark></h1>
                <caption>Centra Marketing is an ecommerce focused Marketing Agency that specializes in crafting effective campaigns for maximum impact, with a speacialty in driving business growth and increasing revenue. </caption>
                <button class="contact-now-btn">
                    Get My Free Marketing Strategy
                </button>
            </div>
            <div class="services-middle-container">
                <div class="header-container">
                {/* <h2>No Two Brands are Indentical</h2> */}
                </div>
            
                    <div class="all-unique-text">                  
                        <span>We understand that digital marketing can be a complicated space. That's why we're here to help. Our team consists of experts who have the knowledge and skills necessary to help you tackle the unique challenges that your company faces. Taking a comprehensive approach to digital marketing, considering your target audience, competition, and industry trends to develop a strategy that is tailored to your unique needs. Schedule a call today to see if we are the right fit to support your business growth and expansion goals!</span>
                        <img src={standout}/>
                    </div>
                        <br/> 
                    {/* <h2>Discover How Big Your Audience Can Be</h2> */}
                    <div class="discover-text">
                        <img src={globe}/>
                        <span>Unlock the full potential of your online advertising efforts with our digital ad optimization models. After meeting with us, we will develop strategies that will help you reach your target audience with precision, resulting in increased engagement and business growth. Partner with us to drive measurable results and achieve your marketing objectives.</span>
                </div>
            </div>
            <div class="bottom-container-header">
                <h1> What We Can <mark>Provide</mark> To Your <mark>Business</mark></h1>
            </div>
            <div class="bottom-container">
                <div class="card" id="card-1">
                <div class="card-content">
                    {/* <h2>Google</h2> */}
                    <img src="https://savvysearchmarketing.com/wp-content/uploads/Google-Ads.jpg" width="350" alt=""></img>
                    <p>Being the largest internet search provider in the world, Google is a platform that will ensure that anyone can have access to your business' online presence. Allow our team of experts to handle a custom PPC strategy that will help you reach your goals.</p>           
                    <ul>
                    <li>Using targeted marketing to grow you a loyal audience</li>
                    <li>Leave campaign management to the experts</li>
                    <li>Any budget can work to grow your business</li>
                    <li>See faster results with Google SEO</li>
                    <li>Use CPC, CPM, or CPA strategies to build a brand</li>
                    </ul>
                </div>
                </div>
                <div class="card" id="card-1">
                <div class="card-content">
                    {/* <h2>Facebook</h2> */}
                    <img src="https://thesargent.com/wp-content/uploads/2019/09/facebook-ads-logo.png" width="350" alt=""></img>
                    <p>Facebook has established itself as a leading marketing platform, with over 2.7 billion active users, making it a formidable advertising network suitable for various business types.</p>           
                    <ul>
                    <li>Maximize your content marketing strategy with Facebooks' amazing CPC</li>
                    <li>Facebook offers unmatched analytics allowing you to fine tune your content</li>
                    <li>With Facebooks' advanced tageting abilites we can go directly to your audience</li>
                    <li>Outcompete organic reach with our teams' Facebook optimized models</li>
                    </ul>
                </div>
                </div>
                <div class="card" id="card-1">
                <div class="card-content">
                    {/* <h2>Instagram</h2> */}
                    <img src="https://sergiomagan.es/wp-content/uploads/2018/02/Instagram-Ads.jpg" width="350" alt=""></img>
                    <p>Instagram ads can be the first step for many businesses to get into the world of social media marketing. You don’t have to be an ad expert or have a technical background when using Instagram advertising. Luckily our experts do and are here to assist you and your business in any way.</p>           
                    <ul>
                        <li>Gain access to another 2.5 billion users when beginning adversiting on instagram</li>
                        <li>A key advantage that instagram has over other platforms are shorts and </li>
                        <li>Lookalike and interest based prospecting to make data-driven decisions that goes after a strategic group of individuals that may be interested in your brand.</li>
                    </ul>
                </div>
            </div>
      </div>
             
        </div>
    );
}