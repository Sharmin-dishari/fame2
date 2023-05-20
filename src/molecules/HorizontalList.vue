<template>
  <div>
    <div
      class="horizontal-scroll-container q-mt-md q-mb-sm q-pt-md q-pb-xl bg-white q-px-lg"
    >
      <div class="item q-pa-xs" v-for="item in itemList" :key="item.id">
        <q-img :src="item.avatar" alt="Item Image" class="imageStyle">
          <q-btn
            icon="delete_forever"
            class="bg-white text-red-9 q-ma-xs btnPosition"
            round
            
          />
        </q-img>
        <div class="text-bold text-h6">{{ item.title }}</div>
      </div>
    </div>
    <div class="addBtnPosition">
      <q-btn round class="add-button text-white text-bold" size="18px" icon="add" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [
        {
          active: true,
          avatar: "image1.png",
          title: "Jason Oner",
        },
        {
          active: true,
          avatar: "image2.png",
          title: "Mike Carlson",
        },
        {
          avatar: "image3.png",
          title: "Cindy Baker",
        },
        {
          avatar: "image4.png",
          title: "Ali Connors",
        },
        {
          active: true,
          avatar: "image2.png",
          title: "Mike Carlson",
        },
        {
          avatar: "image3.png",
          title: "Cindy Baker",
        },
        {
          avatar: "image4.png",
          title: "Ali Connors",
        },
        {
          active: true,
          avatar: "image2.png",
          title: "Mike Carlson",
        },
        {
          avatar: "image3.png",
          title: "Cindy Baker",
        },
        {
          avatar: "image4.png",
          title: "Ali Connors",
        },
        {
          active: true,
          avatar: "image2.png",
          title: "Mike Carlson",
        },
        {
          avatar: "image3.png",
          title: "Cindy Baker",
        },
        {
          avatar: "image4.png",
          title: "Ali Connors",
        },
        {
          active: true,
          avatar: "image2.png",
          title: "Mike Carlson",
        },
        {
          avatar: "image3.png",
          title: "Cindy Baker",
        },
        {
          avatar: "image4.png",
          title: "Ali Connors",
        },
      ],
    };
  },
};
</script>
<style scoped>
.horizontal-scroll-container {
  overflow-x: auto;
  position: relative;
  white-space: nowrap;
}

.item {
  display: inline-block;
  /* Adjust the width as per your requirements */
  text-align: center;
}

.imageStyle {
  width: 15vh;
  height: 9vh;
  position: relative;
}
.btnPosition{
position: absolute; opacity: 0.5rem; right: 0; top: 0
}
.addBtnPosition{
position: absolute; bottom: 9vh; right: 1vh
}
</style>
