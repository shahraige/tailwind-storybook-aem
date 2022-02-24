import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import HeadlineText from '../headline-text/HeadlineText';
import ImageExtension from '../image-extension/ImageExtension';

const Tab = props => {
    const {} = props;

    return (
        <div className="tab section">
            <HtmlComment text="START tab component markup, Copy from here" />
            <div className="tab__inner">
                {/* tab buttons start */}
                <div className="tab-header" role="tablist">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation" data-tab-index="0">
                                        <a
                                            id="phase1-tab" 
                                            className="nav-link active" 
                                            data-toggle="tab" 
                                            href="#Phase1" 
                                            role="tab" 
                                            aria-controls="Phase1" 
                                            aria-selected="true">
                                            Phase 1
                                        </a>
                                    </li>

                                    <li className="nav-item" role="presentation" data-tab-index="1">
                                        <a 
                                            id="phase2-tab" 
                                            className="nav-link " 
                                            data-toggle="tab" 
                                            href="#Phase2" 
                                            role="tab" 
                                            aria-controls="Phase2" 
                                            aria-selected="true">
                                            Phase 2
                                        </a>
                                    </li>

                                    <li className="nav-item" role="presentation" data-tab-index="2">
                                        <a 
                                            id="phase3-tab" 
                                            className="nav-link" 
                                            data-toggle="tab" 
                                            href="#Phase3" 
                                            role="tab" 
                                            aria-controls="Phase3" 
                                            aria-selected="false">
                                            Phase 3
                                        </a>
                                    </li>

                                    <li className="nav-item" role="presentation" data-tab-index="3">
                                        <a 
                                            id="phase4-tab" 
                                            className="nav-link" 
                                            data-toggle="tab" 
                                            href="#Phase4" 
                                            role="tab" 
                                            aria-controls="Phase4" 
                                            aria-selected="false">
                                            Phase 4
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                {/* tab buttons end */}

                {/* tab content start */}
                <div className="tab-content" id="myTabContent">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>

                                <div className='tab-content__inner'>
                                    <div 
                                        className="tab-pane fade show active" 
                                        id="Phase1" 
                                        role="tabpanel" 
                                        aria-labelledby="phase1-tab">
                                        <p>Placeholder content for the tab panel. This one relates to the home tab. Takes you miles high, so high, 'cause she’s got that one international smile. There's a stranger in my bed, there's a pounding in my head. Oh, no. In another life I would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my crowning battle. Used to steal your parents' liquor and climb to the roof. Tone, tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug. I guess that I forgot I had a choice.</p>
                                    </div>
                                    
                                    <div 
                                        className="tab-pane fade" 
                                        id="Phase2" 
                                        role="tabpane2" 
                                        aria-labelledby="phase2-tab">
                                        <p>Placeholder content for the tab panel. This one relates to the profile tab. You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones, I mean like she's the one. Greetings loved ones let's take a journey. Just own the night like the 4th of July! But you'd rather get wasted.</p>
                                    </div>
                                    
                                    <div 
                                        className="tab-pane fade" 
                                        id="Phase3" 
                                        role="tabpane3" 
                                        aria-labelledby="phase3-tab">
                                        <HtmlComment text='tab content parsis start ' />
                                        <div className='row d-flex align-items-center'>
                                            <div className="col-md-6 col-lg-7">
                                                <div className='headline-text cmp'>
                                                    <div>
                                                        <div className='cmp-text'>
                                                            <p>If the results from the studies in Phase 1 and 2 are positive (they have passed safety checks and have shown evidence the treatment may work), then Phase 3 studies will take place. Here, the treatment is tested in a much larger group of people (often 1000 to 3000) with the disease or condition and the treatment is compared with an existing treatment or placebo to see how well it works.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-5">
                                                <ImageExtension
                                                    bottom_gap="no-bgap"
                                                    image_position="justify-content-center"
                                                    image_size="w-100"
                                                    image_src="storybook-images/tab-est-image1.png"
                                                />
                                            </div>
                                        </div>

                                        <HtmlComment text='tab content parsis end' />

                                    </div>

                                    <div 
                                        className="tab-pane fade" 
                                        id="Phase4" 
                                        role="tabpane4" 
                                        aria-labelledby="phase4-tab">
                                        4
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                    <ol className="carousel-indicators tab-indicators">
                        <li className="active" data-slide-to="0"></li>
                        <li data-slide-to="1"></li>
                        <li data-slide-to="2"></li>
                        <li data-slide-to="3"></li>
                    </ol>
                </div>
                {/* tab content end */}

            </div>
            <HtmlComment text="END tab component markup, Copy from here" />
        </div>
    )
}

export default Tab;