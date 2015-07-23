var resume = {
  firstName: "Anna",
  lastName: "Casper",
  experience:
    [
      {
        company: "American Cheese Society",
        startDate: "01/02/2014",
        endDate: "05/16/2015",
        references:
        [
          {name1:"Michelle Lee", number1: "720-278-7288"},
          {name1: "Jane Bauer", number1: "720-328-2786"},
          {name1: "Steve Binns", number1: "720-328-2776"},
        ]
      },
      {
        company: "Bohemian Nights",
        startDate: "09/15/2012",
        endDate: "04/15/2013",
        references:
        [
          {"Merry Hummell": "303-278-7288"},
          {"Stacy Grant": "303-328-2786"},
          {"Emily Brown": "303-328-2776"},
        ]
      },
    ],
  companyLocations:
    {
     "American Cheese Society":
     {
        address: "2696 S Colorado Blvd",
        city: "Denver",
        state: "Colorado",
        zip: 80222
      },
      "Bohemian Nights":
      {
        address: "1270 Maple St",
        city: "Fort Collins",
        state: "Colorado",
        zip: 80130
      },
    },
};

function getName(){
  var fullName = resume.firstName + " " + resume.lastName
  console.log(fullName);
};




function getCompanyInfo() {
  var companies = resume.companyLocations;

  var i = 0;
  for(var key in companies) {
    console.log(key);
    console.log(companies[key].address);
    console.log(companies[key].city);
    console.log(companies[key].state);
    console.log(companies[key].zip);
    console.log(getDates()[i]);
    i++;
  };


};

function getDates(){
  var start = [];
  var end = [];
  var dates = [];
  for (var i = 0; i < resume.experience.length; i++) {
    start.push(resume.experience[i].startDate);
    end.push(resume.experience[i].endDate);
    dates.push(start[i] + " - " + end[i]);
  };
  return dates;
};

function getReferences(){

  
  for (var i = 0; i < resume.experience.length; i++) {
    var listReferences = resume.experience[i].references;
    return listReferences
  };

};

// function getReferencesInfo(){
//   for (var i = 0; i < 4; i++) {
//     var tmp = getReferences()[i];
//     console.log(tmp)
//   }
//
// }

  // for(var key in listReferences[i]){
  //   console.log(listReferences[key]);
  //   }


  //console.log(listReferences);


  //for(var key in listReferences) {
  //  console.log(listReferences[key])
  //}
//};

getName();
console.log("Experience:")
getCompanyInfo();
console.log("References:")
//getReferencesInfo();
getReferences();
// var listReferences = [];
// for (var i = 0; i < resume["experience"][0]["references"].length; i++) {
//   listReferences.push(resume.experience.references[i]);
//   console.log(references[i]);
// }
