<script setup>
import Heading from '@/components/Heading.vue';
</script>

<template>
  <Heading class="heading text-white mb-8 lg:mb-14">Наши преимущества</Heading>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <div
      class="relative w-full h-[260px] sm:h-[51.5vw] lg:h-full row-span-2 col-span-2 rounded-[20px] bg-white"
    >
      <iframe
        src="https://kinescope.io/embed/ikgpxoDrV9m2F1X11Nz9K3?preload=1"
        allow="fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
        frameborder="0"
        style="position: absolute; width: 100%; height: 100%; top: 0; left: 0"
      ></iframe>
    </div>

    <div
      class="p-[18px] hidden lg:flex items-start rounded-[20px] bg-white gap-4"
    >
      <a href="/media/Yoga/preim2.jpg" target="_blank" class="w-1/2">
        <img
          src="/media/Yoga/preim2.jpg"
          alt="Преимущества"
          loading="lazy"
          class="w-full rounded-[20px]"
        />
      </a>
      <p class="w-1/2 text-[14px] 2xl:text-[16px] xl:leading-5">
        Наш центр имеет лицензию на образовательную деятельность, после обучения
        вы можете получить налоговый вычет
      </p>
    </div>
    <div
      class="p-[18px] hidden lg:flex items-start rounded-[20px] bg-white gap-4"
    >
      <img
        src="/media/Yoga/preim3.jpg"
        alt="Преимущества"
        loading="lazy"
        class="w-1/2 rounded-[20px]"
      />
      <p class="w-1/2 text-[14px] 2xl:text-[16px] xl:leading-5">
        Вы получаете официальный документ, и компетенцию, которая позволит
        эффективно работать фитнес-тренером
      </p>
    </div>
    <div
      class="p-[18px] hidden lg:flex items-start rounded-[20px] bg-white gap-4"
    >
      <img
        src="/media/Yoga/preim4.jpg"
        alt="Преимущества"
        loading="lazy"
        class="w-1/2 rounded-[20px]"
      />
      <p class="w-1/2 text-[14px] 2xl:text-[16px] xl:leading-5">
        Учитесь только у экспертов со стажем более 20 лет в сфере фитнеса и
        образования
      </p>
    </div>
    <div
      class="p-[18px] hidden lg:flex items-start rounded-[20px] bg-white gap-4"
    >
      <img
        src="/media/Yoga/preim5.jpg"
        alt="Преимущества"
        loading="lazy"
        class="w-1/2 rounded-[20px]"
      />
      <p class="w-1/2 text-[14px] 2xl:text-[16px] xl:leading-5">
        Учитесь сейчас - платите потом!Доступна рассрочка на 3, 4 или 6 месяцев
      </p>
    </div>
  </div>
</template>
