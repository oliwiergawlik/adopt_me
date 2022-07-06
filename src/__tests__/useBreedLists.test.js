/**
 * @jest-environment jsdom
 */

import {expect, test} from "@jest/globals";
import {render} from "@testing-library/react";
import useBreedList from "../hooks/useBreedList";
import {renderHook} from "@testing-library/react";
import {act} from "react-dom/test-utils";

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

})