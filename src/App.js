import './App.css';
import { useEffect, useRef } from 'react';
import TopNav from './topNav/topNav';

const App = () => {
    const messageRef = useRef();
    const lastRef = useRef();
    useEffect(() => {
        window.mm = messageRef;
        window.ll = lastRef;
        if (messageRef.current) {
            messageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
            });
        }
    });
    // element.scrollHeight - element.scrollTop === element.clientHeight
    return (
        <div className="main">
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    width: 0,
                    border: '1px dotted grey',
                }}
            ></div>
            <TopNav />
            <div
                className="scroll"
                ref={messageRef}
                onScroll={(e) => {
                    console.log('scroll', e);
                }}
            >
                <ol>
                    <li>q</li>
                    <li>w</li>
                    <li>e</li>
                    <li>r</li>
                    <li style={{ height: 0 }} ref={lastRef}>
                        a
                    </li>
                    <li>k</li>
                </ol>
            </div>
        </div>
    );
};

export default App;
