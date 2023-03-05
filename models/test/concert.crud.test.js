const Concert = require('../concert.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Concert', () => {

  before(async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/NewWaveDBtest', { useNewUrlParser: true, useUnifiedTopology: true });
    } catch(err) {
      console.error(err);
    }
  });

  describe('Reading data', () => {

    before(async () => {
      const testConcOne = new Concert({ performer: 'Performer #1', genre: 'Genre #1', price: 20, day: 1, image: 'Image #1' });
      await testConcOne.save();

      const testConcTwo = new Concert({ performer: 'Performer #2', genre: 'Genre #2', price: 30, day: 2, image: 'Image #2' });
      await testConcTwo.save();

      const testConcThree = new Concert({ performer: 'Performer #1', genre: 'Genre #1', price: 20, day: 1, image: 'Image #1' });
      await testConcThree.save();

      const testConcFour = new Concert({ performer: 'Performer #2', genre: 'Genre #2', price: 30, day: 2, image: 'Image #2' });
      await testConcFour.save();

      const testConcFive = new Concert({ performer: 'Performer #1', genre: 'Genre #1', price: 20, day: 1, image: 'Image #1' });
      await testConcFive.save();

      const testConcSix = new Concert({ performer: 'Performer #3', genre: 'Genre #3', price: 40, day: 3, image: 'Image #2' });
      await testConcSix.save();
    });

    after(async () => {
      await Concert.deleteMany();
    });

    it('Should return a proper document by "performer" with "find" method', async () => {
      const concerts = await Concert.find({ performer: 'Performer #1' });
      const expectedLength = 3;
      expect(concerts.length).to.be.equal(expectedLength);
    });  

    it('Should return a proper document by "performer" with "find" method', async () => {
      const concerts = await Concert.find({ performer: 'Performer #2' });
      const expectedLength = 2;
      expect(concerts.length).to.be.equal(expectedLength);
    });  
    
    it('Should return a proper document by "performer" with "find" method', async () => {
      const concerts = await Concert.find({ performer: 'Performer #3' });
      const expectedLength = 1;
      expect(concerts.length).to.be.equal(expectedLength);
    });  


    it('Should return a proper document by "genre" with "find" method', async () => {
      const concerts = await Concert.find({ genre: 'Genre #1' });
      const expectedLength = 3;
      expect(concerts.length).to.be.equal(expectedLength);
    });  

    it('Should return a proper document by "genre" with "find" method', async () => {
      const concerts = await Concert.find({ genre: 'Genre #2' });
      const expectedLength = 2;
      expect(concerts.length).to.be.equal(expectedLength);
    });  
    
    it('Should return a proper document by "genre" with "find" method', async () => {
      const concerts = await Concert.find({ genre: 'Genre #3' });
      const expectedLength = 1;
      expect(concerts.length).to.be.equal(expectedLength);
    });  


    it('Should return a proper document by "day" with "find" method', async () => {
      const concerts = await Concert.find({ day: 1 });
      const expectedLength = 3;
      expect(concerts.length).to.be.equal(expectedLength);
    });  

    it('Should return a proper document by "day" with "find" method', async () => {
      const concerts = await Concert.find({ day: 2 });
      const expectedLength = 2;
      expect(concerts.length).to.be.equal(expectedLength);
    });  
    
    it('Should return a proper document by "day" with "find" method', async () => {
      const concerts = await Concert.find({ day: 3 });
      const expectedLength = 1;
      expect(concerts.length).to.be.equal(expectedLength);
    });  


    it('Should return a proper document by "price" with "find" method', async () => {
      const concerts = await Concert.find({ price: { $gte: 10 , $lte: 20} });
      const expectedLength = 3;
      expect(concerts.length).to.be.equal(expectedLength);
    });  

    it('Should return a proper document by "price" with "find" method', async () => {
      const concerts = await Concert.find({ price: { $gte: 20 , $lte: 30} });
      const expectedLength = 5;
      expect(concerts.length).to.be.equal(expectedLength);
    });  
    
    it('Should return a proper document by "price" with "find" method', async () => {
      const concerts = await Concert.find({ price: { $gte: 35 , $lte: 45} });
      const expectedLength = 1;
      expect(concerts.length).to.be.equal(expectedLength);
    });  

  });

});