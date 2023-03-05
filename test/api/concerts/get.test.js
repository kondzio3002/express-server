const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const Concert = require('../../../models/concert.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET /api/concerts', () => {

  before(async () => {
    const testConcOne = new Concert({ performer: 'Performer#1', genre: 'Genre#1', price: 20, day: 1, image: 'Image#1' });
    await testConcOne.save();
  
    const testConcTwo = new Concert({ performer: 'Performer#2', genre: 'Genre#2', price: 30, day: 2, image: 'Image#2' });
    await testConcTwo.save();

    const testConcThree = new Concert({ performer: 'Performer#1', genre: 'Genre#1', price: 20, day: 1, image: 'Image#1' });
    await testConcOne.save();
  });

  after(async () => {
    await Concert.deleteMany();
  })

  it('/performer/:performer should return one concert by :performer', async () => {
    const res = await request(server).get('/api/concerts/performer/Performer#1');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.not.be.null;
  });

  it('/genre/:genre should return one concert by :genre', async () => {
    const res = await request(server).get('/api/concerts/genre/Genre#1');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.not.be.null;
  });

  it('/day/:day should return one concert by :day', async () => {
    const res = await request(server).get('/api/concerts/day/1');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.not.be.null;
  });

  it('/price/:price_min/:price_max should return one concert by :price_min/:price_max', async () => {
    const res = await request(server).get('/api/concerts/price/25/30');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.not.be.null;
  });

});