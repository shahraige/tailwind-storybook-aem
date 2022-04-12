import React from 'react'
import HeadlineText from '../headline-text/HeadlineText'

const Card = (props) =>{
    const {padding} = props;
    return(
        <div className="card section">
            <div className={` ${padding ? padding : ''} border border-gray-100 shadow-custom-1 mb-28 md:mb-0`}>
                {props.children}
            </div>
        </div>
    );
}
export default Card;