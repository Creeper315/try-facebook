const TopNavUser = () => {
    const user_name = 'Richard';

    return (
        <div className="nav-user">
            <img
                style={{ height: '28px', width: '28px' }}
                src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-1/cp0/p80x80/123338444_1500260496838164_291513995136460152_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=r7AzUbuvkMYAX_pyduU&amp;_nc_ht=scontent-sin6-2.xx&amp;oh=36603de5f2cc09584053cdc5e8e93177&amp;oe=6180D652"
                alt=""
            />
            <span>{user_name}</span>
        </div>
    );
};

export default TopNavUser;
