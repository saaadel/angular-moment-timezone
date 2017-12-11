import {TzPipe} from "./tz.pipe";
// import "jasmine/index";


describe("TzPipe", () => {
  it("create an instance", () => {
    const pipe = new TzPipe();
    expect(pipe).toBeTruthy();
  });
});
