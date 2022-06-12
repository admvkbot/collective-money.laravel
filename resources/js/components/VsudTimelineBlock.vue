<template>
  <div class="timeline-block mb-3">
    <span class="timeline-step bg-dark">
      <i :class="icon + 'text-' + color + 'text-gradient'"></i>
    </span>
    <div class="timeline-content">
      <h6 class="text-white text-sm font-weight-bold mb-0">
        {{ timelineContent}}
      </h6>
      <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
        {{ date }}
      </p>
      <p class="text-secondary text-sm mt-3 mb-2">
        {{ text }}
      </p>
      <span class="badge badge-sm bg-gradient-success" v-for="badge in badges" :key="badge.id">{{ badge.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VsudTimelineBlock",
  props: {
    id: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "ni ni-bell-55",
    },
    color: {
      type: String,
      default: "success",
    },
    timelineContent: {
      type: String,
      default: "Block",
    },
    date: {
      type: String,
      default: "22 DEC 7:20 PM",
    },
    text: {
      type: String,
      default: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sapiente enim omnis corporis perferendis libero dolorum inventore amet veritatis quaerat.",
    },
    badges: {
      type: Array,
      default: ['Badge'],
    },
  },
  emits: ["textareaValue"],
};
</script>
