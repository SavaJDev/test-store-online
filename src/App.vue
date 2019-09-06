<template>
   <div>
       <header>
           <div class="container">
               <div class="row">
                   <div class="col col-sm-12">
                      <div class="d-flex flex-row justify-content-center">
                           <h1 class="first_word">Ball</h1>
                           <img id="logo" src="./assets/logo.gif" alt="logo">
                           <h1 class="second_word">Shop</h1>
                      </div>
                   </div>  
               </div>
               <div class="row">
                   <div class="col col-sm-12">
                       <hr color="red" size="6">
                         <div class="d-flex justify-content-center">
                             <h6>ИНТЕРНЕТ-МАГАЗИН</h6>
                         </div>
                       <hr color="blue" size="12">
                   </div>
               </div>
           </div>
       </header>
       <main>
         <div class="container">
             <div class="row">
                <div class="col col-sm-4"></div>
                <div class="col col-sm-4"></div>
                <div class="col col-sm-2"></div>
                 <div class="col col-sm-2">
                       <router-link class="d-flex flex-row justify-content-center align-items-center"
                                  :to="{name: 'basket'}">
                             <img id="basket" src="./assets/basket.png" alt="basket">
                             <p>{{ basketCnt }} товар(ов)</p>
                       </router-link>
                     </div>
                 </div>
             
             <div class="row">
                 <div class="col col-sm-12">
                     <router-view></router-view>
                 </div>
             </div> 
         </div>    
       </main>
   </div>
</template>

<script>
    import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters({
				basketCnt: 'basket/cnt'
			})
		}
	}
</script>

<style>
    
    header {
        margin-top: 1rem;
    }
    
    #logo {
        width: 5rem;
        height: 3rem;
    }
    
    #basket {
        width: 3rem;
        height: 3rem;
        margin-right: .5rem;
    }
    
    .d-flex.justify-content-center.align-items-center p {
        margin-top: 1rem;
    }
    
    .first_word {
        font-size: 2.8rem;
        color: red;
        text-shadow: -.2rem .2rem .2rem blue;
    }
    
    .second_word {
        font-size: 2.8rem;
        color: blue;
        text-shadow: .2rem .2rem .2rem red;
    }

</style>
