import React, { useRef } from 'react';

export const ScrollWrapper = ({ status, onScroll, children }) => {

    const listInnerBodyRef = useRef();

    const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds))
    }

    const onListScroll = async () => {
        if (listInnerBodyRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerBodyRef.current;
            if (scrollTop > 0) {
                const diffHight = scrollHeight - (scrollTop + clientHeight);
                const approaxDiffHeight = diffHight < 0 ? -1 * diffHight : diffHight;
                if (approaxDiffHeight <= 1) {
                    await sleep(500);
                    onScroll();
                }
            }
        }
    };

    return (
        <div className="list-body bgwhite" style={{ border: status ? '1px solid red' : '', borderRadius: 3 }} onScroll={() => onListScroll()} ref={listInnerBodyRef}>
            {children}
        </div>
    );
};

export default ScrollWrapper;
