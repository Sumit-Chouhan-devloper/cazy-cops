import React from 'react'
import { Col, Row } from 'react-bootstrap'
import impact_gif from "../assets/images/gif/impact_gif.gif"
import rainbo from "../assets/images/webp/impact_rainbo.webp"
import cloud from "../assets/images/webp/impact_left_cloud.webp"
import cut from '../assets/images/webp/impactBottomCut.webp'
import impact_layer from "../assets/images/webp/impact_layer.webp"
const Impact = () => {
    return (
        <>
            <section className='py-5 impact_bg position-relative z-2 py-5' id='impact'>
                <img className='bottom-0 position-absolute w-100 z-n1' src={impact_layer} alt="background_vector" />
                <img className='position-absolute impact_rainbo d-none d-sm-block' src={rainbo} alt="rainbo" />
                <img className='position-absolute top-50 z-n1 d-none d-sm-block start-0' src={cloud} alt="cloud" />
                <div className='position-absolute impact_cut w-100'><img src={cut} alt="cut" className='w-100 position-relative z-3' /></div>

                <div className="container py-5 mt-lg-4 mt-xl-0">
                    <Row className='justify-content-lg-between justify-content-center align-items-center pt-lg-5'>
                        <Col lg={6}>
                            <h2 className=' ff_charry_bomb txt_white fw-normal fs_5xl impact_heading'>Impact</h2>
                            <p className=' ff_Balsamiq_sans txt_offblack fs_md fw-normal'>Cozy Capys, an NFT project centered around adorable capybara characters, aims to create a positive social impact. It achieves this through initiatives such as donating 10% of proceeds to wildlife conservation organizations, hosting inclusive community events, and offering real-life animal experiences. By combining the popularity of NFTs, the endearing nature of capybaras, and meaningful initiatives, Cozy Capys fosters a sense of responsibility, empathy, and community among its members, contributing to wildlife conservation and environmental preservation.</p>
                        </Col>
                        <Col lg={5} xs={11} md={10} className='pt-sm-4 pt-3 pt-lg-0'>
                            <div className='impact_img'><img className='w-100' src={impact_gif} alt="img" /></div>
                        </Col></Row></div></section></>
    )
}

export default Impact