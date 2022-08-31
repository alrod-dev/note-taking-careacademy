import { MutationTree } from "vuex";
import NoteState from "@/types/NoteState";

export enum MutationType {
  CreateNote = "CREATE_NOTE",
  SetNotes = "SET_NOTES",
}

export const mutations: MutationTree<NoteState> = {
  [MutationType.CreateNote](state, item) {
    state.notes.push(item);
  },
  [MutationType.SetNotes](state, items) {
    state.notes = items;
  },
};
