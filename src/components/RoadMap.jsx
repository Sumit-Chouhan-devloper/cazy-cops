
import roadmap_left from "../assets/images/png/roadmap_bottom_tree.png"
import roadmap_arrow from "../assets/images/svg/arrow.svg"
import impact_tree from "../assets/images/webp/impact_right_tree.webp"
import { Card1, Card2, Card3, Card4 } from './common/icon';
import roadmap_cut from "../assets/images/webp/roadmap_bottom_cut.png"
import card_1 from "../assets/images/webp/card_1_img.webp"
import close_btn from "../assets/images/webp/close.webp"
import { useState } from 'react';
const RoadMap = () => {
    const [card, setCard] = useState(true)
    return (
        <>
            <section class="bg_green d-flex py-sm-5 py-4 position-relative" id='roadmap'>
                <img className='position-absolute roadmap_bottom_cut' src={roadmap_cut} alt="green_cut" />
                <img className='position-absolute roadmap_tree' src={impact_tree} alt="tree" />
                <img class="position-absolute roadmap_left" src={roadmap_left} alt="img" />
                <div class="container py-5">
                    <h1 class="main_heading ff_charry_bomb txt_white fw-normal">Roadmap</h1>
                    <p class="ff_Balsamiq_sans txt_white fw-normal fs_md main_para">Nam duis feugiat tellus metus arcu pharetra
                        arcu. Sed ultrices ullamcorper <span class="d-block">urna interdum. Maecenas neque augue mattis.</span>
                    </p>
                    <div className={`${card === true ? 'd-block' : 'd-none'}`}>
                        <div class="row">
                            <div class="col-xl-7 col-lg-6" data-aos="fade-down-right" onClick={() => setCard(false)}>
                                <div class="roadmap_card d-flex justify-content-between">
                                    <div class="d-flex flex-column justify-content-between">
                                        <p class="ff_Balsamiq_sans fs_2xl fw-bold text-white">Phase</p>
                                        <div>
                                            <h2 class="common_number_heading mb-0">01</h2>
                                            <p class="ff_Balsamiq_sans text-white fw-normal fs_md mb-0 c_pointer">
                                                Preparation<img class="ms-2 card_arrow" height="20" width="20"
                                                    src={roadmap_arrow} alt="img" /></p>
                                        </div>
                                    </div>
                                    <div class="py-5 my-2 pe-sm-5 me-sm-3 svg_img">
                                        <Card1 />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 mt-4 mt-lg-0" data-aos="fade-down-left" onClick={() => setCard(false)}>
                                <div class="roadmap_card h-100">
                                    <div class="row h-100">
                                        <div class="col-6 d-flex flex-column justify-content-between">
                                            <p class="ff_Balsamiq_sans fs_2xl fw-bold text-white">Phase</p>
                                            <h2 class="common_number_heading mb-0 pt-5 mt-4">02</h2>
                                            <p class="ff_Balsamiq_sans text-white fw-normal fs_md ws_nowrap mb-0 c_pointer">Community Engagement &
                                                Growth<img class="ms-2 card_arrow" height="20" width="20"
                                                    src={roadmap_arrow} alt="img" /></p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-end justify-content-sm-center">
                                            <div class="svg_img mt-2 my-3 pe-sm-5 pe-md-0 pe-lg-5 me-lg-5 py-5">
                                                <Card2 />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 mt-4" data-aos="fade-up-right" onClick={() => setCard(false)}>
                                <div class="roadmap_card d-flex justify-content-between">
                                    <div class="d-flex flex-column justify-content-between">
                                        <p class="ff_Balsamiq_sans fs_2xl fw-bold text-white">Phase</p>
                                        <div>
                                            <h2 class="common_number_heading mb-0">03</h2>
                                            <p class="ff_Balsamiq_sans text-white fw-normal fs_md mb-0 c_pointer">Launch<img
                                                class="ms-2 card_arrow" height="20" width="20"
                                                src={roadmap_arrow} alt="arrow" /></p>
                                        </div>
                                    </div>
                                    <div class="py-5 my-2 pe-sm-5 me-sm-3 svg_img">
                                        <Card3 />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-6 mt-4" data-aos="fade-up-left" onClick={() => setCard(false)}>
                                <div class="roadmap_card d-flex justify-content-between">
                                    <div class="d-flex flex-column justify-content-between">
                                        <p class="ff_Balsamiq_sans fs_2xl fw-bold text-white">Phase</p>
                                        <div>
                                            <h2 class="common_number_heading mb-0">04</h2>
                                            <p class="ff_Balsamiq_sans text-white fw-normal fs_md mb-0 c_pointer">Real-life<img
                                                class="ms-2 card_arrow" height="20" width="20"
                                                src={roadmap_arrow} alt="arrow" /></p>
                                        </div>
                                    </div>
                                    <div class="py-5 my-2 pe-sm-5 me-sm-3 svg_img">
                                        <Card4 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${card === true ? 'd-none' : 'd-block'}`}>
                        <div class="position-relative d_none px-2">
                            <div class="phase_card row justify-content-lg-between justify-content-center align-items-center">
                                <div class="col-xl-8 col-lg-7">
                                    <h2 class="txt_white ff_Balsamiq_sans fw-bold fs_4xl">Phase 1</h2>
                                    <h3 class="txt_white ff_Balsamiq_sans fw-bold fs_xl pb-sm-3 mb-0">Preparation</h3>
                                    <ul class="txt_white ps-0">
                                        <li class="pt-3">
                                            <span class="d-block"><span class="fw-bold txt_white d-inline">Artwork Creation:</span>
                                                Base Designs</span>
                                            <span>a. Collaborate with our artist to design and create the 10,000 unique Cozy Capy
                                                NFTs</span>
                                            <span>b. Ensure that the capybara characters are adorable, diverse, and visually
                                                appealing</span>
                                        </li>
                                        <li class="pt-3">
                                            <span class="fw-bold text-white">Community Building</span>
                                            <span>a. Establish social media accounts (Twitter, Discord, etc.) to engage with our
                                                community and generate interest</span>
                                        </li>
                                        <li class="pt-3">
                                            <span class="fw-bold text-white">Website/Whitepaper Development</span>
                                            <span>b. Build a user-friendly website that showcases Cozy Capys and provides
                                                information about the project’s mission and goals</span>
                                            <span>c. Write a comprehensive whitepaper that contains all the specific details about
                                                Cozy Capys</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-xl-3 col-lg-5 col-9 col-sm-8 col-md-6">
                                    <div><img src={card_1} class="w-100" alt="card-img" />
                                    </div>
                                </div>
                            </div>
                            <img height="50" width="50" class="position-absolute c_pointer top-0 end-0 mt-3 me-2"
                                src={close_btn} alt="cross" onClick={() => setCard(true)} />
                                <div className='phase_bottom_line mt-5 mx-auto'><span></span></div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default RoadMap