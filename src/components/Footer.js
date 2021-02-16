// This file is exported to --->  src/App.js
// React required
import React from "react";
// -------------- Application Begins Bellow ------------ //

export default function Footer() {
    return (
        <footer id="Footer" className="container-fluid border-bottom">

            { /* Navs - Start */ }
            <div className="row py-5 bg-light border-bottom">
                <section className="col-md-3">
                    <p className="border-bottom mb-3 pb-5">Brand Name</p>
                    <p>Our Brands</p>
                    <ul>
                        <li>Mozar & Vrozz</li>
                        <li>Mozar & Vrozz</li>
                        <li>HOLIGGANS</li>
                    </ul>
                </section>
                <section className="col-md-3">
                    <p>About Us</p>
                    <ul>
                        <li>Brand Protection</li>
                        <li>Careers</li>
                        <li>Giving Back</li>
                        <li>Accessibility</li>
                        <li>Diversity & Inclusion</li>
                        <li>Investors</li>
                        <li>Press Room</li>
                        <li>Sustainability</li>
                        <li>Disclosures</li>
                    </ul>

                </section>
                <section className="col-md-3">
                    <p>Help</p>
                    <ul>
                        <li>Customer Help</li>
                        <li>About My Account</li>
                        <li>Order Help</li>
                        <li>Shipping & Handling</li>
                        <li>Online Returns</li>
                        <li>Track My Order</li>
                        <li>Cards & E-Cards</li>
                        <li>My Info</li>
                    </ul>
                </section>
                <section className="col-md-3">
                    <p>
                        <i className="fa fa-credit-card" role="img" aria-label="card"></i>
                        <span> Gift Cards </span>
                    </p>
                    <p>
                        <i className="fa fa-thumb-tack" role="img" aria-label="location"></i>
                        <span> Find a Store </span>
                    </p>
                    <p>
                        <i className="fa fa-commenting-o" role="img" aria-label="feedback"></i>
                        <span> Feedback </span>
                    </p>
                    <p>
                        <span>Social Media</span>
                        <i className="fa fa-facebook-square p-2" role="img" aria-label="facebook"></i>
                        <i className="fa fa-flickr p-2" role="img" aria-label="flickr"></i>
                        <i className="fa fa-linkedin-square p-2" role="img" aria-label="linkedin"></i>
                    </p>
                </section>
            </div>
            { /* Navs - End */ }

            { /* Tabs - Start */ }
            <div className="row bg-light py-3 border-bottom">
                <span className="mr-2 p-2 border-right"> Privacy / Ad Cookies </span>
                <span className="mr-2 p-2 border-right"> Sale Terms  </span>
                <span className="mr-2 p-2 border-right"> Text Terms  </span>
                <span className="mr-2 p-2 border-right"> My Account Terms  </span>
                <span className="mr-2 p-2 border-right"> Website Terms of Use  </span>
                <span className="mr-2 p-2 border-right"> Endorsements Social Media Engagement  </span>
                <span className="mr-2 p-2 border-right"> Site Map  </span>
                <span className="mr-2 p-2"> Do Not Sell My Personal Info  </span>
            </div>
            { /* Tabs - End */ }

            { /* Copyright - Start */ }
            <div className="row p-2 bg-light">
                <div className="col text-center">
                    <p className="m-0">2021 Fiberabbit. All Rights Reserved</p>
                </div>
            </div>
            { /* Copyright - End */}

        </footer>
    );
}