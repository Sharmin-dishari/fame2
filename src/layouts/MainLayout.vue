<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="nav-color">
        <div class="q-pa-sm q-gutter-xs">
          <q-btn flat
            round
            class="iconColor"
            size="15px"
            icon="favorite_border"
            v-if="$q.screen.gt.sm" />
          <q-btn flat
            round
            class="iconColor"
            size="15px"
            icon="chat_bubble_outline"
            v-if="$q.screen.gt.sm" />
          <q-btn flat
            round
            class="iconColor"
            size="15px"
            icon="mail_outline" />
          <q-btn dense
            round
            flat
            icon="notifications_none"
            class="iconColor"
            size="15px">
            <q-badge color="green"
              floating
              transparent
              rounded>

            </q-badge>
          </q-btn>

          <q-btn flat
            round
            class="iconColor"
            size="15px"
            icon="apps" />

        </div>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title>
          <!-- Quasar App -->
        </q-toolbar-title>

        <div class="row q-gutter-xs">
          <div v-if="$q.screen.gt.sm">
            <q-input standout="bg-grey text-white"
              rounded
              dense
              class="q-mt-sm"
              v-model="search"
              label="Search"><template v-slot:prepend>
                <q-icon name="search" />
              </template></q-input>
          </div>
          <q-btn v-else
            flat
            round
            class="iconColor"
            size="15px"
            icon="search" />
          <q-btn dense
            round
            flat
            icon="add_shopping_cart"
            class="iconColor"
            size="15px">
            <q-badge color="green"
              floating
              transparent
              rounded>

            </q-badge>
          </q-btn>

          <q-avatar size="42px"
            class="q-mt-sm">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>

        </div>
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
