<template>
  <div>
     <div style="margin: 0 auto" :class="$q.screen.lt.sm ? 'mobile-card ' : 'desktop-card'
       ">
      <div class="text-h5 text-center text-weight-medium q-pb-md">
        Secure your account.
      </div>
      <div align="center">
        <q-card
          class="bg-white q-pa-xl btnRound q-mx-auto box"
          flat
          :class="
            $q.screen.lt.sm ? 'q-pa-lg' : 'q-pa-xl'
          "
        >
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
                      class="bg-grey-5 text-white q-pa-xs cursor-pointer btn-hover add-icon"
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
.add-icon{
border: 6px solid white; border-radius: 50%
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
.form-container .form-style:hover {
  outline: 2px solid rgba(223, 223, 223, 0.651);
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
}
</style>
