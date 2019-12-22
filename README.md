# @octo-utils/promise-chain

execute promise returned functions one by one. 

difference between `Promise.all`, this funtion accepts promise returned functions and create promises one after and another.

### Usage

```javascript
import promiseChain from "@octo-utils/promise-chain"

promiseChain([
    async _ => { console.log("step1"); },
    async _ => { console.log("step2"); },
    async _ => { console.log("step3"); }
])
```