let x = 3;
setTimeout(() => x = x + 4, 1000)


function double(value) {
    setTimeout(() => setTimeout(console.log, 0, value * 2), 1000)
}

double(3)


function double1(value, callback) {
    setTimeout(() => callback(value * 2), 1000)
}

double1(3, (x) => console.log('I was given:${x}'))

// 2.失败处理
function double2(value, success, failure) {
    setTimeout(() => {
        try {
            if (typeof value != 'number') {
                throw 'Must provide number as first argument'
            }
            success(2 * value);
        } catch (e) {
            failure(e);
        }
    }, 1000)
}

const successCallback = (x) => console.log(`Success: ${x}`);
const failureCallback = (e) => console.log(`Failure: ${e}`);

double(3, successCallback, failureCallback);
double('b', successCallback, failureCallback);

// 3.嵌套异步回调
function double3(value, success, failure) {
    setTimeout(() => {
        try {
            if (typeof value != "number") {
                throw 'Must provie number as first argument'
            }
            success(2 * value)
        } catch (e) {
            failure(e);
        }
    }, 1000);
}

const successCallback = (x) => {
    double3(x,(y) => console.log(`Success:${y}`));
}

const failureCallback = (e) => console.log(`Failure: ${e}`);
double3(3,successCallback, failureCallback)




