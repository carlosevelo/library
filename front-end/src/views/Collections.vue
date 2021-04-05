<template>
  <div class="collections">
    <Collection v-for="collection in collections" :key="collection.name" :collection="collection" ></Collection>
  </div>
</template>

<script>
import Collection from "../components/Collection.vue";
export default {
  name: "Collections",
  components: {
    Collection,
  },
  data() {
    return {
      collections: [],
    }
  },
  created() {
    this.getCollections();
  },
  methods: {
    async getCollections() {
      try {
        const response = await axios.get("/api/collections");
        this.collections = response.data;
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>