import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/main/webapp/app/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
