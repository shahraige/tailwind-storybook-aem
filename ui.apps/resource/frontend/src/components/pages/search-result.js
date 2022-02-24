import React from 'react';
import Footer from '../molecules/footer/footer';
import Header from '../molecules/header/header';
import SearchFilterOverlay from '../molecules/search-filter-overlay/search-filter-overlay';
import SearchResult from '../molecules/search-result/search-result';
import SearchResultMobile from '../molecules/search-result/search-result-mobile';

const SearchResultPage = (props) => {

    const { } = props;
    return (
        <>
            <Header/>
            <SearchResult/>
            <Footer/>
            <SearchFilterOverlay/>
        </>
    );
}

SearchResultPage.propTypes = {
    //container_type: PropTypes.node.isRequired,
};

SearchResultPage.defaultProps = {
    //container_type: 'conatiner'
};

export default SearchResultPage;
