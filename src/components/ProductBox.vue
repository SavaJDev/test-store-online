<template>
    <div class="product d-flex flex-column align-items-center">
        <img :src="poster" alt="poster"/>
        <div class="name_product">
           <h5>Мяч для {{ productName }}</h5>
        </div>
        <h6>{{ cost }} RUB</h6>
        <button class="btn btn-danger"
                @click="handleClick"
        >
        В корзину
        </button>
    </div>
</template>

<script>
    export default {
        name: "ProductBox",
        props: {
            poster: String,
            productName: String,
            cost: String,
            hadnleClick: {
              type: Function,
              default: () => {}
             }
        },
        methods: {
            handleClick() {
               this.$emit("handleClick");
            }
        }
    }
</script>

<style>
    .product {
        border: .1rem solid blue; 
        padding: 1rem;
        margin-bottom: 1rem;
        height: 18rem;
    }
    
    img {
        width: 5.2rem;
        height: 5rem;
        margin-bottom: .5rem;
    }
    
    .product h5 {
        margin-bottom: 3rem;
    }
    
    .name_product {
        height: 6rem;
        text-align: center;
    }
    
    .product h6 {
        margin-bottom: .9rem;
    }
</style>