import React from 'react';
import Footer from '../molecules/footer/footer';
import Header from '../molecules/header/header';
import SearchFilterOverlay from '../molecules/search-filter-overlay/search-filter-overlay';
import SearchDetails from '../molecules/search-details/search-details';

const SearchDetailsPage = (props) => {

    const { } = props;
    return (
        <>
            <Header/>
            <SearchDetails/>
            <Footer/>
            <SearchFilterOverlay/>
        </>
    );
}

SearchDetailsPage.propTypes = {
    //container_type: PropTypes.node.isRequired,
};

SearchDetailsPage.defaultProps = {
    //container_type: 'conatiner'
};

export default SearchDetailsPage;
