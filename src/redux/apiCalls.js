const URL = "http://api.imperiaua.com.ua/graphql/";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("credentials", "include");

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
		const text = await response.text();
		console.log(text);
	} catch (e) {
		console.log("error", e);
	}
};
