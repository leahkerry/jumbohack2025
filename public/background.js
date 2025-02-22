chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed! Yayy");
  });
  
  chrome.runtime.onStartup.addListener(() => {
    console.log("Extension started! Yayy");
  });
  
  // Keeps the service worker alive when receiving messages
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received:", message);
    sendResponse({ received: true });
    return true; // Keeps the service worker alive
  });