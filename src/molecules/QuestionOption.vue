<template>
  <div class="text-white q-pb-md">
    <div class="row">
      <div class="q-pa-sm col-6">
        <q-card class="q-mb-sm option1"
          flat>
          <q-card-section class="q-pb-xs row justify-between">
            <div class="text-h6">Option1</div>
            <div><q-chip class="q-py-md text-bold"
                v-if="$q.screen.gt.sm"
                :outline="option_answer === 'option1' ? false : true"
                color="white"
                :class="option_answer === 'option1' ? 'text-blue' : 'text-primary'"><q-radio
                  v-model="option_answer"
                  label="ANSWER"
                  val="option1"
                  :color="option_answer === 'option1' ? 'primary' : 'white'"></q-radio>

              </q-chip>
              <q-radio v-else
                v-model="option_answer"
                size="lg"
                style="margin-top: -8px"
                val="option1"
                color="white"></q-radio>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none"
            v-if="$q.screen.gt.sm">
            <q-input v-model="option1"
              autofocus
              label="Enter Option Here"
              label-color="white"
              input-class="text-white"
              class="text-white" />
          </q-card-section>
          <q-card-section v-else>
            <div class="q-pt-none"
              @click="modalConfirm = true">Enter Option Here</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-sm col-6">
        <q-card flat
          class="option2">
          <q-card-section class="q-pb-xs row justify-between">
            <div class="text-h6">Option2</div>
            <q-chip class="q-py-md text-bold"
              v-if="$q.screen.gt.sm"
              :outline="option_answer === 'option2' ? false : true"
              color="white"
              :class="option_answer === 'option2' ? 'text-blue' : 'text-primary'"><q-radio
                v-model="option_answer"
                label="ANSWER"
                val="option2"
                :color="option_answer === 'option2' ? 'primary' : 'white'"></q-radio>

            </q-chip>
            <q-radio v-else
              v-model="option_answer"
              size="lg"
              style="margin-top: -8px"
              val="option2"
              color="white"></q-radio>
            <!-- <q-btn icon="done" v-else class="bg-white text-primary" size="sm" flat round/> -->
          </q-card-section>
          <q-card-section class="q-pt-none"
            v-if="$q.screen.gt.sm">
            <q-input label-color="white"
              input-class="text-white"
              v-model="option2"
              autofocus
              label="Enter Option Here"
              class="text-white" />
          </q-card-section>
          <q-card-section v-else>
            <div class="q-pt-none"
              @click="modalConfirm = true">Enter Option Here</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="q-px-sm col-6">
        <q-card flat
          class="option3">
          <q-card-section class="q-pb-xs row justify-between">
            <div class="text-h6">Option3</div>
            <q-chip class="q-py-md text-bold"
              v-if="$q.screen.gt.sm"
              :outline="option_answer === 'option3' ? false : true"
              color="white"
              :class="option_answer === 'option3' ? 'text-blue' : 'text-primary'"><q-radio
                v-model="option_answer"
                label="ANSWER"
                val="option3"
                :color="option_answer === 'option3' ? 'primary' : 'white'"></q-radio>

            </q-chip>
            <q-radio v-else
              v-model="option_answer"
              size="lg"
              style="margin-top: -8px"
              val="option3"
              color="white"></q-radio>
          </q-card-section>

          <q-card-section class="q-pt-none"
            v-if="$q.screen.gt.sm">
            <q-input label-color="white"
              input-class="text-white"
              v-model="option3"
              autofocus
              label="Enter Option Here"
              class="text-white" />
          </q-card-section>
          <q-card-section v-else>
            <div class="q-pt-none"
              @click="modalConfirm = true">Enter Option Here</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-px-sm col-6">
        <q-card flat
          class="col-6 option4">
          <q-card-section class="q-pb-xs row justify-between">
            <div class="text-h6">Option4</div>
            <q-chip class="q-py-md text-bold"
              v-if="$q.screen.gt.sm"
              :outline="option_answer === 'option4' ? false : true"
              color="white"
              :class="option_answer === 'option4' ? 'text-blue' : 'text-primary'"><q-radio
                v-model="option_answer"
                label="ANSWER"
                val="option4"
                :color="option_answer === 'option4' ? 'primary' : 'white'"></q-radio>

            </q-chip>

            <q-radio v-else
              v-model="option_answer"
              size="lg"
              style="margin-top: -8px"
              val="option4"
              color="white"></q-radio>
          </q-card-section>

          <q-card-section class="q-pt-none"
            v-if="$q.screen.gt.sm">
            <q-input label-color="white"
              input-class="text-white"
              v-model="option4"
              autofocus
              label="Enter Option Here"
              class="text-white" />
          </q-card-section>
          <q-card-section v-else>
            <div class="q-pt-none"
              @click="modalConfirm = true">Enter Option Here</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="modalConfirm"
      persistent>
      <q-card class="cardStyle rounded">
        <q-card-section class="q-ml-sm q-py-md q-px-xs row justify-between">
          <div class="text-h6">Option 1</div>
          <div><q-btn icon="close"
              @click="modalConfirm = false"
              flat
              class="text-grey"></q-btn></div>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input label="Enter Answer"
            class="q-pt-xs"
            outlined
            rounded
            type="text"
          v-model="quiz_answer">
        </q-input>
      </q-card-section>
      <q-card-section class="row q-pa-md justify-between">
        <div class="text-h6">Correct Answer</div>
        <div> <q-toggle name="light_active"
            v-model="model"
            true-value="YES" /></div>
      </q-card-section>
      <q-card-section class="q-pt-sm q-px-md q-mb-lg"
        align="center">
        <q-btn label="DONE"
          rounded
          type="submit"
          class="full-width q-py-sm text-bold text-white add-button"
          unelevated
          dense
          @click="modalConfirm = false" />
      </q-card-section>
    </q-card>
  </q-dialog>
</div></template>

<script>
export default {
  data() {
    return {
      modalConfirm: false,
      model: false,
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      option_answer: '',
      quiz_answer: ''

    }
  }
}
</script>

<style scoped>
.option1 {
  background-color: #4F92E3;
  border-radius: 20px
}

.option2 {
  background-color: #30c7b3;
  border-radius: 20px;
}

.option3 {
  background-color: #ad5cde;
  border-radius: 20px
}

.option4 {
  background-color: #e2b951;
  border-radius: 20px
}

.cardStyle {
  border-radius: 50px;
  width: 45vh
}</style>
