/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Increment(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "32 / plus": {}, Increment: {} },
      variantValues: { state: "Default", type: "Add" },
    },
    {
      overrides: {
        "32 / plus": {},
        Increment: { backgroundColor: "rgba(151,151,151,0.15)" },
      },
      variantValues: { state: "Hover", type: "Add" },
    },
    {
      overrides: {
        "32 / plus": {},
        Increment: { border: "1px SOLID rgba(151,151,151,1)" },
      },
      variantValues: { state: "Focused", type: "Add" },
    },
    {
      overrides: { "32 / plus": {}, Increment: {} },
      variantValues: { state: "Inactive", type: "Add" },
    },
    {
      overrides: {
        "32 / plus": {},
        Increment: { backgroundColor: "rgba(151,151,151,0.45)" },
      },
      variantValues: { state: "Pressed", type: "Add" },
    },
    {
      overrides: { "32 / plus": {}, Increment: {} },
      variantValues: { state: "Default", type: "Subtract" },
    },
    {
      overrides: {
        "32 / plus": {},
        Increment: { backgroundColor: "rgba(151,151,151,0.15)" },
      },
      variantValues: { state: "Hover", type: "Subtract" },
    },
    {
      overrides: {
        "32 / plus": {},
        Increment: { border: "1px SOLID rgba(151,151,151,1)" },
      },
      variantValues: { state: "Focused", type: "Subtract" },
    },
    {
      overrides: { "32 / plus": {}, Increment: {} },
      variantValues: { state: "Inactive", type: "Subtract" },
    },
    {
      overrides: {
        "32 / plus": {},
        Increment: { backgroundColor: "rgba(151,151,151,0.45)" },
      },
      variantValues: { state: "Pressed", type: "Subtract" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="32px"
      height="32px"
      position="relative"
      borderRadius="4px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      display="block"
      {...rest}
      {...getOverrideProps(overrides, "Increment")}
    >
      <View
        width="32px"
        height="32px"
        position="absolute"
        top="calc(50% - 16px - 0px)"
        left="calc(50% - 16px - 0px)"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        display="block"
        {...getOverrideProps(overrides, "32 / plus")}
      ></View>
    </View>
  );
}
