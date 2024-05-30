const setInstallation = ({ reason }) => {
	async function oneTimeInstall() {
		//> uninstall survey setup
		const LAMBA_KD = crypto.randomUUID();
		const SURVEY_URL = `https://uninstall-form.pages.dev/?e=${chrome.runtime.id}&u=${LAMBA_KD}`;
		chrome.runtime.setUninstallURL(SURVEY_URL);
	}
	reason === "install" && oneTimeInstall();
	chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => console.error(error));
};

// installation setup
chrome.runtime.onInstalled.addListener(setInstallation);
