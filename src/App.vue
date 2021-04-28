<template>
	<div>
		<app-header></app-header>
		<app-content></app-content>
		<div class="container mt-3">
			<button class="btn btn-success" type="button" @click="makeOrder">Make Order</button>
			{{ orderStatus }}
		</div>
	</div>
</template>

<script>
	import AppHeader from './components/Header';
	import AppContent from './components/Content';
	import { mapGetters, mapActions } from 'vuex';
	
	export default {
		components: {
			AppHeader,
			AppContent
		},
		computed: {
			...mapGetters({ orderStatus: 'status' })
		},
		methods: {
			...mapActions({ makeOrder: 'send' })
		}
	}
</script>