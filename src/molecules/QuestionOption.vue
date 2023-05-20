<template>
  <div class="text-white q-pb-md">
    <div class="row">
      <div class="q-pa-sm col-6">
        <q-card class="q-mb-sm" flat style="background-color: #4F92E3;border-radius: 20px">
          <q-card-section class="q-pb-xs">
            <div class="text-h6">Your address</div>
          </q-card-section>

          <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
            <q-input
              v-model="address"
              autofocus
              label="Enter Option Here"
              label-color="white"
              input-class="text-white"
              class="text-white"
            />
          </q-card-section>
          <q-card-section v-else>
            <div class="q-pt-none">Enter Option Here</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-sm col-6">
        <q-card flat style="background-color: #30c7b3;border-radius: 20px">
          <q-card-section class="q-pb-xs" @click="modalConfirm = true">
            <div class="text-h6">Your address</div>
          </q-card-section>

          <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
            <q-input
              label-color="white"
              input-class="text-white"
              v-model="address"
              autofocus
              label="Enter Option Here"
              class="text-white"
            />
          </q-card-section>
          <q-card-section v-else @click="modalConfirm = true">
            <div class="q-pt-none">Enter Option Here</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="q-px-sm col-6">
        <q-card flat style="background-color: #ad5cde;border-radius: 20px">
          <q-card-section class="q-pb-xs">
            <div class="text-h6">Your address</div>
          </q-card-section>

          <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
            <q-input
              label-color="white"
              input-class="text-white"
              v-model="address"
              autofocus
              label="Enter Option Here"
              class="text-white"
            />
          </q-card-section>
          <q-card-section v-else @click="modalConfirm = true">
            <div class="q-pt-none">Enter Option Here</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-px-sm col-6">
        <q-card flat class="col-6" style="background-color: #e2b951; border-radius: 20px">
          <q-card-section class="q-pb-xs">
            <div class="text-h6">Your address</div>
          </q-card-section>

          <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
            <q-input
              label-color="white"
              input-class="text-white"
              v-model="address"
              autofocus
              @keyup.enter="prompt = false"
              label="Enter Option Here"
              class="text-white"
            />
          </q-card-section>
          <q-card-section v-else @click="modalConfirm = true">
            <div class="q-pt-none">Enter Option Here</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
        <q-dialog v-model="modalConfirm" persistent>
      <q-card style="border-radius: 20px; width:450px">
        <q-card-section class="q-ml-sm q-py-md q-px-xs row justify-between">
          <div class="text-h6">Option 1</div>
          <div><q-btn icon="close" @click="modalConfirm = false" flat class="text-grey"></q-btn></div>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input
              label="Enter Quiz title"
              class="q-pt-xs"
              outlined
              rounded
              type="text"
              v-model="quiz_title">
              </q-input>
        </q-card-section>
        <q-card-section class="row q-pa-md justify-between">
        <div class="text-h6">Correct Answer</div>
        <div> <q-toggle
          name="light_active"
          v-model="model"
          true-value="YES"
        /></div>
        </q-card-section>
        <q-card-section class="q-pt-sm q-px-md q-mb-lg" align="center">
          <q-btn label="CONFIRMAR" rounded type="submit" class="full-width q-py-sm text-bold text-white add-button"
            unelevated dense @click="modalConfirm = false" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
    modalConfirm: false,
    model: false
    }
  }
}
</script>

<style>
.cardStyle {
  border-radius: 25px;
}
</style>
