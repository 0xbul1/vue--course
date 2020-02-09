<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <button @click="handleClick('back')">backbackback</button>
    <button @click="handleClick('push')">pushpushpush</button>
    <button @click="handleClick('replace')">replacereplacereplace</button>
    <button @click="handleClick('query')">queryqueryquery</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    handleClick(type) {
      if (type === 'back') this.$router.back();
      if (type === 'push') this.$router.push('/parent');
      if (type === 'replace') this.$router.replace('/parent');
      if (type === 'query') {
        const name = 'zzz';
        this.$router.push({
          // name: 'parent',
          // query: {
          //   name: 'zzz',
          // },

          // name: 'argu',
          // params: {
          //   name: 'zzz',
          // },
          path: `/argu/${name}`,
        });
      }
    },
  },
};
</script>
