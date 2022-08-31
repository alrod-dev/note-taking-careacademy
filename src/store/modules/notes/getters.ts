import { GetterTree } from "vuex";
import Note from "@/types/Note";
import NoteState from "@/types/NoteState";

export const getters: GetterTree<NoteState, Note> = {
  totalCount(state) {
    return state.notes.length;
  },
  allNotes(state) {
    return state.notes;
  },
};
