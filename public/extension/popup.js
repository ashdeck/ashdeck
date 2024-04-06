window.onload = function() {
	document.getElementById("submitButton").onclick = save
	document.getElementById("clearButton").onclick = clear
}


function init() {
	chrome.storage.sync.get("blockedSites", function(data) {
		renderBlockedWebsites(data.blockedSites || [])
	})

	var blockButton = document.getElementById("blockButton")
	blockButton.addEventListener("click", function() {
		var websiteInput = document.getElementById("websiteInput")
		var website = websiteInput.value.trim()
		if (website) {
			chrome.storage.sync.get("blockedSites", function(data) {
				var blockedSites = data.blockedSites || []
				blockedSites.push(website)
				chrome.storage.sync.set({ blockedSites: blockedSites }, function() {
					websiteInput.value = ""
					renderBlockedWebsites(blockedSites)
				})
			})
		} else {
			alert("Please enter a valid website")
		}
	})
}


function renderBlockedWebsites(blockedSites) {
	const blockedWebsitesList = document.getElementById("blockedWebsites")
	blockedWebsitesList.innerHTML = "" // Clear previous list

	blockedSites.forEach(function(website) {
		const li = document.createElement("li")
		li.textContent = website

		// Create unblock button
		const unblockButton = document.createElement("button")
		unblockButton.textContent = "Unblock"
		unblockButton.addEventListener("click", function() {
			chrome.storage.sync.get("blockedSites", function(data) {
				const updatedBlockedSites = data.blockedSites.filter(site => site !== website)
				chrome.storage.sync.set({ blockedSites: updatedBlockedSites }, function() {
					renderBlockedWebsites(updatedBlockedSites)
				})
			})
		})

		li.appendChild(unblockButton)
		blockedWebsitesList.appendChild(li)
	})
}
