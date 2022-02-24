import React, { useEffect } from 'react'
import Tooltip from '../tooltip/tooltip'

const IconNumber = props =>{
    const { icontext, textNumber, isLink, tooltipText } = props;

    useEffect(() => {
        if (('ontouchstart' in window)
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0)
            || (navigator.userAgent.toLowerCase().indexOf("android") > -1)
            || (navigator.userAgent.match(/(iPad|iPhone|iPod)/i))
        ) {
            var options = {
                delay: { "show": 500, "hide": 0 },
                container: 'body', 
            }
            $('[data-toggle="tooltip"]').tooltip(options);
        } else {
            var options = {
                delay: 180,
                container: 'body',
            }
            $('[data-toggle="tooltip"]').tooltip(options);
        }
    }, []);
    
    return (
        <div className="icon-number section">
            <div className="icon-number__inner">
                <Tooltip requireinfoText={tooltipText || " unique code given by <br />Clinicaltrials.gov when the <br />trial was registered"} />
                <div className="icon-number-content">
                    <p className="icon-number-title">{ icontext ||'Protocol Number:'}</p>
                    <p className="icon-number-number">
                        {
                            isLink? (
                                <a href="#">{textNumber || 'GLPG1690-CL-303' }</a>
                            ):(textNumber|| 'GLPG1690-CL-303')
                        }
                    </p>
                </div>
            </div>
        </div>          
    )
}
export default IconNumber