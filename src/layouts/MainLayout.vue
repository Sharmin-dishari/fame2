<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="nav-color">
        <q-toolbar-title class="text-center">
          <!-- Quasar App -->
          <q-img src="friendkit-bold.svg" style="width:100px"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
  <q-page-container>
    <router-view />
  </q-page-container>
</q-layout></template>

<script>

export default {
  name: 'MainLayout',
  components: {
    // EssentialLink
  },
  data() {
    return {
      leftDrawerOpen: false,
      search: null
    }
  }
}
</script>
<style scoped>
.iconColor {
  color: #A1A1A1;
}</style>
