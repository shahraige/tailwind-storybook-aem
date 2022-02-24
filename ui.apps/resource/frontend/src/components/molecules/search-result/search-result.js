import React, { useEffect } from 'react'
import ButtonLink from '../button-link/ButtonLink'
import FormCheckbox from '../form-checkbox/FormCheckbox'
import HeadlineText from '../headline-text/HeadlineText'
import InputField from '../input-field/InputField';
import SearchSelect from '../search-select/search-select';
import CountrySelect from '../country-select/country-select';
import Pagination from '../pagination/pagination';
import Tooltip from '../tooltip/tooltip';
import SearchResultDesktop from './search-result-desktop';
import SearchResultMobile from './search-result-mobile';

const SearchResult = props => {
    const { requireinfoText } = props;
    return (
        <div className='search-result'>
            <SearchResultDesktop/>
            <SearchResultMobile/>
        </div>
    )
}

export default SearchResult