function Airport(){
  this.planes=[];
};

Airport.prototype.planes = function(){
  return this.planes.push(plane);
};
