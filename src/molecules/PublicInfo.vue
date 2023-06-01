<template>
  <div class="text-center">
    <div>
      <div class="text-h5 text-center text-weight-medium q-pb-md">
        Tell us more about you.
      </div>
      <div align="center">
        <q-card
          class="bg-white btnRound"
          flat
          :class="
            $q.screen.lt.sm ? 'mobile-card q-pa-lg' : 'desktop-card q-pa-xl'
          "
        >
          <q-form>
            <q-input
              outlined
              class="input-field"
              v-model="first_name"
              placeholder="Enter your first name"
              label="FIRST NAME"
            />
            <q-input
              outlined
              class="q-my-lg input-field"
              v-model="last_name"
              placeholder="Enter your last name"
              label="LAST NAME"
            />
            <q-input
              outlined
              v-model="email"
              placeholder="Enter your email"
              label="EMAIL"
              class="q-mb-sm input-field"
            />
          </q-form>
        </q-card>
        <div class="q-mt-lg" :class="$q.screen.gt.sm && 'desktop-button'">
          <q-card class="bg-color" flat>
            <q-btn
              label="Back"
              color="white"
              unelevated
              @click="$emit('handle-previous')"
              class="text-black q-px-md q-py-xs btnRound q-mr-md"
            />
            <q-btn
              label="Submit"
              color="white"
              @click="$emit('handle-next')"
              class="text-black q-px-md q-py-xs btnRound"
              unelevated
            />
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
    };
  },
};
</script>

<style>
.stepper-top {
  padding-top: 15px;
}
.desktop-card {
  max-width: 60vh;
}
.mobile-card {
  max-width: 45vh;
}
.desktop-button {
  padding-left: 40vh;
}
</style>
