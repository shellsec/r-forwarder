// All resource types
// "main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", 
//"xmlhttprequest", "ping", "csp_report", "media", "websocket", or "other"
const resourceTypes = ["main_frame", "sub_frame", "object",
 "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"];
const requestFilters = {
    urls: ["<all_urls>"],
    types: resourceTypes
}


// chrome.webRequest.onBeforeSendHeaders.addListener(
//     (details) => {
//         // console.dir(details)
//         console.log('beforeSendHeaders');
//         console.dir(details.requestHeaders);
//         // fetch('http://127.0.0.1')
//     },
//     { urls: ["<all_urls>"] }, ['requestHeaders', 'blocking', 'extraHeaders']);

// chrome.webRequest.onCompleted.addListener(
//     (details) => {
//         console.dir(details)
//         fetch('http://127.0.0.1')
//     }, { urls: ["<all_urls>"] });

chrome.webRequest.onSendHeaders.addListener(
    (details) => {
        // method = details.method;
        rHeaders = details.requestHeaders;
        console.log('sendHeaders');
        console.dir(rHeaders);
        // type = details.type;
        // timeStamp = details.timeStamp;
        // url = details.url;
        console.dir(details)
    }, requestFilters, ['requestHeaders', 'extraHeaders']
)

// function setListeners() {
//     chrome.webRequest.onBeforeSendHeaders.addListener(requestHandler,
//         { urls: ["<all_urls>"] },
//         ["requestHeaders"]);
//     chrome.webRequest.onBeforeRequest.addListener(requestHandler,
//         { urls: ["<all_urls>"] },
//         ['requestBody']);
//     chrome.webRequest.onCompleted.addListener(requestHandler,
//         { urls: ["<all_urls>"] });
// }