import React from 'react'
import roadmap_left from "../assets/images/webp/left_abs_img.png"
import roadmap_arrow from "../assets/images/svg/arrow.svg"
import impact_tree from "../assets/images/webp/impact_right_tree.webp"
import { Card1, Card2, Card3, Card4 } from './common/icon';
import roadmap_cut from "../assets/images/webp/roadmap_bottom_cut.png"
const RoadMap = () => {
    return (
        <>
            <section class="bg_green d-flex py-sm-5 py-4 position-relative"id='roadmap'>
                <img className='position-absolute roadmap_bottom_cut' src={roadmap_cut} alt="green_cut" />
            <img className='position-absolute roadmap_tree' src={impact_tree}alt="tree" />
                <div class="position-absolute left_img d-none d-md-block"><img src={roadmap_left} alt="img"/></div>
                <div class="container py-5">
                    <h1 class="main_heading ff_charry_bomb txt_white fw-normal">Roadmap</h1>
                    <p class="ff_Balsamiq_sans txt_white fw-normal fs_md main_para">Nam duis feugiat tellus metus arcu pharetra
                        arcu. Sed ultrices ullamcorper <span class="d-block">urna interdum. Maecenas neque augue mattis.</span>
                    </p>
                    <div id="small_card">
                        <div class="row">
                            <div class="col-xl-7 col-lg-6"data-aos="fade-down-right">
                                <div class="roadmap_card d-flex justify-content-between">
                                    <div class="d-flex flex-column justify-content-between">
                                        <p class="ff_Balsamiq_sans fs_2xl fw-bold text-white">Phase</p>
                                        <div>
                                            <h2 class="common_number_heading mb-0">01</h2>
                                            <p class="ff_Balsamiq_sans text-white fw-normal fs_md mb-0 c_pointer">
                                                Preparation<img class="ms-2 card_arrow" height="20" width="20"
                                                    src={roadmap_arrow} alt="img"/></p>
                                        </div>
                                    </div>
                                    <div class="py-5 my-2 pe-sm-5 me-sm-3 svg_img">
                                        <Card1/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 mt-4 mt-lg-0"data-aos="fade-down-left">
                                <div class="roadmap_card h-100">
                                    <div class="row h-100">
                                        <div class="col-6 d-flex flex-column justify-content-between">
                                            <p class="ff_Balsamiq_sans fs_2xl fw-bold text-white">Phase</p>
                                            <h2 class="common_number_heading mb-0 pt-5 mt-4">02</h2>
                                            <p class="ff_Balsamiq_sans text-white fw-normal fs_md ws_nowrap mb-0 c_pointer">Community Engagement &
                                                Growth<img class="ms-2 card_arrow" height="20" width="20"
                                                    src={roadmap_arrow} alt="img"/></p>
                                        </div>
                                        <div class="col-6 d-flex justify-content-end justify-content-sm-center">
                                            <div class="svg_img mt-2 my-3 pe-sm-5 pe-md-0 pe-lg-5 me-lg-5 py-5">
                                               <Card2/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 mt-4"data-aos="fade-up-right">
                                <div class="roadmap_card d-flex justify-content-between">
                                    <div class="d-flex flex-column justify-content-between">
                                        <p class="ff_Balsamiq_sans fs_2xl fw-bold text-white">Phase</p>
                                        <div>
                                            <h2 class="common_number_heading mb-0">03</h2>
                                            <p class="ff_Balsamiq_sans text-white fw-normal fs_md mb-0 c_pointer">Launch<img
                                                class="ms-2 card_arrow" height="20" width="20"
                                                src={roadmap_arrow} alt="arrow"/></p>
                                        </div>
                                    </div>
                                    <div class="py-5 my-2 pe-sm-5 me-sm-3 svg_img">
                                        <Card3/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-6 mt-4"data-aos="fade-up-left">
                                <div class="roadmap_card d-flex justify-content-between">
                                    <div class="d-flex flex-column justify-content-between">
                                        <p class="ff_Balsamiq_sans fs_2xl fw-bold text-white">Phase</p>
                                        <div>
                                            <h2 class="common_number_heading mb-0">04</h2>
                                            <p class="ff_Balsamiq_sans text-white fw-normal fs_md mb-0 c_pointer">Real-life<img
                                                class="ms-2 card_arrow" height="20" width="20"
                                                src={roadmap_arrow} alt="arrow"/></p>
                                        </div>
                                    </div>
                                    <div class="py-5 my-2 pe-sm-5 me-sm-3 svg_img">
                                        <Card4/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RoadMap