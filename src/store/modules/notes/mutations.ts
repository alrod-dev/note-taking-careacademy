import Vue from "vue";
import { MutationTree } from "vuex";
import NoteState from "@/types/NoteState";

export enum MutationType {
  CreateNote = "CREATE_NOTE",
  SetNotes = "SET_NOTES",
  DeleteNote = "DELETE_NOTE",
  UpdateNote = "UPDATE_NOTE",
}

export const mutations: MutationTree<NoteState> = {
  [MutationType.CreateNote](state, note) {
    state.notes.push(note);

    localStorage.setItem("notes", JSON.stringify(state.notes));
  },
  [MutationType.SetNotes](state, notes) {
    state.notes = notes;
  },
  [MutationType.DeleteNote](state, note) {
    const item = state.notes.map((item) => item.id).indexOf(note);
    state.notes.splice(item, 1);

    localStorage.setItem("notes", JSON.stringify(state.notes));
  },
  [MutationType.UpdateNote](state, note) {
    const index = state.notes.findIndex((item) => item.id === note.id);
    if (index !== -1) {
      Vue.set(state.notes, index, note);
    }

    localStorage.setItem("notes", JSON.stringify(state.notes));
  },
};
