import React from 'react'

const FluidCarousel = (props) =>{
    return(
<div id="animation-carousel" data-carousel="slide" className="relative">

    {/* <!-- Carousel wrapper --> */}
    <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

        {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-linear " data-carousel-item="active">
            <div className="bg-red-200 h-full flex justify-center items-center text-lg">1</div>
        </div>

        {/* <!-- Item 2 --> */}
        <div className="hidden  duration-700 ease-linear" data-carousel-item="">
            <div className="bg-green-200 h-full flex justify-center items-center text-lg">2</div>
        </div>

        {/* <!-- Item 3 --> */}
        <div className="hidden  duration-700 ease-linear" data-carousel-item="">
            <div className="bg-orange-400 h-full flex justify-center items-center text-lg">3</div>
        </div>
        {/* <!-- Item 3 --> */}
        {/* <div className="hidden  duration-700 ease-linear" data-carousel-item="">
            <div className="bg-orange-800 h-full flex justify-center items-center text-lg">4</div>
        </div> */}


    </div>

    {/* <!-- Slider indicators --> */}
    <div className="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
        <button type="button" className="w-3 h-3 bg-black bg-opacity-50 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-black bg-opacity-50  hover:bg-opacity-70 " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-black bg-opacity-50  hover:bg-opacity-70 " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        {/* <button type="button" className="w-3 h-3 rounded-full bg-black bg-opacity-50  hover:bg-opacity-70 " aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button> */}
      
    </div>

    {/* <!-- Slider controls --> */}
    <button type="button" className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
        </span>
    </button>
    <button type="button" className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
        </span>
    </button>
</div>
    );
}

export default FluidCarousel;