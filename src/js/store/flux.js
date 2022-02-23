const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			addFavorite: (thing) => {
				const store = getStore();
				setStore({ favorites: store.favorites.concat(thing)})
			},
			removeFavorite: (thing) => {
				const store = getStore();
				const favList = store.favorites.filter(key => key !== thing)
				setStore({favorites: favList})

			},
			peopleDetail: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(res => res.json())
				.then(data => {})
			},
			
			fetchPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => {
						setStore({ people: result.results });
					})
					.catch(error => console.log("error", error));
			},
			fetchPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result.results });
					})
					.catch(error => console.log("error", error));
			},
			fetchVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(result => {
						setStore({ vehicles: result.results });
					})
					.catch(error => console.log("error", error));
			},
		}
	};
};

export default getState;
