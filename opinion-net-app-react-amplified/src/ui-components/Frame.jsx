/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Frame(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M10 0C4.486 0 0 3.589 0 8C0 10.908 1.898 13.515 5 14.934L5 20L10.34 15.995C15.697 15.852 20 12.32 20 8C20 3.589 15.514 0 10 0Z",
          fill: "rgba(47,128,237,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Frame")}
    ></Icon>
  );
}
