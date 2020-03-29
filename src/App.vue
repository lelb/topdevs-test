<template>
    <div id="app">
        <!--<div class="md-layout md-centered">-->
            <!--<div class="md-layout-item">-->
                <!--<main-header :title="title"></main-header>-->
                <!--<router-view></router-view>-->
            <!--</div>-->
        <!--</div>-->

        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary">
                <main-header :title="title" @menuToggle="menuVisible = !menuVisible"></main-header>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

                <md-list>

                </md-list>
            </md-app-drawer>

            <md-app-content>
                <router-view></router-view>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
	import MainHeader from './components/MainHeader'

	export default {
		name: 'App',
		components: {MainHeader},
		created() {
			// this.$store.dispatch('initRealTimeListener')
			this.$store.dispatch('getUsers')
		},
		data() {
			return {
				menuVisible: false
            }
		},
		computed: {
			title() {
				return this.$route.meta.title
			}
		}
	}
</script>

<style lang="scss">
    #app {
        height: 100vh;
        .md-app {
            height: 100%;
        }
    }
    .md-toolbar {
        z-index: 10;
    }
    //spinner
    .lds-ripple {
        display: block;
        position: relative;
        width: 64px;
        height: 64px;
        margin: 10px auto;
    }

    .lds-ripple div {
        position: absolute;
        border: 4px solid #f00;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
        0% {
            top: 28px;
            left: 28px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: -1px;
            left: -1px;
            width: 58px;
            height: 58px;
            opacity: 0;
        }
    }
</style>
