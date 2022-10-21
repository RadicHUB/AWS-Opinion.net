/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function ContinueFacebook(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(47,128,237,1)"
      borderRadius="4px"
      padding="11px 19px 11px 19px"
      {...rest}
      {...getOverrideProps(overrides, "ContinueFacebook")}
    >
      <View
        width="18px"
        height="18px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "18 / facebook")}
      >
        <Icon
          width="13.5px"
          height="13.5px"
          viewBox={{ minX: 0, minY: 0, width: 13.5, height: 13.5 }}
          paths={[
            {
              d: "M12.7893 6.61236e-17L0.710735 6.61236e-17C0.526336 0.012452 0.352704 0.0913307 0.222017 0.222017C0.0913307 0.352704 0.012452 0.526336 0 0.710735L2.20412e-17 12.7893C0.00104256 12.9774 0.0762582 13.1576 0.209322 13.2907C0.342385 13.4237 0.522558 13.499 0.710735 13.5L7.17644 13.5L7.17644 8.24215L5.47068 8.24215L5.47068 6.25288L7.24712 6.25288L7.24712 4.76074C7.20883 4.40289 7.24993 4.041 7.3675 3.70086C7.48506 3.36071 7.6762 3.05068 7.92728 2.79284C8.17836 2.53501 8.48322 2.33572 8.82013 2.20918C9.15703 2.08264 9.5177 2.03195 9.87644 2.06074C10.5872 2.06074 11.2264 2.13141 11.4393 2.13141L11.4393 3.97932L10.3736 3.97932C9.52068 3.97932 9.37853 4.40576 9.37853 4.97435L9.37853 6.25288L11.3678 6.25288L11.0835 8.31362L9.30785 8.31362L9.30785 13.5L12.7893 13.5C12.9774 13.499 13.1576 13.4237 13.2907 13.2907C13.4237 13.1576 13.499 12.9774 13.5 12.7893L13.5 0.710735C13.4875 0.526336 13.4087 0.352704 13.278 0.222017C13.1473 0.0913307 12.9737 0.012452 12.7893 0L12.7893 6.61236e-17Z",
              fill: "rgba(64,122,234,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "icon")}
        ></Icon>
      </View>
      <Text
        fontFamily="Nunito Sans"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="227px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Continue with Facebook"
        {...getOverrideProps(overrides, "Continue with Facebook")}
      ></Text>
    </Flex>
  );
}
