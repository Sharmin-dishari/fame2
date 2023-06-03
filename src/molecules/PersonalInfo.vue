<template>
  <div>
    <div class="text-h5 text-center text-weight-medium q-pb-md">
      Welcome, select an account type.
    </div>
    <div
      class="row justify-center"
      v-if="$q.screen.width > 1024"
      :class="$q.screen.width > 1680 ? 'q-gutter-x-xl' : 'q-gutter-x-md'"
    >
      <q-card class="q-mt-xl q-px-lg card-size btnRound" flat>
        <q-card-section>
          <div class="type-image fixed_height">
           <div class="">
            <img class="type-illustration car-image" src="type-1.svg" alt="" />
              <img
                class="type-bg light-image bg-image"
                src="type-1-bg.svg"
                alt=""
              />
           </div>
            <div class="my-class text-center q-pt-md">
              <div class="text-h6 text-weight-medium">Company</div>
              <div class="caption q-pt-md">
                Create a company account to be able to <br> do some awesome things.
              </div>
              <q-btn
                label="continue"
                color="grey"
                outline
                @click="$emit('handle-next')"
                class="full-width q-my-lg btnRound"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="q-mt-xl card-size btnRound q-px-lg" flat>
        <div class="type-image">
        <div class="fixed_height">
          <img class="type-illustration" src="type-2.svg" alt="" />
          <img class="type-bg light-image" src="type-2-bg.svg" alt="" />
          </div>
        </div>
        <div class="text-center q-px-md">
          <div class="text-h6 text-weight-medium q-mt-sm">Public Person</div>
          <div class="caption q-pt-md">
            Create a public account to be able to do <br> some awesome things.
          </div>
        </div>
        <div class="my-class q-mx-md text-center">
          <q-btn
            label="continue"
            color="grey"
            outline
            @click="$emit('handle-next')"
            class="full-width  q-my-lg btnRound"
          />
        </div>
      </q-card>
      <q-card class="q-mt-xl q-px-md card-size btnRound q-px-lg" flat>
        <div class="type-image">
        <div class="fixed_height">
          <img class="type-illustration" src="type-3.svg" alt="" />
          <img class="type-bg light-image" src="type-3-bg.svg" alt="" />
          </div>
        </div>

        <div class="my-class  text-center">
          <div class="image3 text-h6 text-weight-medium">Personal</div>
          <div class="caption q-pt-md">
            Create a personal account to be able to <br> do some awesome things.
          </div>
          <q-btn
            label="continue"
            color="grey"
            outline
            @click="$emit('handle-next')"
            class="full-width  q-my-lg btnRound"
          />
        </div>
      </q-card>
    </div>
    <div v-else class="q-gutter-y-xl">
      <q-card flat @click="$emit('handle-next')">
        <div class="q-pa-lg q-py-xl">
          <div class="text-h6 text-weight-medium">Company</div>
          <div class="caption q-pt-md">
            Create a company account to be able to do some awesome things.
          </div>
        </div></q-card
      >
      <q-card flat @click="$emit('handle-next')">
        <div class="q-pa-lg q-py-xl">
          <div class="text-h6 text-weight-medium">Public Person</div>
          <div class="caption q-pt-md">
            Create a public account to be able to do some awesome things.
          </div>
        </div></q-card
      >
      <q-card flat @click="$emit('handle-next')">
        <div class="q-pa-lg q-py-xl">
          <div class="text-h6 text-weight-medium">Personal</div>
          <div class="caption q-pt-md">
            Create a personal account to be able to do some awesome things.
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.type-image {
  position: relative;

  .type-bg {
    margin: auto;
    max-width: 90%;
    margin-left: 30px;
    height: fit-content;
  }

  .type-illustration {
    position: absolute;
    top: -15%;
    left: 0;
    transform: scale(1);
  }
}
</style>
<style scoped>
.caption {
  color: #a2a5b9;
  font-size: 1rem;
}
.image3 {
  padding-top: 33px;
}
.car-image {
  width: 110%;
}

.fixed-height{
position: relative;
}

</style>
