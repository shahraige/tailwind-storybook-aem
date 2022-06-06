import React from 'react'
import HtmlComment from '../../particles/html-comment/HtmlComment'


const Card = (props) =>{
    const {padding, margin, type} = props;
    return(
        <div className="teaser-item__wrapper section">
             <HtmlComment text="* Card cmp markup starts here *" />
            <div className={`${type ? type : ''} ${padding ? padding : ''} ${margin ? margin : ''} border border-gray-100 shadow-custom-1`}>
                {props.children}
            </div>
            <HtmlComment text="* Card cmp markup ends here *" />
        </div>
    );
}
export default Card;