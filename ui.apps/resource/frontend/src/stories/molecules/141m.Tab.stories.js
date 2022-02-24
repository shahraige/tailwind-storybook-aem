import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, object, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import Tab from '../../components/molecules/tab/tab';


storiesOf('Molecules | Tab', module)
    .add('default', () => {
        const tabGroupName = text('Tab group name: ', 'tabGroup-1', 'defaultSetting');
        // const tabCoustomClass = text('Custom Classes:', 'mycustomClass');
        const elementHeight = text('Min Height', '360', 'defaultSetting');
        const tabItemObject = [
            {
                id: 1,
                tabName: text("Tab Name:", 'exprience', 'defaultSetting'),
                active: boolean('Active: ', true, 'defaultSetting'),
                disabled: boolean('Disabled: ', false, 'defaultSetting'),
                titleHtml: text("Button content:", `Tab button`, 'defaultSetting'),
                desktopBg: text('Desktop Bg image', 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'defaultSetting'),
                mobileBg: text('Mobile Bg image', 'https://promptinnov.com/wp-content/uploads/2016/03/techno-bg.jpg', 'defaultSetting'),
                contentHtml: text("Body content:", `
                    <h2>Tab one content</h2>
                    <p>lorem ipsum ....</p>
                    <p>lorem ipsum content...</p>                    
                `, 'defaultSetting')
            }
        ]

        return (
            <Tab
                tabGroupName={tabGroupName}
                defaultMinHeight={elementHeight}
                tabItems={tabItemObject}
                // orientation={options(orientation_label, orientation_valuesObj, orientation_defaultValue, optionsObj, group3)}
            />
        )
    })