async function sleep(millis) {
    new Promise(res => setTimeout(res, millis, millis))
}

let y = Date.now();
sleep(100).then(res => console.log(Date.now() - y))