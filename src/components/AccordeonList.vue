<script setup>
defineProps({
  programms: Array,
});

const emit = defineEmits(['toggleAnswer']);
</script>

<template>
  <div class="flex flex-col gap-y-5 sm:gap-y-8">
    <div
      v-for="programm in programms"
      :key="programm.id"
      :title="programm.title"
      :isOpen="programm.isOpen"
      :texts="programm.text"
      class="overflow-hidden rounded-xl bg-white"
    >
      <div
        class="p-3 lg:p-4 flex justify-between items-center cursor-pointer"
        :class="[
          programm.isOpen ? `bg-black text-white mb-2` : `bg-white text-black `,
        ]"
        @click="() => emit('toggleAnswer', programm.id)"
      >
        <p>{{ programm.title }}</p>
        <img
          :src="[
            programm.isOpen ? `/media/arrow-up.svg` : `/media/arrow-down.svg`,
          ]"
          alt="title"
          class="w-4 h-4"
        />
      </div>

      <ul
        class="px-[22px] bg-white"
        :class="[programm.isOpen ? `drop-faq` : `drop-faq-close`]"
      >
        <li v-for="text in programm.text" :key="text" class="py-1 sm:py-3">
          <p class="">{{ text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
