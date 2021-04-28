<template>
    <div>
        <h2>Product title</h2>
        <div class="price">{{ cards[cardId].price }}</div>
        <hr>
        <div class="cnt-row">
            <button class="btn btn-warning" @click="localDecrease">-1</button>
            <input type="text" :value="cards[cardId].cnt" @change="onChange">
            <button class="btn btn-success" @click="localIncrease">+1</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        props: {
            cardId: {
                type: Number,
                require: true
            }
        },
        computed: mapGetters(['cards']),
        methods: {
            ...mapActions(['decrease', 'increase', 'setCnt']),
            onChange(e){
                this.$forceUpdate();

                this.setCnt({id: this.cardId, val: e.target.value});
            },
            localDecrease(){
                this.decrease(this.cardId);
            },
            localIncrease(){
                this.increase(this.cardId);
            }
        }
    }
</script>

<style scoped>
.cnt-row {
    display: flex;
    max-width: 100%;
    justify-content: space-between;
}
.cnt-row .btn {
    width: 48px;
    height: 38px;
    box-sizing: border-box;
}
.cnt-row input {
    display: block;
    width: 100%;
    max-width: calc(100% - 110px);
}
</style>