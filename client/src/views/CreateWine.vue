<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">New Wines</h3>
      <form @submit.prevent="CreateWine">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" v-model="title" required />
        </div>

        <div class="form-group">
          <label>Country</label>
          <input type="text" class="form-control" v-model="country" required />
        </div>

        <div class="form-group">
          <label>region</label>
          <input type="text" class="form-control" v-model="region" required />
        </div>

        <div class="form-group">
          <label>lage</label>
          <input type="text" class="form-control" v-model="lage" required />
        </div>

        <div class="form-group">
          <label>SweetNess</label>
          <input
            type="text"
            class="form-control"
            v-model="sweetness"
            required
          />
        </div>

        <div class="form-group">
          <label>Sugar Level</label>
          <input
            type="text"
            class="form-control"
            v-model="sugarlevel"
            required
          />
        </div>

        <div class="form-group">
          <label>Type</label>
          <input type="text" class="form-control" v-model="wineType" required />
        </div>

        <div class="form-group">
          <label>Color</label>
          <input
            type="text"
            class="form-control"
            v-model="wineColor"
            required
          />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea type="text" class="form-control" v-model="desc" required />
        </div>

        <div class="form-group">
          <label>Alcohol Level</label>
          <input type="text" class="form-control" v-model="alcLevel" required />
        </div>

        <div class="form-group">
          <label>Vintage</label>
          <input type="text" class="form-control" v-model="vintage" required />
        </div>

        <div class="form-group">
          <label
            >Is the EAN valid?
            <input
              type="checkbox"
              class="form-control"
              v-model="validEan"
              required
            />
          </label>
        </div>

        <div class="form-group">
          <label>Acidity</label>
          <input type="text" class="form-control" v-model="acidity" required />
        </div>

        <div class="form-group">
          <label>Winery</label>
          <input type="text" class="form-control" v-model="winery" required />
        </div>

        <div class="form-group">
          <label>Grape</label>
          <input type="text" class="form-control" v-model="grape" required />
        </div>

        <div class="form-group">
          <label>Appeallation</label>
          <input
            type="text"
            class="form-control"
            v-model="appellation"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
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
      title: "",
      country: "",
      region: "",
      lage: "",
      sweatness: "",
      sugarlevel: "",
      wineType: "",
      wineColor: "",
      desc: "",
      alcLevel: "",
      vintage: "",
      validEan: false,
      acidity: "",
      winery: "",
      grape: "",
      appellation: "",
    });

    const CreateWine = () => {
      let backendUrl = "http://localhost:3000/api/create-wine";
      axios.post(backendUrl, state).then(() => {
        router.push('/')
        state = {
          title: "",
          country: "",
          region: "",
          lage: "",
          sweatness: "",
          sugarlevel: "",
          wineType: "",
          wineColor: "",
          desc: "",
          alcLevel: "",
          vintage: "",
          validEan: false,
          acidity: "",
          winery: "",
          grape: "",
          appellation: "",
        };
      }).catch(err =>{
        console.log(err)
      });
    };
    return { ...toRefs(state), CreateWine };
  },
};
</script>

<style lang="scss" scoped>
</style>