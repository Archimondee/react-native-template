import { useDispatch, useSelector } from "react-redux";
import { apiGetCharacter } from "services/ExampleService";
import type { StoreStateType } from "stores";
import { onGetCharacterData } from "stores/persist/persistSlice";

export const useExample = () => {
  const dispatch = useDispatch();
  const { character, dataLoading } = useSelector(
    (state: StoreStateType) => state.persist,
  );
  const getExampleCharacter = async (id: number) => {
    try {
      const resp = await apiGetCharacter(id);
      if (resp.data) {
        dispatch(onGetCharacterData(resp.data));
      }
      return {
        status: "success",
        message: "",
      };
    } catch (errors) {
      return {
        status: "failed",
        message: errors,
      };
    }
  };

  return {
    getExampleCharacter,
    character,
    dataLoading,
  };
};
