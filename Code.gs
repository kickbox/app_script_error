function onOpen(e) {
  // error with storage : permission denied
  // ref :https://sites.google.com/site/scriptsexamples/home/announcements/multiple-accounts-issue-with-google-apps-script
  console.log('SERVER EMAIL ID onOpen: ', Session.getEffectiveUser().getEmail());

  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
  .createMenu('Testing')
  .addItem('Google', 'openAboutSidebar')
  .addToUi();
};

const openAboutSidebar = (e) => {
  console.log('authmode openAboutSidebar : ', e);
  const html = HtmlService.createHtmlOutputFromFile('sidebar').setTitle(
    'Sidebar'
  );
  
  html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

  SpreadsheetApp.getUi().showSidebar(html);
};

function deleteDummy(){
  console.log("entered")
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty('dummy');
  console.log("done")
 return("done")

}
  
function test(){
  
  
}
