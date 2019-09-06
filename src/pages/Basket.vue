<template>
   <div class="container">
     <div v-if="products!=0" class="row">
         <div class="col col-sm-12">
             <div class="row">
                  <div class="col col-sm-12">
                      <h1>Корзина</h1>
                           <hr>
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Название товара</th>
                                        <th>Цена</th>
                                        <th>Количество</th>
                                        <th>Действия</th>
                                    </tr>
                                </thead>	
                                <tbody>
                                    <tr v-for="product in products">
                                        <td>Мяч для {{ product.name }}</td>
                                        <td>{{ product.cost }} RUB</td>
                                        <td>
                                            <input type="text" 
                                                    :value="product.cnt" 
                                                    @change="onChangeCnt(product.id, $event)">
                                            шт.        
                                        </td>
                                        <td>
                                            <button type="button" 
                                               class="btn btn-danger"
                                               @click="removeFromBasket(product.id)">
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>	
                            </table>
                            <hr>
                  </div>
              </div>
              <div class="row">
                      <div class="col col-sm-6">
                          <strong>Итого: {{ total }} RUB</strong>
                      </div>
                      <div class="col col-sm-6">
                         <div class="d-flex justify-content-end">
                             <button type="button" 
                                     class="btn btn-primary"
                                     @click="clearBasket"
                             >
                             Очистить    корзину</button>
                         </div>
                      </div>
              </div>
         </div>
     </div>
     <div v-else class="row">
          <div class="col col-sm-12">
              <h1>Ваша корзина пуста</h1>
          </div>
      </div>      
      <div class="row">
          <div class="col col-sm-12">
             <router-link :to="{name: 'main'}">Вернуться в каталог товаров</router-link> 
          </div>
      </div>		
   </div>

</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    
    export default {
        data () {
            return {
            }
        },
        computed: {
			...mapGetters({
				total: 'basket/total',
				productsInBasket: 'basket/items',
				getProductDetailed: 'products/item'
			}),
			products(){      
				return this.productsInBasket.map((pr) => {
					     let productDetailed = this.getProductDetailed(pr.id);

                            return {
                                id: pr.id,
                                cnt: pr.cnt,
                                name: productDetailed.name,
                                cost: productDetailed.cost
                            };
				});
			}
		},
        methods: {
			...mapActions('basket', {
				removeFromBasket: 'remove',
				changeCnt: 'changeCnt',
                clearBasket: 'clear'
			}),
			onChangeCnt(id, e){
				let cntStr = e.target.value.trim();
				let cnt = parseInt(cntStr);

				this.changeCnt({
					id,
					cnt
				}).then((newCnt) => {
					if(cnt === newCnt && newCnt.toString() !== cntStr){
						this.$forceUpdate();
					}
				});
			}
		}    
    }
</script>

<style scoped>
    
</style>