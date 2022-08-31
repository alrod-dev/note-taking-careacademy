import { ActionTree } from "vuex";
import { MutationType } from "./mutations";
import Note from "@/types/Note";
import NoteState from "@/types/NoteState";

export enum ActionTypes {
  GetNotes = "GET_ITEMS",
}

export const actions: ActionTree<NoteState, Note> = {
  async [ActionTypes.GetNotes]({ commit }) {
    commit(MutationType.SetNotes, [
      {
        id: 1,
        title: "Title 1",
        message: "Create awesome Vue 3 with Vuex 4 video!",
      },
    ]);
  },
};
