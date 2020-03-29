<template>
    <div>
        <div class="lds-ripple" v-if="loading">
            <div></div>
            <div></div>
        </div>
        <div class="md-layout md-alignment-center">
            <md-list>
                <md-list-item v-for="(user, index) in users" :key="user.id.value"
                              :class="{'md-autocomplete-box-content' : index!== 0 }">
                    <md-avatar>
                        <router-link :to="{name: 'user', params: {id: user.id.value, user}}">
                            <img :src="user.picture.thumbnail"
                                 :alt="user.name.first + ' ' + user.name.last + ' avatar'">
                        </router-link>
                    </md-avatar>


                    <div class="md-list-item-text">
                        <span class="md-title">{{index + 1}}. {{user.name.first}} {{user.name.last}}</span>
                        <div class="md-caption">ID: {{user.id.value}}</div>
                    </div>
                    <router-link :to="{name: 'user', params: {id: user.id.value, user}}">
                        View profile
                    </router-link>
                </md-list-item>
            </md-list>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'MainContent',
		data() {
			return {}
		},
		computed: {
			loading() {
				return this.$store.state.loader
			},
			users() {
				return this.$store.getters.usersFiltered
			}
		}
	}
</script>

<style scoped>
    .md-list {
        width: 500px;
        max-width: 100%;
        display: inline-block;
        vertical-align: top;
        border: 1px solid rgba(#000, .12);
        color: #cccccc;
    }

    .md-list-item {
        padding: 13px 0;
    }

    .md-list-item:last-child {
        padding-bottom: 0;
    }

    .md-list-item:first-child {
        padding-top: 0;
    }

    .md-title {
        white-space: normal;
    }

    .md-list-item-content > .md-avatar:first-child {
        align-self: flex-start;
    }

    .md-list-item-content .md-caption {
        margin: 5px 0 10px;
    }
</style>
