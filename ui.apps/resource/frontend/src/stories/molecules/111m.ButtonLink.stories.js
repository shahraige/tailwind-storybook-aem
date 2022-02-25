import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonLink from '../../components/molecules/button-link/ButtonLink';
import { select, text, boolean } from '@storybook/addon-knobs';

// gorup of button
const Default_Setup = 'Default_Setup';
const Modal_Setup = 'Modal_Setup';

// ------------- select dropdown for knobs -----------

const button_styles_lbl = 'Button Style';
const button_styles_options = {    
    primary: 'primary',
    secondary: 'secondary',
    Link: 'link',
    danger: 'red-500',
    warning: 'orange-700',
    info: 'blue-700',
    light: 'gray-400',
    dark: 'black'
};
const button_styles_defaultValue = 'primary';


const button_type_lbl = 'Button Type';
const button_type_options = {
    Default: 'rounded-none',
    Round: 'rounded-full',
};
const button_type_defaultValue = 'rounded-full';


// button_width
const button_width_lbl = 'Button Width';
const button_width_options = {
    natural: '',
    "Half Width": 'w-6/12',
    "Full Width": 'w-full',
};
const button_width_defaultValue = '';

// buttonlink_target
const buttonlink_target_lbl = 'Target';
const buttonlink_target_options = {
    self: '_self',
    blank: '_blank'
};
const buttonlink_target_defaultValue = '_self';

// button text color 
const button_text_color_label = 'Text color: ';
const button_text_color_defalut = 'text-white';
const button_text_options = {
    'text-white': 'text-white hover:text-blue-600',
    'text-warning': 'text-blue-600',
    'text-info': 'text-info',
    'text-danger': 'text-red-600 hover:text-white',
    'text-light': 'text-light',
    'text-dark': 'text-dark'
}



storiesOf('Molecules | Button Link', module)
    .add('Button', () => {

        const btn_text = text('Button Text', 'brandx button', Default_Setup);
        const button_styles = select(button_styles_lbl, button_styles_options, button_styles_defaultValue, Default_Setup)
        const button_textColor = select(button_text_color_label, button_text_options, button_text_color_defalut, Default_Setup);
        const button_width = select(button_width_lbl, button_width_options, button_width_defaultValue, Default_Setup);
        const button_type = select(button_type_lbl, button_type_options, button_type_defaultValue, Default_Setup);
        const buttonlink_href = text('Button Link', '#', Default_Setup);
        const buttonlink_target = select(buttonlink_target_lbl, buttonlink_target_options, buttonlink_target_defaultValue, Default_Setup);
        const buttonlink_title = text('Title', 'button title', Default_Setup);

        return (<ButtonLink
            btn_text={btn_text}
            button_styles={button_styles}
            button_textColor={button_textColor}
            button_width={button_width}
            button_type={button_type}
            buttonlink_href={buttonlink_href}
            buttonlink_target={buttonlink_target}
            buttonlink_title={buttonlink_title}
            enableModal={boolean('EnableModal', false, Modal_Setup )}
            button_small_tab={boolean('Button small in tab', false, Default_Setup )}
            modalTarget={text('Modal target ID:', 'exampleModalId-1', Modal_Setup)}
        />)
    })
