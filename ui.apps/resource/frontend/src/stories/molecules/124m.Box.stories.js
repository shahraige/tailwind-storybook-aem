// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { color, select } from '@storybook/addon-knobs';
// import Box from '../../components/molecules/box/box';
// import HeadlineText from '../../components/molecules/headline-text/HeadlineText';

// // ------------- select dropdown for knobs -----------
// const box_bg_lbl = 'Box Background';
// const box_bg_options = {
//    "Primary": 'box-primary',
//    "Secondary": 'box-secondary',
//    "Danger": 'box-danger',
//    "Success": 'box-success',
//    "Info": 'box-info',
//    "White": 'box-white',
//    "Dark": 'box-dark'
// };
// const box_bg_defaultValue = "box-primary";

// const box_padding_lbl = 'Box Padding';
// const box_padding_options = {
//    "Default": '',
//    "p-0": 'p-0',
//    "p-1": 'p-1',
//    "p-2": 'p-2',
//    "p-3": 'p-3',
//    "p-4": 'p-4',
//    "p-5": 'p-5',
//    "p-6": 'p-6',
//    "p-7": 'p-7',
//    "p-8": 'p-8'
// };
// const box_padding_defaultValue = "p-6";

// const box_margin_lbl = 'Box margin';
// const box_margin_options = {
//    "m-0": 'm-0',
//    "m-1": 'm-1',
//    "m-2": 'm-2',
//    "m-3": 'm-3',
//    "m-4": 'm-4',
//    "m-5": 'm-5',
//    "m-6": 'm-6',
//    "m-7": 'm-7',
//    "m-8": 'm-8'
// };
// const box_margin_defaultValue = "m-0";


// storiesOf('Molecules | Box', module)
//     .add('Box', () => {
//         const box_bg = select(box_bg_lbl, box_bg_options, box_bg_defaultValue);
//         const box_padding = select(box_padding_lbl, box_padding_options, box_padding_defaultValue);
//         const box_margin = select(box_margin_lbl, box_margin_options, box_margin_defaultValue);
//         return (
//             <Box box_bg={box_bg} box_padding={box_padding} box_margin={box_margin}>
//                 <HeadlineText marginBottom="mb-0">
//                     <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
//                 </HeadlineText>
//             </Box>
//         );
//     })
