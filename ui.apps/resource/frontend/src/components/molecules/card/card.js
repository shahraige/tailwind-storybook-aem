import React from 'react'
import HeadlineText from '../headline-text/HeadlineText'

const Card = (props) =>{
    const {padding, margin, type} = props;
    return(
        <div className="card section">
            <div className={`${type ? type : ''} ${padding ? padding : ''} ${margin ? margin : ''} border border-gray-100 shadow-custom-1`}>
                {props.children}
            </div>
        </div>
    );
}
export default Card;