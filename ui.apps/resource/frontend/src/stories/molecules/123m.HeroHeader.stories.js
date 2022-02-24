import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, number } from '@storybook/addon-knobs';
import HeroHeader from '../../components/molecules/hero-header/hero-header';
import HeroHeadeBottomText from '../../components/molecules/hero-header/hero-header-bottom-content';
import HeroHeadeLeftText from '../../components/molecules/hero-header/hero-header-left-content';

storiesOf('Molecules | Hero Header', module)
    .add('Hero Header', () => {

        let heroType = select('Hero Header type', {
            'default':'',
            'left-content':'left',
            'bottom-content':'bottom',
        },'');

        return (
            <HeroHeader 
                heroType={heroType}
                heroHeight= {number('Height:', '794')}
                heroImageUrl={text('Hero Image Url', 'storybook-images/Hero-home-image.jpg')}
                heroTabImageUrl={text('Hero Tab Url', 'storybook-images/hero-image-tab.jpg')}
                
            />
        );
    })
    .add('Hero Header bottom content', () => {

        let heroType = select('Hero Header type', {
            'default':'',
            'left-content':'left',
            'bottom-content':'bottom',
        },'bottom');
        return (
            <>
                <HeroHeadeBottomText
                    heroType={heroType}
                    heroHeight= {number('Height:', '640')}
                    heroMobileHeight={number('mobile height', 151)}
                    heroImageUrl={text('Hero Image Url', 'storybook-images/h3.jpg')}
                    heroImageTabUrl={text('Hero Tab Image Url', 'storybook-images/hero-tab.jpg')}
                    heroImageMobileUrl={text('Hero mobile Image Url', 'storybook-images/hero-mobile.png')}
                />
                <hr />
            </>
        );
    })

    .add('Hero Header left content', () => {
        let heroType = select('Hero Header type', {
            'default':'',
            'bottom-content':'bottom',
            'left-content':'left',
        },'left');

        return (
            <>
                <HeroHeadeLeftText
                    heroType={heroType}
                    heroHeight= {number('Height:', '601')}
                    heroMobileHeight={number('mobile height', 201)}
                    heroImageUrl={text('Hero Image Url', 'storybook-images/Header-image2.png')}
                    heroImageMobileUrl={text('Hero mobile Image Url', 'storybook-images/header-image-3-mobile.png')}
                />
            </>
        );
    })

