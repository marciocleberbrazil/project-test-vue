<template>
  <section class="header">
    <div class="content">
      <Logo/>
      <span>{{ getFullName }}</span> 
    </div>
  </section>
</template>

<script>
  import Logo from './shared/Logo.vue';
  
  export default {
    name: 'HeaderComponent',
    components: {
      Logo,
    },
    inject: ['worker'],
    computed: {
      getFullName () {
        return `${this.worker?.firstName} ${this.worker?.lastName}`
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../styles/core/colors';
  @import '../styles/core/spacing';
  
.header {
  background-color: $black;
  color: $white;
  
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $space-sm;
    
    svg {
      width: 120px;
      height: 30px;
    }
  }
}
</style>