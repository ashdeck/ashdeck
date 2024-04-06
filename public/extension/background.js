let idCounter = 0 // Initialize a counter outside of the function

async function init() {

	//todo: replace with dynamic calls

	const blockedSites = [
		"github.com",
		"google.com",
	]

	const rules = blockedSites.map((site) => ({
		id: ++idCounter,
		condition: { urlFilter: site, resourceTypes: ["main_frame"] },
		action: { type: "block" },
	}))

	const oldRules = await chrome.declarativeNetRequest.getDynamicRules()
	const oldRuleIds = oldRules.map(rule => rule.id)

	await chrome.declarativeNetRequest.updateDynamicRules({
		removeRuleIds: oldRuleIds,
		addRules: rules,
	})
}

init().then(() => console.log("Initialized"))
