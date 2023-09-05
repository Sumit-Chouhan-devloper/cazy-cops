import React from 'react'
import about_img from "../assets/images/webp/about_us_bg_layer.webp";
import cloud from "../assets/images/webp/aboutus_badel.webp";
import bottom_layer from "../assets/images/webp/about_bottom_img.webp";
import tree from "../assets/images/webp/about_tree.webp";

const AboutUs = () => {
    return (
        <>
            <section className='about_bg py-5 position-relative' id='about'>

                <div className='position-absolute about_bottom_layer w-100'> <img className='w-100 position-relative z-3' src={bottom_layer} alt="pink_layer" /></div>
                <img className='about_layer position-absolute' src={about_img} alt="background_vector" />
                <img className='position-absolute about_tree' src={tree} alt="tree" />
                <img className='about_cloud position-absolute d-none d-lg-block' src={cloud} alt="cloud_img" />
                <div className='py-lg-5 my-lg-5 position-relative z-1'>
                    <div className="container py-sm-5 my-5 position-relative z-3">
                        <div className='about_sm_bg'><h2 className='text-center about_heading pe-xxl-5 me-lg-5'data-aos="fade-up"data-aos-duration="1500">About Us</h2>
                            <p className='mb-0 pt-2 pt-lg-0 mw_750 opacity_07 text-center txt_offblack fs_md fw-normal ff_Balsamiq_sans mx-auto'data-aos="fade-up" data-aos-duration="1700">Cozy Capys is an impactful NFT project featuring 10,000
                                adorable capybara characters! Capybaras are sweet, caring, and gentle creatures that can form strong bonds with anyone around them. By donating 10% of all proceeds to organizations that support wildlife conservation, hosting inclusive community events, and offering real-life animal experiences, Cozy Capys aims to incorporate all the amazing qualities that these animals portray each and every day! Adopt your Cozy Capy today and join our wonderful community in giving back
                                to the beautiful world around us.</p></div>
                    </div></div></section></>
    )
}

export default AboutUs