const URL = "http://api.imperiaua.com.ua/graphql/";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const post = async (query) => {
	let graphql = JSON.stringify({
		query: query,
		variables: {},
	});
	let requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: graphql,
		redirect: "follow",
	};

	try {
		const response = await fetch(URL, requestOptions);
		const json = await response.json();
		return json;
	} catch (e) {
		console.log("error", e);
	}
};
