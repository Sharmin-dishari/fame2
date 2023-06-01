<template>
  <div class="text-center">
    <div>
      <div class="text-h5 text-center text-weight-medium q-pb-md">
        You're all set. Ready?
      </div>
      <div align="center">
        <q-card
          class="bg-white btnRound"
          flat
          :class="
            $q.screen.lt.sm ? 'mobile-card q-pa-md' : 'desktop-card q-pa-xl'
          "
        >
          <q-card-section class="text-center">
            <img
              src="mailbox.svg"
              style="
                display: block;
                width: 15vh;
                height: auto;
                margin: auto;
                top: 0;
              "
            />
          </q-card-section>
          <q-card-section class="q-pa-none">
            <div class="text-h6">
              Congratz, you successfully created your account.
            </div>
            <div class="caption q-mt-xs">
              We just sent you a confirmation email. PLease confirm your account
              within 24 hours.
            </div>
          </q-card-section>
          <div class="q-mt-lg">
            <q-btn
              label="Let me in"
              outline
              :class="$q.screen.gt.sm ? 'button-width' : 'full-width'"
              color="primary btnRound"
            />
          </div>
        </q-card>
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

<style scoped>
.caption {
  color: #a2a5b9;
  font-size: 1rem;
}
.button-width {
  padding: 3px 85px;
}
.desktop-card {
  max-width: 60vh;
}
.mobile-card {
  max-width: 45vh;
}
</style>
