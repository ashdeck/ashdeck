chrome.storage.sync.get("device_id", function(device_id){
    if (device_id){
        console.log(device_id)
    } else {
        chrome.storage.sync.set({device_id: "some_random_id"})
    }
})

// Blocked sites
const blockedSites = [
    "https://www.pelrio.com/*",
    "https://pelrio.com/*",
    "https://aichatbot.so/*",
	"https://www.aichatbot.so/*"
];


console.log(blockedSites)

// Function to apply blocking rules
async function setBlockingRules() {
    const rules = blockedSites.map(site => ({
        id: ++idCounter,
        priority: 1,
        action: { type: "redirect", redirect: { url: chrome.runtime.getURL("blocked.html") } },
        condition: { urlFilter: site, resourceTypes: ["main_frame"] }
    }));

    // Remove existing rules
    const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
    const existingRuleIds = existingRules.map(rule => rule.id);
    if (existingRuleIds.length > 0) {
        await chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: existingRuleIds
        });
    }

    // Add new blocking rules
    await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: rules
    });

    console.log("Blocking rules applied.");
}

// Apply blocking rules on extension load
setBlockingRules();


// // Optional: If you'd rather show an alert instead of redirecting, use this:
// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//         for (let site of blockedSites) {
//             const sitePattern = new RegExp(site.replace(/\*/g, ".*"));
//             if (sitePattern.test(details.url)) {
//                 alert(`Access to ${details.url} has been blocked.`);
//                 return { cancel: true }; // Block access without redirect
//             }
//         }
//     },
//     { urls: blockedSites },  // Directly pass blockedSites array
//     ["blocking"]
// );




// let idCounter = 0 // Initialize a counter outside of the function

// async function init() {
// 	// const API_URL = "http://localhost:8000"
// 	const API_URL = "https://pow6lsqqba5qkfmlchfaagegpu0hsqxz.lambda-url.us-east-1.on.aws"

// 	//todo: replace with dynamic calls
// 	const data = await fetch(`${API_URL}/active-session`, {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	}).then((res) => res.json()).catch((err) => console.log(err))


// 	console.log(data)

// 	const blockedSites = data?.block_list?.entries ?? []

// 	console.log(blockedSites)

// 	const rules = blockedSites.map((site) => ({
// 		id: ++idCounter,
// 		condition: { urlFilter: site, resourceTypes: ["main_frame"] },
// 		action: { type: "block" },
// 	}))

// 	const oldRules = await chrome.declarativeNetRequest.getDynamicRules()
// 	const oldRuleIds = oldRules.map(rule => rule.id)

// 	await chrome.declarativeNetRequest.updateDynamicRules({
// 		removeRuleIds: oldRuleIds,
// 		addRules: rules,
// 	})
// }

// init().then(() => console.log("Initialized"))
