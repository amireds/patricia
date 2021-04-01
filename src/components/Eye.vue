<template>
    <div @click="toggleNo" class="bg-contain px-3 py-2 bg-no-repeat bg-center cursor-pointer" :style="{ backgroundImage: (isActive ? `url(${Image2})` : `url(${Image})`) }">
    </div>
</template>

<script>
import Image from '@/assets/eye.svg'
import Image2 from '@/assets/mask.svg'
export default {
    name: 'Eye',
    props: {
    },
    methods:{
        toggleNo(){
            this.isActive = !this.isActive;
            this.$emit('hide-card')
        }
    },
    data() {
        return {
           Image,
           Image2,
           isActive: true
        }
    },
}

</script>