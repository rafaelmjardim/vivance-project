"use client";

import { ImgComparisonSlider } from "@img-comparison-slider/react";

export default function SliderImage() {
  return (
    <section className="flex h-screen items-center">
      <ImgComparisonSlider className="rounded-2xl shadow-2xl outline-none border border-gray-200">
        <img slot="first" src="madeira.png" />
        <img slot="second" src="steel.png" />
      </ImgComparisonSlider>
    </section>
  );
}
