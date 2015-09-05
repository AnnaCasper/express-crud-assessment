var band = new Band
member = new Member({first: 'Dave', last: 'Mathews'})
band.addMember(member)
var names = band.memberNames()

function Band (bandName) {
  this.bandId = 'a'
  this.name = bandName,
  this.memberIds = [],
}

Band.prototype.addMember = function(member){
  this.memberIds.push(member.memberId);
  member.bandIds.push(this.bandId);
}

Band.prototype.memberNames = function(){
  var names = [];
  for (var i = 0; i < this.memberIds.length; i++) {
    memberCollection.find({memberId = this.memberIds[i]}).then(function(member){
      names.push(member.first, member.last);
    })
  }
  console.log(names);
}

function Member (first, last){
  this.memberId = 1,
  this.first = first,
  this.last = last,
  this.bandIds = []
}
