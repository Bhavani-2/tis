import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css'

const SliderComponent = Slider.default ? Slider.default : Slider;
const Programs = () =>{
/*<div className="w-full h-full flex flex-col justify-center items-center py-2 md:py-10" id="4">
    <div className="w-full px-3 md:px-0 h-full">
        <p className="w-full text-center font-[Mirador800] text-[#b90124] text-[clamp(10px,12vw,100px)] md:text-[clamp(10px,3.5vw,100px)]">Sports ?</p>
        <p className="w-full text-center font-[Mirador800] text-[clamp(10px,6vw,100px)] md:text-[clamp(10px,2vw,100px)] leading-tight">It’s not just a <span className="text-[#60bab1]">facility.</span> At Tulas it’s the <span className="text-[#60bab1]">foundation!</span><br/><span className="circled-text-sports relative text-[clamp(10px,7vw,100px)] md:text-[clamp(10px,2.5vw,100px)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="4.58 2.97 61.39 54.41"><path d="M49.723 17.074C28.65-5.127 2.833 3.604 6.413 30.787S51.984 68.54 62.944 34.34s-40.681-21.04-40.681-21.04" fill="none" stroke="#c09d59" strokeLinecap="round" strokeWidth="3" className="svg-circle "></path></svg>16+ </span>sports curated to bring joy and discipline to your life.</p></div>
            <div className="w-full px-3 md:px-0 md:w-[90%] mx-auto h-full pt-6 md:pt-14">
                <div className="swiper swiper-initialized swiper-horizontal w-full swiper-backface-hidden">
                    <div className="swiper-wrapper"><div className="swiper-slide swiper-slide-active flex w-full h-full justify-center mx-auto flex-wrap" data-swiper-slide-index="0" style={{width: '1397px'}}><div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center">
                        <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                        <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 " style={{color:"transparent" }}src="/_next/static/media/archery.7a805345.png"/></div>
                        <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Archery</p></div><div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                        <img alt="" loading="lazy" width="715" height="554" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }} src="/_next/static/media/cycling.80dbb9b1.png"/></div>
                        <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Cycling</p></div>
                        <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                        <img alt="" loading="lazy" width="544" height="360" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 " style={{color:"transparent" }} src="/_next/static/media/hockey.219fe552.png"/></div>
                        <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Hockey</p></div><div className="w-full">
                            <div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                            <img alt="" loading="lazy" width="713" height="509" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 " style={{color:"transparent" }} src="/_next/static/media/swimming.d4285534.png"/></div>
                            <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Swimming</p></div>
                            <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                            <img alt="" loading="lazy" width="709" height="510" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 " style={{color:"transparent" }} src="/_next/static/media/taekwando.86e26406.png"/></div>
                            <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Taekwondo</p></div>
                            <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                            <img alt="" loading="lazy" width="717" height="555" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }}src="/_next/static/media/football.ca61e5d0.png"/></div>
                            <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Football</p></div>
                            <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                            <img alt="" loading="lazy" width="715" height="623" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }} src="/_next/static/media/shooting.b0b11d74.png"/></div>
                            <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Shooting Range</p></div><div className="w-full">
                                <div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                                <img alt="" loading="lazy" width="716" height="509" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }} src="/_next/static/media/horseRiding.8f259127.png"/></div>
                                <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Horse Riding</p></div></div></div>
                                <div className="swiper-slide swiper-slide-next flex w-full h-full justify-center mx-auto flex-wrap" data-swiper-slide-index="1" style={{width: '1397px'}}><div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center">
                                    <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                                    <img alt="" loading="lazy" width="720" height="512" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 " style={{color:"transparent" }} src="/_next/static/media/billiards-single.a1e831c6.png"/></div>
                                    <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Billiards</p></div>
                                    <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                                    <img alt="" loading="lazy" width="719" height="555" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }} src="/_next/static/media/squash.ffa0360a.png"/></div>
                                    <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Squash</p></div>
                                    <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                                    <img alt="" loading="lazy" width="697" height="652" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }} src="/_next/static/media/volleyball.045be884.png"/></div>
                                    <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Volleyball</p></div>
                                    <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                                    <img alt="" loading="lazy" width="731" height="712" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 " style={{color:"transparent" }}src="/_next/static/media/basketball.fa70909d.png"/></div>
                                    <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Basketball</p></div><div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                                    <img alt="" loading="lazy" width="731" height="652" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }} src="/_next/static/media/Cricket.b06b18ca.png"/></div>
                                    <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Cricket</p></div><div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                                    <img alt="" loading="lazy" width="731" height="624" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }} src="/_next/static/media/lawnTennis.7b3b894a.png"/></div>
                                    <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Lawn Tennis</p></div>
                                    <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                                    <img alt="" loading="lazy" width="731" height="538" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }} src="/_next/static/media/badminton.a314ff00.png"/></div>
                                    <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Badminton</p></div>
                                    <div className="w-full"><div className="w-full h-full aspect-[1.3/1] rounded-md md:rounded-xl overflow-hidden">
                                    <img alt="" loading="lazy" width="731" height="588" decoding="async" data-nimg="1" className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-500 "  style={{color:"transparent" }} src="/_next/static/media/tableTennis.61f6bd56.png"/></div>
                                    <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]">Table Tennis</p></div></div></div></div></div>
                                    <div className="w-full h-full flex gap-[10%] justify-center pt-8 items-center"><button className="bg-[#b90124] w-fit text-white text-2xl rounded-full p-3 aspect-square">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112 184 256l144 144"></path></svg></button>
                                        
                                        <div className="flex w-fit z-10 gap-2  items-center"><div className="w-[10px] cursor-pointer h-[10px]  rounded-full w-[16px] h-[16px] bg-[#B90124]"></div>
                                        <div className="w-[10px] cursor-pointer h-[10px]  rounded-full  bg-[#FFC9D3]"></div></div>
                                        <button className="bg-[#b90124] w-fit text-white text-2xl rounded-full p-3 aspect-square">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" stroke-linejoin="round" stroke-width="48" d="m184 112 144 144-144 144"></path></svg></button></div></div></div>*/

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4
  };

  return (
    <div className="slider-container">
      <SliderComponent {...settings}>
        <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/archery.7a805345.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Archery</p>
        </div>
   
    <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/cycling.80dbb9b1.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Cycling</p>
        </div>

           <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="	https://tis.edu.in/_next/static/media/hockey.219fe552.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Hockey</p>
        </div>
           

             <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/swimming.d4285534.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Swimming</p>
        </div>

          <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/taekwando.86e26406.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Taekwando</p>
        </div>

          <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/football.ca61e5d0.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Football</p>
        </div>

          <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/shooting.b0b11d74.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Shooting Range</p>
        </div>
        
          <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/horseRiding.8f259127.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Horse Riding</p>
        </div>

           <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/billiards-single.a1e831c6.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Billiards</p>
        </div>
        

           <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="	https://tis.edu.in/_next/static/media/squash.ffa0360a.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Squash</p>
        </div>

          <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="	https://tis.edu.in/_next/static/media/volleyball.045be884.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Volleyball</p>
        </div>

           <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/basketball.fa70909d.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Basketball</p>
        </div>

         <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/Cricket.b06b18ca.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Cricket</p>
        </div>

         <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/lawnTennis.7b3b894a.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>LawnTennis</p>
        </div>

<div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src=" https://tis.edu.in/_next/static/media/badminton.a314ff00.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>Badminton</p>
        </div>
       <div className="slide-inner-container" style={{width:'200px'}}>
            <img alt="" loading="lazy" width="704" height="520" decoding="async" data-nimg="1" className="image object-cover hover:scale-110 transition-all ease-in duration-500" style={{color:"transparent"}} src="https://tis.edu.in/_next/static/media/tableTennis.61f6bd56.png"/>
     
         <p className="text-center text-[#000] font-semibold font-[TTChocolates] uppercase text-[clamp(10px,4.5vw,100px)] md:text-[clamp(10px,1.3vw,100px)]" style={{width:'200px'}}>TableTennis</p>
        </div>
        	
      </SliderComponent>
    </div>
  );
}

   

export default Programs




