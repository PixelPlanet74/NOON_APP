import React from 'react';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import noon_logo from '../assets/noon_logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return (
        <>



            <div className="footer-background">
                <div className="container">
                    <div className="row" style={{display:"flex", justifyContent:"space-around"}}>
                        <div style={{ marginTop: '70px' }} className="col-md-3 extra_Class">
                            <img src={noon_logo} alt="" />

                            <p style={{ marginLeft: "20px", marginTop: "20px", color: "#737373" }}>Follow us:</p>

                            <div style={{ marginLeft: "15px" }}>
                                <a style={{ margin: "10px", color: "#737373" }} href="" ><FontAwesomeIcon icon={faFacebook} /></a>
                                <a style={{ margin: "10px", color: "#737373" }} href="" > <FontAwesomeIcon icon={faTwitter} /></a>
                                <a style={{ margin: "10px", color: "#737373" }} href="" ><FontAwesomeIcon icon={faPinterest} /></a>
                            </div>

                        </div>

                        <div style={{ marginTop: '120px' }} className="col-md-3 anchor">
                            <h5 style={{ marginBottom: "15px" }}>USEFUL LINK</h5>

                            <div className="anchor">
                                <a className="a1" href="">Shopping Cat</a><br /><br />
                                <a className="a2" href="">WIshlist</a><br /><br />
                                <a className="a3" href="">Chekout</a><br /><br />
                                <a className="a4" href="">Support</a>
                            </div>
                        </div>

                        <div style={{ marginTop: '120px' }} className="col-md-3 anchor">
                            <h5 style={{ marginBottom: "15px" }}>ABOUT US</h5>

                            <div className="anchor">
                                <a className="a1" href="">About</a><br /><br />
                                <a className="a2" href="">Products</a><br /><br />
                                <a className="a3" href="">Terms and conditions</a><br /><br />
                                <a className="a4" href="">Help Center</a>
                            </div>
                        </div>

                        <div style={{ marginTop: '120px' }} className="col-md-3">
                            <h5>NEWSLETTER</h5>
                            <p style={{ marginTop: "40px" }}>Subscribe to get all new updates</p>



                            <input className="input-field" type="text" placeholder="Enter your email" />
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <hr />


                        </div>

                    </div>

                </div>

                <div className="footer-inner-background">
                    <p style={{ color: "#737373", textAlign: "center", paddingTop: "30px", fontWeight: "500" }}>Copyright © noon. All Right Reserved</p>
                </div>



            </div>




        </>
    )
}



export default Footer


