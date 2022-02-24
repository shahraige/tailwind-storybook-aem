import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const InlineVideo = props => {
    const {  } = props;
    return (
        <div className="inline-video section">
            <HtmlComment text="Start InlineVideo component markup, Copy from here" />
            <div className="inline-video__inner">


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
            <HtmlComment text="End InlineVideo component markup, Copy from here" />
        </div>
    );
}

export default InlineVideo;
