<template>
  <div class="container">
      <div class="row">
        <div class="col col-sm-12">
            <h1 class="page_name">Каталог товаров</h1>
        </div>
   </div> 
   <div class="row">
      <div v-for="(product, i) in products" class="col col-3">
          <ProductBox :poster="product.img" :productName="product.name" :cost="product.cost"
          @handleClick="addToBasket(product.id)"
          />
      </div>
   </div> 
  </div>            
</template>

<script>
    import ProductBox from '~/components/ProductBox';
    import {mapGetters, mapActions} from 'vuex';
        
    export default {
        data () {
            return {
                
            }
        },
        components: {
            ProductBox
        },
        computed: {
            ...mapGetters({
                products: 'products/allItems'
            })
        },
       methods: {
			...mapActions({
				addToBasket: 'basket/add'
			})
		}
    }
</script>

<style scoped>
    .page_name {
        padding-bottom: 1rem;
    }
</style>