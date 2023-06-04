<template>
  <div>
    <div
      style="margin: 0 auto"
      :class="$q.screen.lt.sm ? 'mobile-card ' : 'desktop-card'"
    >
      <div class="text-h6 text-weight-bold text-center text-grey-9 q-pb-md">
        Secure your account.
      </div>
      <div align="center">
        <q-card class="bg-white q-pa-xl btnRound q-mx-auto box q-pa-md" flat>
          <div class="logo_bg"></div>
          <q-card-section style="padding-bottom: 120px">
            <form class="q-px-md">
              <div class="form-container">
                <label class="upload form-style">
                  <q-avatar class="percent" size="150px">
                    <q-avatar size="130px" class="avatarSize">
                      <img :src="url ? url : 'avatar.png'" />
                    </q-avatar>
                  </q-avatar>
                </label>
              </div>
              <div class="uploader-position" for="actual-btn">
                <label for="actual-btn">
                  <q-avatar>
                    <q-icon
                      name="add"
                      size="sm"
                      rounded
                      class="q-pa-xs cursor-pointer hover-btn add-icon"
                    />
                    <input
                      type="file"
                      id="actual-btn"
                      ref="imageURL"
                      hidden
                      @change="handleFileUpload"
                    />
                  </q-avatar>
                </label>
              </div>
            </form>
          </q-card-section>
          <div>Only images with a size lower than 3MB are allowed.</div>
        </q-card>
        <div class="q-mt-lg" align="right">
          <div class="row justify-end">
            <q-btn
              label="Back"
              color="white"
              unelevated
              @click="$emit('handle-previous')"
              class="text-black q-px-md q-py-xs btnRound q-mr-md"
            />
            <div class="bg-white btnRound">
              <q-btn
                label="Submit"
                @click="$emit('handle-next')"
                class="q-px-md q-py-xs btnRound hover-btn"
                unelevated
              />
            </div>
          </div>
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
      url: null,
      file: "",
    };
  },
  methods: {
    async handleFileUpload(event) {
      console.log(event);
      this.file = event.target.files[0];
      this.url = URL.createObjectURL(this.file);
    },
  },
};
</script>

<style scoped>
.percent {
  border: 2px solid rgb(221, 220, 220);
  padding-right: 13px;
  padding-bottom: 20px;
}
.add-icon {
  border: 6px solid white;
  border-radius: 50%;
  background: rgb(210, 207, 207);
  color: white;
}
.avatarSize {
  margin-top: -4px;
  margin-left: -3px;
}
.form-container .form-style {
  width: 15vh;
  height: 15vh;
  margin: 0 auto;

  position: relative;
}
.uploader-position {
  margin-top: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
}
.saveBtn {
  border-radius: 20px;
  background-color: white;
  color: white;
}
.hover-btn::before {
  background: grey;
}
.hover-btn:hover {
  background: #1976d2;
  color: white;
}
</style>
