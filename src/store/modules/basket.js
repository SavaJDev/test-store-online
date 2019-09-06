let products = window.localStorage.getItem('products');

export default {
    
    
	namespaced: true,
	state: {
		products: products ? JSON.parse(products) : []
	},
	getters: {
		items: (state) => state.products,
		inCart: (state) => (id) => state.products.some((el) => el.id === id),
		item: (state) => (id) => state.products.find((el) => el.id === id),
		cnt(state){
			return state.products.length;
		},
		total(state, getters, rootState, rootGetters){
			return state.products.reduce((total, pr) => {
				let product = rootGetters['products/item'](pr.id);
				return total + product.cost * pr.cnt;
			}, 0);
		}
	},
	mutations: {
		add(state, id){
			state.products.unshift({
				id,
                cnt: 1
			});
		},
		remove(state, id){
			let index = state.products.findIndex((el) => el.id === id);
			state.products.splice(index, 1);
		},
        changeCnt(state, data){
			let index = state.products.findIndex((el) => el.id === data.id);
			let cnt = data.cnt;

			if(isNaN(cnt) || cnt < 1){
				cnt = 1;
			}

			state.products[index].cnt = cnt;
		},
        changeCntOne(state, id){
            let index = state.products.findIndex((el) => el.id === id);
            state.products[index].cnt = ++state.products[index].cnt;
        },
        clear(state){
            state.products.splice(0,state.products.length);
        },
        saveBasket(state){
            window.localStorage.setItem('products', JSON.stringify(state.products));
        }
	},
	actions: {
		add(store, id){
			return new Promise(function(resolve, reject){
				if(!store.getters.inCart(id)){
					store.commit('add', id);
                    store.commit('saveBasket');
					resolve();
				} else {
                    store.commit('changeCntOne', id);
                    store.commit('saveBasket');
					resolve();
                }
				
			});
		},
		remove(store, id){
			return new Promise(function(resolve, reject){
				if(store.getters.inCart(id)){
					store.commit('remove', id);
                    store.commit('saveBasket');
					resolve();
				}
				
			});
		},
        changeCnt(store, data){
			return new Promise(function(resolve, reject){
				if(store.getters.inCart(data.id)){
					store.commit('changeCnt', data);
                    store.commit('saveBasket');
					resolve(store.getters.item(data.id).cnt);
				}
			});
		},
        clear(store){
           return new Promise(function(resolve, reject){
				if((store.getters.cnt)>0){
					store.commit('clear');
                    store.commit('saveBasket');
					resolve();
				}
			}); 
        }
	}
}