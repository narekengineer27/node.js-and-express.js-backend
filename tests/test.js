import chai from  "chai";
import  server from '../bin/www';
import httpServer from 'chai-http';
let should = chai.should();
chai.use(httpServer);
describe("UserController test", () => {
    
  it("Testing all methods on the controller...", (done) => {
    let req = {
        body : {
            email : 'tomas@gmail.com',
            password : '123456'
        }
    }
    chai.request(server).get('/users')
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
    });
  });
});