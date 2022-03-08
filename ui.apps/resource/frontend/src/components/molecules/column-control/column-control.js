import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const ColumnControl = (props) => {
    
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
                    {props.children}
                </div>
            </div>
            <HtmlComment text="End ColumnControl component markup," />
        </React.Fragment>
    );
}

ColumnControl.propTypes = {
    container_type: PropTypes.node.isRequired,
};

export default ColumnControl;
