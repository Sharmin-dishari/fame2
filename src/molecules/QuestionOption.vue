<template>
  <div class="text-white q-pb-md">
<div class="row">
<div class="q-pl-md q-py-md col-6">
  <q-card flat class="bg-primary ">
        <q-card-section class="q-pb-xs">
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" label="Enter Option Here" class="text-white"  />
        </q-card-section>
        <q-card-section v-else>
        <div class="q-pt-none">Enter Option Here</div>
        </q-card-section>
      </q-card>
</div>
<div class="q-pa-md col-6">
      <q-card flat style="background-color: #30C7B3;">
        <q-card-section class="q-pb-xs">
          <div class="text-h6">Your address</div>
        </q-card-section>

       <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" label="Enter Option Here" class="text-white"  />
        </q-card-section>
        <q-card-section  v-else>
        <div class="q-pt-none">Enter Option Here</div>
        </q-card-section>
      </q-card>
      </div>
</div>
<div class="row">
<div class="q-pl-md col-6">
  <q-card flat class="col-6" style="background-color: #AD5CDE;">
        <q-card-section class="q-pb-xs">
          <div class="text-h6">Your address</div>
        </q-card-section>

         <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" label="Enter Option Here" class="text-white"  />
        </q-card-section>
        <q-card-section  v-else>
        <div class="q-pt-none">Enter Option Here</div>
        </q-card-section>
      </q-card>
      </div>
      <div class="q-px-md col-6">
      <q-card flat class="col-6" style="background-color: #E2B951;">
        <q-card-section class="q-pb-xs">
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" label="Enter Option Here" class="text-white"  />
        </q-card-section>
        <q-card-section  v-else>
        <div class="q-pt-none">Enter Option Here</div>
        </q-card-section>
      </q-card>
      </div>
</div>
  </div>
</template>

<script>
</script>

<style>
.cardStyle{
border-radius: 25px;
}

</style>