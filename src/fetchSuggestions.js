import {useState, useEffect} from "react";

export const useFetchSuggestions = url => {
	const [state, setState] = useState({ textSuggestions:[], loading: true});

	useEffect(() => {
		setState({ textSuggestions: [], loading: true});
		fetch(url)
		.then((response) => response.json())
		.then(data => {
			setState({ textSuggestions: data, loading: false});
			console.log(data);
		});
	}, []);

	return state;
}