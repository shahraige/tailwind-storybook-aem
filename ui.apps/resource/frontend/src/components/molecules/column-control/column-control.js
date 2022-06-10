import React from 'react';
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
        container,
        bgImg,
        bgImg_url,
        minHeight,
        fullHeight,
        container_padding,
        bgColor,
        enableBgColor
    } = props;

    return (
        <React.Fragment>
            {/* <HtmlComment text="Start ColumnControl component markup, Copy from here" /> */}

            {bgImg && bgImg == "yes" ?
                <div class="column-control-wrapper">
                    <div class="bg-no-repeat bg-cover bg-center lazyloaded" data-bg={bgImg_url} style={{ minHeight: `${minHeight}`, backgroundImage: `url(${bgImg_url || ''})` }}>
                        <div className={`${container ? 'container' : 'container-fluid'}`}>
                            <div className={`grid ${fullHeight ? 'min-h-inherit' : ''} ${n_rows && n_rows.length > 0 ? n_rows : ''} ${container_padding || ''} ${flowDirection && flowDirection.length > 0 ? flowDirection : ''} grid-cols-12 ${lg_cols && lg_cols.length > 0 ? `lg:grid-cols-${lg_cols}` : ''} ${md_cols && md_cols.length > 0 ? `md:grid-cols-${md_cols}` : ''}  ${gap || ''} ${gapX || ''} ${gapY || ''} ${horizontalAlignment || ''} ${verticalAlignment || ''}`}>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
                :
                enableBgColor ? 
                <div class="column-control-wrapper">
                    <div style={{ minHeight: `${minHeight}`, backgroundColor: `${bgColor}` }}>
                        <div className={`${container ? 'container' : 'container-fluid'}`}>
                            <div className={`grid ${fullHeight ? 'min-h-inherit' : ''} ${n_rows && n_rows.length > 0 ? n_rows : ''} ${container_padding || ''} ${flowDirection && flowDirection.length > 0 ? flowDirection : ''} grid-cols-12 ${lg_cols && lg_cols.length > 0 ? `lg:grid-cols-${lg_cols}` : ''} ${md_cols && md_cols.length > 0 ? `md:grid-cols-${md_cols}` : ''}  ${gap || ''} ${gapX || ''} ${gapY || ''} ${horizontalAlignment || ''} ${verticalAlignment || ''}`}>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='column-control-wrapper'>
                    <div className={`${container ? 'container' : 'container-fluid'}`}>
                        <div className={`grid ${fullHeight ? 'min-h-inherit' : ''} ${n_rows && n_rows.length > 0 ? n_rows : ''}  ${container_padding || ''} ${flowDirection && flowDirection.length > 0 ? flowDirection : ''} grid-cols-12 ${lg_cols && lg_cols.length > 0 ? `lg:grid-cols-${lg_cols}` : ''} ${md_cols && md_cols.length > 0 ? `md:grid-cols-${md_cols}` : ''}  ${gap || ''} ${gapX || ''} ${gapY || ''} ${horizontalAlignment || ''} ${verticalAlignment || ''}`}>
                            {props.children}
                        </div>
                    </div>
                </div>
            }

            {/* <HtmlComment text="End ColumnControl component markup," /> */}
        </React.Fragment>
    );
}

export default ColumnControl;
