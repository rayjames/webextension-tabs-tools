browser.menus.create({
  id: "new-tab",
  type: "normal",
  title: browser.i18n.getMessage("menuItemNewTab"),
  contexts: ["all"]
});

browser.menus.create({
  id: "duplicate-tab",
  type: "normal",
  title: browser.i18n.getMessage("menuItemDuplicateTab"),
  contexts: ["all"]
});

browser.menus.onClicked.addListener(function(info, tab) {
  
  if (info.menuItemId == "new-tab") {
    browser.tabs.create({});
  }
  
  if (info.menuItemId == "duplicate-tab") {
    chrome.tabs.query({
      currentWindow: true,
      active: true,
    }, function(tabs) {
      var tab = tabs[0];
      browser.tabs.duplicate(tab.id);
    });
  }
  
});
