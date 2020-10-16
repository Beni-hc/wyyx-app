<template>
    <div style="">
        <Heading />
        <homeBody />
    </div>
</template>
<script>
import Heading from '../../components/Heading/Heading'
import homeBody from './Home/homeBody'


export default {
    name: 'home',
    components:{
        Heading,
        homeBody
    }
}
</script>
<style lang="stylus">

</style>