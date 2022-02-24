import React from 'react';
import Footer from '../molecules/footer/footer';
import Header from '../molecules/header/header';
import SearchFilterOverlay from '../molecules/search-filter-overlay/search-filter-overlay';
import NextSteps from '../molecules/next-steps/next-steps';

const NextStepsPage = (props) => {

    const { } = props;
    return (
        <>
            <Header/>
            <NextSteps />
            <Footer/>
            <SearchFilterOverlay/>
        </>
    );
}

NextStepsPage.propTypes = {
    //container_type: PropTypes.node.isRequired,
};

NextStepsPage.defaultProps = {
    //container_type: 'conatiner'
};

export default NextStepsPage;
