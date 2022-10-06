<template>
  <div class="job">
    <JobHero/> 
    <JobSummary/>
    <JobDetails/>
    <JobActions
      @accept="$emit('accept')"
    />
  </div>
</template>

<script>
  import JobActions from './JobActions.vue';
import JobDetails from './JobDetails/JobDetails.vue';
import JobHero from './JobHero.vue';
import JobSummary from './JobSummary.vue';
  
  export default {
    name: 'JobComponent',
    components: {
      JobActions,
      JobHero,
      JobDetails,
      JobSummary,
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/core/colors';
.job {
  display: flex;
  flex-flow: column;
  flex: 1;
  background-color: $white;
}
</style>