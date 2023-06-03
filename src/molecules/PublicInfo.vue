<template>
    <div> 
    <div style="margin: 0 auto" :class="$q.screen.lt.sm ? 'mobile-card ' : 'desktop-card'
      ">
      <div class="text-h5 text-center text-weight-medium q-pb-md">
        Tell us more about you.
      </div>
      <div class="">
        <q-card
          class="bg-white btnRound "
          flat
          :class="$q.screen.lt.sm ? 'q-pa-lg' : 'q-pa-xl'
            "
        >
          <q-form>
            <q-input
              outlined
              class="input-field q-mt-md"
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
              class="q-mb-sm input-field q-pb-md"
            />
            <q-input
              v-model.trim="password"
              class="q-pb-lg"
              outlined
              label="Password"
              bg-color="white"
              placeholder="Enter your password"
              :type="isPwd ? 'password' : 'text'"
              :rules="[
                (val) => !!val || 'Field is required',
                (val) => val.length >= 6 || 'Minimum length 6',
              ]"
            />
            <q-input
              v-model="confirmPass"
              outlined
              label="CONFIRM PASSWORD"
              placeholder="Confirm Password"
              type="password"
              :rules="[(val) => val === password || 'Password doesn\'t match']"
            />
          </q-form>
        </q-card>
        <div class="q-mt-lg" align="right">
          <q-card class="bg-color" flat>
            <q-btn
              label="Back"
              color="white"
              unelevated
              @click="$emit('handle-previous')"
              class="text-black q-px-md q-py-xs btnRound q-mr-md"
            />
            <q-btn
              label="Next"
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
      confirmPass: "",
      password: "",
      isPwd: false,
    };
  },
};
</script>

<style scoped>
.stepper-top {
  padding-top: 15px;
}
.desktop-card {
  max-width: 75vh;
}
.mobile-card {
  max-width: 60vh;
}
.desktop-button {
  float: right;
}
</style>
