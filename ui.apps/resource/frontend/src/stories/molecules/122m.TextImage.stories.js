import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import TextImage from '../../components/molecules/text-image/text-image';

const imgSizeselectLabel = 'Image Size';
const imageSize = {
    Original: 'img-original',
    Small: 'img-small',
    Medium: 'img-medium',
    Large: 'img-big',
    FullWidth: 'img-full-width'
};
const defaultImgSize = 'img-original';

// image position
const imgPosSelectLabel = 'Image Position';
const imagePosition = {
    Top: 'align-self-start',
    Center: 'align-self-center',
    Bottom: 'align-self-end',
};
const defaultImgPos = 'align-self-start';

// image position
const textPosSelectLabel = 'Text Position';
const textPosition = {
    Top: 'align-self-start',
    Center: 'align-self-center',
    Bottom: 'align-self-end',
};
const defaultTextPos = 'align-self-start';

// image position
const rowReverseLabel = 'Horizontal Position';
const rowPosition = {
    Default: '',
    Reverse: 'flex-row-reverse'
};
const defaultRowPosition = '';

storiesOf('Molecules | Text Image', module)
    .addParameters({
        info: {
        text: `
            row_reverse : flex-row-reverse
            image_position : align-self-start, align-self-center, align-self-end
            text_position : align-self-start, align-self-center, align-self-end
            ti_image_size : img-small, img-medium, img-big, img-full-width, img-original
            `,
        },
    })
    .add('Text Image', () => {
        const image_size = select(imgSizeselectLabel, imageSize);
        const image_position = select(imgPosSelectLabel, imagePosition);
        const text_position = select(textPosSelectLabel, textPosition);
        const row_reverse = select(rowReverseLabel, rowPosition);
        return (
            <>
                <TextImage 
                    ti_image_size={image_size}
                    image_position={image_position}
                    text_position={text_position}
                    row_reverse={row_reverse}
                >
                    <p>
                        Adverse events should be reported. Reporting forms and information can be found at www.mhra.gov.uk/yellowcard or search for MHRA Yellow Card in the Google Play or Apple App Store.<br />
                        Adverse events should also be reported to Gilead Sciences, Inc.
                    </p>
                </TextImage>
            </>
        )
    })