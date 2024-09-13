let idCounter = 0 // Initialize a counter outside of the function

async function init() {
	// const API_URL = "http://localhost:8000"
	const API_URL = "https://pow6lsqqba5qkfmlchfaagegpu0hsqxz.lambda-url.us-east-1.on.aws"

	//todo: replace with dynamic calls
	const data = await fetch(`${API_URL}/active-session`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => res.json()).catch((err) => console.log(err))


	console.log(data)

	const blockedSites = data?.block_list?.entries ?? []

	console.log(blockedSites)

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
