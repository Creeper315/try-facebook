import TopNavItemLarge from './topNavItemLarge';
import TopNavItemSmall from './topNavItemSmall';
import TopNavLeft from './topNavLeft';
import TopNavUser from './topNavUser';
import React from 'react';

const TopNav = () => {
    const array_item_large = [
        'Home',
        'Watch',
        'Marketplace',
        'Groups',
        'Gaming',
    ];
    const array_item_small = ['Menu', 'Messanger', 'Notifications', 'Account'];
    return (
        <div className="top-nav-main">
            <div className="top-nav-middle">
                <TopNavItemLarge
                    key={-1}
                    TipName={'More'}
                    onlyShrinkLabel={true}
                />
                {array_item_large.map((e, idx) => (
                    <TopNavItemLarge key={idx} TipName={e} />
                ))}
            </div>
            <TopNavLeft />

            <div className="top-nav-right">
                <TopNavUser />
                <div>
                    {array_item_small.map((e, idx) => (
                        <TopNavItemSmall key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopNav;
