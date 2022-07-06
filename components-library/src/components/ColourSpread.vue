<template>
  <section :id="swatchID" class="cl-colour-swatch">
    <div
      v-for="(colour, index) in colours"
      :key="`${swatchID}-${index}`"
      class="cl-colour"
    >
      <span v-if="type === 'hex'" :style="{ backgroundColor: colour }">
        {{ colour }}
      </span>
      <span v-else :class="colour">
        {{ colour }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "ClColourSpread",
  props: {
    /**
     * The name of the colour swatch.
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * An array of colour hex codes used to generate the swatch.
     *
     * This will not be used if the classes property is provided.
     */
    hexes: {
      type: Array,
      required: false,
      default: () => [],
      validate: values => {
        const validHex = new RegExp("^#([0-9A-Fa-f]{3})([0-9A-Fa-f]{3})?$");

        values.forEach(value => {
          if (!validHex.test(value)) {
            return false;
          }
        });

        return true;
      },
    },
    /**
     * An array of background colour classes used to generate the swatch.
     *
     * This will be used over the hexes property if both are provided.
     */
    classes: {
      type: Array,
      required: false,
      default: () => [],
      validate: values => {
        try {
          values.forEach(value => {
            document.querySelector(value);
          });

          return true;
        } catch (error) {
          return false;
        }
      },
    },
  },
  computed: {
    /**
     * The computed ID to use for the colour swatch.
     *
     * Adds "colour-swatch-" in front of the name property and ensures it is DOM-safe.
     *
     * @return {string} - The colour swatch's ID.
     */
    swatchID() {
      const name = this.name.toLowerCase().replace(/[^a-z0-9]/gi, "-");

      return `colour-swatch-${name}`;
    },
    /**
     * The type of colour swatch to generate.
     *
     * Either class-based or hex-based.
     *
     * @return {string} - The type.
     */
    type() {
      return this.classes.length > 0 ? "class" : "hex";
    },
    /**
     * The colour values to use.
     *
     * @return {string[]} - The colour values.
     */
    colours() {
      return this.classes.length > 0 ? this.classes : this.hexes;
    },
  },
  created() {
    if (this.hexes.length === 0 && this.classes.length === 0) {
      console.error(
        "Either the hexes or the classes property must be provided."
      );
    }
  },
};
</script>

<style lang="scss" scoped>
.cl-colour-swatch {
  display: flex;
  flex-direction: column;

  .cl-colour {
    display: flex;

    span {
      flex-grow: 1;
      padding: 1rem 1.25rem;
      text-align: center;
    }
  }
}
</style>
