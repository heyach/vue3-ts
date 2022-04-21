import { ref, computed } from "vue";

export default function useGoodsFilter(goodsList: any) {
    const filterKey = ref("");
    const filterGoodsList = computed(() => {
        return goodsList.value.filter((goods: any) => goods.name.indexOf(filterKey.value) != -1);
    });

    return {
        filterKey,
        filterGoodsList,
    };
}
