<template>
  <q-page>
  <div class="row">
  <question-list class="col-3"/>
  <question-form class="col-8"/>
  </div>
  </q-page>
</template>

<script>
import QuestionList from "../molecules/QuestionList.vue";
import QuestionForm from "../molecules/QuestionForm.vue";
export default {
  components: { QuestionList,QuestionForm },

};
</script>

<style></style>