import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Consent', module)
    .addParameters({
        info: {
            text: `
         Consent check for trams and conditions

         ~~~js
         <Consent
                id="confirm2"
                name="confirm2"
                checkboxText=""
                ariaLabelText={"Aria help text for screen reader"}
                checked={false}
                disabled={false}
                required
            >
                <span>
                    content...
                    error message ....
                </span>
            </Consent>
         ~~~
       `,
        },
    })
    .add("Consent with form", () => {

        return (
            <div className="container">
                <form className="needs-validation" method="post" noValidate>
                    <div className="consent section">
                        <div className="form-check d-flex">
                            <input
                                type="checkbox"
                                name="confirm2"
                                id="confirm2"
                                required
                                className="input-checkbox    "
                                data-prefilled="true"
                            />
                            <label
                                htmlFor="confirm2"
                                aria-label="Aria help text for screen reader"
                                className="form-check-label"
                            ><span className="checkbox"
                            ><svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="bi bi-check"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                                        ></path></svg
                                    ></span>
                                <div className="consent-checkbox section">
                                    <div className="cmp-text">
                                        <span >
                                            <p>
                                                I give my consent for Galapagos to send me product and
                                                environmental information concerning all of Galapagos
                                            specialities on my email address.</p>
                                        </span>
                                    </div>

                                    <p className="invalid-feedback">
                                        Please agree to all terms &amp; condition before submit
                                    <span className="icon" >
                                            <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"> <g id="Self-Registraion-process-VD-Design_Latest" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Registration-step-01-validation-error" transform="translate(-1221.000000, -338.000000)"> <g id="ORGANISM/Desktop/Registration-Error-Component" transform="translate(675.000000, 313.000000)"> <g id="ORGANISM/Desktop/Registration-Component"> <g id="Forms/Input-field-Copy-7"> <g id="Group"> <g id="Forms/Input-field" transform="translate(0.000000, 24.216000)"> <g id="exclamation" transform="translate(546.000000, 1.000000)"> <path d="M12,0 C5.36704687,0 0,5.36751563 0,12 C0,18.6329531 5.36751563,24 12,24 C18.6329531,24 24,18.6324844 24,12 C24,5.36704687 18.6324844,0 12,0 Z" id="Shape" fill="#D0021B" fill-rule="nonzero"></path> <g id="Group-2" transform="translate(11.000000, 6.000000)" fill="#FFFFFF"> <rect id="Rectangle" x="0" y="0" width="3" height="8" rx="1.5"></rect> <circle id="Oval" fill-rule="nonzero" cx="1.5" cy="11.5" r="1.5"></circle> </g> </g> </g> </g> </g> </g> </g> </g> </g> </svg>
                                        </span>
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="consent section">
                        <div className="form-check d-flex">
                            <input
                                type="checkbox"
                                name="confirm3"
                                id="confirm3"
                                required
                                className="input-checkbox    "

                            />
                            <label
                                htmlFor="confirm3"
                                aria-label="Aria help text for screen reader"
                                className="form-check-label"
                            ><span className="checkbox"
                            ><svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="bi bi-check"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                                        ></path></svg
                                    ></span>
                                <div className="consent-checkbox section">
                                    <div className="cmp-text">
                                        <span >
                                            <p>
                                                I give my consent for Galapagos to send me product and
                                                environmental information concerning all of Galapagos
                                            specialities on my email address.</p>
                                        </span>
                                    </div>

                                    <p className="invalid-feedback">
                                        Please agree to all terms &amp; condition before submit
                                    <span className="icon" >
                                            <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"> <g id="Self-Registraion-process-VD-Design_Latest" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Registration-step-01-validation-error" transform="translate(-1221.000000, -338.000000)"> <g id="ORGANISM/Desktop/Registration-Error-Component" transform="translate(675.000000, 313.000000)"> <g id="ORGANISM/Desktop/Registration-Component"> <g id="Forms/Input-field-Copy-7"> <g id="Group"> <g id="Forms/Input-field" transform="translate(0.000000, 24.216000)"> <g id="exclamation" transform="translate(546.000000, 1.000000)"> <path d="M12,0 C5.36704687,0 0,5.36751563 0,12 C0,18.6329531 5.36751563,24 12,24 C18.6329531,24 24,18.6324844 24,12 C24,5.36704687 18.6324844,0 12,0 Z" id="Shape" fill="#D0021B" fill-rule="nonzero"></path> <g id="Group-2" transform="translate(11.000000, 6.000000)" fill="#FFFFFF"> <rect id="Rectangle" x="0" y="0" width="3" height="8" rx="1.5"></rect> <circle id="Oval" fill-rule="nonzero" cx="1.5" cy="11.5" r="1.5"></circle> </g> </g> </g> </g> </g> </g> </g> </g> </g> </svg>
                                        </span>
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                </form>
            </div>
        )
    });

