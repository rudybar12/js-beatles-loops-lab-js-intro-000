// add solution here
function theBeatlesPlay(musicians, instruments){
  var p = [];
  for (var i = 0; i < musicians.lenght; i++){
    p.push(musicians[i] + 'plays' + instruments[i])
  }
  return p;
}
