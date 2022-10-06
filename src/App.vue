<template>
  <div id="app">
    <Header/>
    <main>
      <Job/>
    </main>
  </div>
</template>

<script>
import { computed } from 'vue';
import Header from './components/Header.vue';
import Job from './components/job/Job.vue';
import { getWorkerMatches, getWorkerProfile } from './services/worker-service';

export default {
  name: 'App',
  provide () {
    return {
      job: computed(() => this.job),
      worker: computed(() => this.worker),
    };
  },
  components: {
    Header,
    Job,
  },
  data () {
    return {
      loading: false,
      workerId: '7f90df6e-b832-44e2-b624-3143d428001f',
      worker: null,
      job: null,
    };
  },
  methods: {
    async loadData() {
      try {
        this.loading = true;
        
        const result = await Promise.all([
          getWorkerProfile(this.workerId),
          getWorkerMatches(this.workerId)
        ]);
        
        this.worker = result[0];
        this.job = result[1][Math.random() < 0.5 ? 0 : 1];

      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  },
  async mounted () {
    await this.loadData();
  },
}
</script>

<style>
#app {
}
</style>
