<template>
    <div>
        <div class="md-toolbar md-layout md-gutter">
            <div class="md-layout-item">
                <router-link :to="{name: 'MainContent'}" :class="'md-title'">to Main content</router-link>
            </div>
        </div>
        <div class="md-layout md-alignment-center" v-if="user">
            <md-card class="md-primary">
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title">{{user.name.first}} {{user.name.last}}</div>
                        <div class="md-subhead">ID: {{user.id.value}}</div>
                    </md-card-header-text>
                    <md-card-media class="md-big">
                        <img :src="user.picture.large" :alt="user.name.first + ' ' + user.name.last + ' avatar'">
                    </md-card-media>
                </md-card-header>
                <md-card-expand>
                    <md-card-actions md-alignment="right">
                        <md-card-expand-trigger>
                            <md-button>Learn more</md-button>
                        </md-card-expand-trigger>
                    </md-card-actions>

                    <md-card-expand-content>
                        <md-card-content>
                            <md-list class="md-layout md-gutter" md-theme="primary">
                                <md-list-item>
                                    <span class="md-list-item-text">Адрес: </span>
                                    <span class="md-list-item-text">
                                        {{user.location.street.name}}, {{user.location.street.number}} <br>
                                        {{user.location.postcode}}, {{user.location.city}} <br>
                                        {{user.location.country}}
                                    </span>
                                </md-list-item>
                                <md-list-item>
                                    <span class="md-list-item-text">Емейл: </span>
                                    <span class="md-list-item-text">{{user.email}}</span>
                                </md-list-item>
                                <md-list-item>
                                    <span class="md-list-item-text">Пол: </span>
                                    <span class="md-list-item-text">{{user.gender}}</span>
                                </md-list-item>
                                <md-list-item>
                                    <span class="md-list-item-text">Дату рождения: </span>
                                    <span class="md-list-item-text">{{new Date(user.dob.date).toDateString()}}</span>
                                </md-list-item>
                                <md-list-item>
                                    <span class="md-list-item-text">Возраст: </span>
                                    <span class="md-list-item-text">{{user.dob.age}}</span>
                                </md-list-item>
                                <md-list-item>
                                    <span class="md-list-item-text">Телефон: </span>
                                    <span class="md-list-item-text">{{user.phone}}</span>
                                </md-list-item>
                            </md-list>
                        </md-card-content>
                    </md-card-expand-content>
                </md-card-expand>
            </md-card>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'UserView',
		data() {
			return {
				user: this.$route.params.user
			}
		}
	}
</script>


<style scoped lang="scss">
    .md-card {
        max-width: 500px;
    }

    .md-list-item {
        .md-list-item-text {
            align-self: flex-start;
            flex: 0 0 auto;
        }
    }
</style>
