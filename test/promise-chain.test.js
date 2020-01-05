import chai from "chai"
import delay from "delay"
import promiseChain from "../lib/promise-chain.js"

const { expect } = chai;

describe("promise-chain", function () {
  it("base-usage", async function () {
    this.slow(100);
    const result = await promiseChain([1,2,3].map(i => async input => {
      await delay(1);
      return input + i;
    }), 1);
    expect(result).to.be.eql(1 + 1 + 2 + 3);
  })
});
