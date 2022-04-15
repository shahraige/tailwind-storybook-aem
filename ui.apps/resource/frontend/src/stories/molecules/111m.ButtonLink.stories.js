import React from "react";
import ButtonLink from "../../components/molecules/button-link/ButtonLink";

// gorup of button
const Default_Setup = "Default_Setup";
const Modal_Setup = "Modal_Setup";

// ------------- select dropdown for knobs -----------

// Button Styles
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

//Button Types
const button_type_options = {
    default: "skew-hover",
    round : "round",
    "left-tail-arrow" : "left-tail-arrow",
    "right-tail-arrow" : "right-tail-arrow",
};

// Button Width
const button_width_options = {
    natural: "",
    "Half Width": "w-50",
    "Full Width": "w-100",
};

// buttonlink_target
const buttonlink_target_options = {
    self: "_self",
    blank: "_blank",
};

// buttonlink_target
const button_position_options = {
    Default: "",
    Center: "text-center",
    Right: "text-end",
};

// button text color
const button_text_options = {
    "text-white": "text-white",
    "text-warning": "text-warning",
    "text-info": "text-info",
    "text-danger": "text-danger",
    "text-light": "text-light",
    "text-dark": "text-dark",
};

export default {
    title: "Molecules/ButtonLink",
    component: ButtonLink,
    argTypes: {
        button_styles: {
            name: "Button Styles",
            control: { type: "select", options: button_styles_options },
        },
        button_type: {
            name: "Button Type",
            control: { type: "select", options: button_type_options },
        },
        button_textColor: {
            name: "Button Text Color",
            control: { type: "select", options: button_text_options },
        },
        button_width: {
            name: "Button Width",
            defaultValue: "",
            control: {
                type: "inline-radio",
                options: button_width_options,
            },
        },
        buttonlink_href: {
            name: "Button href",
            defaultValue: "#",
            control: {
                type: "text",
            },
        },
        buttonlink_target: {
            name: "Button Target",
            defaultValue: "_self",
            control: {
                type: "inline-radio",
                options: buttonlink_target_options,
            },
        },
        btn_text: {
            name: "Button Text",
        },
        buttonlink_title: {
            name: "Button Title",
        },
        buttonlink_position: {
            name: "Button position",
            control: { type: "select", options: button_position_options },
        }
    },
};

// start
const Template = (args) => <ButtonLink {...args} />;

export const Button_default = Template.bind({});
Button_default.args = {
    btn_text: "this is button",
    button_type: "skew-hover"
};

export const Button_round = Template.bind({});
Button_round.args = {
    btn_text: "this is button",
    button_styles: "secondary",
    button_type : "round"
};

export const Left_tail_arrow = Template.bind({});
Left_tail_arrow.args = {
    button_type : "left-tail-arrow"
};
export const Right_tail_arrow = Template.bind({});
Right_tail_arrow.args = {
    button_type : "right-tail-arrow"
};

export const Outline = Template.bind({});
Outline.args = {
    btn_text: "this is button",
    button_styles: "outline-primary"
};

