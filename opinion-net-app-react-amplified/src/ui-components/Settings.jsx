/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
<<<<<<< HEAD
import * as React from "react";
=======
import React from "react";
>>>>>>> cf8717873de6daa0efbe4d06256172b5784f7b9c
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Settings(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      borderRadius="16px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Settings")}
    >
      <View
        width="375px"
        height="86px"
        position="absolute"
        bottom="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group Bottom")}
      >
        <View
          width="375px"
          height="86px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle34792763")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="242px"
          height="62px"
          position="absolute"
          top="15px"
          left="85px"
          {...getOverrideProps(overrides, "Group")}
        >
          <View
            width="24px"
            height="24px"
            position="absolute"
            top="16px"
            left="218px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Right button")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M10 0C4.579 0 0 4.579 0 10C0 15.421 4.579 20 10 20C15.421 20 20 15.421 20 10C20 4.579 15.421 0 10 0ZM10 5C11.727 5 13 6.272 13 8C13 9.728 11.727 11 10 11C8.274 11 7 9.728 7 8C7 6.272 8.274 5 10 5ZM4.894 14.772C5.791 13.452 7.287 12.572 9 12.572L11 12.572C12.714 12.572 14.209 13.452 15.106 14.772C13.828 16.14 12.015 17 10 17C7.985 17 6.172 16.14 4.894 14.772Z",
                  fill: "rgba(47,128,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector34792766")}
            ></Icon>
          </View>
          <View
            width="24px"
            height="24px"
            position="absolute"
            top="16px"
            left="0px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            opacity="0.5"
            {...getOverrideProps(overrides, "Left button")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M10 0C4.486 0 0 3.589 0 8C0 10.908 1.898 13.515 5 14.934L5 20L10.34 15.995C15.697 15.852 20 12.32 20 8C20 3.589 15.514 0 10 0Z",
                  fill: "rgba(79,94,123,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector34792768")}
            ></Icon>
          </View>
          <View
            width="65px"
            height="62px"
            position="absolute"
            top="0px"
            left="74px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Outer logo button")}
          >
            <Icon
              width="56px"
              height="56px"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
              paths={[
                {
                  d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
                  fill: "rgba(47,128,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0px"
              left="3px"
              right="6px"
              {...getOverrideProps(overrides, "Ellipse")}
            ></Icon>
          </View>
          <View
            width="24px"
            height="24px"
            position="absolute"
            top="16px"
            left="93px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Inner logo button")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M10 0C4.486 0 0 3.589 0 8C0 10.907 1.897 13.515 5 14.934L5 20L10.34 15.995C15.697 15.853 20 12.32 20 8C20 3.589 15.514 0 10 0ZM14 9L11 9L11 12L9 12L9 9L6 9L6 7L9 7L9 4L11 4L11 7L14 7L14 9Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector34792772")}
            ></Icon>
          </View>
        </View>
        <Icon
          width="375px"
          height="1px"
          viewBox={{ minX: 0, minY: 0, width: 375, height: 1 }}
          paths={[
            {
              d: "M0 0.5L375 0.5L375 -0.5L0 -0.5L0 0.5Z",
              stroke: "rgba(237,237,237,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Line34792773")}
        ></Icon>
      </View>
      <View
        width="375px"
        height="171px"
        position="absolute"
        top="534px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group Middle (Selections)")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="359px"
          height="56px"
          position="absolute"
          top="3px"
          left="8px"
          {...getOverrideProps(overrides, "Insitution Selection")}
        >
          <View
            width="359px"
            height="56px"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle34792776")}
          ></View>
          <View
            width="7.52px"
            height="10.44px"
            position="absolute"
            top="23px"
            left="338px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Arrow sign34792777")}
          >
            <Icon
              width="7.520111083984375px"
              height="10.437408447265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.520111083984375,
                height: 10.437408447265625,
              }}
              paths={[
                {
                  d: "M1.49325 10.4374L0.838647 11.1934L1.49325 11.7602L2.14785 11.1934L1.49325 10.4374ZM7.52011 5.2187L8.17471 5.97467L9.04776 5.2187L8.17471 4.46273L7.52011 5.2187ZM1.49325 0L2.14785 -0.755973L1.49325 -1.3228L0.838648 -0.755973L1.49325 0ZM0 1.29302L-0.654602 0.537042L-1.52764 1.29302L-0.654602 2.04899L0 1.29302ZM4.53361 5.2187L5.18821 5.97467L6.06126 5.2187L5.18821 4.46273L4.53361 5.2187ZM0 9.14438L-0.654602 8.38841L-1.52764 9.14438L-0.654603 9.90036L0 9.14438ZM2.14785 11.1934L8.17471 5.97467L6.86551 4.46273L0.838648 9.68143L2.14785 11.1934ZM8.17471 4.46273L2.14785 -0.755973L0.838648 0.755973L6.86551 5.97467L8.17471 4.46273ZM0.838648 -0.755973L-0.654602 0.537042L0.654602 2.04899L2.14785 0.755973L0.838648 -0.755973ZM-0.654602 2.04899L3.87901 5.97467L5.18821 4.46273L0.654602 0.537042L-0.654602 2.04899ZM3.87901 4.46273L-0.654602 8.38841L0.654602 9.90036L5.18821 5.97467L3.87901 4.46273ZM-0.654603 9.90036L0.838647 11.1934L2.14785 9.68143L0.654603 8.38841L-0.654603 9.90036Z",
                  stroke: "rgba(124,141,176,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector34792778")}
            ></Icon>
          </View>
          <View
            width="68px"
            height="20px"
            position="absolute"
            top="18px"
            left="71px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title34792779")}
          >
            <Text
              fontFamily="Abhaya Libre SemiBold"
              fontSize="14px"
              fontWeight="400"
              color="rgba(124,141,176,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0px"
              left="5px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Institution"
              {...getOverrideProps(overrides, "Institution")}
            ></Text>
          </View>
          <View
            position="absolute"
            top="30.36%"
            bottom="30.45%"
            left="6.96%"
            right="86.35%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "(i) Logo34792781")}
          >
            <Icon
              width="23px"
              height="23px"
              viewBox={{ minX: 0, minY: 0, width: 23, height: 23 }}
              paths={[
                {
                  d: "M11.5 0L14.0819 7.9463L22.4371 7.9463L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463L8.91809 7.9463L11.5 0Z",
                  fill: "rgba(4,136,219,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="1.71%"
              bottom="-6.51%"
              left="-4.17%"
              right="8.33%"
              {...getOverrideProps(overrides, "Star 1")}
            ></Icon>
          </View>
          <Flex
            gap="4px"
            position="absolute"
            top="4px"
            left="1px"
            width="358px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "button34792783")}
          ></Flex>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="359px"
          height="56px"
          position="absolute"
          top="59px"
          left="8px"
          {...getOverrideProps(overrides, "About Selection")}
        >
          <View
            width="359px"
            height="56px"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle34792785")}
          ></View>
          <View
            width="7.52px"
            height="10.44px"
            position="absolute"
            top="23px"
            left="338px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Arrow sign34792786")}
          >
            <Icon
              width="7.520111083984375px"
              height="10.437408447265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.520111083984375,
                height: 10.437408447265625,
              }}
              paths={[
                {
                  d: "M1.49325 10.4374L0.838647 11.1934L1.49325 11.7602L2.14785 11.1934L1.49325 10.4374ZM7.52011 5.2187L8.17471 5.97467L9.04776 5.2187L8.17471 4.46273L7.52011 5.2187ZM1.49325 0L2.14785 -0.755973L1.49325 -1.3228L0.838648 -0.755973L1.49325 0ZM0 1.29302L-0.654602 0.537042L-1.52764 1.29302L-0.654602 2.04899L0 1.29302ZM4.53361 5.2187L5.18821 5.97467L6.06126 5.2187L5.18821 4.46273L4.53361 5.2187ZM0 9.14438L-0.654602 8.38841L-1.52764 9.14438L-0.654603 9.90036L0 9.14438ZM2.14785 11.1934L8.17471 5.97467L6.86551 4.46273L0.838648 9.68143L2.14785 11.1934ZM8.17471 4.46273L2.14785 -0.755973L0.838648 0.755973L6.86551 5.97467L8.17471 4.46273ZM0.838648 -0.755973L-0.654602 0.537042L0.654602 2.04899L2.14785 0.755973L0.838648 -0.755973ZM-0.654602 2.04899L3.87901 5.97467L5.18821 4.46273L0.654602 0.537042L-0.654602 2.04899ZM3.87901 4.46273L-0.654602 8.38841L0.654602 9.90036L5.18821 5.97467L3.87901 4.46273ZM-0.654603 9.90036L0.838647 11.1934L2.14785 9.68143L0.654603 8.38841L-0.654603 9.90036Z",
                  stroke: "rgba(124,141,176,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector34792787")}
            ></Icon>
          </View>
          <View
            width="54px"
            height="20px"
            position="absolute"
            top="18px"
            left="71px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title34792788")}
          >
            <Text
              fontFamily="Abhaya Libre SemiBold"
              fontSize="14px"
              fontWeight="400"
              color="rgba(124,141,176,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0px"
              left="5px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="About"
              {...getOverrideProps(overrides, "About")}
            ></Text>
          </View>
          <View
            position="absolute"
            top="30.36%"
            bottom="30.45%"
            left="6.96%"
            right="86.35%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "(i) Logo34792790")}
          >
            <Icon
              width="20px"
              height="18.288772583007812px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20,
                height: 18.288772583007812,
              }}
              paths={[
                {
                  d: "M10 0C4.486 0 0 4.10217 0 9.14438C0 14.1866 4.486 18.2888 10 18.2888C15.514 18.2888 20 14.1866 20 9.14438C20 4.10217 15.514 0 10 0ZM11 13.7166L9 13.7166L9 8.22995L11 8.22995L11 13.7166ZM11 6.40107L9 6.40107L9 4.57219L11 4.57219L11 6.40107Z",
                  fill: "rgba(47,128,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="6.43%"
              bottom="10.23%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector34792791")}
            ></Icon>
          </View>
          <Flex
            gap="4px"
            position="absolute"
            top="4px"
            left="1px"
            width="358px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "button34792792")}
          ></Flex>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="359px"
          height="56px"
          position="absolute"
          top="115px"
          left="8px"
          {...getOverrideProps(overrides, "Logout Selection")}
        >
          <View
            width="359px"
            height="56px"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle34792794")}
          ></View>
          <View
            width="7.52px"
            height="10.44px"
            position="absolute"
            top="23px"
            left="338px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Arrow sign34792795")}
          >
            <Icon
              width="7.520111083984375px"
              height="10.437408447265625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.520111083984375,
                height: 10.437408447265625,
              }}
              paths={[
                {
                  d: "M1.49325 10.4374L0.838647 11.1934L1.49325 11.7602L2.14785 11.1934L1.49325 10.4374ZM7.52011 5.2187L8.17471 5.97467L9.04776 5.2187L8.17471 4.46273L7.52011 5.2187ZM1.49325 0L2.14785 -0.755973L1.49325 -1.3228L0.838648 -0.755973L1.49325 0ZM0 1.29302L-0.654602 0.537042L-1.52764 1.29302L-0.654602 2.04899L0 1.29302ZM4.53361 5.2187L5.18821 5.97467L6.06126 5.2187L5.18821 4.46273L4.53361 5.2187ZM0 9.14438L-0.654602 8.38841L-1.52764 9.14438L-0.654603 9.90036L0 9.14438ZM2.14785 11.1934L8.17471 5.97467L6.86551 4.46273L0.838648 9.68143L2.14785 11.1934ZM8.17471 4.46273L2.14785 -0.755973L0.838648 0.755973L6.86551 5.97467L8.17471 4.46273ZM0.838648 -0.755973L-0.654602 0.537042L0.654602 2.04899L2.14785 0.755973L0.838648 -0.755973ZM-0.654602 2.04899L3.87901 5.97467L5.18821 4.46273L0.654602 0.537042L-0.654602 2.04899ZM3.87901 4.46273L-0.654602 8.38841L0.654602 9.90036L5.18821 5.97467L3.87901 4.46273ZM-0.654603 9.90036L0.838647 11.1934L2.14785 9.68143L0.654603 8.38841L-0.654603 9.90036Z",
                  stroke: "rgba(124,141,176,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector34792796")}
            ></Icon>
          </View>
          <View
            width="54px"
            height="20px"
            position="absolute"
            top="18px"
            left="71px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title34792797")}
          >
            <Text
              fontFamily="Abhaya Libre SemiBold"
              fontSize="14px"
              fontWeight="400"
              color="rgba(124,141,176,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0px"
              left="5px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Logout"
              {...getOverrideProps(overrides, "Logout")}
            ></Text>
          </View>
          <View
            position="absolute"
            top="30.36%"
            bottom="30.45%"
            left="6.96%"
            right="86.35%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Lock Logo")}
          >
            <Icon
              width="16px"
              height="18.28875732421875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16,
                height: 18.28875732421875,
              }}
              paths={[
                {
                  d: "M8 0C5.243 0 3 2.05109 3 4.57219L3 7.31551L2 7.31551C1.46957 7.31551 0.960859 7.50819 0.585786 7.85117C0.210714 8.19415 1.77636e-15 8.65934 0 9.14438L0 16.4599C8.88178e-16 16.9449 0.210714 17.4101 0.585786 17.7531C0.960859 18.0961 1.46957 18.2888 2 18.2888L14 18.2888C14.5304 18.2888 15.0391 18.0961 15.4142 17.7531C15.7893 17.4101 16 16.9449 16 16.4599L16 9.14438C16 8.65934 15.7893 8.19415 15.4142 7.85117C15.0391 7.50819 14.5304 7.31551 14 7.31551L13 7.31551L13 4.57219C13 2.05109 10.757 0 8 0ZM5 4.57219C5 3.05971 6.346 1.82888 8 1.82888C9.654 1.82888 11 3.05971 11 4.57219L11 7.31551L5 7.31551L5 4.57219ZM9 14.3777L9 16.4599L7 16.4599L7 14.3777C6.65039 14.1946 6.36966 13.919 6.19483 13.5871C6.02 13.2551 5.95928 12.8826 6.02068 12.5185C6.08208 12.1543 6.26272 11.8158 6.53876 11.5475C6.81481 11.2791 7.17332 11.0936 7.567 11.0153C7.85942 10.9562 8.16262 10.9579 8.45425 11.0202C8.74587 11.0825 9.01849 11.2038 9.25198 11.3753C9.48548 11.5468 9.67391 11.764 9.80337 12.011C9.93283 12.2579 10 12.5283 10 12.8021C9.99943 13.122 9.90669 13.436 9.73113 13.7126C9.55557 13.9892 9.30339 14.2186 9 14.3777L9 14.3777Z",
                  fill: "rgba(47,128,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="16.67%"
              right="16.67%"
              {...getOverrideProps(overrides, "Vector34792800")}
            ></Icon>
          </View>
          <Flex
            gap="4px"
            position="absolute"
            top="4px"
            left="1px"
            width="358px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "button34792801")}
          ></Flex>
        </View>
      </View>
      <View
        width="327px"
        height="129px"
        position="absolute"
        top="133px"
        left="24px"
        overflow="hidden"
        border="1px SOLID rgba(47,128,237,1)"
        boxShadow="0px 2px 4px rgba(0.02840001881122589, 0.017256975173950195, 0.5744096636772156, 0.10000000149011612)"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Group Middle (Page Pop)")}
      >
        <View
          width="217px"
          height="29px"
          position="absolute"
          top="93px"
          left="20px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "User ID")}
        >
          <Text
            fontFamily="Anek Tamil"
            fontSize="12px"
            fontWeight="500"
            color="rgba(27,26,87,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="222.26px"
            position="absolute"
            top="6px"
            left="5px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1c84fb90-12c4-11e1-840d-7b25c5ee775h"
            {...getOverrideProps(
              overrides,
              "1c84fb90-12c4-11e1-840d-7b25c5ee775h"
            )}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="277px"
          height="25px"
          position="absolute"
          top="73px"
          left="25px"
          {...getOverrideProps(overrides, "Description")}
        >
          <Text
            fontFamily="Anek Tamil"
            fontSize="18px"
            fontWeight="500"
            color="rgba(27,26,87,1)"
            lineHeight="21.09375px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="277px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Anonymous Username Identifier:"
            {...getOverrideProps(overrides, "Anonymous Username Identifier:")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="10.08%"
          bottom="50.39%"
          left="7.65%"
          right="76.76%"
          {...getOverrideProps(overrides, "Profile pic")}
        >
          <Icon
            width="51px"
            height="51px"
            viewBox={{ minX: 0, minY: 0, width: 51, height: 51 }}
            paths={[
              {
                d: "M25.5 0C11.6764 0 0 11.6764 0 25.5C0 39.3236 11.6764 51 25.5 51C39.3236 51 51 39.3236 51 25.5C51 11.6764 39.3236 0 25.5 0ZM25.5 12.75C29.9038 12.75 33.15 15.9936 33.15 20.4C33.15 24.8064 29.9038 28.05 25.5 28.05C21.0987 28.05 17.85 24.8064 17.85 20.4C17.85 15.9936 21.0987 12.75 25.5 12.75ZM12.4797 37.6686C14.767 34.3026 18.5819 32.0586 22.95 32.0586L28.05 32.0586C32.4207 32.0586 36.233 34.3026 38.5203 37.6686C35.2614 41.157 30.6383 43.35 25.5 43.35C20.3617 43.35 15.7386 41.157 12.4797 37.6686Z",
                fill: "rgba(79,94,123,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Vector34792808")}
          ></Icon>
        </View>
      </View>
      <Icon
        width="375px"
        height="1px"
        viewBox={{ minX: 0, minY: 0, width: 375, height: 1 }}
        paths={[
          {
            d: "M0 0.5L375 0.5L375 -0.5L0 -0.5L0 0.5Z",
            stroke: "rgba(237,237,237,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="97px"
        left="0px"
        {...getOverrideProps(overrides, "Line34793535")}
      ></Icon>
      <View
        width="375px"
        height="79px"
        position="absolute"
        top="10px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group Top")}
      >
        <View
          width="93px"
          height="33px"
          position="absolute"
          top="39px"
          left="0px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title34792810")}
        >
          <Text
            fontFamily="Anek Tamil"
            fontSize="18px"
            fontWeight="500"
            color="rgba(27,26,87,1)"
            lineHeight="21.09375px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="8px"
            left="17px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Settings"
            {...getOverrideProps(overrides, "Settings34792811")}
          ></Text>
        </View>
        <View
          width="144px"
          height="34px"
          position="absolute"
          top="10px"
          left="116px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title34792812")}
        >
          <Text
            fontFamily="Anek Tamil"
            fontSize="24px"
            fontWeight="500"
            color="rgba(27,26,87,1)"
            lineHeight="28.125px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="120.5px"
            height="33.97px"
            position="absolute"
            top="-3px"
            left="9px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Opinion.net"
            {...getOverrideProps(overrides, "Opinion.net")}
          ></Text>
        </View>
      </View>
    </View>
  );
}
