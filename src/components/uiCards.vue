<script setup lang="ts">
import { toRefs } from "vue";
import { playerStore } from "@/main";
import { storeToRefs } from "pinia";

const { player, sumCards } = storeToRefs(playerStore);
const { field } = toRefs(player.value);

</script>

<template>
  <div>
    <ul class="text-xs flex justify-start">
      <div v-for="(card) in field" :key="card.id">
        <div class="card">
          <img src="@/assets/card1.png">
          <div class="cardText w-30 h-30 p-4 flex flex-col justify-center items-center">
            <h5 class="card-name">name:{{ card.name }}</h5>
            <p class="card-id">ID:{{ card.id }}</p>
            <p class="card-company">📊🚬:{{ card.company }}</p>
            <p class="card-hungry">{{card.waste + card.hungry + card.priority }}</p>
            <div v-if="card.atk">
              <p class="card-Characteristic">{{card.atk }}</p>
            </div>
            <div v-if="card.def">
              <p class="card-Characteristic">{{card.def }}</p>
            </div>
            <div v-if="card.tech">
              <p class="card-Characteristic">{{card.tech }}</p>
            </div>
          </div>
        </div>
      </div>
    </ul>
    {{ sumCards }}
  </div>
</template>

<style>
.card-name{
  text-align: center;
}

.card-id{
  position: absolute;
  top: 0;
  right: 0;
}

.card-company{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.card-hungry{
  position: absolute;
  top: 0;
  left: 0;
}

.card-Characteristic{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>