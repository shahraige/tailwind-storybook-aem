import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Select from '../../components/atoms/select/select';

const options = [
    {
        id: 0,
        value: '',
        displayValue: 'select one', 
        selected: true
    },
    {
        id: 1,
        value: 'MR.',
        displayValue: 'MR.', 
        selected: false
    },
    {
        id: 2,
        value: 'KR',
        displayValue: 'KR',
        selected: false
    },
    {
        id: 3,
        value: 'AA',
        displayValue: 'AA',
        selected: false
    },
    {
        id: 4,
        value: 'SS',
        displayValue: 'SS',
        selected: false
    },
]


storiesOf('Atoms | Select', module)
    .addParameters({
        info: {
            text: `
            
            Select controll

         ~~~js
         <div class="input-field section">
            <div class="form-group position-relative">
                <span class="angle-down">
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-down"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    ></path></svg>
                </span>
                
                <select class="form-control" name="select1" id="select1">
                    <option value="MR.">MR.</option>
                    <option value="KR">KR</option>
                    <option value="AA">AA</option>
                    <option value="SS">SS</option>
                </select>
                <label for="select1"><span>Cetagory</span><span class="required-txt">required</span></label>
            </div>
         </div>
         ~~~
       `,
        },
    })
    .add("Select", () => {
        // <Select id="select1" name="select1" labelText="Cetagory" options={options} multiselect />
        return (
            <Select
                id="select1"
                name="select1"
                labelText="Cetagory"
                options={options}
                multiselect={boolean('Multiselect:', false)}
                requiredText="required"
                disabled
            />
        )
    });