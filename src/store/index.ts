import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import Note from "@/types/Note";
import { notesModule } from "@/store/modules/notes/index";

Vue.use(Vuex);

const store: StoreOptions<Note> = {
  modules: {
    notesModule,
  },
};

export default new Vuex.Store<Note>(store);
