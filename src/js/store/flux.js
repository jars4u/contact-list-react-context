const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLBASE: 'https://assets.breatheco.de/apis/fake/contact/',
			contactList: [],
			id: "",
		},

		actions: {

			getAllContacts: async () => {
				const store = getStore();
				try {
					let response = await fetch(`${store.URLBASE}/agenda/jars_Agenda`)
					let data = await response.json()

					if (response.ok) {
						setStore({
							contactList: data
						})
					} else {
						console.log("Algo no esta bien")
					}

				} catch (error) {
					console.log(error)
				}

			},


			createContact: async (data) => {
				const store = getStore();
				let exists = store.contactList.find((item) => item.email === data.email)

				if (exists) {
					getActions().updateContact(data, exists.id)
				} else {

					try {
						let response = await fetch(`${store.URLBASE}agenda/jars_Agenda`,
							{
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify(data),
							})

						if (response.ok) {
							setStore({
								allContacts: data
							})
						} else {
							console.log("Algo no esta bien")
						}

					} catch (error) {
						console.log(error)

					}
				}
			}
		}
	};
};

export default getState;
