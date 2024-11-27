<template>
    <div class="h-full flex items-center justify-center bg-[#dbe5fb] font-['Inter']">
        <div class="bg-white p-[48px] max-w-[787px] max-h-[428px] rounded-xl flex gap-10">
            <!-- Left col -->
            <img src="/images/design-code-1-product.png" />

            <!-- Right col -->
            <div class="flex flex-col justify-between">
                <div>
                    <div class="flex justify-between align-end">
                        <div class="rounded-full bg-[#020712CC] px-[14px] py-[7px] text-[12px] text-white">
                            FitLife
                        </div>
                        <p class="text-[#02071280] text-[12px]">XV-3855988</p>
                    </div>
                    <p class="text-[#020712CC] text-[32px] font-[700] leading-[32px] mt-3">Montre Connectée FitLife Pro
                        5+</p>
                    <div class="flex mt-2 align-center">
                        <StarIconSolid class="size-5 stroke-2 text-[#EDCF5D]" v-for="i in 4" />
                        <StarIcon class="size-5 stroke-2 text-[#EDCF5D]" />
                        <p class="ml-3 text-[12px] text-[#02071280]">43 notes</p>
                    </div>
                </div>


                <div>
                    <p class="text-[#02071266] text-[16px] line-through ">183.99 €</p>
                    <p class="text-[48px] font-[700] leading-[1]">149,99 €</p>
                </div>

                <div class="flex gap-3">
                    <button
                        class="bg-[#477AEB] hover:bg-blue-700 text-white text-[16px] font-[600] py-2 px-4 rounded-xl grow">
                        Ajouter au panier
                    </button>
                    <button class="bg-[#F6F8FE] text-[#477AEB] hover:bg-red-200 hover:text-red-500 rounded-xl p-3">
                        <HeartIcon class="size-7 stroke-2" />
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="h-min overflow-hidden rounded-md">
        <img class="hover:scale-125 transition-all duration-500 cursor-pointer"
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="" />
    </div>
</template>

<script setup lang="ts">
import { StarIcon, HeartIcon } from '@heroicons/vue/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/vue/24/solid'
</script>