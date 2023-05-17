<template>
<q-scroll-area :vertical-thumb-style="thumbStyle" 
      :style="calculatedHeight" class="scroll-border q-ma-xl">
    <q-list separator class="q-px-md q-pb-xl">
      <q-item v-for="(item, index) in itemList"
        class=" q-py-sm q-pa-none"
        rounded
        :key="index">
        <q-item-section avatar
          top>
          <q-item-label>
          
            <img :src="item.avatar"
              class="imageStyle" />
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold text-h6">Will Question Be Here?</q-item-label>
          <q-item-label class="caption">45 sec</q-item-label>
          <q-item-label><q-btn icon="delete_forever" round color="red" flat/></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-page-sticky position="bottom" class="full-width" :offset="[18, 18]">
            <q-btn rounded class="add-button text-white" style="padding: 6px 130px"  icon="add" label="add new question" />
          </q-page-sticky>
  </q-scroll-area>
</template>

<script>
export default {
   data: () => ({
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        height: '5px',
        width: '5px',
        opacity: 0.75
      },
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
  }),
    computed: {

    calculatedHeight () {
      return 'height: calc(100vh - 200px)'
    }
  }
}
</script>
<style>
.item-border {
  padding-bottom: 12px;
}

.scroll-border {
background-color: white;
  border: 1px solid silver; border-radius: 20px; 
}

.caption {
  color: #6c6f85;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 13.2rem;
  letter-spacing: 0px;
}

@media screen and (max-width: 600px) {
  .imageStyle {
    height: 10vh;
    width: 12vh;
    border-radius: 10px;
  }
}</style>