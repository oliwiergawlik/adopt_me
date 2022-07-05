/**
 * @jest-environment jsdom
 */

import {expect, test} from "@jest/globals";
import {render} from "@testing-library/react";
import useBreedList from "../hooks/useBreedList";
import {renderHook} from "@testing-library/react";


function getBreedList(animal){
    let list;

    function TestComponent(){
        list = useBreedList(animal);
        return null;
    }

    render(<TestComponent/>)
    return list;
}

test('gives an empty list with no animals - new solution', async () => {
    const [breedList, status] = getBreedList();

    expect(breedList).toHaveLength(0);
    expect(status).toBe('unloaded');
})

// ----------- New solution

test('gives an empty list with no animals', async () => {
    const {result} = renderHook(() => useBreedList())

    const [breedList, status] = result.current;
    expect(breedList).toHaveLength(0);
    expect(status).toBe('unloaded');
})