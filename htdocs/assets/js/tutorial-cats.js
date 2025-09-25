/* handles the search box in the tutorials list */

const listedTutorialIds = [
	"flow-dev-intro",
	"trino-udf-java-scalar"
];

function showByCat(dropdown) {
  var selectedCat = dropdown.options[dropdown.selectedIndex].value;

  for (tutorialId of listedTutorialIds) {
    var tut = document.getElementById(tutorialId);

    var tutCatsString = tut.getAttribute("data-cats");
    var tutCats = tutCatsString.split(',');
    
    if (selectedCat === 'SHOW-ALL') {
      tut.style.display = "block";
    } else {
      if (tutCats.includes(selectedCat)) {
        tut.style.display = "block";
      } else {
        tut.style.display = "none";
      }
    }
  }
}
