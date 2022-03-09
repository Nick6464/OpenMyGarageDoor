const dotenv = require("dotenv");
dotenv.config();
const fetch = require("node-fetch");

const { NODE_ENV, PI_ADDRESS, PI_ADDRESS_DEV } = process.env;

const API = NODE_ENV == "development" ? PI_ADDRESS_DEV : PI_ADDRESS;

exports.sendOpenRequest = sendOpenRequest;
async function sendOpenRequest() {
	let status = await APIGET("/openDoor");
	return status;
}

exports.sendCloseRequest = sendCloseRequest;
async function sendCloseRequest() {
	let status = await APIGET("/closeDoor");
	return status;
}

exports.sendStatusRequest = sendStatusRequest;
async function sendStatusRequest() {
	let pos = await APIGET("/position");
	return pos;
}

APIGET = async (urlEnd) => {
	return new Promise(async (res, rej) => {
		const url = `${API}${urlEnd}`;
		fetchWithTimeout(url, {
			headers: {
				"content-type": "application/json",
			},
		})
			.then((r) => {
				if (r.ok) return r;
				if (!r.ok) throw r;
			})
			.then((response) => response.json())
			.then(res)
			.catch((e) => {
				APIerrHandler(e, rej);
			});
	});
};

fetchWithTimeout = async (resource, options = {}) => {
	const { timeout = 20000 } = options;

	const controller = new AbortController();
	const id = setTimeout(() => controller.abort(), timeout);
	const response = await fetch(resource, {
		...options,
		signal: controller.signal,
	});
	clearTimeout(id);
	return response;
};

APIerrHandler = (e, rej) => {
	if (e == "TypeError: Failed to fetch") {
		console.log("Disconnected...");
	} else {
		rej(e);
	}
	rej(e.statusText);
};
