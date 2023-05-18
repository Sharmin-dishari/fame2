
<template>
<div>
  <div class="horizontal-scroll-container q-mt-md q-mb-sm q-py-md bg-white" style="position: relative;">
    <div class="item q-pa-xs"
      v-for="item in itemList"
      :key="item.id">
      <q-img :src="item.avatar"
        alt="Item Image"
        class="imageStyle">
        <q-btn icon="delete_forever"
          color="red-9"
          flat
          round
          style="position: absolute; opacity: 0.5rem; right:0;top:0" />
      </q-img>
    </div>
    </div>
    <div style="position: absolute; bottom:32px; right:10px;"> 
    <q-btn round
        class="add-button text-white"
        size="16px"
        icon="add" />
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
  }
}
</script>
<style>
.horizontal-scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.item {
  display: inline-block;
  /* Adjust the width as per your requirements */
  text-align: center;
}

.imageStyle {
  width: 150px;
  height: 74px;
  position: relative;
}</style>
