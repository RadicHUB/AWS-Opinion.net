/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
<<<<<<< HEAD
<<<<<<< HEAD
import { Icon, Text, View } from "@aws-amplify/ui-react";
=======
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
export default function Settings(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      overflow="hidden"
      position="relative"
<<<<<<< HEAD
<<<<<<< HEAD
      borderRadius="16px"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(255,255,255,1), rgba(244,244,244,1))"
=======
      border="1px SOLID rgba(0,0,0,1)"
      borderRadius="16px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
      border="1px SOLID rgba(0,0,0,1)"
      borderRadius="16px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
      {...rest}
      {...getOverrideProps(overrides, "Settings")}
    >
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="611px"
        left="320px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        opacity="0.4000000059604645"
<<<<<<< HEAD
        {...getOverrideProps(overrides, "Frame3607305")}
=======
        {...getOverrideProps(overrides, "FRAMEY")}
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
      ></View>
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="557px"
        left="316px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        opacity="0.4000000059604645"
<<<<<<< HEAD
        {...getOverrideProps(overrides, "Frame3607307")}
      ></View>
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
        {...getOverrideProps(overrides, "Modal Dialog")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="277px"
          height="43px"
          position="absolute"
          top="73px"
          left="25px"
          {...getOverrideProps(overrides, "Top")}
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
            top="26px"
            left="0px"
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
            {...getOverrideProps(overrides, "Vector361540")}
          ></Icon>
        </View>
      </View>
      <View
        width="375px"
        height="86px"
        position="absolute"
        bottom="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame373410604")}
      >
        <View
          width="375px"
          height="86px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle373410605")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="242px"
          height="56px"
          position="absolute"
          top="15px"
          left="67px"
          {...getOverrideProps(overrides, "Group373410606")}
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
            left="93px"
            right="93px"
            {...getOverrideProps(overrides, "Ellipse")}
          ></Icon>
          <View
            width="24px"
            height="24px"
            position="absolute"
            top="16px"
            left="109px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame373410612")}
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
              {...getOverrideProps(overrides, "Vector373410613")}
            ></Icon>
          </View>
          <View
            width="24px"
            height="24px"
            position="absolute"
            top="16px"
            left="218px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame373410614")}
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
              {...getOverrideProps(overrides, "Vector373410615")}
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
            {...getOverrideProps(overrides, "Frame373410616")}
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
              {...getOverrideProps(overrides, "Vector373410617")}
            ></Icon>
          </View>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="359px"
        height="56px"
        position="absolute"
        top="593px"
        left="8px"
        {...getOverrideProps(overrides, "Group1452")}
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
          {...getOverrideProps(overrides, "Rectangle1453")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="358px"
          height="48px"
          position="absolute"
          top="4px"
          left="1px"
          {...getOverrideProps(overrides, "Group36766720")}
        >
          <Flex
            gap="4px"
            position="absolute"
            top="0px"
            left="0px"
            width="358px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "button37151113")}
          ></Flex>
          <View
            position="absolute"
            top="25%"
            bottom="25%"
            left="6.78%"
            right="86.51%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame36766721")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM11 15L9 15L9 9L11 9L11 15ZM11 7L9 7L9 5L11 5L11 7Z",
                  fill: "rgba(47,128,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="7.13%"
              right="9.54%"
              {...getOverrideProps(overrides, "Vector15174")}
            ></Icon>
          </View>
          <Icon
            width="7.5201416015625px"
            height="11.4139404296875px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 7.5201416015625,
              height: 11.4139404296875,
            }}
            paths={[
              {
                d: "M1.49325 11.414L0.805674 12.1401L1.49325 12.7912L2.18083 12.1401L1.49325 11.414ZM7.52011 5.707L8.20769 6.43311L8.9745 5.707L8.20769 4.98089L7.52011 5.707ZM1.49325 0L2.18083 -0.726113L1.49325 -1.3772L0.805674 -0.726113L1.49325 0ZM0 1.414L-0.687576 0.687887L-1.45439 1.414L-0.687576 2.14011L0 1.414ZM4.53361 5.707L5.22119 6.43311L5.988 5.707L5.22119 4.98089L4.53361 5.707ZM0 10L-0.687576 9.27389L-1.45438 10L-0.687576 10.7261L0 10ZM2.18083 12.1401L8.20769 6.43311L6.83254 4.98089L0.805674 10.6879L2.18083 12.1401ZM8.20769 4.98089L2.18083 -0.726113L0.805674 0.726113L6.83254 6.43311L8.20769 4.98089ZM0.805674 -0.726113L-0.687576 0.687887L0.687576 2.14011L2.18083 0.726113L0.805674 -0.726113ZM-0.687576 2.14011L3.84604 6.43311L5.22119 4.98089L0.687576 0.687887L-0.687576 2.14011ZM3.84604 4.98089L-0.687576 9.27389L0.687576 10.7261L5.22119 6.43311L3.84604 4.98089ZM-0.687576 10.7261L0.805674 12.1401L2.18083 10.6879L0.687576 9.27389L-0.687576 10.7261Z",
                stroke: "rgba(124,141,176,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            position="absolute"
            top="38.11%"
            bottom="38.11%"
            left="94.19%"
            right="3.71%"
            {...getOverrideProps(overrides, "Vector36766723")}
          ></Icon>
        </View>
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
          top="19px"
          left="71px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About"
          {...getOverrideProps(overrides, "About")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="359px"
        height="56px"
        position="absolute"
        top="537px"
        left="8px"
        {...getOverrideProps(overrides, "Group3607296")}
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
          {...getOverrideProps(overrides, "Rectangle3607297")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="358px"
          height="48px"
          position="absolute"
          top="4px"
          left="1px"
          {...getOverrideProps(overrides, "Group36766739")}
        >
          <Flex
            gap="4px"
            position="absolute"
            top="0px"
            left="0px"
            width="358px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "button37151085")}
          ></Flex>
          <View
            position="absolute"
            top="25%"
            bottom="25%"
            left="6.78%"
            right="86.51%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame36766740")}
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
              top="0px"
              left="-1.29px"
              {...getOverrideProps(overrides, "Star 1")}
            ></Icon>
          </View>
          <Icon
            width="7.5201416015625px"
            height="11.4139404296875px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 7.5201416015625,
              height: 11.4139404296875,
            }}
            paths={[
              {
                d: "M1.49325 11.414L7.52011 5.707L1.49325 0L0 1.414L4.53361 5.707L0 10L1.49325 11.414Z",
                fill: "rgba(124,141,176,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="38.11%"
            bottom="38.11%"
            left="94.19%"
            right="3.71%"
            {...getOverrideProps(overrides, "Vector36766742")}
          ></Icon>
        </View>
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
          top="19px"
          left="71px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Institution"
          {...getOverrideProps(overrides, "Institution")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="359px"
        height="56px"
        position="absolute"
        top="649px"
        left="8px"
        {...getOverrideProps(overrides, "Group1444")}
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
          {...getOverrideProps(overrides, "Rectangle1445")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="358px"
          height="48px"
          position="absolute"
          top="4px"
          left="1px"
          {...getOverrideProps(overrides, "Group1446")}
        >
          <Flex
            gap="4px"
            position="absolute"
            top="0px"
            left="0px"
            width="358px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "button37151059")}
          ></Flex>
          <View
            position="absolute"
            top="25%"
            bottom="25%"
            left="6.78%"
            right="86.51%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame15171")}
          >
            <Icon
              width="16px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 16, height: 20 }}
              paths={[
                {
                  d: "M8 0C5.243 0 3 2.243 3 5L3 8L2 8C1.46957 8 0.960859 8.21071 0.585786 8.58579C0.210714 8.96086 1.77636e-15 9.46957 0 10L0 18C8.88178e-16 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20L14 20C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18L16 10C16 9.46957 15.7893 8.96086 15.4142 8.58579C15.0391 8.21071 14.5304 8 14 8L13 8L13 5C13 2.243 10.757 0 8 0ZM5 5C5 3.346 6.346 2 8 2C9.654 2 11 3.346 11 5L11 8L5 8L5 5ZM9 15.723L9 18L7 18L7 15.723C6.65039 15.5228 6.36966 15.2213 6.19483 14.8584C6.02 14.4954 5.95928 14.0879 6.02068 13.6898C6.08208 13.2916 6.26272 12.9214 6.53876 12.6279C6.81481 12.3345 7.17332 12.1316 7.567 12.046C7.85942 11.9813 8.16262 11.9832 8.45425 12.0513C8.74587 12.1194 9.01849 12.2521 9.25198 12.4397C9.48548 12.6272 9.67391 12.8647 9.80337 13.1348C9.93283 13.4049 10 13.7005 10 14C9.99943 14.3497 9.90669 14.6932 9.73113 14.9956C9.55557 15.2981 9.30339 15.549 9 15.723L9 15.723Z",
                  fill: "rgba(47,128,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="16.67%"
              right="16.67%"
              {...getOverrideProps(overrides, "Vector15172")}
            ></Icon>
          </View>
          <Icon
            width="7.5201416015625px"
            height="11.4139404296875px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 7.5201416015625,
              height: 11.4139404296875,
            }}
            paths={[
              {
                d: "M1.49325 11.414L0.805674 12.1401L1.49325 12.7912L2.18083 12.1401L1.49325 11.414ZM7.52011 5.707L8.20769 6.43311L8.9745 5.707L8.20769 4.98089L7.52011 5.707ZM1.49325 0L2.18083 -0.726113L1.49325 -1.3772L0.805674 -0.726113L1.49325 0ZM0 1.414L-0.687576 0.687887L-1.45439 1.414L-0.687576 2.14011L0 1.414ZM4.53361 5.707L5.22119 6.43311L5.988 5.707L5.22119 4.98089L4.53361 5.707ZM0 10L-0.687576 9.27389L-1.45438 10L-0.687576 10.7261L0 10ZM2.18083 12.1401L8.20769 6.43311L6.83254 4.98089L0.805674 10.6879L2.18083 12.1401ZM8.20769 4.98089L2.18083 -0.726113L0.805674 0.726113L6.83254 6.43311L8.20769 4.98089ZM0.805674 -0.726113L-0.687576 0.687887L0.687576 2.14011L2.18083 0.726113L0.805674 -0.726113ZM-0.687576 2.14011L3.84604 6.43311L5.22119 4.98089L0.687576 0.687887L-0.687576 2.14011ZM3.84604 4.98089L-0.687576 9.27389L0.687576 10.7261L5.22119 6.43311L3.84604 4.98089ZM-0.687576 10.7261L0.805674 12.1401L2.18083 10.6879L0.687576 9.27389L-0.687576 10.7261Z",
                stroke: "rgba(124,141,176,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            position="absolute"
            top="38.11%"
            bottom="38.11%"
            left="94.19%"
            right="3.71%"
            {...getOverrideProps(overrides, "Vector1451")}
          ></Icon>
        </View>
<<<<<<< HEAD
      </View>
      <Icon
        width="375px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 375, height: 1 }}
        paths={[
          {
            d: "M0 0.5L375 0.5L375 -0.5L0 -0.5L0 0.5Z",
            stroke: "rgba(235,235,235,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="194px"
        left="0px"
        {...getOverrideProps(overrides, "Line")}
      ></Icon>
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
        position="absolute"
        top="135px"
        left="87px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="1c84fb90-12c4-11e1-840d-7b25c5ee775h"
        {...getOverrideProps(overrides, "1c84fb90-12c4-11e1-840d-7b25c5ee775h")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="375px"
        height="160px"
        position="absolute"
        top="0px"
        left="-7px"
        {...getOverrideProps(overrides, "Group1478")}
      >
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="68.13%"
          bottom="0%"
          left="6.4%"
          right="80%"
          {...getOverrideProps(overrides, "Group361539")}
=======
        {...getOverrideProps(overrides, "NOMOREFREAME")}
      ></View>
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
        {...getOverrideProps(overrides, "Modal DialogWhy")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="277px"
          height="43px"
          position="absolute"
          top="73px"
          left="25px"
          {...getOverrideProps(overrides, "Top")}
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
            top="26px"
            left="0px"
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
          position="absolute"
          top="10.08%"
          bottom="50.39%"
          left="7.65%"
          right="76.76%"
          {...getOverrideProps(overrides, "Profile pic")}
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
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
<<<<<<< HEAD
            {...getOverrideProps(overrides, "Vector361540")}
          ></Icon>
        </View>
        <View
          width="24px"
          height="24px"
          position="absolute"
          top="58px"
          left="327px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame1497")}
        ></View>
        <Text
          fontFamily="Anek Tamil"
          fontSize="18px"
          fontWeight="500"
          color="rgba(27,26,87,1)"
          lineHeight="21.09375px"
=======
            {...getOverrideProps(overrides, "Personal")}
          ></Icon>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="359px"
        height="56px"
        position="absolute"
        top="593px"
        left="8px"
        {...getOverrideProps(overrides, "GroupAgian")}
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
          {...getOverrideProps(overrides, "Rectangleamilly")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="358px"
          height="48px"
          position="absolute"
          top="4px"
          left="1px"
          {...getOverrideProps(overrides, "Groupmore")}
        >
          <Flex
            gap="4px"
            position="absolute"
            top="0px"
            left="0px"
            width="358px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "buttonamilly")}
          ></Flex>
          <View
            position="absolute"
            top="25%"
            bottom="25%"
            left="6.78%"
            right="86.51%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "FrameMore")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM11 15L9 15L9 9L11 9L11 15ZM11 7L9 7L9 5L11 5L11 7Z",
                  fill: "rgba(47,128,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="7.13%"
              right="9.54%"
              {...getOverrideProps(overrides, "VectorMNY")}
            ></Icon>
          </View>
          <Icon
            width="7.5201416015625px"
            height="11.41400146484375px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 7.5201416015625,
              height: 11.41400146484375,
            }}
            paths={[
              {
                d: "M1.49325 11.414L0.805674 12.1401L1.49325 12.7912L2.18083 12.1401L1.49325 11.414ZM7.52011 5.707L8.20769 6.43311L8.9745 5.707L8.20769 4.98089L7.52011 5.707ZM1.49325 0L2.18083 -0.726113L1.49325 -1.3772L0.805674 -0.726113L1.49325 0ZM0 1.414L-0.687576 0.687887L-1.45439 1.414L-0.687576 2.14011L0 1.414ZM4.53361 5.707L5.22119 6.43311L5.988 5.707L5.22119 4.98089L4.53361 5.707ZM0 10L-0.687576 9.27389L-1.45438 10L-0.687576 10.7261L0 10ZM2.18083 12.1401L8.20769 6.43311L6.83254 4.98089L0.805674 10.6879L2.18083 12.1401ZM8.20769 4.98089L2.18083 -0.726113L0.805674 0.726113L6.83254 6.43311L8.20769 4.98089ZM0.805674 -0.726113L-0.687576 0.687887L0.687576 2.14011L2.18083 0.726113L0.805674 -0.726113ZM-0.687576 2.14011L3.84604 6.43311L5.22119 4.98089L0.687576 0.687887L-0.687576 2.14011ZM3.84604 4.98089L-0.687576 9.27389L0.687576 10.7261L5.22119 6.43311L3.84604 4.98089ZM-0.687576 10.7261L0.805674 12.1401L2.18083 10.6879L0.687576 9.27389L-0.687576 10.7261Z",
                stroke: "rgba(124,141,176,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            position="absolute"
            top="38.11%"
            bottom="38.11%"
            left="94.19%"
            right="3.71%"
            {...getOverrideProps(overrides, "VectorFowarded")}
          ></Icon>
        </View>
        <Text
=======
        <Text
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
          fontFamily="Abhaya Libre SemiBold"
          fontSize="14px"
          fontWeight="400"
          color="rgba(124,141,176,1)"
          lineHeight="18px"
<<<<<<< HEAD
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
<<<<<<< HEAD
<<<<<<< HEAD
          top="56px"
          left="24px"
=======
          top="19px"
          left="71px"
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Logout"
          {...getOverrideProps(overrides, "Logout")}
        ></Text>
<<<<<<< HEAD
        <View
          position="absolute"
          top="0%"
          bottom="72.5%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame1480")}
        >
          <Icon
            width="17px"
            height="10.67px"
            viewBox={{ minX: 0, minY: 0, width: 17, height: 10.6666259765625 }}
            paths={[
              {
                d: "M16 0L15 0C14.4477 0 14 0.447715 14 1L14 9.66667C14 10.219 14.4477 10.6667 15 10.6667L16 10.6667C16.5523 10.6667 17 10.219 17 9.66667L17 1C17 0.447715 16.5523 0 16 0ZM10.3333 2.33333L11.3333 2.33333C11.8856 2.33333 12.3333 2.78105 12.3333 3.33333L12.3333 9.66667C12.3333 10.219 11.8856 10.6667 11.3333 10.6667L10.3333 10.6667C9.78105 10.6667 9.33333 10.219 9.33333 9.66667L9.33333 3.33333C9.33333 2.78105 9.78105 2.33333 10.3333 2.33333ZM6.66667 4.66667L5.66667 4.66667C5.11438 4.66667 4.66667 5.11438 4.66667 5.66667L4.66667 9.66667C4.66667 10.219 5.11438 10.6667 5.66667 10.6667L6.66667 10.6667C7.21895 10.6667 7.66667 10.219 7.66667 9.66667L7.66667 5.66667C7.66667 5.11438 7.21895 4.66667 6.66667 4.66667ZM2 6.66667L1 6.66667C0.447715 6.66667 0 7.11438 0 7.66667L0 9.66667C0 10.219 0.447715 10.6667 1 10.6667L2 10.6667C2.55228 10.6667 3 10.219 3 9.66667L3 7.66667C3 7.11438 2.55228 6.66667 2 6.66667Z",
                fill: "rgba(33,32,90,1)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="17.67px"
            right="74px"
            {...getOverrideProps(overrides, "Exclude1481")}
          >
            <Icon
              width="3px"
              height="4px"
              viewBox={{ minX: 0, minY: 0, width: 3, height: 4 }}
              paths={[
                {
                  d: "M1 0L2 0C2.55228 0 3 0.447715 3 1L3 3C3 3.55228 2.55228 4 2 4L1 4C0.447715 4 0 3.55228 0 3L0 1C0 0.447715 0.447715 0 1 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="15.15%"
              bottom="75.76%"
              left="0%"
              right="99.2%"
              {...getOverrideProps(overrides, "Vector1482")}
            ></Icon>
            <Icon
              width="3px"
              height="6px"
              viewBox={{ minX: 0, minY: 0, width: 3, height: 6 }}
              paths={[
                {
                  d: "M1 0L2 0C2.55228 0 3 0.447715 3 1L3 5C3 5.55228 2.55228 6 2 6L1 6C0.447715 6 0 5.55228 0 5L0 1C0 0.447715 0.447715 0 1 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="10.61%"
              bottom="75.76%"
              left="1.24%"
              right="97.96%"
              {...getOverrideProps(overrides, "Vector1483")}
            ></Icon>
            <Icon
              width="3px"
              height="8.3333740234375px"
              viewBox={{ minX: 0, minY: 0, width: 3, height: 8.3333740234375 }}
              paths={[
                {
                  d: "M1 0L2 0C2.55228 0 3 0.447715 3 1L3 7.33333C3 7.88562 2.55228 8.33333 2 8.33333L1 8.33333C0.447715 8.33333 0 7.88562 0 7.33333L0 1C0 0.447715 0.447715 0 1 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="5.3%"
              bottom="75.76%"
              left="2.49%"
              right="96.71%"
              {...getOverrideProps(overrides, "Vector1484")}
            ></Icon>
            <Icon
              width="3px"
              height="10.6666259765625px"
              viewBox={{ minX: 0, minY: 0, width: 3, height: 10.6666259765625 }}
              paths={[
                {
                  d: "M1 2.36848e-15L2 2.36848e-15C2.55228 0 3 0.447715 3 1L3 9.66667C3 10.219 2.55228 10.6667 2 10.6667L1 10.6667C0.447715 10.6667 0 10.219 0 9.66667L0 1C0 0.447715 0.447715 0 1 0L1 2.36848e-15Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="75.76%"
              left="3.73%"
              right="95.47%"
              {...getOverrideProps(overrides, "Vector1485")}
            ></Icon>
          </Icon>
          <Icon
            width="15.33px"
            height="11px"
            viewBox={{ minX: 0, minY: 0, width: 15.33331298828125, height: 11 }}
            paths={[
              {
                d: "M7.66707 2.28448C9.8918 2.28457 12.0315 3.13869 13.6438 4.67028C13.7652 4.78852 13.9593 4.78703 14.0789 4.66693L15.2395 3.4966C15.3 3.43569 15.3338 3.35318 15.3333 3.26733C15.3328 3.18148 15.2981 3.09937 15.2368 3.03917C11.0049 -1.01306 4.32857 -1.01306 0.0966565 3.03917C0.0353544 3.09933 0.000572274 3.18141 6.99859e-06 3.26726C-0.000558277 3.35311 0.0331399 3.43565 0.0936446 3.4966L1.25459 4.66693C1.37409 4.78721 1.56831 4.78871 1.68965 4.67028C3.30221 3.13859 5.44212 2.28447 7.66707 2.28448ZM9.89492 8.88514C9.95692 8.82434 9.99106 8.74068 9.98929 8.6539C9.98752 8.56712 9.94998 8.48492 9.88555 8.4267C8.60489 7.34443 6.72925 7.34443 5.44859 8.4267C5.38411 8.48487 5.34652 8.56705 5.34468 8.65383C5.34284 8.7406 5.37693 8.8243 5.43888 8.88514L7.44452 10.9071C7.5033 10.9666 7.58345 11 7.66707 11C7.75069 11 7.83084 10.9666 7.88962 10.9071L9.89492 8.88514ZM10.9742 7.36571C10.0681 6.54594 8.88942 6.09199 7.66707 6.09206C6.44553 6.09257 5.26774 6.54648 4.36227 7.36571C4.23972 7.48206 4.04667 7.47954 3.92721 7.36003L2.76827 6.1897C2.70709 6.1284 2.6731 6.04513 2.67392 5.95857C2.67474 5.87201 2.7103 5.78939 2.77262 5.72926C5.53178 3.16485 9.8047 3.16485 12.5639 5.72926C12.6261 5.78939 12.6617 5.87196 12.6626 5.9585C12.6635 6.04504 12.6296 6.12831 12.5685 6.1897L11.4093 7.36003C11.2898 7.47954 11.0968 7.48206 10.9742 7.36571Z",
                fill: "rgba(33,32,90,1)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="17.33px"
            right="53.67px"
            {...getOverrideProps(overrides, "Exclude1490")}
          >
            <Icon
              width="4.644744873046875px"
              height="3.385009765625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 4.644744873046875,
                height: 3.385009765625,
              }}
              paths={[
                {
                  d: "M4.55031 1.27014C4.61231 1.20934 4.64646 1.12568 4.64468 1.0389C4.64291 0.952121 4.60537 0.86992 4.54094 0.811703C3.26028 -0.270568 1.38464 -0.270568 0.10398 0.811703C0.0395031 0.869873 0.00190774 0.952048 7.06039e-05 1.03883C-0.00176654 1.12561 0.0323174 1.2093 0.0942749 1.27014L2.09991 3.29213C2.15869 3.35156 2.23884 3.385 2.32246 3.385C2.40608 3.385 2.48623 3.35156 2.54501 3.29213L4.55031 1.27014Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="17.31%"
              bottom="75%"
              left="1.43%"
              right="97.34%"
              {...getOverrideProps(overrides, "Vector1491")}
            ></Icon>
            <Icon
              width="15.33331298828125px"
              height="4.7581787109375px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 15.33331298828125,
                height: 4.7581787109375,
              }}
              paths={[
                {
                  d: "M7.66707 2.28448C9.8918 2.28457 12.0315 3.13869 13.6438 4.67028C13.7652 4.78852 13.9593 4.78703 14.0789 4.66693L15.2395 3.4966C15.3 3.43569 15.3338 3.35318 15.3333 3.26733C15.3328 3.18148 15.2981 3.09937 15.2368 3.03917C11.0049 -1.01306 4.32857 -1.01306 0.0966565 3.03917C0.0353544 3.09933 0.000572274 3.18141 6.99859e-06 3.26726C-0.000558277 3.35311 0.0331399 3.43565 0.0936446 3.4966L1.25459 4.66693C1.37409 4.78721 1.56831 4.78871 1.68965 4.67028C3.30221 3.13859 5.44212 2.28447 7.66707 2.28448Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="89.19%"
              left="0%"
              right="95.91%"
              {...getOverrideProps(overrides, "Vector1492")}
            ></Icon>
            <Icon
              width="9.98870849609375px"
              height="3.6453857421875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.98870849609375,
                height: 3.6453857421875,
              }}
              paths={[
                {
                  d: "M4.99316 2.28611C6.21551 2.28603 7.39424 2.73999 8.3003 3.55976C8.42285 3.67611 8.6159 3.67358 8.73537 3.55408L9.89464 2.38375C9.95569 2.32236 9.98956 2.23908 9.98868 2.15255C9.9878 2.06601 9.95224 1.98344 9.88995 1.92331C7.13079 -0.641102 2.85788 -0.641102 0.0987171 1.92331C0.0363917 1.98344 0.000832349 2.06605 1.44263e-05 2.15262C-0.000803496 2.23918 0.0331885 2.32245 0.0943665 2.38375L1.2533 3.55408C1.37277 3.67358 1.56582 3.67611 1.68837 3.55976C2.59384 2.74053 3.77163 2.28661 4.99316 2.28611Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.65%"
              bottom="83.07%"
              left="0.71%"
              right="96.62%"
              {...getOverrideProps(overrides, "Vector1493")}
            ></Icon>
          </Icon>
          <View
            padding="0px 0px 0px 0px"
            width="24.66px"
            height="11px"
            position="absolute"
            top="17px"
            right="24.34px"
            {...getOverrideProps(overrides, "Group1486")}
          >
            <Icon
              width="1.328033447265625px"
              height="4px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1.328033447265625,
                height: 4,
              }}
              paths={[
                {
                  d: "M0 0L0 4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z",
                  fill: "rgba(33,32,90,0.4)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="36.36%"
              bottom="27.27%"
              left="94.61%"
              right="0%"
              {...getOverrideProps(overrides, "Vector1487")}
            ></Icon>
            <View
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="10.79%"
              border="1px SOLID rgba(33,32,90,1)"
              borderRadius="2.6666667461395264px"
              padding="0px 0px 0px 0px"
              opacity="0.3499999940395355"
              {...getOverrideProps(overrides, "Rectangle1488")}
            ></View>
            <View
              position="absolute"
              top="18.18%"
              bottom="18.18%"
              left="8.11%"
              right="18.9%"
              borderRadius="1.3333333730697632px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(33,32,90,1)"
              {...getOverrideProps(overrides, "Rectangle1489")}
            ></View>
          </View>
          <View
            position="absolute"
            top="15.91%"
            bottom="36.36%"
            left="5.6%"
            right="80%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame1494")}
          >
            <Text
              fontFamily="Akronim"
              fontSize="15px"
              fontWeight="400"
              color="rgba(33,32,90,1)"
              lineHeight="20px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="-0.09px"
              position="absolute"
              top="calc(50% - 10px - -5.5px)"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="9:41"
              {...getOverrideProps(overrides, "9:41")}
            ></Text>
          </View>
        </View>
=======
          top="19px"
          left="71px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About"
          {...getOverrideProps(overrides, "About")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="359px"
        height="56px"
        position="absolute"
        top="537px"
        left="8px"
        {...getOverrideProps(overrides, "Location")}
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
          {...getOverrideProps(overrides, "Rectangle10001193")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="358px"
          height="48px"
          position="absolute"
          top="4px"
          left="1px"
          {...getOverrideProps(overrides, "Group")}
        >
          <Flex
            gap="4px"
            position="absolute"
            top="0px"
            left="0px"
            width="358px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "button1000")}
          ></Flex>
          <View
            position="absolute"
            top="25%"
            bottom="25%"
            left="6.78%"
            right="86.51%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame6")}
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
              top="0px"
              left="-1.29px"
              {...getOverrideProps(overrides, "Star 1")}
            ></Icon>
          </View>
          <Icon
            width="7.5201416015625px"
            height="11.41400146484375px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 7.5201416015625,
              height: 11.41400146484375,
            }}
            paths={[
              {
                d: "M1.49325 11.414L7.52011 5.707L1.49325 0L0 1.414L4.53361 5.707L0 10L1.49325 11.414Z",
                fill: "rgba(124,141,176,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="38.11%"
            bottom="38.11%"
            left="94.19%"
            right="3.71%"
            {...getOverrideProps(overrides, "VectorFWDA")}
          ></Icon>
        </View>
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
          top="19px"
          left="71px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Institution"
          {...getOverrideProps(overrides, "Institution")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="359px"
        height="56px"
        position="absolute"
        top="649px"
        left="8px"
        {...getOverrideProps(overrides, "Group1")}
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
          {...getOverrideProps(overrides, "Rectangle10001201")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="358px"
          height="48px"
          position="absolute"
          top="4px"
          left="1px"
          {...getOverrideProps(overrides, "Group2")}
        >
          <Flex
            gap="4px"
            position="absolute"
            top="0px"
            left="0px"
            width="358px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "buttonLeave")}
          ></Flex>
          <View
            position="absolute"
            top="25%"
            bottom="25%"
            left="6.78%"
            right="86.51%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame7")}
          >
            <Icon
              width="16px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 16, height: 20 }}
              paths={[
                {
                  d: "M8 0C5.243 0 3 2.243 3 5L3 8L2 8C1.46957 8 0.960859 8.21071 0.585786 8.58579C0.210714 8.96086 1.77636e-15 9.46957 0 10L0 18C8.88178e-16 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20L14 20C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18L16 10C16 9.46957 15.7893 8.96086 15.4142 8.58579C15.0391 8.21071 14.5304 8 14 8L13 8L13 5C13 2.243 10.757 0 8 0ZM5 5C5 3.346 6.346 2 8 2C9.654 2 11 3.346 11 5L11 8L5 8L5 5ZM9 15.723L9 18L7 18L7 15.723C6.65039 15.5228 6.36966 15.2213 6.19483 14.8584C6.02 14.4954 5.95928 14.0879 6.02068 13.6898C6.08208 13.2916 6.26272 12.9214 6.53876 12.6279C6.81481 12.3345 7.17332 12.1316 7.567 12.046C7.85942 11.9813 8.16262 11.9832 8.45425 12.0513C8.74587 12.1194 9.01849 12.2521 9.25198 12.4397C9.48548 12.6272 9.67391 12.8647 9.80337 13.1348C9.93283 13.4049 10 13.7005 10 14C9.99943 14.3497 9.90669 14.6932 9.73113 14.9956C9.55557 15.2981 9.30339 15.549 9 15.723L9 15.723Z",
                  fill: "rgba(47,128,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="16.67%"
              right="16.67%"
              {...getOverrideProps(overrides, "Gone")}
            ></Icon>
          </View>
          <Icon
            width="7.5201416015625px"
            height="11.41400146484375px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 7.5201416015625,
              height: 11.41400146484375,
            }}
            paths={[
              {
                d: "M1.49325 11.414L0.805674 12.1401L1.49325 12.7912L2.18083 12.1401L1.49325 11.414ZM7.52011 5.707L8.20769 6.43311L8.9745 5.707L8.20769 4.98089L7.52011 5.707ZM1.49325 0L2.18083 -0.726113L1.49325 -1.3772L0.805674 -0.726113L1.49325 0ZM0 1.414L-0.687576 0.687887L-1.45439 1.414L-0.687576 2.14011L0 1.414ZM4.53361 5.707L5.22119 6.43311L5.988 5.707L5.22119 4.98089L4.53361 5.707ZM0 10L-0.687576 9.27389L-1.45438 10L-0.687576 10.7261L0 10ZM2.18083 12.1401L8.20769 6.43311L6.83254 4.98089L0.805674 10.6879L2.18083 12.1401ZM8.20769 4.98089L2.18083 -0.726113L0.805674 0.726113L6.83254 6.43311L8.20769 4.98089ZM0.805674 -0.726113L-0.687576 0.687887L0.687576 2.14011L2.18083 0.726113L0.805674 -0.726113ZM-0.687576 2.14011L3.84604 6.43311L5.22119 4.98089L0.687576 0.687887L-0.687576 2.14011ZM3.84604 4.98089L-0.687576 9.27389L0.687576 10.7261L5.22119 6.43311L3.84604 4.98089ZM-0.687576 10.7261L0.805674 12.1401L2.18083 10.6879L0.687576 9.27389L-0.687576 10.7261Z",
                stroke: "rgba(124,141,176,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            position="absolute"
            top="38.11%"
            bottom="38.11%"
            left="94.19%"
            right="3.71%"
            {...getOverrideProps(overrides, "VectorFWD")}
          ></Icon>
        </View>
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
          top="19px"
          left="71px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Logout"
          {...getOverrideProps(overrides, "Logout")}
        ></Text>
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
      </View>
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
<<<<<<< HEAD
<<<<<<< HEAD
        top="109px"
        left="87px"
=======
        top="56px"
        left="17px"
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Settings"
        {...getOverrideProps(overrides, "Settings1479")}
      ></Text>
<<<<<<< HEAD
=======
        top="56px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Settings"
        {...getOverrideProps(overrides, "SettingsText")}
      ></Text>
=======
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
      <Icon
        width="375px"
        height="1px"
        viewBox={{ minX: 0, minY: 0, width: 375, height: 1 }}
        paths={[
          {
            d: "M0 0.5L187.5 0.5L187.5 -0.5L0 -0.5L0 0.5ZM187.5 0.5L375 0.5L375 -0.5L187.5 -0.5L187.5 0.5Z",
            stroke: "rgba(237,237,237,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="726px"
        left="0px"
<<<<<<< HEAD
        {...getOverrideProps(overrides, "Line5")}
=======
        {...getOverrideProps(overrides, "Line37348963")}
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
      ></Icon>
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
        top="117px"
        left="0px"
<<<<<<< HEAD
        {...getOverrideProps(overrides, "Line4")}
      ></Icon>
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
        {...getOverrideProps(overrides, "Line37349359")}
      ></Icon>
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
    </View>
  );
}
