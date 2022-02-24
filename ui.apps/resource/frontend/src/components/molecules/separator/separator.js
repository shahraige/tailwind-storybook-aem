import React from 'react';

const Separator = props => {
    return (
        <>
            <div className="cmp-separator section">
                <hr className={`cmp-separator__horizontal-rule ${props.borderColor || ''} ${props.size || ''} ${props.marginY || ''} ${props.tabMarginNone?'tab-margin-none':''}`} />
            </div>
        </>
    );
}

export default Separator;