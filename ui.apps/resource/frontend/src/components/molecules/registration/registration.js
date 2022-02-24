import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../input-field/InputField';
import HtmlComment from '../../particles/html-comment/HtmlComment';
import Separator from '../separator/separator';

const Registration = (props) => {
    const { id, width, inputType, name, value, placeholder, feedBack, requiredText, labelText, feildId } = props;
    return (
        <div class="registration section">
            <form class="needs-validation" method="post" noValidate>
                <HtmlComment text="* Registration form start" />
                {/* martech.jpg */}

                <div class="registration__inner">

                    <h4>Galapagos Business Contact Requestor</h4>

                    <Separator
                        borderColor="border-transparent"
                        marginY="my-2"
                        size="size-1"
                    />

                    <InputField
                        feedBack="Please insert text"
                        id="id1"
                        inputType="text"
                        labelText="Last Name"
                        name="id1"
                        requiredText="required"
                        requireinfoText=""
                        type={undefined}
                        disabled={true}
                        value="Theodor"
                        width={undefined}
                    />
                    <InputField
                        feedBack="Please insert text"
                        id="id1"
                        inputType="text"
                        labelText="First Name"
                        value="Lienderman"
                        name="id1"
                        requiredText="required"
                        requireinfoText=""
                        disabled={true}
                        type={undefined}
                        width={undefined}
                    />
                    <InputField
                        feedBack="Please insert text"
                        id="id1"
                        inputType="text"
                        labelText="Purchasing Organization"
                        value="Reinbach Hospitals Limited"
                        name="id1"
                        requiredText="required"
                        requireinfoText=""
                        type={undefined}
                        width={undefined}
                    />

                    <InputField
                        id='userEmail'
                        type='email'
                        name='userEmail'
                        width=''
                        placeholder=''
                        value='shahriaz@gmail.com'
                        feedBack='Please insert text'
                        labelText='Email'
                        feildId='userEmail'
                        requiredText='Required'
                    />


                </div>
                
                <HtmlComment text="# Registration form end" />
            </form >
        </div>
    );
}

Registration.defaultProps = {
    inputType: 'text',
    requiredText: 'required'
}

Registration.propTypes = {
    /** input type */
    inputType: PropTypes.string.isRequired,
    /** input id  */
    id: PropTypes.string.isRequired,
    /** input width  */
    width: PropTypes.string.isRequired,
    /** input name  */
    name: PropTypes.string.isRequired,
    /** input value  */
    value: PropTypes.string,
    /** input placeholder  */
    placeholder: PropTypes.string,
    /** label text  */
    labelText: PropTypes.string.isRequired,
    /** label required text  */
    requiredText: PropTypes.string.isRequired
}

export default Registration;