import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'

export const Quote = ({ data }) => {
    const [counter, setCounter] = useState(0);

    const pRef = useRef();
    const [boxSize, setboxSize] = useState({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setboxSize({ height, width })
    }, [data])
    useEffect(() => {
        setCounter((prevCounter) => prevCounter + 1);
    }, [data]);

    return (
        <blockquote className="blockquote text-end" style={{ display: 'flex', flexDirection: 'column' }} >
            {!!data ? (
                data.map(({ quote, author }, index) => (
                    <React.Fragment key={index}>
                        <p className="mb-2" ref={pRef}> {quote} </p>
                        <footer className="blockquote-footer"> {author} </footer>
                    </React.Fragment>
                ))

            ) : (
                false
            )}
            <>
                <code>{JSON.stringify(boxSize)}</code>
            </>
        </blockquote>
    );
};