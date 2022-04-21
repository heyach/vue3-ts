import { ref, onMounted, watch } from "vue";
import g from "../../api/getGoodsList";

export default function useGoodsList() {
    const goodsList: any = ref([]);
    const getGoodsList = async () => {
        goodsList.value = g.data;
    };

    onMounted(getGoodsList);

    return {
        goodsList,
        getGoodsList,
    };
}
