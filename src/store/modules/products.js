export default {
	namespaced: true,
	state: {
		items: [ 
			{
				id: 100,
				img: '~/../img/football.jpg',
				name: 'футбола',
                cost: '1500'
			},
            {
				id: 101,
				img: '~/../img/basketball.jpg',
				name: 'баскетбола',
                cost: '2300'
			},
            {
				id: 102,
				img: '~/../img/volleyball.jpg',
				name: 'волейбола',
                cost: '1800'
			},
            {
				id: 103,
				img: '~/../img/amer_football.jpg',
				name: 'американского футбола',
                cost: '2500'
			},
            {
				id: 104,
				img: '~/../img/hockey.jpg',
				name: 'хоккея с мячом',
                cost: '950'
			},
            {
				id: 105,
				img: '~/../img/ping-pong.jpg',
				name: 'пинг-понга',
                cost: '60'
			},
            {
				id: 106,
				img: '~/../img/tennis.jpg',
				name: 'тенниса',
                cost: '340'
			},
            {
				id: 107,
				img: '~/../img/water_polo.jpg',
				name: 'водного поло',
                cost: '870'
			}
        ]
	},
	getters: {
		allItems(state){
			return state.items;
		},
		_map(state){
			let map = {};

			state.items.forEach((product, i) => {
				map[product.id.toString()] = i;
			});

			return map;
		},
		item: (state, getters) => (id) => state.items[getters._map[id]]
		
	},
	mutations: {

	},
	actions: {
		
	}
}