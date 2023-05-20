<template>
  <q-page
    :class="$q.screen.width >= 1300 ? 'q-pa-xl' : 'q-pt-lg'"
    class="bg-color"
  >
    <q-item class="q-pb-lg q-px-lg">
      <q-item-section>
        <q-item-label class="text-bold text-h5">Quiz List</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-item-label>
          <q-btn
            v-if="$q.screen.gt.xs"
            unelevated
            class="q-mr-sm q-py-xs text-bold text-white bg-grey-7"
            icon="arrow_back"
            rounded
            to="/quiz-index"
            label="Back"
          />
          <q-btn
            v-if="$q.screen.gt.xs"
            icon-right="arrow_forward"
            unelevated
            class="q-mr-sm q-py-xs text-bold text-white add-button"
            rounded
            label="Next"
          />
          <div v-else>
            <q-btn
              unelevated
              round
              to="/quiz-index"
              icon="arrow_back"
              class="bg-grey-7 text-white q-mr-sm"
              size="18px"
            />
            <q-btn
              unelevated
              round
              icon="arrow_forward"
              class="add-button text-white"
              size="18px"
            />
          </div>
        </q-item-label>
      </q-item-section>
    </q-item>
    <div class="row q-mx-lg">
      <question-list
        class="col-sm-4 col-md-4 col-lg-3 col-xl-3"
        v-if="$q.screen.width >= 1300"
      />
      <question-form
        :class="$q.screen.xs || $q.screen.gt.xs ? 'col-grow' : 'col-auto'"
      />
    </div>
    <horizontal-list v-if="$q.screen.width < 1300" />
    <div class="fixedButton q-pt-xl" v-if="$q.screen.width > 1300" align="end">
      <q-btn
        unelevated
        class="q-mr-sm q-py-xs text-bold text-white bg-grey-7"
        icon="arrow_back"
        rounded
        to="/quiz-index"
        label="Back"
      />
      <q-btn
        icon-right="arrow_forward"
        unelevated
        class="q-mr-sm q-py-xs text-bold text-white add-button"
        rounded
        label="Next"
      />
    </div>
  </q-page>
</template>

<script>
import QuestionList from "../molecules/QuestionList.vue";
import QuestionForm from "../molecules/QuestionForm.vue";
import HorizontalList from "../molecules/HorizontalList.vue";
export default {
  components: { QuestionList, QuestionForm, HorizontalList },
};
</script>

<style scoped>
.fixedButton {
  bottom: 1rem;
  right: 2rem;
}

@media only screen and (max-width: 600px) {
  .fixedButton {
    margin-top: 10vh;
    bottom: 0.5rem;
    right: 0;
  }
}
</style>
