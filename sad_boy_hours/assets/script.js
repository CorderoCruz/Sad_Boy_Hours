
function tabs(evt, tabMood) {
    var i, tabcontent, tablinks;
    Moods = document.getElementsByClassName("sectionMood");
    for (i = 0; i < Moods.length; i++) {
      Moods[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabMood).style.display = "block";
    
    evt.currentTarget.className += " active";
  }
