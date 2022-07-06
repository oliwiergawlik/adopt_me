/**
 * @jest-environment jsdom
 */

import {expect, test} from "@jest/globals";
import {render} from "@testing-library/react";
import useBreedList from "../hooks/useBreedList";
import {renderHook} from "@testing-library/react";
import {act} from "react-dom/test-utils";

function getBreedList(animal) {
    let list;

    function TestComponent() {
        list = useBreedList(animal);
        return null;
    }

    render(<TestComponent/>)
    return list;
}

test('gives an empty list with no animals', async () => {
    const [breedList, status] = getBreedList();

    expect(breedList).toHaveLength(0);
    expect(status).toBe('unloaded')
})

// -- better solution using renderHook

test('gives an empty list with no animals - better solution', async () => {
    const {result} = renderHook(() => useBreedList());

    const [breedList, status] = result.current;
    expect(breedList).toHaveLength(0);
    expect(status).toBe('unloaded');
})

// gives back breed with an animal

test('gives back breeds with an animal', async () => {
    const breeds = [
        "Havanese",
        "Bichon Frise",
        "Poodle",
        "Maltese",
        "Golden Retriever",
        "Labrador",
        "Husky",
    ]

    fetch.mockResponseOnce(
        JSON.stringify({
            animal: 'dog',
            breeds: breeds
        })
    )

    let result = await act(() => renderHook(() => useBreedList('dog')).result)
    const [breedList, status] = result.current;

    expect(status).toBe('loaded');
    expect(breedList).toEqual(breeds)
})