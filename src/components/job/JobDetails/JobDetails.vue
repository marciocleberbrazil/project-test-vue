<template>
  <ul class="job-details">
    <JobDetailsItem
      icon="fa-calendar-days"
      title="Shift Dates"
    >
      <p
        :key="`shift_${index}`"
        v-for="(shift, index) in getShits"
      >
      {{ shift }}
    </p>
    </JobDetailsItem>
    
    <JobDetailsItem
      icon="fa-location-dot"
      title="Location"
      navigateTo="go to somewhere"
    >
      <p>{{ getLocation.address }}</p>
      <small>{{ getLocation.distance }}</small>
    </JobDetailsItem>
    
    <JobDetailsItem
      icon="fa-screwdriver-wrench"
      title="Requirements"
    >
      <ul>
        <li
          :key="`requirement_${index}`"
          v-for="(requirement, index) of getRequirements"
        >
          {{ requirement }}
        </li>
      </ul>
    </JobDetailsItem>
    
    <JobDetailsItem
      icon="fa-circle-user"
      title="Report To"
    >
      <p>{{ getReportTo }}</p>
    </JobDetailsItem>
  </ul>
</template>

<script>
  import { convertDateFromUtcToZonedTime, formatUSAPhoneNumber, getFormattedDate } from '../../../services/utils-service';
import JobDetailsItem from './JobDetailsItem.vue';
  
  export default {
    name: 'JobDetailsComponent',
    inject: ['job'],
    components: {
      JobDetailsItem,
    },
    computed: {
      getShits () {
        return this.job?.shifts?.map((shift) => {
          const startDate = convertDateFromUtcToZonedTime(shift.startDate, this.job?.company.address.zoneId);
          const endDate = convertDateFromUtcToZonedTime(shift.endDate, this.job?.company.address.zoneId);
          
          return getFormattedDate(startDate, endDate);
        })?.splice(0, 2);
      },
      
      getLocation () {
        return {
          address: this.job?.company.address.formattedAddress,
          distance: `${this.job?.milesToTravel.toFixed(2)} miles from your job search location`,
        }
      },
      
      getRequirements () {
        return this.job?.requirements;
      },
      
      getReportTo () {
        return `${this.job?.company.reportTo.name} ${formatUSAPhoneNumber(this.job?.branchPhoneNumber)}`;
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/core/spacing';
  @import '../../../styles/core/colors';
  
  .job-details {
    flex: 1;
    li {
      display: flex;
      gap: $space;
      justify-content: flex-start;
      align-items: center;
      padding: $space-sm 0;
      margin: 0 $space;
      border-bottom: 1px solid $gray;
      
      &:last-child {
        border: none;
      }
    }
  }
</style>