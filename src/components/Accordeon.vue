<!-- <script setup>
defineProps({
  id: Number,
  isOpen: Boolean,
  title: String,
  texts: Array,
});
</script>

<template>
  <div
    class="p-4 flex justify-between items-center cursor-pointer"
    :class="[isOpen ? `bg-black text-white mb-2` : `bg-white text-black `]"
  >
    <p>{{ title }}</p>
    <img
      :src="[isOpen ? `/media/arrow-down.svg` : `/media/arrow-up.svg`]"
      alt="title"
      class="w-4 h-4"
    />
  </div>

  <ul
    class="px-[22px] bg-white"
    :class="[isOpen ? `drop-faq` : `drop-faq-close`]"
  ></ul>
</template> -->
