<template>
    <header class="md-toolbar-row md-layout-item md-layout md-gutter">
        <md-button class="md-icon-button" @click="$emit('menuToggle')">
            <md-icon>menu</md-icon>
        </md-button>
        <h1 class="md-layout-item">{{$route.meta.title}} {{$route.params.id}}</h1>
        <div class="md-layout md-layout-item md-alignment-center" v-if="$route.name !== 'user'">
            <div class="md-layout-item">
                <md-field md-theme="primary" @md-clear="searchQuery('')" md-clearable>
                    <label>Initial Value</label>
                    <md-input v-model="searchValue" @keyup.enter="searchQuery()"></md-input>
                </md-field>
            </div>
            <md-button class="md-icon-button" @click="searchQuery()">
                <md-icon>search</md-icon>
            </md-button>
        </div>
    </header>
</template>
<script>
	export default {
		name: 'MainHeader',
		data() {
			return {
				searchValue: '',
			}
		},
		methods: {
			searchQuery(val = this.searchValue) {
				this.$store.state.searchValue = val
			}
		}
	}
</script>

<style scoped>
    .md-field.md-theme-primary input {
        color: inherit;
    }
</style>