import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';


const ColumnControl = (props) => {

    const { bg_color, bg_imgage_src, col_padding, col_margin, container_type, gutters_type, col_size_1, content_1, col_size_2, content_2 } = props;
    return(
        <div className="column-control section">
            <div class="" className={`column-control-wrapper ${col_padding} ${col_margin}`}>
                <HtmlComment text="Start ColumnControl component markup, Copy from here" />
                <div className={`${bg_color} bg-container`} style={`backgroundImage: url(${bg_imgage_src})`}>
                    <div className={`${container_type}`}>
                        <div className={`row ${gutters_type}`}>
                            <div className={`${col_size_1}`}>
                                {`${content_1}`}
                            </div>

                            <div className={`${col_size_2}`}>
                                {`${content_2}`}
                            </div>
                        </div>
                    </div>
                </div>
                <HtmlComment text="End ColumnControl component markup," />
            </div>
        </div>
    );
}

ColumnControl.propTypes = {
    container_type: PropTypes.node.isRequired,
};

ColumnControl.defaultProps = {
    container_type: 'conatiner'
};

export default ColumnControl;
