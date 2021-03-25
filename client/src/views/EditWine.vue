<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Edit Wines</h3>
      <form @submit.prevent="UpdateWine">
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
          <button class="btn btn-danger btn-block">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {toRefs, reactive, onMounted, onBeforeMount} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import axios from 'axios'

export default {
  name: 'Edit',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      wine : { }
    })

    let backendUrl = 'http://localhost:3000/api/edit-wine'
    let UpdateUrl = 'http://localhost:3000/api/update-wine'
    onBeforeMount(() => {
      axios.get(`${backendUrl}/${route.params.id}`)
        .then((res) => {
          state.wine = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    })

    const UpdateWine = () => {
      axios.post(`${UpdateUrl}/${route.params.id}`, state.wine)
        .then((res) => {
          router.push('/')
          // console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return {...toRefs(state), UpdateWine};
  },
};
</script>

<style lang="scss" scoped>
</style>