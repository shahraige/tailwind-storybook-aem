import React from "react";
import HtmlComment from "../../particles/html-comment/HtmlComment";

const Button = (props) => (
  <div className="button-link section">
    <HtmlComment text="Start button-link component markup, Copy from here" />

    <button
      className={`btn ${props.button_styles ? "btn-" + props.button_styles : ""} ${props.button_type || ''}  ${
        props.button_width || ""
      } ${props.button_alignment || ""}`}
      type={props.button_type || ""}
      data-type={props.button_data_type || ""}
      title={props.buttonlink_title || ""}
      role="button"
    >

            {props.button_type == 'left-tail-arrow' ? 
              <>
                <div className='arrow-container border border-gray-200 bg-gray-200 hover:bg-secondary hover:border-secondary cursor-pointer w-4'>
                  <span className='arrow'></span> 
                </div>
                {props.btn_text ? 
                  <span className='ml-3'>
                  { props.btn_text ? props.btn_text : ''}
                  </span>
                : ''}
              </>
            : ''}

            {props.button_type == 'right-tail-arrow' ? 
              <>
                {props.btn_text ? 
                  <span className='mr-3'>
                  { props.btn_text ? props.btn_text : ''}
                  </span>
                : ''}
                <div className='arrow-container border border-gray-200 bg-gray-200 hover:bg-secondary hover:border-secondary cursor-pointer w-4'>
                  <span className='arrow'></span> 
                </div> 
              </>
            : 
            props.btn_text}
    </button>
    <HtmlComment text="End button-link component markup" />
  </div>
);

export default Button;
