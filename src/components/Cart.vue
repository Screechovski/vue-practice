<template>
	<div>
		<div>In Cart: {{ allCnt }}</div>
		<div>Total: {{ totalPrice }}</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: mapGetters(['allCnt', 'totalPrice'])
	}
</script>