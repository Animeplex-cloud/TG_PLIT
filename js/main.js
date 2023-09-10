function chnage_table(evt, sem) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("card-body");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(sem).style.display = "block";
    evt.currentTarget.className += " active";
  }