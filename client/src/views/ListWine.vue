<template>
  <div class="row justify-content-center">
    <div class="row">
      <div v-for="wine in wines" :key="wine._id" class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{wine.title}}</h5>
            <p class="card-text">
              {{wine.description}}
            </p>
            <router-link :to="{name: 'Edit', params: { id: wine._id }}" class="btn btn-success">Edit</router-link>
            <button @click.prevent="deleteWine(wine._id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {toRefs, reactive, onMounted} from 'vue'

export default {
  name: "List",
  setup() {
    const state = reactive({
      wines : []
    })
    let backendUrl = 'http://localhost:3000/api'

    onMounted(() => {
      axios.get(backendUrl)
        .then(response => {
          state.wines = response.data
        }).catch(err => {
          console.log(err)
        })

    })

    const deleteWine = id => {
      let index = state.wines.findIndex(i => i._id === id)

      if(window.confirm("Proceed to Delete?")){
        axios.delete(`${backendUrl}/${id}`)
          .then(() => {
            state.wines.splice(index,1)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  
    return {...toRefs(state), deleteWine, onMounted};
  },
};
</script>

<style lang="scss" scoped>
</style>