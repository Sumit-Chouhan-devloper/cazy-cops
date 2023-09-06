import React from 'react';
import logo from "../assets/images/webp/logo.webp";
import twitter from "../assets/images/svg/footer_twitter.svg";
import discord from "../assets/images/svg/footer_discord.svg";
import insta from "../assets/images/svg/footer_insta.svg";
import footer_layer from "../assets/images/webp/footer_layer.webp";
import left_img from "../assets/images/webp/footer_left.webp"
import right_panda from "../assets/images/webp/footer_right.webp"
const Footer = () => {
    return (
        <>
            <section className='footer position-relative pt-lg-5'>
                <img className='position-absolute bottom-0 footer_left_panda d-none d-sm-block' src={left_img} alt="panda" />
                <img className='position-absolute bottom-0 footer_right_panda d-none d-sm-block' src={right_panda} alt="panda" />
                <img src={footer_layer}className='position-absolute bottom-0 w-100 footer_layer' alt="footer_layer" />
                <div className='position-relative z-3'>
                <div className='ff_chewy fs_4xl fw-normal d-flex align-items-center justify-content-center mb-0 pt-5 mt-5'><img src={logo} alt="footer_logo" /><span className='mb-0 footer_heading_shado txt_orange ps-2'>Cozy</span><span className='footer_heading_shado txt_white mb-0'>Capys</span></div>
                <ul className='d-flex ps-0 justify-content-center gap-sm-4 gap-3 pt-lg-5 mt-sm-5 mt-4'>
                    <li>
                        <a href="#home"target='blank'>Home</a>
                    </li>
                    <li>
                        <a href="#about" target='blank'>About</a>
                    </li>
                    <li>
                        <a href="#impact" target='blank'>Impact</a>
                    </li>
                    <li>
                        <a href="#roadmap" target='blank'>Roadmap</a>
                    </li>
                    <li>
                        <a href="#faq" target='blank'>FAQ</a>
                    </li>
                </ul>
                <div className='d-flex justify-content-center gap-4 pt-4 pb-sm-5'>
                    <a target='blank'className='footer_icon'  href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"> <img src={twitter} alt="twitter" /></a>
                    <a className='footer_icon'target='blank' href="https://discord.com/channels/@me"><img src={discord} alt="discod" /></a>
                    <a className='footer_icon' target='blank' href="instagram.com"><img src={insta} alt="instagram" /></a>
                </div>
                <hr/>
                <p className='text-center pb-3 ff_Balsamiq_sans txt_black fw-normal opacity_07 fs_xs mb-0'>Copyright ©2022 All rights reserved Plump Kittens</p>
                </div>
            </section>
        </>
    )
}

export default Footer