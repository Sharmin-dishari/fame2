<template>
  <q-page class="bg-color">
    <div
      class="items-center justify-center q-pt-xl"
      :class="$q.screen.gt.sm && 'row'"
    >
      <div class="svg-container col-5" v-if="$q.screen.gt.sm">
        <img src="login.svg" />
      </div>
      <div :class="$q.screen.gt.md ? 'col-4 q-px-xl' : 'col-5'">
        <q-form @submit="handleLogin" class="q-px-md">
          <q-card-section :class="!$q.screen.gt.sm && 'text-center'">
            <div class="text-h4">Wecome Back</div>
            <div class="text-grey">Enter your credentials to sign in.</div>
          </q-card-section>
          <q-card-section>
            <q-input
              outlined
              v-model="loginId"
              class="q-pb-md"
              label="Email"
              bg-color="white"
              :rules="[(val) => !!val || 'Field is required']"
              placeholder="Enter your email address"
            />
            <q-input
              v-model.trim="password"
              class="q-pt-sm q-pb-md"
              outlined
              label="Password"
              bg-color="white"
              placeholder="Enter your password"
              :type="isPwd ? 'password' : 'text'"
              :rules="[
                (val) => !!val || 'Field is required',
                (val) => val.length >= 6 || 'Minimum length 6',
              ]"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="q-pa-none q-py-xs">
            <div class="row justify-between">
              <q-toggle
                size="6vh"
                v-model="remember_me"
                val="lg"
                class="text-body"
                color="positive"
                label="Remember Me?"
              />
              <div
                class="cursor-pointer hover-btn"
                :class="$q.screen.gt.md ? 'q-pt-lg ' : 'q-pt-sm'"
                @click="$router.push('/forgot-password')"
              >
                Forgot Password?
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right" class="q-mx-sm">
            <q-btn
              label="Login"
              no-caps
              unelevated
              color="primary"
              clearable
              :rules="[
                (val) => !!val || 'Field is required',
                (val) => validateEmail(val) || 'Type a valid Email',
              ]"
              class="q-px-md q-py-xs full-width text-weight-bolder btnRound"
              type="submit"
            />
          </q-card-actions>
          <q-card-section class="text-center hover-btn">
            Don't have an account?<span class="cursor-pointer q-ml-xs" @click="$router.push('/sign-up')">Sign Up</span>
            <!-- <q-btn
              flat
              dense
              no-caps
              size="0.75rem"
              class="q-py-none"
              to="/sign-up"
              label="Sign Up"
            /> -->
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

<style scoped>
img {
  max-width: 80%;
}
.hover-btn::before {
  color: grey;
}
.hover-btn:hover {
  color: #1976d2;
}
</style>
