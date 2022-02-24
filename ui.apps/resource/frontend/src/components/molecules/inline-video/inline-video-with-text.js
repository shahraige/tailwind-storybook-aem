import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import HeadlineText from '../headline-text/HeadlineText';

const InlineVideoWithText = props => {
    const {  } = props;
    return (
        <div className="inline-video section">
            <HtmlComment text="Start InlineVideo component markup, Copy from here" />
            <div className="inline-video__inner inline-video--with-text">

                <div className="inline-video--player">
                    <div class="embed-responsive embed-responsive-16by9">
                        <video 
                            data-video-id="4093643993001" 
                            data-account="1752604059001" 
                            data-player="VyqgG8mql" 
                            data-embed="default" 
                            class="video-js embed-responsive-item" controls>
                        </video>
                        <script src="//players.brightcove.net/1752604059001/VyqgG8mql_default/index.min.js"></script>
                    </div>
                </div>

                <div className="inline-video-text">
                    <div class="carousel-text">

                        <HeadlineText text="*Start your component text, image etc .." />

                        <HeadlineText>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat est metus, iaculis lacinia metus pulvinar dapibus. Sed id vestibulum nibh, sed vulputate arcu. Aliquam et neque ac purus posuere euismod. Morbi urna eros, elementum sed libero in, consequat elementum tortor.</p>
                        </HeadlineText>

                        <HeadlineText text="#END your component text, image etc .." />

                    </div>


                    <div className="first-carousel-text">Watch next video</div>
                </div>
            </div>
            <HtmlComment text="End InlineVideo component markup, Copy from here" />
        </div>
    );
}

export default InlineVideoWithText;
