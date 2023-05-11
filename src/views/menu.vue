<script setup lang="ts">
import { startMatchmaking } from "@/server/useMatchMaking";
import PlayerData from "@/components/playerData.vue";
import nasubi from "@/assets/nasubi.png";

//マッチングを開始する
//マッチングが成功したら後で押したほうがPlayer1､Player2
async function startMatch(): Promise<void> {
  await startMatchmaking();
}
</script>

<template>
  <div class="h-screen flex flex-col">
    <router-link to="/">
      <button class="p-4 absolute top-4 left-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md btn-pop">
        戻る
      </button>
    </router-link>

    <PlayerData />

    <div class="flex flex-1">
<!-- TODO キャラとギフト選択を押した場合このコンポーネントを入れ替える -->
      <div class="w-1/2 p-8 flex flex-col justify-center">
        <button @click="startMatch">
          <img src="./../../src/assets/entry.png">
        </button>

        <router-link to="/character">
          <button class="text-white rounded-md">
            <img src="./../../src/assets/utuwa.png">
          </button>
        </router-link>

        <router-link to="/gift">
          <button class="text-white rounded-md">
            <img src="../../src/assets/gift.png">
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
