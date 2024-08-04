<script setup lang="ts">
  import { ref } from 'vue';
  import type { FaqItem, InputItem, HeroItem } from "@/types";
  import { faqItemsArr, heroItemsArr, inputItemsArr } from './utils/pageData';
  import FAQElement from './components/FAQElement.vue';
  import HeroElement from './components/HeroElement.vue';
  import InputElement from './components/InputElement.vue';

  const allFAQs = ref<FaqItem[]>(faqItemsArr);
  const allHeros = ref<HeroItem[]>(heroItemsArr);
  const allInputs = ref<InputItem[]>(inputItemsArr);


  const currentlyViewedPhoto = ref('thumbnails/thumbnail-1.png');
  const viewedPhotoHandler = ref<null | HTMLImageElement>(null);
  const SCREEN_WIDTH_BREAKPOINT = ref<number>(1280);

  function handlePhotoUpdate(ev: Event) {

    const target = ev.target as HTMLImageElement;

    if(target && viewedPhotoHandler?.value) {
      const [oldPreviewClass, newPreviewClass] = [
        viewedPhotoHandler.value.classList.value.match(/thumbnail-[\d]+/)?.[0], 
        target.classList.value.match(/thumbnail-[\d]+/)?.[0]
      ];

      if(!oldPreviewClass || !newPreviewClass) { return; }

      target.classList.replace(newPreviewClass, oldPreviewClass);
      viewedPhotoHandler.value.classList.replace(oldPreviewClass, newPreviewClass);
      
      currentlyViewedPhoto.value = `thumbnails/thumbnail-${newPreviewClass.slice(newPreviewClass.indexOf('-')  + 1 )}.png`;
    }
  }

  const calculateMaxBreakpoint = function(divider: number) {
    return (divider <= 0)? SCREEN_WIDTH_BREAKPOINT.value : SCREEN_WIDTH_BREAKPOINT.value / divider;
  }

</script>

<template>

  <main class="font-roboto text-coal bg-white box-border min-h-screen py-8 px-12 mx-auto" :class="`max-w-[${calculateMaxBreakpoint(1)}px]`" > 
    <section class="grid grid-cols-1 grid-rows-auto gap-4 sm:grid-cols-2 ">
      <div class="mt-9 text-center     sm:text-left">
        <h1 class="text-h1 font-extrabold"> Chance to win a StockX Mystery Box today! </h1>
        <p class="text-xl font-normal mb-0 mt-8 sm:mt-4 sm:mb-4"> Unleash the Excitement of Mystery Electronics </p>
      </div>
      <div class="block place-self-center relative my-8    sm:my-4 sm:row-span-2 sm:col-span-1 sm:-order-1 sm:justify-self-start">
        <div class="absolute top-0 right-0 -m-[2.5%] min-h-[10rem] min-w-[10rem] h-[12vw] w-[12vw] max-h-[30rem] max-w-[30rem] rounded-full text-center text-white bg-green flex flex-col justify-center items-center">
          <h2 class="text-h3 font-bold m-4">$1.99</h2>
          <p class="text-s"> Original value $500 </p>
        </div>
        <div class="h-[60vw] w-[60vw]    sm:h-[40vw] sm:w-[40vw]">
          <img class="m-auto thumbnail-1 w-full h-full" :src="currentlyViewedPhoto" alt="stockX Mystery Box photo" ref="viewedPhotoHandler" />
        </div>
        <div class="flex align-center justify-between mt-6">
          <div class="max-w-[30%] border-2 rounded-lg border-green thumbnail-2 p-12 hover:cursor-pointer    sm:p-16" @click="handlePhotoUpdate($event)" ></div>
          <div class="max-w-[30%] border-2 rounded-lg border-green thumbnail-3 p-12 hover:cursor-pointer    sm:p-16" @click="handlePhotoUpdate($event)"></div>
          <div class="max-w-[30%] border-2 rounded-lg border-green thumbnail-4 p-12 hover:cursor-pointer    sm:p-16" @click="handlePhotoUpdate($event)"></div>
        </div>
      </div>
      <div class="px-5 pt-6 pb-2 my-4 border-2 border-[#DBDBDB] rounded-lg">
        <h4 class="text-h4 font-medium text-center mb-3"> Enter details </h4>
        <form method="post" class="flex flex-wrap justify-between gap-x-4 gap-y-4">
          <InputElement v-for="(input, index) in allInputs" :key="`input-` + index" :inputData="input" />
          <button class="w-full bg-green text-white font-semibold py-4 px-3 rounded-lg my-2" type="submit"> PROCEED TO PAYMENT </button>
        </form>
        <div class="grid grid-cols-3 mx-auto my-3 place-content-center">
          <img class="max-h-[3rem] m-auto" src="./assets/images/security_logos/logo-1.png" alt="McAfee logo" />
          <img class="max-h-[3rem] m-auto" src="./assets/images/security_logos/logo-2.png" alt="Truste logo" />
          <img class="max-h-[3rem] m-auto" src="./assets/images/security_logos/logo-3.png" alt="256BIT logo" />
        </div>
      </div>
    </section>

    <section class="w-full py-16"> 
      <h2 class="text-h2 font-bold text-center mx-auto my-6    sm:w-[50vw]" :class="`sm:max-w-[${calculateMaxBreakpoint(2)}px]`" > Top Tech Mystery Box at Unbeatable Prices </h2>
      <div class="text-green flex justify-center items-center"> 
        <p class="text-l border-r-2 border-green px-6 text-center"> Fast shipping </p> 
        <p class="text-l border-r-2 border-green px-6 text-center"> Easy returns </p>
        <p class="text-l px-6 text-center"> Special discounts <br class="block sm:hidden"> for students </p>
      </div>
    </section>

    <section>
      <HeroElement v-for="(hero, index) in allHeros" :key="`hero` + index" :heroData="hero" :isEven="Boolean(index % 2)" />
    </section>

    <section class="grid grid-cols-1 grid-rows-auto my-12 bg-lightgray -mx-8 px-8 py-8 gap-x-12 relative    sm:grid-cols-3
      before:absolute before:top-0 before:right-[100%] before:w-[50vw] before:h-full before:bg-lightgray before:hidden   xl:before:block
      after:absolute after:top-0 after:left-[100%] after:w-[50vw] after:h-full after:bg-lightgray  after:hidden    xl:after:block
    ">
      <FAQElement v-for="(faq, index) in allFAQs" :key="`faq-`+ index" :faqData="faq" />
    </section>

    <section> 
      <p class="text-s mb-6 text-center"> We accept the following credit cards </p>
      <div class="flex justify-center"> 
        <img loading="lazy" class="max-h-[3rem]" src="./assets/images/credit-cards.png" alt="Accepted credit cards" />
      </div>
    </section>

  </main>
</template>

<style scoped>

  .thumbnail-1, .thumbnail-2, .thumbnail-3, .thumbnail-4 {
    background-size: contain;
  }

  .thumbnail-1:not(img) { background-image: url('thumbnails/thumbnail-1.png'); }
  .thumbnail-2:not(img) { background-image: url('thumbnails/thumbnail-2.png'); }
  .thumbnail-3:not(img) { background-image: url('thumbnails/thumbnail-3.png'); }
  .thumbnail-4:not(img) { background-image: url('thumbnails/thumbnail-4.png'); }

</style>
