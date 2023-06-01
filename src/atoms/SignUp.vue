<template>
  <q-page class="bg-color">
    <q-stepper
      v-model="step"
      ref="stepper"
      flat
      color="primary"
      :contracted="$q.screen.lt.md"
      alternative-labels
      class="bg-color"
    >
      <q-step
        :name="1"
        :done="step > 1"
        icon="sentiment_satisfied"
        done-icon="sentiment_satisfied"
      >
        <PersonalInfo
          v-if="step === 1"
          @handle-next="$refs.stepper.next()"
          :class="$q.screen.gt.sm ? 'stepper-top' : 'q-pt-md'"
        />
      </q-step>

      <q-step
        :name="2"
        caption="Optional"
        icon="person"
        :done="step > 2"
        class="q-pa-none"
        done-icon="person"
      >
        <div v-if="step === 2" class="q-pa-none q-ma-none">
          <PublicInfo
            :class="$q.screen.gt.sm ? 'stepper-top' : 'q-pt-md'"
            @handle-next="$refs.stepper.next()"
            @handle-previous="$refs.stepper.previous()"
          />
        </div>
      </q-step>

      <q-step :name="3" :done="step > 3" icon="image" done-icon="image">
        <AccountInfo
          :class="$q.screen.gt.sm ? 'stepper-top' : 'q-pt-md'"
          @handle-next="$refs.stepper.next()"
          @handle-previous="$refs.stepper.previous()"
        />
      </q-step>

      <q-step :name="4" :done="step > 4" icon="lock" done-icon="lock">
        <SecurityInfo
          :class="$q.screen.gt.sm ? 'stepper-top' : 'q-pt-md'"
          @handle-next="$refs.stepper.next()"
          @handle-previous="$refs.stepper.previous()"
        />
      </q-step>
      <q-step :name="5" icon="flag" class="flag" done-icon="flag">
        <ReadyInfo
          :class="$q.screen.gt.sm ? 'stepper-top' : 'q-pt-md'"
          @handle-next="$refs.stepper.next()"
          @handle-previous="$refs.stepper.previous()"
        />
      </q-step>

      <template v-slot:navigation>
        <!-- <q-stepper-navigation>

        </q-stepper-navigation> -->
      </template>
    </q-stepper>
  </q-page>
</template>

<script>
import PersonalInfo from "../molecules/PersonalInfo.vue";
import AccountInfo from "../molecules/AccountInfo.vue";
import PublicInfo from "../molecules/PublicInfo.vue";
import ReadyInfo from "../molecules/ReadyInfo.vue";
import SecurityInfo from "../molecules/SecurityInfo.vue";

export default {
  components: {
    PersonalInfo,
    PublicInfo,
    AccountInfo,
    SecurityInfo,
    ReadyInfo,
  },
  data() {
    return {
      step: 1,
    };
  },
};
</script>
<style scoped>
.stepper-top {
  margin-top: 15vh;
}
</style>
<style lang="scss" scoped>
::v-deep {
  @media (min-width: 75vh) {
    .col-grow,
    .col-xs-grow {
      flex: 0 2 auto;
    }
    .justify-between {
      justify-content: center;
    }
    .row > .col,
    .flex > .col,
    .row > .col-auto,
    .flex > .col-auto,
    .row > .col-grow,
    .flex > .col-grow,
    .row > .col-shrink,
    .flex > .col-shrink,
    .row > .col-xs,
    .flex > .col-xs,
    .row > .col-xs-auto,
    .row > .col-12,
    .row > .col-xs-12,
    .row > .col-11,
    .row > .col-xs-11,
    .row > .col-10,
    .row > .col-xs-10,
    .row > .col-9,
    .row > .col-xs-9,
    .row > .col-8,
    .row > .col-xs-8,
    .row > .col-7,
    .row > .col-xs-7,
    .row > .col-6,
    .row > .col-xs-6,
    .row > .col-5,
    .row > .col-xs-5,
    .row > .col-4,
    .row > .col-xs-4,
    .row > .col-3,
    .row > .col-xs-3,
    .row > .col-2,
    .row > .col-xs-2,
    .row > .col-1,
    .row > .col-xs-1,
    .row > .col-0,
    .row > .col-xs-0,
    .flex > .col-xs-auto,
    .flex > .col-12,
    .flex > .col-xs-12,
    .flex > .col-11,
    .flex > .col-xs-11,
    .flex > .col-10,
    .flex > .col-xs-10,
    .flex > .col-9,
    .flex > .col-xs-9,
    .flex > .col-8,
    .flex > .col-xs-8,
    .flex > .col-7,
    .flex > .col-xs-7,
    .flex > .col-6,
    .flex > .col-xs-6,
    .flex > .col-5,
    .flex > .col-xs-5,
    .flex > .col-4,
    .flex > .col-xs-4,
    .flex > .col-3,
    .flex > .col-xs-3,
    .flex > .col-2,
    .flex > .col-xs-2,
    .flex > .col-1,
    .flex > .col-xs-1,
    .flex > .col-0,
    .flex > .col-xs-0,
    .row > .col-xs-grow,
    .flex > .col-xs-grow,
    .row > .col-xs-shrink,
    .flex > .col-xs-shrink {
      width: 9%;
      min-width: 0;
      max-width: 100%;
    }
  }
  .q-stepper--horizontal .q-stepper__line:before,
  .q-stepper--horizontal .q-stepper__line:after {
    height: 4px;
  }
  .q-stepper__dot {
    width: 4vh;
    height: 4vh;
    font-size: 1.2rem;
  }
}
</style>
