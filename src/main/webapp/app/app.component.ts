import { Options, Vue } from "vue-class-component";
import App from "@/main/webapp/app/app.vue";

@Options({
  components: {
    App,
  },
})
export default class AppComponent extends Vue {}
