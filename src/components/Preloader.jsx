import React from 'react'
const Preloader = () => {
    setTimeout(() => {
        document.getElementById("none").classList.add("d-none");
        document.body.style.overflow = "unset";
      }, 3000);
    return (
        <>
            <div class="loader"id='none'>
                <div class="loader-inner">
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                </div>
            </div></>
    )
}

export default Preloader