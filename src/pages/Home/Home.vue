<template>
    <div>
        <Heading>
            <HomeLog />
            <HomeNavSwitch @clickswitch="show = $event" :isShow="show">
                <div v-show="show" class="scrollWidth">
                    <scrollNavX
                        @router-path="routerpath"
                        :showIndex="showIndex"
                    />
                </div>
                <HomeAvtivNav
                    @activ-nav-index="activnavindex"
                    v-show="!show"
                    :showIndex="showIndex"
                />
            </HomeNavSwitch>
        </Heading>
        <homeBody />
    </div>
</template>
<script>
import Heading from "../../components/Heading/Heading";
import homeBody from "./Home/homeBody";
import HomeLog from "./HomeLog/HomeLog";
import scrollNavX from "../../components/Heading/scrollNavX";
import HomeAvtivNav from "./HomeActivNav/HomeActivNav";
import HomeNavSwitch from "./HomeNavSwitch/HomeNavSwitch";

export default {
    name: "home",
    components: {
        Heading,
        homeBody,
        HomeLog,
        scrollNavX,
        HomeAvtivNav,
        HomeNavSwitch,
    },
    data() {
        return {
            show: true,
            showIndex: 0,
        };
    },
    methods: {
        routerpath(index) {
            this.showIndex = index;
        },
        activnavindex(index) {
            this.show = !this.show;
            this.showIndex = index;
        },
    },
};
</script>
<style lang="stylus" scoped>
.scrollWidth
    width 650px
    height 100%
</style>