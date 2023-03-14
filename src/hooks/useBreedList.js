import { useEffect, useState } from "react";

const localCache = {};

function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
            setStatus("loaded");
        } else {
            requestBreedList().catch(() => {
                setBreedList([]);
                setStatus("unloaded");
            }).catch((error) => {
                throw new Error(`Something went wrong with loading!` + error);
            })
        }
    }, [animal]);

    async function requestBreedList() {
        setBreedList([]);
        setStatus("loading");
        const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

        const data = await response.json();
        localCache[animal] = data.breeds || [];
        setBreedList(localCache[animal]);
        setStatus("loaded");
    }

    return [breedList, status];
}

export default useBreedList;
