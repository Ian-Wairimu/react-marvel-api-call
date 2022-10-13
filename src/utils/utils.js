import MD5 from 'crypto-js/md5';

// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_BASE_URL;

function getHash(timestamp, privateKey, apikey) {
	return MD5(timestamp + privateKey + apikey).toString();
}

export const fetchHeroes = async(value) => {
	const baseURL = `${API_URL}/v1/public/characters`;
	const timestamp = Date.now().toString();
	// eslint-disable-next-line no-undef
	const apikey = process.env.REACT_APP_API_KEY;
	// eslint-disable-next-line no-undef
	const privateKey = process.env.REACT_APP_PRIVATE_KEY;
	const hash = getHash(timestamp, privateKey, apikey);
	const url = `${baseURL}?ts=${timestamp}&apikey=${apikey}&hash=${hash}&nameStartsWith=${value}`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data.data.results;
	}catch (e) {
		console.log(e.message);
	}
};
export const fetchHeroesId = async (id) => {
	const baseURL = `${API_URL}/v1/public/characters/${id}`;
	const timestamp = Date.now().toString();
	// eslint-disable-next-line no-undef
	const apikey = process.env.REACT_APP_API_KEY;
	// eslint-disable-next-line no-undef
	const privateKey = process.env.REACT_APP_PRIVATE_KEY;
	const hash = getHash(timestamp, privateKey, apikey);
	const url = `${baseURL}?ts=${timestamp}&apikey=${apikey}&hash=${hash}`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data.data.results;
	}catch (e) {
		console.log(e.message);
	}
};