<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="nav-color">
        <q-toolbar-title class="text-center q-pt-xs q-pb-sm">
          <!-- Quasar App -->
          <q-img src="friendkit-bold.svg" style="width: 65px" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {
    // EssentialLink
  },
  data() {
    return {
      leftDrawerOpen: false,
      search: null,
    };
  },
};
</script>
<style scoped>
.iconColor {
  color: #a1a1a1;
}
</style>
