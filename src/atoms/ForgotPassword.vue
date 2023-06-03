<template>
  <q-page class="bg-color">
    <div
      class="items-center justify-center q-pt-xl"
      :class="$q.screen.gt.sm && 'row'"
    >
      <div class="svg-container col-5" v-if="$q.screen.gt.sm">
        <img src="login.svg" />
      </div>
      <div :class="$q.screen.gt.md ? 'col-3 q-px-sm' : 'col-4'">
        <q-form @submit="handleLogin" class="q-px-md">
          <q-card-section :class="!$q.screen.gt.sm && 'text-center'">
            <div class="text-h4">Forgot Password</div>
            <!-- <div class="text-grey">Enter your email to sign in.</div> -->
          </q-card-section>
          <q-card-section>
            <q-input
              outlined
              v-model="loginId"
              class="q-pb-md"
              dense
              label="Email"
              clearable
              :rules="[
                (val) => !!val || 'Field is required',
                (val) => validateEmail(val) || 'Type a valid Email',
              ]"
              bg-color="white"
              placeholder="Enter your email address"
            />
          </q-card-section>
          <q-card-section class="q-pa-none q-py-xs"> </q-card-section>
          <q-card-actions align="right" class="q-mx-sm">
            <q-btn
              label="submit"
              unelevated
              color="primary"
              class="q-px-md q-py-xs full-width text-weight-bolder btnRound"
              type="submit"
            />
          </q-card-actions>
          <q-card-section class="text-center text-grey">
            <q-btn
              flat
              dense
              no-caps
              size="0.75rem"
              class="q-py-none hover-btn"
              to="/sign-up"
              label="Click here to login"
            />
          </q-card-section>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { validateEmail } from "src/utils";
export default {
  name: "LoginIndex",

  data() {
    return {
      loginId: "",
      password: "",
      remember_me: false,
      isPwd: true,
      loading: false,
    };
  },
  methods: {
    validateEmail,
    handleLogin() {},
  },
};
</script>

<style>
img {
  max-width: 80%;
}
.hover-btn:hover {
  color: #1976d2;
}
</style>
