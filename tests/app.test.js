const app = require("../app");
const request = require("supertest");

describe("app", () => {
  it("/ should return hello world", done => {
    request(app)
      .get("/")
      // .set("Accept", "application/json")
      // .expect("Content-Type", /json/)
      .expect(200, "Hello World!", done);
  });
});
