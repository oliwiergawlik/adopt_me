/**
 * @jest-environment jsdom
 */

import {expect, test} from "@jest/globals";
import {act, render} from "@testing-library/react";
import Carousel from "../components/Carousel";

test('lets user click on thumbnails to make them the hero', async () => {
    const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

    const carousel = render(<Carousel images={images}/>);
    const hero = await carousel.findByTestId('thumbnail');
    expect(hero.src).toContain(images[0])

    for (const image of images) {
        const idx = images.indexOf(image);
        const thumbnail = await carousel.findByTestId(`thumbnail-${idx}`);

        await act(() => {
            thumbnail.click();
        })

        expect(hero.src).toContain(image)
    }
})

test('after clicking on thumbnail its making its have a "active" class', async () => {
    const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

    const carousel = render(<Carousel images={images}/>);
    const hero = await carousel.findByTestId('thumbnail');
    expect(hero.src).toContain(images[0])

    for (const image of images) {
        const idx = images.indexOf(image);
        const thumbnail = await carousel.findByTestId(`thumbnail-${idx}`);

        await act(() => {
            thumbnail.click();
        })

        expect(thumbnail.classList).toContain('active')
    }
})