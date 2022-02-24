import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, number } from '@storybook/addon-knobs';
import FluidTextImage from '../../components/molecules/fluid-text-image/fluid-text-image';

storiesOf('Molecules | Fluid Text Image', module)
    .add('Fluid Text Image', () => {
        return (
            <FluidTextImage
                TeaserHeight= {number('Height:', 526)}
                ImageUrl={text('Desktop Image', 'storybook-images/fluid-text-img.png')}
                TeaserHeightMobileUrl = {text('Mobile Image', 'storybook-images/fluid-text-img-sm.png')}
            />
        )
    })
