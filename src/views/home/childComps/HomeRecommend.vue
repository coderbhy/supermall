<template>
  <div class="home-recommend">
    <div
      class="recommend-item"
      v-for="item in recommendLists"
      :key="item.title"
    >
      <a :href="item.link">
        <img :src="item.image">
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendLists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.home-recommend {
  display: flex;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 10px solid rgba(100, 100, 100, 0.2);
}

.home-recommend .recommend-item {
  flex: 1;
  text-align: center;
}

.home-recommend .recommend-item a {
  text-decoration: none;
  color: grey;
  font-size: 14px;
}

.home-recommend .recommend-item img {
  width: 90%;
  margin: 0 5%;
}

.home-recommend .recommend-item p {
  margin: 0;
  padding: 0;
}

a:link,
a:visited,
a:hover,
a:active,
a:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
