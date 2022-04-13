import React from 'react';

const Separator = props => {
    const {border_size , border_color , border_gradient, border_gradient_width} = props;
    
    return (
        <div className="cmp-separator section">
            <hr className={`cmp-separator__horizontal-rule ${border_color || ''} ${border_gradient ? `gradient-bg ${border_gradient_width || ''}` : ''} ${border_size || ''} ${props.marginY || ''} `} />
        </div>

    );
}

export default Separator;