import React from 'react';
import FooterLogo from '../assets/img/Logo-original.png'
const Footer = () => {
    return (
        <footer>
            <div className="grid">
               <section>
                <img src={FooterLogo} alt="IIM-Logo" className='footer-logo'/>
               </section>
               <section>
                <ul>
                <li><p>Life @ GCEB</p></li>
                 <li>Announcement</li>
                    <li>GCEB Alumni</li>
                    <li>Reach GCEB</li>
                    <li>Virtual Tour</li>
                    <li>Feedback</li>
                </ul>
               </section>
               <section>
               <ul>
                <li><p>Quick Links</p></li>
                 <li>Annual Reports</li>
                    <li>Admissions</li>
                    <li>Forms for Faculty and Staffs</li>
                    <li>Centers of Excellence</li>
                    <li>Contacts</li>
                </ul>
               </section>
               <section>
               <ul>
                <li><p>More..</p></li>
                 <li>Curriculum and Syllabi</li>
                    <li>Online Grievance Redressal</li>
                    <li>Educational Verification</li>
                    <li>Privacy</li>
                    <li>Life GCEB</li>
                </ul>
               </section>
            </div>
            <hr />
            <aside>
            Copyright © 2024, Government College of Engineering, Bargur


            </aside>
           
        </footer>
    );
};

export default Footer;
