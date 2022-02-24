import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import InputField from '../../components/molecules/input-field/InputField';
import { text, boolean, select } from '@storybook/addon-knobs';

storiesOf('Molecules | InputFields', module)
    .add('InputField', () => {

        useEffect(() => {
            if (('ontouchstart' in window)
                || (navigator.MaxTouchPoints > 0)
                || (navigator.msMaxTouchPoints > 0)
                || (navigator.userAgent.toLowerCase().indexOf("android") > -1)
                || (navigator.userAgent.match(/(iPad|iPhone|iPod)/i))
            ) {
                var options = {
                    delay: { "show": 500, "hide": 0 },
                    container: 'body', 
                }
                $('[rel="tooltip"]').tooltip(options);
            } else {
                var options = {
                    delay: 180,
                    container: 'body',
                }
                $('[rel="tooltip"]').tooltip(options);
            }
        }, []);

        return (
            <InputField
                id={text('id','id1')}
                name={text('name','id1')}
                type={select('type', {
                    "text":'text',
                    'email':'email',
                    'password':'password',
                    'number':'number',
                    'tel':'tel',
                    'url':'url'
                })}
                required={boolean('required', false)}
                readonly={boolean('readonly', false)}
                disabled={boolean('disabled', false)}
                width={select('width', {
                    "w-100":'',
                    'w-75':'w-75',
                    'w-50':'w-50',
                    'w-25':'w-25'
                })}
                // placeholder={text('Placeholder','Enter name')}
                value={text('value','Theodor  Blanc')}
                feedBack={text('feed Back text','Please insert text')} 
                labelText={text('label text','First name')} 
                // requiredText={text('requiredText','')}
                requireinfoText={text('requireinfoText','')}
            />
        )
    })

    .add('InputField readonly', () => {

        useEffect(() => {
            if (('ontouchstart' in window)
                || (navigator.MaxTouchPoints > 0)
                || (navigator.msMaxTouchPoints > 0)
                || (navigator.userAgent.toLowerCase().indexOf("android") > -1)
                || (navigator.userAgent.match(/(iPad|iPhone|iPod)/i))
            ) {
                var options = {
                    delay: { "show": 500, "hide": 0 },
                    container: 'body', 
                }
                $('[rel="tooltip"]').tooltip(options);
            } else {
                var options = {
                    delay: 180,
                    container: 'body',
                }
                $('[rel="tooltip"]').tooltip(options);
            }
        }, []);

        return (
                <InputField
                feedBack="Please insert text"
                id="id1"
                inputType="text"
                labelText="First name"
                name="id1"
                readonly="true"
                requiredText=""
                requireinfoText=""
                type={undefined}
                value="Theodor  Blanc"
                width={undefined}
            />
        )
    })

    .add('InputField disabled', () => {

        useEffect(() => {
            if (('ontouchstart' in window)
                || (navigator.MaxTouchPoints > 0)
                || (navigator.msMaxTouchPoints > 0)
                || (navigator.userAgent.toLowerCase().indexOf("android") > -1)
                || (navigator.userAgent.match(/(iPad|iPhone|iPod)/i))
            ) {
                var options = {
                    delay: { "show": 500, "hide": 0 },
                    container: 'body', 
                }
                $('[rel="tooltip"]').tooltip(options);
            } else {
                var options = {
                    delay: 180,
                    container: 'body',
                }
                $('[rel="tooltip"]').tooltip(options);
            }
        }, []);

        return (
                <InputField
                feedBack="Please insert text"
                id="id1"
                inputType="text"
                labelText="First name"
                name="id1"
                disabled
                requiredText=""
                requireinfoText=""
                type={undefined}
                value="Theodor  Blanc"
                width={undefined}
            />
        )
    })
    