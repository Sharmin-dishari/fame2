<template>
  <q-page class="bg-color">
    <div class="row">
      <div class="svg-container"><img src="login.svg"  /></div>
      <div>
        <q-form @submit="handleLogin" class="margin: 0 !important">
        <q-card-section>
        <div class="text-h5">Wecome Back</div>
        <div>Enter your credentials to sign in.</div>
        </q-card-section>
          <q-card-section>
            <q-input
              v-model.trim="loginId"
              label="Login ID"
              type="text"
              autofocus
              clearable
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-input
              v-model.trim="password"
              class="q-pt-sm"
              label="Password"
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

          <q-card-actions align="right" class="q-px-md">
            <q-btn
              label="Sign In"
              no-caps
              unelevated
              color="pink"
              style="font-size: 20px"
              class="q-px-md full-width text-weight-bolder"
              type="submit"
            />
          </q-card-actions>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "LoginIndex",

  data() {
    return {
      loginId: "",
      password: "",
      isPwd: true,
      loading: false,
    };
  },
  methods: {
  handleLogin (){
  }
  }
};
</script>

<style>
.svg-container {
 width: 300px;
 height: 500px;

}

img {
 max-width: 100%
}
</style>
