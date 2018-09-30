'use strict';

//import fetch from 'node-fetch';
const fetch = require('node-fetch').default;

// const resolve = Promise.resolve();
// resolve.then(() => console.log("resolve 1")).then(() => console.log("resolve 2"));

const getContents = (url) => {
    console.log("fetch1");
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                console.warn(response);
                throw new Error("HTTPステータスが200ではありません");
            }
            console.log("fetch2");
            // console.log(response.text());
            return response.text();
        })
        .catch((err) => {
            console.log("Error:", err);
            throw new Error("エラーが発生しました");
        });
};

const fetchGoogle = () => {
    console.log("fetch1");
    return fetch('http://google.co.jp')
        .then((response) => {
            if (!response.ok) {
                console.warn(response);
                throw new Error("HTTPステータスが200ではありません");
            }
            console.log("fetch2");
            // console.log(response.text());
            return response.text();
        })
        .catch((err) => {
            console.log("Error:", err);
            throw new Error("エラーが発生しました");
        });
};


const fetchYahoo = async () => {
    console.log("fetch Y1");
    const p = await fetch('https://yahoo.co.jp');
    console.log("fetch Y2");
    const text = await p.text();
    console.log("fetch Y3");
    return text;
    // return p.text();
};


const main1 = async () => {
    const promise = Promise.resolve();
    try {
        console.log("main1");
        promise.then(() => {
            getContents('https://google.co.jp').then(text => {
                console.log(text);  
            });
        }).then(() => {
            const y = fetchYahoo();
            console.log(y);  // これは pending になる
        });
        console.log("main3");
    } catch(e) {
        console.log(e);
    }    
};

const main2 = async () => {
    try {
        console.log("main1");
        const g = await getContents('https://google.co.jp');
        console.log(g.substring(0, 300));
        console.log("main2");
        const y = await fetchYahoo();
        console.log(y.substring(0, 300));
        console.log("main3");
    } catch(e) {
        console.log(e);
    }    
};

const main3 = async () => {
    try {
        console.log("main1");
        const g = await getContents('https://google.co.jp');
        console.log(g.substring(0, 300));
        console.log("main2");
        const y = await getContents('https://yahoo.co.jp');
        console.log(y.substring(0, 300));
        console.log("main3");
    } catch(e) {
        console.log(e);
    }    
};

const main4 = async () => {
    try {
        console.log("main1");
        const g = getContents('https://google.co.jp');
        console.log("main2");
        const y = getContents('https://yahoo.co.jp');
        await g;
        await y;
        console.log("main3");
    } catch(e) {
        console.log(e);
    }    
};


main4();
