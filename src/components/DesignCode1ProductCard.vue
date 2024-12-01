<template>
  <div
    class="bg-white p-[48px] lg:max-w-[787px] lg:max-h-[428px] rounded-xl flex flex-col lg:flex-row gap-9 m-[40px] shadow font-['Inter']"
  >
    <!-- Left col -->
    <img src="/images/design-code-1-product.png" class="rounded-xl" />

    <!-- Right col -->
    <div class="flex flex-col justify-between min-h-[332px]">
      <div>
        <div class="flex justify-between items-center">
          <div
            class="rounded-full bg-[#020712CC] px-[14px] py-[7px] text-[12px] text-white"
          >
            FitLife
          </div>
          <p class="text-[#02071280] text-[12px]">XV-3855988</p>
        </div>
        <p class="text-[#020712CC] text-[32px] font-[700] leading-[32px] mt-3">
          Montre Connectée FitLife Pro 5+
        </p>
        <div class="flex mt-2 align-center">
          <StarIconSolid
            class="size-5 stroke-2 text-[#EDCF5D]"
            v-for="i in 4"
          />
          <StarIcon class="size-5 stroke-2 text-[#EDCF5D]" />
          <p class="ml-3 text-[12px] text-[#02071280]">43 notes</p>
        </div>
      </div>

      <div>
        <p class="text-[#02071266] text-[16px] line-through">183.99 €</p>
        <p class="text-[48px] font-[700] leading-[1]">149,99 €</p>
      </div>

      <div class="flex gap-3">
        <!-- Add to cart button -->
        <div
          class="text-white text-[16px] font-[600] rounded-xl grow flex bg-[#477AEB]"
        >
          <!-- Initial state -->
          <button
            @click="quantity++"
            v-if="!quantity"
            class="hover:bg-green-700 py-2 px-4 rounded-xl grow group relative items-center justify-center"
          >
            <p class="group-hover:-translate-x-5 ease duration-300 transform">
              Ajouter au panier
            </p>
            <ShoppingCartIcon
              class="size-5 stroke-2 absolute right-0 top-[30%] duration-300 transform translate-x-full group-hover:-translate-x-5 ease"
            />
          </button>

          <!-- Has quantity state -->
          <div v-else class="grow flex justify-between items-center py-2 px-8">
            <div @click="quantity--">
              <TrashIcon
                class="size-5 cursor-pointer stroke-2"
                v-if="quantity === 1"
              />
              <MinusIcon class="size-5 stroke-2 cursor-pointer" v-else />
            </div>
            <p>{{ quantity }}</p>
            <PlusIcon
              class="size-5 stroke-2 cursor-pointer"
              @click="quantity++"
            />
          </div>
        </div>

        <!-- Like button -->
        <button
          class="bg-[#F6F8FE] text-[#477AEB] hover:bg-red-200 hover:text-red-500 rounded-xl p-3"
          :class="{ 'text-red-500': liked }"
          @click="liked = !liked"
        >
          <HeartIcon class="size-7 stroke-2" v-if="!liked" />
          <HeartIconSolid class="size-7 stroke-2" v-else />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  StarIcon,
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/vue/24/outline";
import {
  StarIcon as StarIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/vue/24/solid";
import { ref } from "vue";

const liked = ref(false);
const quantity = ref(0);
</script>
