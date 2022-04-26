function checkMobileView() {
  if (screen.availWidth < 480) {
    document.getElementById('cm-drawer').style.setProperty('width', '0px')
  }
}
