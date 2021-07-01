<template>
  <div id="app">
    <Header />
    <router-view path="$router.key" />
  </div>
</template>

<script>
import Header from '@/components/header/Header';

import './styles/globalStyles';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
