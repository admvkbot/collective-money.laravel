<template>
  <div class="avatar" :class="getSize(size)">
    <img
      :src="getSocialPath(socialName)"
      :alt="alt"
      :class="[getClasses(shadow, circular, borderRadius)]"
    />
  </div>
</template>

<script>
export default {
  name: "SocialLogo",
  props: {
    socialName: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: null,
    },
    shadow: {
      type: String,
      default: null,
    },
    borderRadius: {
      type: String,
      default: null,
    },
    circular: Boolean,
  },
  data() {
     return {
        socialPath: "",
     }
  },
  methods: {
    getSize: (size) => (size ? `avatar-${size}` : null),
    getClasses: (shadow, circular, borderRadius) => {
      let shadowValue, circularValue, borderRadiusValue;

      if (shadow) {
        shadowValue = shadow === "regular" ? "shadow" : `shadow-${shadow}`;
      } else {
        shadowValue = null;
      }

      circularValue = circular ? "rounded-circle" : null;

      borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : null;

      return `${shadowValue} ${circularValue} ${borderRadiusValue}`;
    },
    getSocialPath: (socialName) => {
       socialName = socialName.toLowerCase()
       return `/img/socials/${socialName}.svg`
    } 
  },
  computed: {
  }
};
</script>
