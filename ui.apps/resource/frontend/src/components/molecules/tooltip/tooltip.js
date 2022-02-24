import React from 'react';
const Tooltip = props => {
    return (
        <span className='tooltip-icon'
            rel="tooltip"
            data-toggle="tooltip"
            data-html="true"
            data-title={props.requireinfoText || ''}
        >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" x="0" y="0" viewBox="0 0 490 490">
                <rect x="208.764" width="72.473" height="69.186" fill="#ffffff" data-original="#000000"/>
                <rect x="208.764" y="135.033" width="72.473" height="354.967" fill="#ffffff" data-original="#000000"/>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enableBackground="new 0 0 524.235 524.235" height="24" width="24" version="1.1" x="0" y="0" viewBox="0 0 524.235 524.235"  class=""><path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333S331.2,0,213.333,0    z M234.667,320H192V192h42.667V320z M234.667,149.333H192v-42.667h42.667V149.333z" fill="#9497a2" data-original="#000000" class=""/></svg> */}
        </span>
    );
}

export default Tooltip;