const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../server/server");

chai.use(chaiHttp);

describe("/GET connections", () => {
  it("it should return 404 because no parametars were provided", done => {
    chai
      .request(server)
      .get("/connections")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});

describe("/GET connections?from=Tamedia AG, Werdstrasse 21, 8004 Zürich, Switzerland&to=Biel/Bienne BSG", () => {
  it("it should GET connections", done => {
    chai
      .request(server)
      .get("/connections")
      .query({
        from: "Tamedia AG, Werdstrasse 21, 8004 Zürich, Switzerland",
        to: "Biel/Bienne BSG"
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Array");
        res.body[0].should.have.property("duration");
        res.body[0].should.have.property("transfers");
        res.body[0].should.have.property("sections");
        done();
      });
  }).timeout(0);
});
