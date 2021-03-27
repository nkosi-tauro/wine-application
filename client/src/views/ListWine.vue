<template>
  <div class="container mt-4">
    <div class="row ">
      <div v-for="wine in wines" :key="wine._id" class="col-md-3 col-lg-4">
        <div  class="card">
          <div class="card-body">
            <h4 class="card-title">{{ wine.title }}</h4>
            <h6 class="card-subtitle mb-1 text-muted">
              Country: {{wine.country}} | Region: {{ wine.region }}
            </h6>
            <p class=" fs-1">
              <span class="fw-bold">Description:</span> {{ wine.description }}
            </p>
            <div class="text-dark">
              <p class="fs-6"><span class="fw-bold">Winery:</span> {{wine.winery}}</p>
              <p class="fs-6"><span class="fw-bold">lage :</span> {{ wine.lage }} | <span class="fw-bold">Vintage:</span> {{ wine.vintage }} </p>
              <p class="fs-6"><span class="fw-bold">Sugar Level:</span> {{ wine.sugarlevel }} | <span class="fw-bold">Sweetness:</span> {{ wine.sweetness }}</p>
              <p class="fs-6"><span class="fw-bold">Wine Type:</span> {{ wine.wineType }} | <span class="fw-bold">Wine Color:</span> {{ wine.wineColor }}</p>
              <p class="fs-6"><span class="fw-bold">Alcohol:</span> {{wine.alcoholLevel}} | <span class="fw-bold">Acidity:</span> {{wine.acidity}}</p>
              <p class="fs-6"><span class="fw-bold">Grape:</span> {{wine.grape}} | <span class="fw-bold">Appeallation:</span> {{wine.appellation}}</p>
            </div>
            <div class="buy d-flex justify-content-between align-items-center">
              <router-link
                :to="{ name: 'Edit', params: { id: wine._id } }"
                class="btn btn-success mt-3"
                >Edit</router-link
              >
              <button
                @click.prevent="deleteWine(wine._id)"
                class="btn btn-danger mt-3"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toRefs, reactive, onMounted } from "vue";

export default {
  name: "List",
  setup() {
    const state = reactive({
      wines: [],
    });

    onMounted(() => {
      axios
        .get("/api")
        .then((response) => {
          state.wines = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });

    const deleteWine = (id) => {
      let index = state.wines.findIndex((i) => i._id === id);

      if (window.confirm("Proceed to Delete?")) {
        axios
          .delete(`/api/delete-wine/${id}`)
          .then(() => {
            state.wines.splice(index, 1);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    return { ...toRefs(state), deleteWine, onMounted };
  },
};
</script>

<style  scoped>
.fw-bold {
  font-weight: bold;
}
</style>