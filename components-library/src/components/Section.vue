<template>
  <section :id="sectionID" class="cl-section">
    <h3 class="cl-section-heading">
      {{ sectionHeading }}
    </h3>
    <p v-if="description !== ''" class="cl-section-description">
      {{ description }}
    </p>
    <div class="cl-section-content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "ClSection",
  props: {
    /**
     * The name of the section.
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * The section's heading if it should be different from it's name.
     */
    heading: {
      type: String,
      required: false,
      default: "",
    },
    /**
     * The section's description.
     */
    description: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    /**
     * The computed ID to use for the section.
     *
     * Adds "section-" in front of the name property and ensures it is DOM-safe.
     *
     * @return {string} - The section's ID.
     */
    sectionID() {
      const name = this.name.toLowerCase().replace(/[^a-z0-9]/gi, "-");

      return `section-${name}`;
    },
    /**
     * The heading of the section.
     *
     * Uses the name property unless the heading has been provided.
     *
     * @return {string} - The section's heading.
     */
    sectionHeading() {
      if (this.heading !== "") {
        return this.heading;
      }

      return this.name;
    },
  },
};
</script>
