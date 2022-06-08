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
                  <span class="left-arrow">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg>
                </span>
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
               <span class="right-arrow">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg>
                </span>
              </>
            : 
            props.btn_text}
    </button>
    <HtmlComment text="End button-link component markup" />
  </div>
);

export default Button;
