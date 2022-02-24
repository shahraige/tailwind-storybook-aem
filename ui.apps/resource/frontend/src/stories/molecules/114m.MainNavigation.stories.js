import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import MainNavigation from '../../components/molecules/main-navigation/main-navigation';

const items = [
    {
        id: 0,
        title: '',
        linkUrl: '#',
        clickToCall: '',
        children: [],
        viewportType: 'home-icon'
    },
    {
        id: 1,
        title: 'For patients and caregivers',
        linkUrl: '#',
        clickToCall: '',
        viewportType: '',
        children: [{
            id: 101,
            title: 'Wir sind Galapagos',
            linkUrl: '#',
            clickToCall: '', 
            children: []
        },
        {
            id: 102,
            title: 'Galapagos in Deutschland',
            linkUrl: '#',
            clickToCall: '', 
            children: []
        }]
    },
    {
        id: 2,
        title: 'For healthcare professionals',
        linkUrl: '#',
        clickToCall: '',
        children: [],
        viewportType: ''
    },
    {
        id: 3,
        title: 'Find a clinical trial',
        linkUrl: '#',
        clickToCall: 'clickToOverlay',
        children: [],
        viewportType: ''
    },
    {
        id: 4,
        title: 'Who are Galapagos?',
        linkUrl: '#',
        clickToCall: '',
        children: [],
        viewportType: 'mobile-only'
    }
]

storiesOf('Molecules | Main Navigation', module)
    .add('Main Navigation', () => {
        return (
            <div className="bg-light py-xl-3 px-xl-5">
                <MainNavigation items={object('Menu items', items)} />
            </div>
        );
    })
