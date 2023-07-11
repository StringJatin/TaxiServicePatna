import React from 'react'
import { instagram, facebookcircle , linkedin , whatsapp } from 'boxicons';


const Footer = () => {
  return (
   <>
   <footer class="footer">
        <div class="container-footer">
            <div class="row-footer">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">Book now</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Why choose us?</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Booking Status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>online Booking</h4>
                    <ul>
                        <li><a href="#">Sedan</a></li>
                        <li><a href="#">SUV</a></li>
                        <li><a href="#">Bus</a></li>
                        <li><a href="#">Traveler</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                <a href="#">   <box-icon name='whatsapp' type='logo' color='#ffffff' ></box-icon></a> 
                <a href="#">  <box-icon type='logo' name='linkedin' color='#ffffff'></box-icon></a> 
                <a href="#">     <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon></a> 
                <a href="#">   <box-icon name='facebook-circle' type='logo' color='#ffffff'></box-icon></a> 
                    </div>
                    <p class="copyright">&copy; Copyrights. All rights reserved.
                    </p>
                    <p class="copyright">Made with <i class="bx bxs-heart"> By
                            Webzyro Tech</i></p>
                </div>
            </div>
        </div>
        
    </footer>
</>
  )
}

export default Footer