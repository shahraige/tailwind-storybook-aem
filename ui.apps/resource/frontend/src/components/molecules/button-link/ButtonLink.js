import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const ButtonLink = (props) => {
  const {
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
          <a className={`px-10 py-4 font-semibold text-lg shadow-sm inline-block ${button_styles ? 'bg-' + button_styles : ''} ${button_textColor || ''}  ${button_width || ''} ${button_width || ''} ${props.button_small_tab? 'btn-small-tab':''} ${button_type || ''}`}
            href={buttonlink_href || ''}
            target={buttonlink_target || ''}
            title={buttonlink_title || ''}
            role="button">
            
            {button_type == 'download' ? (
            <svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1">
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g id="icon/download" stroke="currentcolor" stroke-width="3.6">
                        <line x1="16.7535981" y1="1.92006989" x2="16.7535981" y2="23.5066771" id="Path-5-Copy-2"></line>
                        <polyline id="Path-6-Copy-2" stroke-linejoin="round" transform="translate(16.443548, 20.635055) rotate(-270.000000) translate(-16.443548, -20.635055) " points="12.287463 27.9947279 20.5996338 20.1801611 12.287463 13.2753818"></polyline>
                        <polyline id="Path-5" stroke-linejoin="round" points="2.01977539 24.4173609 2.01977539 31.0223014 30.9802246 31.0223014 30.9802246 24.4173609"></polyline>
                    </g>
                </g>
            </svg>
            ) : ''}
            {button_type == 'line' ? <span>{props.btn_text || ''}</span> : props.btn_text || ''}
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