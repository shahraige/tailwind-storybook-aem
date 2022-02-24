import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';


const Button = (props) => (
  <div class="button-link section">
    <HtmlComment text="Start button-link component markup, Copy from here" />

    <button class={`btn ${props.button_styles ? 'btn-' + props.button_styles : ''}  ${props.button_width || ''}`}
      type={props.button_type || ''}
      data-type={props.button_data_type || ''}
      title={props.buttonlink_title || ''}
      role="button">
      {props.btn_text || ''}
    </button>

    <HtmlComment text="End button-link component markup" />

  </div >
)


Button.propTypes = {
  /**
   * Several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. 
   */
  button_styles: PropTypes.string.isRequired,

  /**
   * Fancy larger or smaller buttons? Add .w-100 for full width or .w-50 for half width. 
   */
  button_width: PropTypes.string.isRequired,

  /**
 * Several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. 
 */
  button_type: PropTypes.string,

  /**
   * Defines a hyperlink, which is used to link from one page to another. 
   */
  buttonlink_href: PropTypes.string.isRequired,

  /**
 * Specifies where to open the linked document. 
 */
  buttonlink_target: PropTypes.string,

  /**
   * The title specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.  
   */
  buttonlink_title: PropTypes.string,

  /**
   * The btn text  specifies  information about an button link. The information is shown inside the button.  
   */
  btn_text: PropTypes.string.isRequired

}


export default Button;