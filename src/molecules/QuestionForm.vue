<template>
  <div class="form-bg" :class="$q.screen.gt.md && 'q-ml-md'">
    <q-form>
      <div class="q-pa-lg">
        <div class="row">
          <div class="col-xs-12 col-sm-9 col-md-9">
            <div class="text-bold text-h6 q-my-md">Quiz Title</div>
            <q-input
              label="Enter Quiz title"
              class="q-pt-xs"
              outlined
              rounded
              type="text"
              v-model="quiz_title"
            ></q-input>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-3 q-pl-sm">
            <div class="text-bold text-h6 q-my-md">Select Time</div>
            <q-select
              rounded
              outlined
              v-model="model"
              :options="options"
              label="Select Time"
            />
          </div>
        </div>
        <div :class="$q.screen.gt.xs && 'q-pt-md'">
          <div class="q-my-md text-bold text-h6">Quiz Image</div>
          <div
            :class="
              $q.screen.lt.sm ? 'dashed2 dashedBorder' : 'dashed dashedBorder'
            "
            v-if="!url"
            align="center"
            @dragover="handleDragOver"
            @drop="handleDrop"
          >
            <label for="file-btn" class="upload" style="cursor: pointer">
              <input
                type="file"
                id="file-btn"
                ref="fileUrl"
                @change="handleFileUpload"
                hidden
              />
              <img
                class="image"
                width="100"
                spinner-color="white"
                src="/gallary.png"
                cover
                :ratio="4 / 3"
              />
              <div class="text-weight-medium">Upload Image</div>
              <div class="text-caption text-center">
                Or Drag & Drop Image file here
              </div>
            </label>
          </div>
          <div v-else>
            <div>
              <q-item v-if="$q.screen.gt.sm" class="bg-grey-11" style="border-radius: 20px;">
                <q-item-section avatar>
                  <q-item-label>
                    <div class="container">
                      <img
                        class="q-py-md q-px-sm"
                        width="300"
                        spinner-color="white"
                        :src="url"
                      />
                    </div>
                  </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6">{{
                    fileName.substring(0, 20)
                  }}</q-item-label>
                  <q-item-label>{{ fileSize }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-white q-gutter-y-md">
                    <div>
                      <!-- <label for="file-btn"
                class="upload"
                style="cursor: pointer">
                <input type="file"
                  id="file-btn"
                  ref="fileUrl"
                  @change="handleFileUpload"
                  hidden /> -->
                      <!-- <q-file v-model="model" borderless>

                 <q-btn label="Change Image "
                          class="add-button text-white"
                          style="margin-left: -170px"
                          icon="crop_original" />
                          </q-file> -->
                      <!-- </label> -->
                      <label
                        for="file-btn"
                        class="upload"
                        style="cursor: pointer"
                      >
                        <input
                          type="file"
                          id="file-btn"
                          ref="fileUrl"
                          @change="handleFileUpload"
                          hidden
                        />
                        <div class="add-button row" style="border-radius: 27px">
                          <div>
                            <q-icon
                              name="crop_original"
                              style="padding: 14px 10px 14px 14px"
                              size="24px"
                            ></q-icon>
                          </div>
                          <div style="padding-top: 18px" class="text-bold">
                            CHANGE IMAGE
                          </div>
                        </div>
                      </label>
                    </div>
                    <div>
                      <q-btn
                        label="Crop Image"
                        icon="crop"
                        rounded
                        class="q-pr-md q-py-sm cropBtn button-padding"
                      />
                    </div>
                    <div>
                      <q-btn
                        label="Remove Image"
                        icon="delete_forever"
                        @click="url = null"
                        rounded
                        class="cancelBtn q-py-sm"
                      />
                    </div>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item-label v-if="!$q.screen.gt.sm" align="center">
                <q-img
                  spinner-color="white"
                  :ratio="1"
                  class="q-my-md"
                  style="
                    position: relative;
                    max-width: 300px;
                    object-fit: contain;
                    border-radius: 20px;
                  "
                  :src="url"
                >
                  <div class="bottom-left">
                    <q-item-label class="text-h6 q-pl-xs">{{
                      fileName.substring(0, 10)
                    }}</q-item-label>
                    <q-item-label class="">{{ fileSize }}</q-item-label>
                  </div>
                  <div class="bottom-right q-pb-md row">
                    <label
                      for="file-btn"
                      class="upload"
                      style="cursor: pointer"
                    >
                      <input
                        type="file"
                        id="file-btn"
                        ref="fileUrl"
                        @change="handleFileUpload"
                        hidden
                      />
                      <div>
                        <q-icon
                          class="add-button q-pa-sm rounded"
                          style="border-radius: 50%"
                          name="crop_original"
                          size="28px"
                        ></q-icon>
                      </div>
                    </label>
                    <!-- <q-btn class="add-button"
                      icon="crop_original"
                      round /> -->
                    <q-btn class="cropBtn" icon="crop" round />
                    <q-btn
                      class="cancelBtn"
                      icon="delete_forever"
                      @click="url = null"
                      round
                    />
                  </div>
                </q-img>
              </q-item-label>
            </div>
          </div>
        </div>
      </div>
    </q-form>
    <div class="q-pl-lg text-bold text-h6">Add Options</div>
    <question-option class="q-mx-md" />
  </div>
</template>

<script>
import QuestionOption from "./QuestionOption.vue";
export default {
  components: { QuestionOption },
  data() {
    return {
      quiz_title: "",
      selectedSize: null,
      quiz_description: "",
      address: "",
      model: "",
      fileSize: null,
      fileName: null,
      options: ["1pm", "2pm", "3pm", "4pm", "5pm"],
      url: null,
      quiz_type: "option1",
    };
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      this.fileName = event.target.files[0].name;
      this.fileSize = `${(event.target.files[0].size / 1024).toFixed(2)}MB`;
    },
    handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      this.url = URL.createObjectURL(files[0]);
      this.fileName = event.target.files[0].name;
      this.fileSize = `${(event.target.files[0].size / 1024).toFixed(2)}MB`;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  margin: auto;
}

.bottom-right {
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: white;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
}

.cropBtn {
  background-color: #6c6f85;
}

.button-padding {
  padding-right: 20px;
}

.cancelBtn {
  background-color: #a1a1a1;
}

.bottom-left {
  position: absolute;
  bottom: 0px;
  left: 0px;
  color: white;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
}

.form-bg {
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
}

.dashed2 {
  padding: 3vh 0;
  border-radius: 20px;
}

.dashed {
  padding: 10vh 0;
  border-radius: 20px;
}

.dashedBorder {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234F92E3FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
}

@media screen and (1000px > width < 1450px) {
  .imageNew {
    height: 10vh;
    width: 12vh;
    border-radius: 10px;
  }
}
</style>
