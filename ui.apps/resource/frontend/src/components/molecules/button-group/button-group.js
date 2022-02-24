import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../button-link/ButtonLink';
import HtmlComment from '../../particles/html-comment/HtmlComment';


const ButtonGroup = (props) => (
    <div class="button-group section">
        <HtmlComment text="Start button-group component markup, Copy from here" />
            <div>
                {props.children}
            </div>  
        <HtmlComment text="Start button-group component markup, Copy from here" />
    </div>
)

export default ButtonGroup;
