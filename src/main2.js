'use strict'

import getContents from './Content.js';

async function test1() {
    console.log("TEST1-1");
    const g = await getContents('https://www.google.co.jp');
    console.log("TEST1-2");
    const y = await getContents('https://yahoo.co.jp');
    console.log("TEST1-3");

    return new Promise((resolve, reject) => {
        resolve("resove test1");
    });
}

async function test2() {
    console.log("TEST2-1");
    const g = getContents('https://www.google.co.jp');
    console.log("TEST2-2");
    const y = getContents('https://yahoo.co.jp');
    console.log("TEST2-3");
    await g;
    console.log("TEST2-4");
    await y;    
    console.log("TEST2-5");

    return new Promise((resolve, reject) => {
        resolve("resove test2");
    });
}

async function testMain() {
    await test1();
    await test2();
}


// test1().then(() => {
//     test2();
// });

testMain();