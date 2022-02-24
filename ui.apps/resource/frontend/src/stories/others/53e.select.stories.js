import React from 'react';
import { storiesOf } from '@storybook/react';

// ------------- select dropdown for knobs -----------

const options = [
    {
        id: 0,
        value: 'Select one',
        selected: false
    },
    {
        id: 1,
        value: 'MR.',
        selected: true
    },
    {
        id: 2,
        value: 'KR',
        selected: false
    },
    {
        id: 3,
        value: 'AA',
        selected: false
    },
    {
        id: 4,
        value: 'SS',
        selected: false
    },
]

storiesOf('Select', module)
    .addParameters({
        info: {
            text: `
         description or documentation about my component, supports markdown

         ~~~js
         <Button>Click Here</Button>
         ~~~
       `,
        },
    })
    .add("Select with form", () => {
        return (
            <div className="container">
                <form class="needs-validation" method="post" noValidate>
                    <div class="form-group form-group--select input-field position-relative">
                        
                        <select
                            class="form-control has-value"
                            name="select1"
                            id="select1"
                            required
                        >
                            <option value="">Select one</option>
                            <option value="MR.">MR.</option>
                            <option value="KR">KR</option>
                            <option value="AA">AA</option>
                            <option value="SS">SS</option>
                        </select>

                        <label htmlFor="select1"                        >
                            <span>Cetagory</span><span class="required-txt">required</span></label
                        >
                        <div class="d-flex justify-content-between">
                            <div class="invalid-feedback">Select one are required</div>
                        </div>

                        {/* <!-- *start angel down custom arrow for select --> */}
                        <span class="angle-down" >
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                class="bi bi-chevron-down"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                ></path></svg></span
                        >
                        {/* <!-- #End angel down custom arrow for select --> */}
                    </div>

                    <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                </form>
            </div>
        )
    });


