<template>
  <q-page>
    <q-list class="q-mt-md">
      <q-item
        v-for="(item, index) in items"
        class="item-border q-my-md q-pt-md"
        rounded
        :key="index"
      >
        <q-item-section avatar top>
          <q-item-label>
            <img :src="item.avatar" class="imageStyle" />
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label
            ><q-chip color="red-9" dense text-color="white" label="DRAFT"
          /></q-item-label>
          <q-item-label class="text-bold text-h6"
            >Quiz title will be here</q-item-label
          >
          <q-item-label class="caption"
            >Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</q-item-label
          >
          <q-item-label class="text-grey-7" :class="$q.screen.gt.sm && 'row'">
            <div class="row">
              <div class="q-mt-xs row">
                <q-icon name="person_outline" color="grey" size="22px" /><span
                  class="q-pl-sm info-margin"
                  >Andrew Smith</span
                >
              </div>
              <div class="q-px-md q-pt-xs" v-if="$q.screen.gt.sm">|</div>
            </div>
            <div class="row">
              <div class="q-mt-xs row">
                <q-icon name="calendar_today" color="grey" size="19px" />
                <div class="q-pl-sm info-margin">25 December, 2022</div>
              </div>
              <div class="q-px-md q-pt-xs" v-if="$q.screen.gt.sm">|</div>
            </div>
            <div class="row">
              <div class="q-mt-xs row">
                <q-icon name="help_outline" color="grey" size="22px" />
                <div class="q-pl-sm info-margin">18 Questions</div>
              </div>
            </div>
          </q-item-label>
          <q-item-label v-if="$q.screen.lt.md" class="q-pt-md">
            <q-btn
              unelevated
              class="q-mr-sm q-py-xs text-bold text-white button-color"
              icon="border_color"
              rounded
              label="Edit"
            />
            <q-btn unelevated round color="primary" icon="add" size="16px" />
          </q-item-label>
        </q-item-section>
        <q-item-section side v-if="!$q.screen.lt.md">
          <q-item-label>
            <q-btn
              unelevated
              class="q-mr-sm q-py-sm text-bold text-white button-color"
              icon="border_color"
              rounded
              label="Edit"
            />
            <q-btn unelevated round color="primary" icon="add" size="18px" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
  },
};
</script>
<style scoped>
.item-border {
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  padding-bottom: 12px;
}

.info-margin {
  font-size: 0.93rem;
  margin-top: 0.15rem;
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
}
</style>
