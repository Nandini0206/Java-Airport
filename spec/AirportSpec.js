describe('Airport',function(){
  var airport;
  var weather;
  var plane = 'plane';

  beforeEach(function() {
    airport = new Airport();
    weather = new Weather();
  });

  describe('land plane', function(){
    it('tells plane to land', function(){
      expect(airport.planes).toContain(plane)
    });
  });
