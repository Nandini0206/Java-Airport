describe("Feature Test", function(){
  var plane;
  var airport;


  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it("should be able to land at an airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });





});
