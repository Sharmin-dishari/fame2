<template>
  <q-page class="bg-color"
    :class="$q.screen.gt.md ? 'q-pa-xl ' : 'q-pa-md'">
    <q-item>
      <q-item-section>
        <q-item-label class="text-bold text-h5">Quiz List</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-item-label>
          <q-btn v-if="$q.screen.gt.xs"
            unelevated
            class="q-mr-sm q-py-sm text-bold text-white add-button"
            icon="add"
            rounded
            to="/create-quiz"
            label="Create QUiz" />
          <q-btn v-else
            unelevated
            round
            icon="add"
            to="/create-quiz"
            class="add-button text-white"
            size="18px" />
        </q-item-label>
      </q-item-section>
    </q-item>
    <quiz-board :items="itemList" />
  </q-page>
</template>

<script>
import QuizBoard from "../molecules/QuizBoard.vue";
export default {
  components: { QuizBoard },
  data: () => ({
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
    ],
  }),
};
</script>

<style></style>