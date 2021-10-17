import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

// import { faClock } from '@fortawesome/free-regular-svg-icons';

const TopNavLeftSearchInput = ({ setOn, getClass }) => {
    //
    return (
        // <div className={'nav-left-dropdown' + getClass()}>
        <Fragment>
            <FontAwesomeIcon
                icon={faArrowLeft} // 36 x 36
                className={'nav-search-icon-arrowleft' + getClass()}
                onClick={() => setOn(false)} // 这里必须要 ()=>  , 不然就 error
            />
            <div
                className={'nav-search-input' + getClass()}
                onClick={() => setOn(true)}
            >
                <FontAwesomeIcon icon={faSearch} className="nav-search-icon" />
                <input placeholder="Search Facebook" />
            </div>
        </Fragment>
        // </div>
    );
};

export default TopNavLeftSearchInput;
