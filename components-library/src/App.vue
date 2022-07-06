<template>
  <main id="components-app" class="container my-5 py-5">
    <h1>UTE Components Library</h1>
    <cl-identity />
    <cl-elements />
    <cl-components />
    <cl-compositions />
  </main>
</template>

<script>
import clIdentity from "./views/Identity.vue";
import clElements from "./views/Elements.vue";
import clComponents from "./views/Components.vue";
import clCompositions from "./views/Compositions.vue";

export default {
  name: "App",
  components: {
    clIdentity,
    clElements,
    clComponents,
    clCompositions,
  },
};
</script>
