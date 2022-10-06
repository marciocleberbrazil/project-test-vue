<template>
  <li>
    <div class="icon">
      <font-awesome-icon
        :icon="getIcon"
      />
    </div>
    
    <div class="details">
      <strong>{{ title }}</strong>
      <div class="content">
        <slot></slot>  
      </div>
    </div>
    
    <div
      v-if="navigateTo"
      class="icon"
    >
      <font-awesome-icon
        icon="fa-solid fa-chevron-right"
      />
    </div>
  </li>
</template>

<script>
  export default {
    name: 'JobDetailsItemComponent',
    props: {
      icon: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      navigateTo: {
        type: String,
      }
    },
    computed: {
      getIcon () {
        return `fa-solid ${this.icon}`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icon {
    flex: 0 0 25px;
    
    &:last-child {
      text-align: right;
    }
  }
      
  .details {
    flex: 1;
    
    strong {
      font-weight: bold;
    }
  }
</style>