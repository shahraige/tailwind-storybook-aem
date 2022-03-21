import React from 'react';
import TextImage from '../../components/molecules/text-image/text-image';
// import TextVideo from '../../components/molecules/text-image/text-video';
// import TextImageList from '../../components/molecules/text-image/text-image-list';
// import TextImageTeaserType from '../../components/molecules/text-image/text-image-teaser-type';

const ti_image_size = {
    Original: 'img-original',
    Small: 'img-small',
    Medium: 'img-medium',
    Large: 'img-big',
    FullWidth: 'img-full-width'
};

// Text Image Type
const text_image_type = {
    Default: '',
    Round: 'text-image-round',
    Equal: 'text-image-equal',
    Teaser: 'text-image-teaser',
};

// image position
const image_position = {
    Top: 'align-self-start',
    Center: 'align-self-center',
    Bottom: 'align-self-end',
};

// image position
const text_position = {
    Top: 'align-self-sm-start',
    Center: 'align-self-sm-center',
    Bottom: 'align-self-sm-end',
};

// image position
const row_reverse = {
    Default: '',
    Reverse: 'flex-row-reverse'
};

// image position inline
const sm_inline = {
    No: '',
    Yes: 'sm-inline'
};

export default {
   title: 'Molecules/TextImage',
   component: TextImage,
   argTypes: {
        ti_image_size: {
            control: { type: "select", options: ti_image_size }
        },
        text_image_type: {
            control: { type: "select", options: text_image_type }
        },
        image_position: {
            control: { type: "select", options: image_position }
        },
        text_position: {
            control: { type: "select", options: text_position }
        },
        row_reverse: {
            control: { type: "select", options: row_reverse }
        },
        sm_inline: {
            control: { type: "select", options: sm_inline }
        }
   }
};

// const Template = (args) => <TextImage {...args}/>;
const Template = (args) => 
<TextImage {...args}>
    <h1>We dare Zupacken und etwas bewegen</h1>
    <p>
        Bei Galapagos prägen Eigenschaften wie Furchtlosigkeit und Hingabe die Unternehmenskultur. Ob als einzelner, Team oder als Unternehmen: Wir sind immer in der Lage, mutige Entscheidungen zu treffen, Risiken einzugehen, uns selbst herauszufordern und den Wandel zu gestalten.
    </p>
    <p>Dabei bewegen wir uns in Sphären, in die vor uns noch nie jemand vorgedrungen ist; wir gehen auf dem Pfad der Wissenschaft unaufhaltsam voran, um medizinische Durchbrüche zu erringen. Wir verschieben die Grenzen dessen, was wir wissen und für möglich halten.</p>
    <div className="button-link">
        <a className="btn btn-primary" href="https://www.glpg.com/deutschland/" target="_blank" data-type="arrow" title="Besuchen Sie GLPG.DE" role="button">
            <span>Besuchen Sie GLPG.DE</span>
        </a>
    </div>
</TextImage>;

export const Text_Image_cmp = Template.bind({});


