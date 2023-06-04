<template>
  <div class="text-center">
    <div
      style="margin: 0 auto"
      :class="$q.screen.lt.sm ? 'mobile-card ' : 'desktop-card'"
    >
      <div class="text-h6 text-weight-bold text-center text-grey-9 q-pb-md">
        You're all set. Ready?
      </div>
      <div align="center">
        <q-card
          class="bg-white btnRound"
          flat
          :class="$q.screen.lt.sm ? 'q-pa-md' : 'q-px-lg q-py-md'"
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
          <div class="bg-white q-mt-lg">
            <q-btn
              label="Let me in"
              @click="$emit('handle-next')"
              :class="$q.screen.gt.sm ? 'button-width' : 'full-width'"
              class="btnRound hover-btn q-mb-lg"
              unelevated
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
  max-width: 75vh;
}
.mobile-card {
  max-width: 45vh;
}
.hover-btn:hover {
  background: #1976d2;
  color: white;
}
</style>
