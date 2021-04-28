<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col-4" v-for="card in cards" :key="card.id">
					<app-product :cardId="card.id"></app-product>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import AppProduct from './Product';
	import { mapGetters } from 'vuex';

	export default {
		components: {
			AppProduct
		},
		computed: {
			...mapGetters(["cards"])
		}
	}
</script>