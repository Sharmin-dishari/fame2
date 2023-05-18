<template>
  <div class="form-bg"
    :class="$q.screen.lt.md ? 'q-ma-md' : 'q-ml-md'">
    <q-form>
      <div class="q-pa-lg">
        <div class="row">
          <div class="col-xs-12 col-sm-9 col-md-9">
            <div class="text-weight-medium q-my-md">Quiz Title</div>
            <q-input label="Enter Quiz title"
              class="q-pt-xs"
              outlined
              rounded
              type="text"
              v-model="quiz_title"></q-input>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-3 q-pl-sm">
            <div class="text-weight-medium q-my-md ">Select Time</div>
            <q-select rounded
              outlined
              v-model="model"
              :options="options"
              label="Select Time" />
          </div>
        </div>
        <div class=""
          :class="$q.screen.gt.xs && 'q-pt-md'">
          <div class="text-weight-medium q-my-md">
            Quiz Image
          </div>
          <div :class="$q.screen.lt.sm ? 'dashed2 dashedBorder' : 'dashed dashedBorder'
            "
            v-if="!url"
            align="center"
            @dragover="handleDragOver"
            @drop="handleDrop">
            <label for="file-btn"
              class="upload"
              style="cursor: pointer">
              <input type="file"
                id="file-btn"
                ref="fileUrl"
                @change="handleFileUpload"
                hidden />
              <img class="image"
                width="100"
                spinner-color="white"
                src="/gallary.png"
                cover
                :ratio="4/3" />
              <div class="text-weight-medium">Upload Image</div>
              <div class="text-caption text-center">
                Or Drag & Drop Image file here
              </div>
            </label>
          </div>
          <!-- image -->
          <div v-else

            class="bg-grey-11">
            <div>
              <q-item>
                <q-item-section avatar>
                  <q-item-label>
                  <div class="container" >
                    <img class="image q-py-sm"
                      width="300"
                      spinner-color="white"
                      :src="url"
                      :ratio="4/3">
                      <div class="bottom-left" v-if="!$q.screen.gt.sm">
                      <q-item-label class="text-h6 q-pl-md text-ellipsis">{{ fileName }}</q-item-label>
                      <q-item-label class="q-pl-md q-pb-md">{{ fileSize }}</q-item-label></div>
                      <div class="bottom-right q-pb-md" v-if="!$q.screen.gt.sm">
                      <q-btn  class="add-button" icon="crop_original" round/>
                      <q-btn class="cropBtn" icon="crop" round/>
                      <q-btn class="cancelBtn" icon="delete_forever" round/>
                      </div>
                      </div>
                  </q-item-label>
                </q-item-section>
                <q-item-section v-if="$q.screen.gt.sm">
                  <q-item-label class="text-h6">{{ fileName }}</q-item-label>
                  <q-item-label>{{ fileSize }}</q-item-label>
                </q-item-section>
                <q-item-section v-if="$q.screen.gt.sm">
                  <q-item-label class="text-white q-gutter-y-md">
                    <div>
                    <q-btn label="Change Image "
                    class="add-button"
                        icon="crop_original" /></div>
                    <div>
                      <q-btn label="Crop Image"
                        icon="crop"
                        class="q-pr-md cropBtn"
                         />
                    </div>
                    <div> 
                    <q-btn label="Remove Image"
                        icon="delete_forever"
                        @click="url= null" 
                        class="cancelBtn"/></div>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </div>
      </div>
    </q-form>
    <div class="q-pl-lg">Add Options</div>
    <question-option />
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
      model: null,
      fileSize: null,
      fileName: null,
      options: [
        '1pm', '2pm', '3pm', '4pm', '5pm'
      ],
      url: null,
      quiz_type: "option1",
    };
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      this.fileName = event.target.files[0].name;
      this.fileSize = `${(event.target.files[0].size / 1024)}Mb`
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
      this.fileSize = `${(event.target.files[0].size / 1024)}Mb`
    },
  },
};
</script>

<style>
.container {
  position: relative;
  margin: auto;
}
.bottom-right {
  position: absolute;
  bottom: 12px;
  right: 0px;
  color: white;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
border-radius: 15px;
}
.cropBtn{
background-color: #6C6F85;
}
.cancelBtn{
background-color: #A1A1A1;
}
.bottom-left {
  position: absolute;
  bottom: 12px;
  left: 0px;
  color: white;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
border-radius: 15px;
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
}</style>
