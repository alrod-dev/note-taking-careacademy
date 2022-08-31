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
  // Creates single note object
  // Saves it in LocalStorage
  [MutationType.CreateNote](state, note) {
    state.notes.push(note);

    localStorage.setItem("notes", JSON.stringify(state.notes));
  },
  // Sets state of notes array
  [MutationType.SetNotes](state, notes) {
    state.notes = notes;
  },
  // Find specific note in Array and deletes it
  // Updates the LocalStorage
  [MutationType.DeleteNote](state, note) {
    const item = state.notes.map((item) => item.id).indexOf(note);
    state.notes.splice(item, 1);

    localStorage.setItem("notes", JSON.stringify(state.notes));
  },
  // Updates specific note in Array
  // Updates the LocalStorage
  [MutationType.UpdateNote](state, note) {
    const index = state.notes.findIndex((item) => item.id === note.id);
    if (index !== -1) {
      Vue.set(state.notes, index, note);
    }

    localStorage.setItem("notes", JSON.stringify(state.notes));
  },
};
