import React from 'react'
import "./scrollup.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const ScrollUp = document.querySelector(".scrollup");
        //when the scroll is heigher than 560 viewport height , add the show-scroll class to a tag with the scroll-show class
        if(this.scrollY >= 560) ScrollUp.classList.add("show-scroll");
        else ScrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className='scrollup'>
        <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}

export default ScrollUp
