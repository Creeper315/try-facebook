import React, { Fragment } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import RecentSearch from './recentSearch';

const TopNavLeft = () => {
    const [On, setOn] = useState(false); // If "On", the left top search area is focused, pop out dropdown menu.

    function getClass() {
        return On ? ' selected' : ' not-selected';
    }

    return (
        <Fragment>
            <div className={'nav-search' + getClass()}>
                <svg className={'nav-fb-icon' + getClass()}>
                    <path
                        style={{ fill: '#1877f2' }}
                        d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
                    ></path>
                    <path
                        style={{ fill: 'white' }}
                        d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                    ></path>
                </svg>
                <FontAwesomeIcon
                    icon={faArrowLeft} // 36 x 36
                    className={'nav-search-icon-arrowleft' + getClass()}
                    onClick={() => setOn(false)} // 这里必须要 ()=>  , 不然就 error
                />
                <div
                    className={'nav-search-input' + getClass()}
                    onClick={() => setOn(true)}
                >
                    <FontAwesomeIcon
                        icon={faSearch}
                        className={'nav-search-icon' + getClass()}
                    />
                    <input placeholder="Search Facebook" />
                </div>
            </div>
            <div className={'nav-search-dropdown' + getClass()}>
                <div className="nav-search-dropdown-1">
                    <div className="nav-search-dropdown-2">
                        <span>Recent Searches</span>
                        <div className="square-button button-blue nav-dropdown-btn">
                            Edit
                        </div>
                    </div>
                </div>
                <RecentSearch />
            </div>
        </Fragment>
    );
};

export default TopNavLeft;
