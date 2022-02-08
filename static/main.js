
function toggleDrawer() {
    var x = document.getElementById("cm-drawer");
    if (x.style.width === "0px") {
      document.getElementById("cm-drawer").style.width = "240px";
      document.getElementById("cm-main").style.marginLeft = "240px";
    } else {
      document.getElementById("cm-drawer").style.width = "0px";
       document.getElementById("cm-main").style.marginLeft= "0px";
    }
  }
  