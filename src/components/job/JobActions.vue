<template>
  <div class="job-actions">
    <button
      class="reject"
      @click="$emit('reject')"
    >
      No Thanks
    </button>
    
    <button
      class="confirm"
      @click="$emit('accept')"
    >
      I'll Take it
    </button>
  </div>
</template>

<script>
  export default {
    name: 'JobActionsComponent',
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/core/spacing';
  
  .job-actions {
    display: flex;
    gap: $space-xxs;
    padding: $space-sm $space;
    
    button {
      flex: 1;
    }
  }
</style>