import { GetterTree } from "vuex";
import Note from "@/types/Note";
import NoteState from "@/types/NoteState";

export const getters: GetterTree<NoteState, Note> = {
  // Gets all notes array
  allNotes(state) {
    return state.notes;
  },
};
