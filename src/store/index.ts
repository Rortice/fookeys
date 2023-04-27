import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import type { MatchStatus, PlayerSign, PlayerData, Status, Card, Character, Gift, Mission } from "@/types";

const usePlayerStore = defineStore("playerData", () => {
  const id = ref("");
  const idEnemy = ref("");
  const idGame = ref("");
  const name = ref("");
  const match: Ref<MatchStatus> = ref("nothing");
  const check = ref(false);
  const sign: Ref<PlayerSign> = ref(0);
  const character: Ref<Character | null> = ref(null);
  const gift: Ref<Gift[]> = ref([]);
  const hand: Ref<Card[]> = ref([]);
  const board: Ref<Card[]> = ref([]);
  const status: Ref<Status> = ref({ hp: 0, hungry: 0, contribution: 0, priority: 0 });
  ////////////////////////////////////////////////////////////////////////////////
  const newPlayer = computed(() => {
    const newPlayer = {
      idEnemy: idEnemy.value,
      idGame: idGame.value,
      name: name.value,
      match: match.value,
      check: check.value,
      sign: sign.value,
      character: character.value,
      gift: gift.value,
      hand: hand.value,
      board: board.value,
      status: status.value,
    } as PlayerData;
    return newPlayer;
  });
  ////////////////////////////////////////////////////////////////////////////////
  const setPlayerID = (newID: string) => {
    id.value = newID;
    console.log("test", id.value);
  };
  const getPlayerID = () => {
    console.log("test", id.value);
    return id.value;
  };
  // function updatePlayerName(newName: string) {
  //   name.value = newName;
  //   console.log(name.value);
  // }
  ////////////////////////////////////////////////////////////////////////////////

  return {
    id,
    idEnemy,
    idGame,
    name,
    match,
    check,
    sign,
    character,
    gift,
    hand,
    board,
    status,
    newPlayer,
    setPlayerID,
    getPlayerID,
  };
});

const useGameStore = defineStore("gameData", () => {
  const turn = ref(1);
  const players = ref<string[]>([]);
  const missions = ref<Mission[]>([]);

  return { turn, players, missions };
});

const useTestStore = defineStore("test", () => {
  const test = ref("test");
  function updateTest() {
    test.value = "updated";
    console.log(test.value);
  }
  return { test, updateTest };
});

export { usePlayerStore, useGameStore, useTestStore };
