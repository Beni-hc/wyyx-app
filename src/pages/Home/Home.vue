<template>
    <div>
        <homeHead />
        <homeBody />
    </div>
</template>
<script>
import homeHead from './Home/homeHead'
import homeBody from './Home/homeBody'


export default {
    name: 'home',
    components:{
        homeHead,
        homeBody
    }
}
</script>
<style lang="stylus">

</style>