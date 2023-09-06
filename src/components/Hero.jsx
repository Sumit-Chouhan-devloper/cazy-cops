import React from 'react'
import hero_group from "../assets/images/webp/hero_group.webp"
import hero_wood from "../assets/images/webp/herfo_wood.webp"
import Navbar from '../components/NavBar';
import hero_green from "../assets/images/webp/hero_green_img.webp";
import left_tree from "../assets/images/webp/hero_left_tree.webp"
import right_tree from "../assets/images/webp/hero_right_tree.webp";
import hero_badel from "../assets/images/webp/hero_badel.webp";
import hero_rainbo from "../assets/images/webp/hero_rainbo.webp"
import hero_layer from "../assets/images/webp/hero_layer.webp";
import hero_cloud from "../assets/images/png/hero_small_cloud.png"
const Hero = () => {
  return (
    <>
      <div className='hero_bg d-flex flex-column vh_xl_100' id='home'>
        <Navbar />
        <section className='hero_bg flex-grow-1 d-flex flex-column justify-content-center position-relative pt-sm-5 mt-5 pt-xxl-0 mt-xxl-0 z-1'>
          <img className='position-absolute hero_small_cloud d-none d-sm-block' src={hero_cloud} alt="cloud" />
          <img className='position-absolute z-n1 bottom-0 w-100' src={hero_layer} alt="clouds" />
          <img className='position-absolute  hero_rainbo' src={hero_rainbo} alt="rainbo" />
          <div className='position-absolute end-0 top-0 z-0'> <img className='' src={hero_badel} alt="badel" /></div>
          <img className='position-absolute hero_wood' src={hero_wood} alt="wood_img" />
          <img className='position-absolute hero_green' src={hero_green} alt="green_img" />
          <div><img className='position-absolute hero_left_tree w-100' src={left_tree} alt="tree" /></div>
          <div> <img className='position-absolute hero_right_tree w-100' src={right_tree} alt="tree" />
          </div>
          <div className="container position-relative z-3">
            <div className='d-inline-block"'>
              <h1 className='hero_heading  fs_7xl text-center fw-normal mb-0'><span className='ff_charry_bomb txt_orange txt_shado_18'>Cozy</span><span className=' ff_cherry_soda txt_green txt_shado_18'>Capys</span><span className='ff_charry_bomb txt_white txt_shado_25'>NFT</span></h1>
            </div>
            <p className='ff_Balsamiq_sans fs_md txt_white text-center fw-bold mw_758 mx-auto mb-0 pt-4'>Cozy Capys is an impactful NFT project featuring 10,000 adorable capybara characters! 10% of all proceeds will go to wildlife conservation organizations!</p>
            <div className="text-center pt-4 mt-1"><button className='hero_btn ff_Balsamiq_sans fs_lg fw-bold txt_white rounded-5 border-0 bg_blue'>Join Us</button></div>
            <div className='hero_panda_group text-center pt-5 pt-sm-0'><img className='w-75' src={hero_group} alt="hero_group" /></div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero