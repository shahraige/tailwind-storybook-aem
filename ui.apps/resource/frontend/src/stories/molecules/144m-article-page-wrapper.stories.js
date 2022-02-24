import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import ArticlePageWrapper from '../../components/molecules/article-page-wrapper/article-page-wrapper';

storiesOf('Molecules | Article Page Wrapper', module)
    .add('Article Page Wrapper', () => {
        return (
            <ArticlePageWrapper/>
        )
    })
