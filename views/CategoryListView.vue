<script setup lang="ts">
import ElModal from "~/components/elements/ElModal.vue";
import SizeTableView from "./SizeTableView.vue";

interface Props {
  name: string;
  img: string;
  link: string;
  sizeTable: "kids" | "teenage";
}

const props = defineProps<Props>();
</script>

<template>
  <div class="w-96 h-[70vh]">
    <div class="relative w-full h-full">
      <div class="absolute left-0 right-0 top-0 bottom-0">
        <NuxtImg class="w-full h-full object-cover rounded-2xl" :src="img" />
      </div>
      <div
        class="absolute bottom-3 p-4 rounded-2xl bg-black-500 left-3 right-3 text-center"
      >
        <span class="text-white text-18 cursor-default">{{ name }}</span>
      </div>
      <el-modal>
        <template #activator="{ props }">
          <div
            v-bind="props"
            class="absolute top-1 right-1 pl-2 pr-2 p-1 bg-black hover:shadow-primary-xl flex items-center gap-2 rounded-2xl cursor-pointer transition-all duration-200"
          >
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.4367 7.63188H7.67943M5.4367 9.42606H7.67943M5.4367 11.2202H7.67943M9.47361 11.6688H10.8192C11.1761 11.6688 11.5184 11.527 11.7708 11.2747C12.0231 11.0223 12.1649 10.68 12.1649 10.3232V4.1081C12.1649 3.4293 11.6595 2.85337 10.9831 2.79715C10.7594 2.7786 10.5355 2.76265 10.3115 2.74931M10.3115 2.74931C10.3512 2.87794 10.3707 3.0118 10.3707 3.14642C10.3707 3.26538 10.3234 3.37947 10.2393 3.46359C10.1552 3.54771 10.0411 3.59496 9.92216 3.59496H7.23088C6.98328 3.59496 6.78233 3.39402 6.78233 3.14642C6.78233 3.00827 6.80327 2.8749 6.84214 2.74931M10.3115 2.74931C10.1422 2.20029 9.6303 1.80078 9.02506 1.80078H8.12797C7.84045 1.80085 7.5605 1.89297 7.32912 2.06365C7.09774 2.23434 6.92708 2.47462 6.84214 2.74931M6.84214 2.74931C6.61727 2.76306 6.39359 2.77921 6.16992 2.79715C5.49351 2.85337 4.98815 3.4293 4.98815 4.1081V5.38915M4.98815 5.38915H2.96969C2.5983 5.38915 2.29688 5.69057 2.29688 6.06197V12.7902C2.29688 13.1616 2.5983 13.463 2.96969 13.463H8.80079C9.17219 13.463 9.47361 13.1616 9.47361 12.7902V6.06197C9.47361 5.69057 9.17219 5.38915 8.80079 5.38915H4.98815ZM4.09106 7.63188H4.09584V7.63666H4.09106V7.63188ZM4.09106 9.42606H4.09584V9.43085H4.09106V9.42606ZM4.09106 11.2202H4.09584V11.225H4.09106V11.2202Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="text-white" style="padding-top: 2px"
              >Таблица размеров</span
            >
          </div>
        </template>
        <size-table-view :size-table="sizeTable">
          <h2 class="text-28 text-white">
            Таблица размеров
            <span
              v-if="sizeTable == 'kids'"
              class="cursor-text text-28 text-primary select-text"
              >детских</span
            ><span
              class="cursor-text text-28 text-primary select-text"
              v-if="sizeTable == 'teenage'"
              >подростковых</span
            >
            рубашек
          </h2>
        </size-table-view>
      </el-modal>
    </div>
    <NuxtLink
      :to="props.link"
      class="flex items-center justify-around w-full p-4 rounded-2xl bg-primary-darker mt-2 text-center text-white transition-all shadow-primary hover:bg-primary-darker-xl hover:shadow-primary-xl"
    >
      <span class="text-white pt-1" style="flex: 0 0 90%">Перейти</span>
      <div>
        <svg
          width="26"
          height="12"
          viewBox="0 0 26 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 1L25 6M25 6L20 11M25 6H1"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </NuxtLink>
  </div>
</template>
