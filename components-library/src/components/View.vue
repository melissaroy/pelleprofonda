<template>
  <div :id="viewID" class="cl-view">
    <h2 class="cl-view-heading">
      {{ viewHeading }}
    </h2>
    <p v-if="description !== ''" class="cl-view-description">
      {{ description }}
    </p>
    <div class="cl-view-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ClView",
  props: {
    /**
     * The name of the view.
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * The view's heading if it should be different from it's name.
     */
    heading: {
      type: String,
      required: false,
      default: "",
    },
    /**
     * The view's description.
     */
    description: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    /**
     * The computed ID to use for the view.
     *
     * Adds "view-" in front of the name property and ensures it is DOM-safe.
     *
     * @return {string} - The view's ID.
     */
    viewID() {
      const name = this.name.toLowerCase().replace(/[^a-z0-9]/gi, "-");

      return `view-${name}`;
    },
    /**
     * The heading of the view.
     *
     * Uses the name property unless the heading has been provided.
     *
     * @return {string} - The view's heading.
     */
    viewHeading() {
      if (this.heading !== "") {
        return this.heading;
      }

      return this.name;
    },
  },
};
</script>
