import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';


const ColumnControl = (props) => {

    // const { bg_color, bg_imgage_src, col_padding, col_margin, container_type, gutters_type, col_size_1, content_1, col_size_2, content_2 } = props;
    const {
        cols,
        lg_cols,
        md_cols,
        gap,
        gapX,
        gapY,
        horizontalAlignment,
        verticalAlignment,
        n_rows,
        flowDirection,
        container
    } = props;

    return(
        <React.Fragment>
            <HtmlComment text="Start ColumnControl component markup, Copy from here" />
            <div className={`${container ? 'container mx-auto':''}`}>
                <div className={`grid ${n_rows && n_rows.length > 0 ? n_rows : ''} ${flowDirection && flowDirection.length>0 ? flowDirection: ''} ${cols.length>0 ? `grid-cols-${cols}`:''} ${lg_cols.length>0 ? `lg:grid-cols-${lg_cols}`:''} ${md_cols.length>0 ? `md:grid-cols-${md_cols}`:''}  ${gap || ''} ${gapX || ''} ${gapY || ''} ${horizontalAlignment || ''} ${verticalAlignment || ''}`}>
                    <div className='bg-red-500 p-8 '>
                        <h2>1</h2>
                        <p>Box 1</p>
                    </div>
                    <div className='bg-yellow-200 p-8 '>2</div>
                    <div className='bg-blue-300 p-8 '>3</div>
                    <div className='bg-orange-300 p-8 '>4</div>
                    <div className='bg-purple-400 p-8 '>5</div>
                    <div className='bg-green-500 p-8 '>6</div>
                </div>
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
