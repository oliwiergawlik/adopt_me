/**
 * @jest-environment jsdom
 */

import {expect, test} from "@jest/globals";
import {render} from "@testing-library/react";
import useBreedList from "../hooks/useBreedList";
import {renderHook} from "@testing-library/react";
import {act} from "react-dom/test-utils";

test('gives an empty list with no animals', async () => {
    const {result} = renderHook(() => useBreedList());
    const [breedList, status] = result.current;

    expect(breedList).toHaveLength(0);
    expect(status).toBe('unloaded')
})


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
            breeds
        })
    )

    let result_;
    await act(() => {
        const {result} = renderHook(() => useBreedList('dog'));
        result_ = result;
    })
    const [breedList, status] = result_.current;
    expect(status).toBe('loaded');
    expect(breedList).toEqual(breeds)
})