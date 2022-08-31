import { ActionTree } from "vuex";
import { MutationType } from "./mutations";
import Note from "@/types/Note";
import NoteState from "@/types/NoteState";

export enum ActionTypes {
  GetNotes = "GET_LOCAL_STORAGE_NOTES",
}

export const actions: ActionTree<NoteState, Note> = {
  [ActionTypes.GetNotes]({ commit }) {
    const notes: Array<Note> = JSON.parse(localStorage.getItem("notes") || "");

    commit(MutationType.SetNotes, notes);
  },
};
