import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import { Body, H1 } from "../Typography";
import { Flex } from "../View";
import { Slider, SliderProps } from "./slider";

export default {
  component: Slider,
  title: "Atoms/Slider/Slider",
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Default: Story<SliderProps> = (args) => {
  const [value, setValue] = useState([10]);
  return (
    <div>
      <Slider
        value={value}
        onValueChange={(value) => value && setValue(value)}
        onFinalChange={(value) => console.log(value)}
        {...args}
      />
      <H1.Number>Value: {value}</H1.Number>
    </div>
  );
};
Default.args = {};
Default.argTypes = {};

export const Colored: Story<SliderProps> = (args) => {
  const [value, setValue] = useState([10]);
  return (
    <div>
      <Slider
        value={value}
        onValueChange={(value) => value && setValue(value)}
        onFinalChange={(value) => console.log(value)}
        rangeColor="orange"
        {...args}
      />
      <H1.Number>Value: {value}</H1.Number>
    </div>
  );
};
Default.args = {};
Default.argTypes = {};

export const NoValues: Story<SliderProps> = (args) => {
  const [value, setValue] = useState([10]);
  return (
    <div>
      <Slider
        value={value}
        onValueChange={(value) => value && setValue(value)}
        onFinalChange={(value) => console.log(value)}
        // thumbValue="hidden"
        valueTickBar="hidden"
        minMaxValues="hidden"
        {...args}
      />
      <H1.Number>Value: {value}</H1.Number>
    </div>
  );
};
NoValues.args = {};
NoValues.argTypes = {};

export const Vertical: Story<SliderProps> = (args) => {
  const [value, setValue] = useState([10]);
  return (
    <Flex flexDirection="column" height="300px">
      <H1.Number>Value: {value}</H1.Number>
      <Slider
        value={value}
        onValueChange={(value) => value && setValue(value)}
        onFinalChange={(value) => console.log(value)}
        orientation="vertical"
        {...args}
      />
    </Flex>
  );
};
Vertical.args = {};
Vertical.argTypes = {};

export const Disabled: Story<SliderProps> = (args) => {
  const [value, setValue] = useState([10]);
  return (
    <div>
      <Slider
        value={value}
        onValueChange={(value) => value && setValue(value)}
        onFinalChange={(value) => console.log(value)}
        disabled
        {...args}
      />
      <H1.Number>Value: {value}</H1.Number>
    </div>
  );
};
Disabled.args = {};
Disabled.argTypes = {};

export const Range: Story<SliderProps> = (args) => {
  const [value, setValue] = useState([25, 75]);
  return (
    <div>
      <Slider
        value={value}
        onValueChange={(value) => value && setValue(value)}
        onFinalChange={(value) => console.log(value)}
        {...args}
      />
      <H1.Number>Min Value: {value[0]}</H1.Number>
      <H1.Number>Max Value: {value[1]}</H1.Number>
    </div>
  );
};
Range.args = {};
Range.argTypes = {};

export const ColoredRange: Story<SliderProps> = (args) => {
  const [value, setValue] = useState([25, 75]);
  return (
    <div>
      <Slider
        value={value}
        onValueChange={(value) => value && setValue(value)}
        onFinalChange={(value) => console.log(value)}
        rangeColor="orange"
        {...args}
      />
      <H1.Number>Min Value: {value[0]}</H1.Number>
      <H1.Number>Max Value: {value[1]}</H1.Number>
    </div>
  );
};
ColoredRange.args = {};
ColoredRange.argTypes = {};

export const MinMaxStep: Story<SliderProps> = (args) => {
  const [value, setValue] = useState([90]);
  return (
    <div>
      <Slider
        value={value}
        min={-300}
        max={300}
        step={10}
        onValueChange={(value) => value && setValue(value)}
        onFinalChange={(value) => console.log(value)}
        {...args}
      />
      <H1.Number>Value: {value}</H1.Number>
    </div>
  );
};
MinMaxStep.args = {};
MinMaxStep.argTypes = {};

export const RightToLeft: Story<SliderProps> = (args) => (
  <Slider dir="rtl" {...args}></Slider>
);
RightToLeft.args = {};
RightToLeft.argTypes = {};

// export const Horizontal = () => (
//   <>
//     <Slider
//       className={rootClass}
//       defaultValue={[10, 30]}
//       minStepsBetweenThumbs={1}
//       onValueChange={(value) => console.log(value)}
//     >
//       <SliderTrack className={trackClass}>
//         <SliderRange className={rangeClass} />
//       </SliderTrack>
//       <SliderThumb className={thumbClass} />
//       <SliderThumb className={thumbClass} />
//     </Slider>

//     <br />

//     <Slider className={rootClass} defaultValue={[10]}>
//       <SliderTrack className={trackClass}>
//         <SliderRange className={rangeClass} />
//       </SliderTrack>
//       <SliderThumb className={thumbClass} />
//     </Slider>
//   </>
// );

// export const WithMinimumStepsBetweenThumbs = () => (
//   <Slider className={rootClass} defaultValue={[10, 30]} minStepsBetweenThumbs={3}>
//     <SliderTrack className={trackClass}>
//       <SliderRange className={rangeClass} />
//     </SliderTrack>
//     <SliderThumb className={thumbClass} />
//     <SliderThumb className={thumbClass} />
//   </Slider>
// );

// export const WithMultipleRanges = () => {
//   const [minStepsBetweenThumbs, setMinStepsBetweenThumbs] = React.useState(0);

//   return (
//     <>
//       <label>
//         Minimum steps between thumbs:{' '}
//         <input
//           type="number"
//           value={minStepsBetweenThumbs}
//           onChange={(event) => setMinStepsBetweenThumbs(Number(event.target.value))}
//           style={{ width: 30 }}
//         />
//       </label>

//       <br />
//       <br />

//       <Slider
//         className={rootClass}
//         defaultValue={[10, 15, 20, 80]}
//         minStepsBetweenThumbs={minStepsBetweenThumbs}
//       >
//         <SliderTrack className={trackClass}>
//           <SliderRange className={rangeClass} />
//         </SliderTrack>
//         <SliderThumb className={thumbClass} />
//         <SliderThumb className={thumbClass} />
//         <SliderThumb className={thumbClass} />
//         <SliderThumb className={thumbClass} />
//       </Slider>
//     </>
//   );
// };

// export const SmallSteps = () => {
//   const [value, setValue] = React.useState([0.1]);
//   return (
//     <>
//       <Slider
//         className={rootClass}
//         value={value}
//         onValueChange={setValue}
//         min={0.1}
//         max={0.2}
//         step={0.003}
//       >
//         <SliderTrack className={trackClass}>
//           <SliderRange className={rangeClass} />
//         </SliderTrack>
//         <SliderThumb className={thumbClass} />
//       </Slider>
//       <div>{value}</div>
//     </>
//   );
// };

// export const WithinForm = () => {
//   const [data, setData] = React.useState({ single: [0], multiple: [10, 15, 20, 80] });
//   return (
//     <form
//       onSubmit={(event) => event.preventDefault()}
//       onChange={(event) => {
//         const formData = serialize(event.currentTarget, { hash: true });
//         setData(formData as any);
//       }}
//     >
//       <fieldset>
//         <legend>Single value: {String(data.single)}</legend>
//         <Slider name="single" defaultValue={data.single} className={rootClass}>
//           <SliderTrack className={trackClass}>
//             <SliderRange className={rangeClass} />
//           </SliderTrack>
//           <SliderThumb className={thumbClass} />
//         </Slider>
//       </fieldset>

//       <br />
//       <br />

//       <fieldset>
//         <legend>Multiple value: {String(data.multiple)}</legend>
//         <Slider name="multiple" defaultValue={data.multiple} className={rootClass}>
//           <SliderTrack className={trackClass}>
//             <SliderRange className={rangeClass} />
//           </SliderTrack>
//           <SliderThumb className={thumbClass} />
//           <SliderThumb className={thumbClass} />
//           <SliderThumb className={thumbClass} />
//           <SliderThumb className={thumbClass} />
//         </Slider>
//       </fieldset>
//     </form>
//   );
// };

// export const Strict = () => (
//   <React.StrictMode>
//     <Slider className={rootClass}>
//       <SliderTrack className={trackClass}>
//         <SliderRange className={rangeClass} />
//       </SliderTrack>
//       <SliderThumb className={thumbClass} />
//     </Slider>
//     <Slider className={rootClass} defaultValue={[10, 15, 20, 80]}>
//       <SliderTrack className={trackClass}>
//         <SliderRange className={rangeClass} />
//       </SliderTrack>
//       <SliderThumb className={thumbClass} />
//       <SliderThumb className={thumbClass} />
//       <SliderThumb className={thumbClass} />
//       <SliderThumb className={thumbClass} />
//     </Slider>
//   </React.StrictMode>
// );

// export const Styled = () => (
//   <Slider className={rootClass}>
//     <SliderTrack className={trackClass}>
//       <SliderRange className={rangeClass} />
//     </SliderTrack>
//     <SliderThumb className={thumbClass} />
//   </Slider>
// );
