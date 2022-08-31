import { Module } from "vuex";
import Note from "@/types/Note";
import NoteState from "@/types/NoteState";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: NoteState = {
  notes: [
    {
      id: 1,
      title: "The Legend of Zelda - Ocarina of Time",
      message: "It’s dangerous to go alone, take this!",
    },
  ],
};

export const notesModule: Module<NoteState, Note> = {
  state,
  getters,
  mutations,
  actions,
};
