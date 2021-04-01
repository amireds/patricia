<template>
    <div class="wrapper font-graphic">
      <div class="card">
          <div class="flex justify-between items-center">
              <div class="logo">
                  <img src="../assets/patricia logo.svg" alt="" class="w-28">
              </div>
              <Eye @hide-card = "hideCard" />
          </div>
          <div v-if="isActive" class="flex text-white text-xl font-light items-center justify-between">
              <div>9784</div>
              <div>9784</div>
              <div>9784</div>
              <div>9784</div>
          </div>
          <div v-else class="flex text-white text-xl font-light items-center justify-between">
                <div class="-mt-2">
                  <i class="fa fa-circle text-tiny mr-1"></i>
                  <i class="fa fa-circle text-tiny mr-1"></i>
                  <i class="fa fa-circle text-tiny mr-1"></i>
                  <i class="fa text-tiny fa-circle"></i>
                </div>
                <div class="-mt-2">
                    <i class="fa fa-circle text-tiny mr-1"></i>
                    <i class="fa fa-circle text-tiny mr-1"></i>
                    <i class="fa fa-circle text-tiny mr-1"></i>
                    <i class="fa text-tiny fa-circle"></i>
                </div>
                <div class="-mt-2">
                    <i class="fa fa-circle text-tiny mr-1"></i>
                    <i class="fa fa-circle text-tiny mr-1"></i>
                    <i class="fa fa-circle text-tiny mr-1"></i>
                    <i class="fa text-tiny fa-circle"></i>
                </div>
                <div>9784</div>
          </div>
          <div class="flex font-extralight text-sm items-center justify-between text-gray-200">
              <div>Cardholder Name</div>
              <div class="flex items-center">
                  <div class="text-tiny leading-tight mr-2"><p>VALID</p><p>THRU</p></div>
                  <div>10/12</div>
              </div>
              <div class="flex items-center">
                  <div class="mr-2">cvv</div>
                  <div>
                      <i class="fa fa-circle text-tiny mr-1"></i>
                      <i class="fa fa-circle text-tiny mr-1"></i>
                      <i class="fa fa-circle text-tiny"></i>
                    </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import Eye from './Eye'
export default {
    name: 'App',
    components:{
        Eye
    },
    data() {
        return {
            isActive: false
        }
    },
    methods:{
        hideCard(){
            this.isActive = !this.isActive;
        }

    }
}
</script>

<style scoped>
.wrapper{
    @apply flex justify-center items-center h-screen text-center text-white bg-gray-100 px-3;
}
.card{
    background: url(../assets/patricia-icon.png);
    @apply rounded-3xl bg-gray-900 px-10 py-6 shadow-md w-98 h-75 bg-contain bg-no-repeat flex flex-col justify-between;
}
</style>