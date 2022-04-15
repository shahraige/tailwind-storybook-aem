import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const ButtonLink = (props) => {
  const {
    customClass,
    modalTarget,
    enableModal,
    buttonlink_target,
    button_type,
    buttonlink_href,
    buttonlink_title,
    button_styles,
    button_textColor,
    button_width
  } = props;

  return (
    <div className="button-link section">
      <HtmlComment text="Start button-link component markup, Copy from here" />

      {
        // check is not modal enable then return first otherwise second
        !enableModal ? (
          <a className={`hover:underline text-base  inline-block ${button_styles ? 'bg-' + button_styles : ''} ${button_textColor || ''}  ${button_width || ''} ${button_width || ''} ${props.button_small_tab? 'btn-small-tab':''} ${button_type || ''} ${customClass}`}
            href={buttonlink_href || ''}
            target={buttonlink_target || ''}
            title={buttonlink_title || ''}
            role="button">

            {button_type == 'skew-hover' ? 
            <span>{props.btn_text}</span>

            :
            
            button_type == 'left-tail-arrow' ? 
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
            : 
            button_type == 'right-tail-arrow' ? 
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
            props.btn_text }

            {/* {button_type == 'left-tail-arrow' ? 
              <svg class="ng-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 13">
                <path class="head" d="M19.4 6.4L13 0l-1.4 1.4 4 4H4.8v2h10.8l-4 4 1.4 1.4 6.4-6.4z"/>
                <path class="tail" d="M0 5.4h9.7v2H0z"/>
              </svg>
            : props.btn_text || ''}

            {button_type == 'right-tail-arrow' ? 
              <svg class="ng-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 13">
                <path class="head" d="M19.4 6.4L13 0l-1.4 1.4 4 4H4.8v2h10.8l-4 4 1.4 1.4 6.4-6.4z"/>
                <path class="tail" d="M0 5.4h9.7v2H0z"/>
              </svg>
            : props.btn_text || ''} */}
          </a>
        ) : (
          // when modal enable just replace target to data-toggle and data-target poperty
          <a className={`a btn ${button_styles ? 'btn-' + button_styles : ''} ${button_textColor || ''}  ${button_width || ''} ${props.button_small_tab? 'btn-small-tab':''}`}
            data-type={button_type || ''}
            href={modalTarget ? "#" + modalTarget : ''}
            title={buttonlink_title || ''}
            role="button"
            data-toggle='modal'
            data-target={modalTarget ? "#" + modalTarget : ''}
            >
              {button_type == 'line' ? <span>{props.btn_text || ''}</span> :  props.btn_text || '' }
          </a>
        )          
      }
      <HtmlComment text="End button-link component markup" />

    </div >
  )
}


ButtonLink.propTypes = {
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
  btn_text: PropTypes.string.isRequired,

    /**
   * The button text color  specifies font color inside button.  
   */
  button_textColor: PropTypes.string.isRequired,
  
  /**
  * The button enable to toggle modal target element.
  */
  enableModal: PropTypes.bool,

  /**
  * The button enable to toggle modal target element. Require when *Enable Modal* is true.
  */
  modalTarget: PropTypes.string,
  

}


export default ButtonLink;