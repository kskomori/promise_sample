'use strict'

export default async function getContents(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(url));
        }, 1000);
    });
}
