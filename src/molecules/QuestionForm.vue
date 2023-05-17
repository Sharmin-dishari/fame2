<template>
  <div>
    <div>
      <q-form>
        <div class=" q-pa-lg">
          <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6"> <div class="text-weight-medium q-my-md">Quiz Title</div>
            <q-input label="Enter Quiz title"
              class="q-pt-xs"
              outlined
              rounded
              type="text"
              v-model="quiz_title"></q-input></div>
            <div class="col-xs-12 col-sm-6 col-md-6"> <div class="text-weight-medium q-mt-lg q-my-md ">Description</div>
              <q-select rounded outlined v-model="model" :options="options" label="Rounded outlined" /></div>
          </div>
          <div class=""
            :class="$q.screen.gt.xs && 'q-pl-xl q-pt-md'">
            <div class="text-weight-medium q-mb-md">
              Quiz Image
            </div>
            <div :class="$q.screen.lt.sm ? 'dashed2' : 'dashed'
              "
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
                  :src="url"
                  cover
                  :aspect-ratio="1" />
                <div class="text-weight-medium">Upload Image</div>
                <div class="text-caption text-center">
                  Or Drag & Drop Image file here
                </div>
              </label>
            </div>
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quiz_title: "",
      selectedSize: null,
      quiz_description: "",
      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      url: "/gallary.png",
      quiz_type: "option1",
    };
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      this.url = URL.createObjectURL(files[0]);
    },
  },
};
</script>

<style>
.form-bg {
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
}

.dashed2 {
  padding: 3vh 0;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234F92E3FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
}

.dashed {
  padding: 12vh 0;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%234F92E3FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
}
</style>
