import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import BlockQuote from '../../components/molecules/block-quote/block-quote';


storiesOf('Molecules | Block Quote', module)
    .add('Block Quote', () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <BlockQuote/>
                    </div>
                </div>
            </div>
        )
    })