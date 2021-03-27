<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">New Wines</h3>
      <form @submit.prevent="CreateWine">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" v-model="wine.title" required />
        </div>

        <div class="form-group">
          <label>Country</label>
          <input type="text" class="form-control" v-model="wine.country" required />
        </div>

        <div class="form-group">
          <label>region</label>
          <input type="text" class="form-control" v-model="wine.region" required />
        </div>

        <div class="form-group">
          <label>lage</label>
          <input type="text" class="form-control" v-model="wine.lage" required />
        </div>

        <div class="form-group">
          <label>SweetNess</label>
          <input
            type="text"
            class="form-control"
            v-model="wine.sweetness"
            required
          />
        </div>

        <div class="form-group">
          <label>Sugar Level</label>
          <input
            type="text"
            class="form-control"
            v-model="wine.sugarlevel"
            required
          />
        </div>

        <div class="form-group">
          <label>Type</label>
          <input type="text" class="form-control" v-model="wine.wineType" required />
        </div>

        <div class="form-group">
          <label>Color</label>
          <input
            type="text"
            class="form-control"
            v-model="wine.wineColor"
            required
          />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea type="text" class="form-control" v-model="wine.description" required />
        </div>

        <div class="form-group">
          <label>Alcohol Level</label>
          <input type="text" class="form-control" v-model="wine.alcoholLevel" required />
        </div>

        <div class="form-group">
          <label>Vintage</label>
          <input type="text" class="form-control" v-model="wine.vintage" required />
        </div>

        <div class="form-group">
          <label
            >Is the EAN valid?
            <input
              type="checkbox"
              class="form-control"
              v-model="wine.validEAN"
            />
          </label>
        </div>

        <div class="form-group">
          <label>Acidity</label>
          <input type="text" class="form-control" v-model="wine.acidity" required />
        </div>

        <div class="form-group">
          <label>Winery</label>
          <input type="text" class="form-control" v-model="wine.winery" required />
        </div>

        <div class="form-group">
          <label>Grape</label>
          <input type="text" class="form-control" v-model="wine.grape" required />
        </div>

        <div class="form-group">
          <label>Appeallation</label>
          <input
            type="text"
            class="form-control"
            v-model="wine.appellation"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "Create",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      wine: {
        title: "",
        country: "",
        region: "",
        lage: "",
        sweetness: "",
        sugarlevel: "",
        wineType: "",
        wineColor: "",
        description: "",
        alcoholLevel: "",
        vintage: "",
        validEan: false,
        acidity: "",
        winery: "",
        grape: "",
        appellation: "",
      },
    });

    const CreateWine = () => {
      console.log(state.wine)
      axios
        .post('/api/create-wine', state.wine)
        .then(() => {
          router.push("/");
          state.wine.title= "";
          state.wine.country= "";
          state.wine.region= "";
          state.wine.lage= "";
          state.wine.sweetness= "";
          state.wine.sugarlevel= "";
          state.wine.wineType= "";
          state.wine.wineColor= "";
          state.wine.desc= "";
          state.wine.alcLevel= "";
          state.wine.vintage= "";
          state.wine.validEAN= false;
          state.wine.acidity= "";
          state.wine.winery= "";
          state.wine.grape= "";
          state.wine.appellation= "";
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    return { ...toRefs(state), CreateWine };
  },
};
</script>

<style lang="scss" scoped>
</style>