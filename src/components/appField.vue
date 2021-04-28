<template>
  <li class="list-group-item">
    <label class="d-flex align-items-center">
      <h5 class="mr-2">{{title}}</h5>
      <div class="label-inner" v-if="wasActive">
        <transition
          name="rotate"
          appear
          appear-class="fade-appear"
          appear-to-class="fade-appear-to"
          appear-active-class="fade-appear-active"
          mode="out-in">
          <v-icon v-if="valid" name="check-circle" class="text-success" key="1"></v-icon>
          <v-icon v-else name="exclamation-circle" class="text-danger" key="2"></v-icon>
        </transition>
      </div>
    </label>    
    <input type="text" class="form-control" :value="value" @input="setValue">
    <slot>
      
    </slot>
  </li>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  import 'vue-awesome/icons/exclamation-circle'
  import 'vue-awesome/icons/check-circle'

  export default {
    name: 'appField',
    data(){
      return {
        wasActive: false
      }
    },
    components: {
      'v-icon': Icon
    },
    props: {
      title: String,
      value: String,
      valid: Boolean
    },
    computed: {
    },
    methods: {
      setValue(e){
        this.wasActive = true;
        this.$emit('my-input', e.target) // e.target = $event
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  .fade-appear
    transform: scale(0)
  .fade-appear-active
    transition: transform .3s
  .fade-appear-to
    transform: scale(1)

  .rotate-enter
    transform: rotateY(90deg)
  .rotate-enter-active
    transition: transform .3s
  .rotate-enter-to
    transform: rotateY(0deg)

  .rotate-leave
    transform: rotateY(0deg)
  .rotate-leave-active
    transition: transform .3s
  .rotate-leave-to
    transform: rotateY(90deg)
</style>
