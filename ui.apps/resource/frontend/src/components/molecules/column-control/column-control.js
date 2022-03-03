import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';


const ColumnControl = (props) => {

    // const { bg_color, bg_imgage_src, col_padding, col_margin, container_type, gutters_type, col_size_1, content_1, col_size_2, content_2 } = props;
    const {
        cols,
        lg,
        md,
        lg_cols,
        md_cols,
        gap
    } = props;

    return(
        <React.Fragment>
            <HtmlComment text="Start ColumnControl component markup, Copy from here" />
                {/* <div className={`grid ${lg ? 'lg' : md? 'md': ""}:grid-cols-${lg_cols ? lg_cols : md_cols? md_cols: ""}  gap-${gap}`}> */}
                <div className={`grid ${lg ? `lg:grid-cols-${lg_cols}`:''} ${md ? `md:grid-cols-${md_cols}`:''}  gap-${gap}`}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            <HtmlComment text="End ColumnControl component markup," />
        </React.Fragment>
    );
}

ColumnControl.propTypes = {
    container_type: PropTypes.node.isRequired,
};

ColumnControl.defaultProps = {
    container_type: 'conatiner'
};

export default ColumnControl;
