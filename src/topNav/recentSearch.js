import { useState } from 'react';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';

const RecentSearch = () => {
    const recent_searches = ['John', 'Peter', 'Sophia', 'Fiona', 'Yuncheng'];

    return (
        <ul className="nav-recent-search">
            {recent_searches.map((e, idx) => {
                return (
                    <li key={idx} className="nav-recent-search-li">
                        <div className="nav-clock">
                            {/* <FontAwesomeIcon icon={faClock} /> */}
                            <i></i>
                        </div>
                        <span>{e}</span>
                        <div className="window-close">
                            {/* <FontAwesomeIcon icon={faClosedCaptioning} /> */}
                            <i></i>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default RecentSearch;
