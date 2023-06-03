<template>
  <div class="text-center">
    <div>
      <div class="text-h5 text-center text-weight-medium q-pb-md">
        Secure your account.
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
              v-model="password"
              placeholder="Choose your password"
              label="PASSWORD"
            />
            <q-input
              outlined
              class="q-my-lg input-field"
              v-model="repeat_password"
              placeholder="Enter your password"
              label="REPEAT PASSWORD"
            />
            <q-input
              outlined
              v-model="phone_number"
              placeholder="Enter your phone number"
              label="PHONE NUMBER"
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
              class="text-black q-px-md q-py-xs btnRound submit-button"
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
      password: "",
      repeat_password: "",
      phone_number: "",
    };
  },
};
</script>

<style>
.desktop-card {
  max-width: 75vh;
}
.mobile-card {
  max-width: 45vh;
}

</style>
