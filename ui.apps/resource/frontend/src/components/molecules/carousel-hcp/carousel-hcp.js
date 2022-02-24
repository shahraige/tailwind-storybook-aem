import React from 'react';
import InlineVideoWithText from '../inline-video/inline-video-with-text';

const CarouselHcp = props => {
    return (
        <>
        <div className="carousel-hcp section">
            <div className="carousel-hcp__inner">

            <div id="carousel-1" className="carousel slide carousel-fade" data-ride="carousel">            
                    <div className="carousel-inner">
                        <div className="carousel-item active carousel-first">
                            <InlineVideoWithText/>
                        </div>
                        <div className="carousel-item">
                            <InlineVideoWithText/>                
                        </div>
                        <div className="carousel-item">
                            <InlineVideoWithText/>
                        </div>
                        <div className="carousel-controls">
                            <a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
                                <img className="main-img" src="images/icons/icon_arrow_left.svg" alt=""/>   
                                <img className="hover-img" src="images/icons/prev_arrow_hover.svg" alt=""/>                         
                                <span class="sr-only">Previous</span>
                            </a>

                            <a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
                                <img src="images/icons/icon_arrow_right.svg" alt=""/>                            
                                <span class="sr-only">Next</span>
                            </a>                        
                        </div>

                        <ol className="carousel-indicators">
                            <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-1" data-slide-to="1"></li>
                            <li data-target="#carousel-1" data-slide-to="2"></li>
                        </ol>
                    </div>                    
                </div>
            </div>
        </div>

    </>
    );
}

export default CarouselHcp;
