import { Options, Vue } from "vue-class-component";
import App from "@/main/webapp/app/App.vue";

@Options({
  components: {
    App,
  },
})
export default class AppComponent extends Vue {}
