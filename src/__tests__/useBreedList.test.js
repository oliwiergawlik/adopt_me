/**
 * @jest-environment jsdom
 */

import {expect, test} from "@jest/globals";
import {act, render} from "@testing-library/react";
import useBreedList from "../hooks/useBreedList";

function getBreedList(animal){
    let list;

    function TestComponent(){
        list = useBreedList(animal);
        return null;
    }

    render(<TestComponent/>)
    return list;
}

test('gives an empty list with no animals', async () => {
    const [breedList, status] = getBreedList();

    expect(breedList).toHaveLength(0);
    expect(status).toBe('unloaded');
})