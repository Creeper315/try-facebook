import './App.css';
import { useEffect, useRef, useState } from 'react';
import TopNav from './topNav/topNav';

const App = () => {
    const messageRef = useRef();
    const lastRef = useRef();
    const [Width, setWidth] = useState('100px');

    function toggleWidth() {
        if (Width === '100px') {
            setWidth('150px');
        } else {
            setWidth('100px');
        }
    }

    const style1 = {
        width: Width,
        height: '30px',
        // position: 'absolute',
        float: 'right',
        // right: '40px',
        backgroundColor: 'grey',
        transition: 'width 1s',
        margin: '30px',
    };
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
            <div
                style={{
                    width: '200px',
                    height: '100px',
                    border: '1px dotted red',
                    // position: 'relative',
                }}
            >
                <div style={style1} onClick={toggleWidth}>
                    wowowowow
                </div>
            </div>
            <div
                style={{
                    width: '200px',
                    height: '100px',
                    border: '1px dotted red',
                    // position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',

                        display: 'inline-block',
                        width: '40px',
                        height: '40px',
                        padding: '10px',
                        border: '1px dotted blue',
                    }}
                ></div>
                <div
                    style={{
                        display: 'inline-block',
                        width: '40px',
                        height: '40px',
                        padding: '40px',
                        border: '1px dotted orange',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default App;
