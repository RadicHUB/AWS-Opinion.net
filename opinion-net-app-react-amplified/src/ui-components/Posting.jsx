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
export default function Posting(props) {
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
      {...getOverrideProps(overrides, "Posting")}
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
        width="133px"
        height="36px"
        position="absolute"
        top="44px"
        left="122px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Opinion.net"
<<<<<<< HEAD
        {...getOverrideProps(overrides, "Opinion.net")}
      ></Text>
      <Icon
        width="18.41400146484375px"
        height="15.4139404296875px"
=======
        {...getOverrideProps(overrides, "Opinion.netNEW")}
      ></Text>
      <Icon
        width="18.41400146484375px"
        height="15.41400146484375px"
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
        viewBox={{
          minX: 0,
          minY: 0,
          width: 18.41400146484375,
<<<<<<< HEAD
          height: 15.4139404296875,
=======
          height: 15.41400146484375,
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
        }}
        paths={[
          {
            d: "M18.414 6.707L3.828 6.707L9.121 1.414L7.707 0L0 7.707L7.707 15.414L9.121 14L3.828 8.707L18.414 8.707L18.414 6.707Z",
            fill: "rgba(79,94,123,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="6.65%"
        bottom="91.45%"
        left="5.07%"
        right="90.02%"
<<<<<<< HEAD
<<<<<<< HEAD
        {...getOverrideProps(overrides, "Vector1541")}
=======
        {...getOverrideProps(overrides, "Vector")}
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
      ></Icon>
      <View
        width="327px"
        height="282px"
        position="absolute"
        top="136px"
        left="25px"
        overflow="hidden"
        border="1px SOLID rgba(47,128,237,1)"
        boxShadow="0px 2px 4px rgba(0.02840001881122589, 0.017256975173950195, 0.5744096636772156, 0.10000000149011612)"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Modal Dialog")}
      >
        <View
          width="256px"
          height="169px"
          position="absolute"
          top="40px"
          left="31px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 96")}
        >
          <Text
            fontFamily="Abhaya Libre SemiBold"
            fontSize="12px"
            fontWeight="400"
            color="rgba(51,51,51,1)"
            lineHeight="14.0625px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-end"
            position="absolute"
            top="155px"
            left="159px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="100 Characters Max"
            {...getOverrideProps(overrides, "100 Characters Max")}
          ></Text>
          <Text
            fontFamily="Nunito Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(124,141,176,1)"
            lineHeight="21.09375px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            height="137px"
            position="absolute"
            top="32px"
            left="7px"
            right="-7px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Description that ideally shouldn’t exceed 100 characters of text. This cannot exceed 100 characters."
            {...getOverrideProps(overrides, "description")}
          ></Text>
          <View
            width="246px"
            height="32px"
            position="absolute"
            top="0px"
            left="7px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title row")}
          >
            <Text
              fontFamily="Nunito Sans"
              fontSize="24px"
              fontWeight="700"
              color="rgba(110,116,145,1)"
              lineHeight="28.125px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="249px"
              height="32px"
              position="absolute"
              top="0px"
              left="calc(50% - 124.5px - 0.5px)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Post Title"
              {...getOverrideProps(overrides, "title")}
            ></Text>
          </View>
        </View>
        <Flex
          gap="4px"
          position="absolute"
          top="221px"
          left="210px"
          width="77px"
          height="48px"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          border="1px SOLID rgba(47,128,237,1)"
          borderRadius="4px"
          padding="11px 19px 11px 19px"
          {...getOverrideProps(overrides, "button")}
        >
          <Text
            fontFamily="Nunito Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(47,128,237,1)"
            lineHeight="21.09375px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            width="37px"
            grow="1"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Post"
            {...getOverrideProps(overrides, "Post")}
          ></Text>
        </Flex>
      </View>
      <View
<<<<<<< HEAD
        width="359px"
        height="136px"
        position="absolute"
        top="138px"
        left="9px"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(47,128,237,1)"
        opacity="0.10000000149011612"
        {...getOverrideProps(overrides, "Rectangle3603243")}
      ></View>
      <Text
        fontFamily="Abhaya Libre SemiBold"
        fontSize="12px"
        fontWeight="400"
        color="rgba(51,51,51,1)"
        lineHeight="14.0625px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-end"
        position="absolute"
        top="255px"
        left="266px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="100 Characters Max"
        {...getOverrideProps(overrides, "100 Characters Max")}
      ></Text>
      <Text
        fontFamily="Anek Tamil"
        fontSize="15px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="17.578125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="338px"
        height="118px"
        position="absolute"
        top="147px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="I think the Capstone project has gone over very well so far. I dont think there will be a problem with it for the rest of the year."
        {...getOverrideProps(
          overrides,
          "I think the Capstone project has gone over very well so far. I dont think there will be a problem with it for the rest of the year."
        )}
      ></Text>
      <View
=======
        {...getOverrideProps(overrides, "BackButton")}
      ></Icon>
      <View
        width="327px"
        height="282px"
        position="absolute"
        top="136px"
        left="25px"
        overflow="hidden"
        border="1px SOLID rgba(47,128,237,1)"
        boxShadow="0px 2px 4px rgba(0.02840001881122589, 0.017256975173950195, 0.5744096636772156, 0.10000000149011612)"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NewPost")}
      >
        <View
          width="256px"
          height="169px"
          position="absolute"
          top="40px"
          left="31px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Description")}
        >
          <Text
            fontFamily="Abhaya Libre SemiBold"
            fontSize="12px"
            fontWeight="400"
            color="rgba(51,51,51,1)"
            lineHeight="14.0625px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-end"
            position="absolute"
            top="155px"
            left="159px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="100 Characters Max"
            {...getOverrideProps(overrides, "100 Characters Max")}
          ></Text>
          <Text
            fontFamily="Nunito Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(124,141,176,1)"
            lineHeight="21.09375px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            height="137px"
            position="absolute"
            top="32px"
            left="7px"
            right="-7px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Description that ideally shouldn’t exceed 100 characters of text. This cannot exceed 100 characters."
            {...getOverrideProps(overrides, "description")}
          ></Text>
          <View
            width="246px"
            height="32px"
            position="absolute"
            top="0px"
            left="7px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title row")}
          >
            <Text
              fontFamily="Nunito Sans"
              fontSize="24px"
              fontWeight="700"
              color="rgba(110,116,145,1)"
              lineHeight="28.125px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="249px"
              height="32px"
              position="absolute"
              top="0px"
              left="calc(50% - 124.5px - 0.5px)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Post Title"
              {...getOverrideProps(overrides, "title")}
            ></Text>
          </View>
        </View>
        <Flex
          gap="4px"
          position="absolute"
          top="221px"
          left="210px"
          width="77px"
          height="48px"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          border="1px SOLID rgba(47,128,237,1)"
          borderRadius="4px"
          padding="11px 19px 11px 19px"
          {...getOverrideProps(overrides, "PostButton")}
        >
          <Text
            fontFamily="Nunito Sans"
            fontSize="18px"
            fontWeight="400"
            color="rgba(47,128,237,1)"
            lineHeight="21.09375px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            width="37px"
            grow="1"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Post"
            {...getOverrideProps(overrides, "Post")}
          ></Text>
        </Flex>
      </View>
      <View
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
        padding="0px 0px 0px 0px"
        width="375px"
        height="86px"
        position="absolute"
        top="726px"
        left="0px"
<<<<<<< HEAD
<<<<<<< HEAD
        {...getOverrideProps(overrides, "Group1548")}
=======
        {...getOverrideProps(overrides, "Bottomless")}
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
        {...getOverrideProps(overrides, "Bottom")}
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
      >
        <View
          width="375px"
          height="86px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
<<<<<<< HEAD
          {...getOverrideProps(overrides, "Rectangle1549")}
=======
          {...getOverrideProps(overrides, "Rectangle2")}
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
        ></View>
        <View
          width="375px"
          height="34px"
          position="absolute"
          top="52px"
          left="0px"
          padding="0px 0px 0px 0px"
<<<<<<< HEAD
<<<<<<< HEAD
          {...getOverrideProps(overrides, "Frame1556")}
        >
          <Icon
            width="134px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 134, height: 5 }}
            paths={[
              {
                d: "M0 2.5C0 1.11929 1.11929 0 2.5 0L131.5 0C132.881 0 134 1.11929 134 2.5C134 3.88071 132.881 5 131.5 5L2.5 5C1.11929 5 0 3.88071 0 2.5Z",
                fill: "rgba(51,51,51,0.1)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="58.82%"
            bottom="26.47%"
            left="32.27%"
            right="32%"
            {...getOverrideProps(overrides, "Vector1557")}
          ></Icon>
        </View>
        <View
          width="24px"
          height="24px"
          position="absolute"
          top="16px"
          left="279px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          opacity="0.5"
          {...getOverrideProps(overrides, "Frame1551")}
=======
          {...getOverrideProps(overrides, "Frame")}
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
        ></View>
        <View
          width="331px"
          height="26px"
          position="absolute"
          top="19px"
<<<<<<< HEAD
          left="9px"
=======
          {...getOverrideProps(overrides, "Random")}
        ></View>
        <View
          width="331px"
          height="26px"
          position="absolute"
          top="19px"
          left="32px"
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
          left="32px"
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(47,128,237,1)"
          opacity="0.10000000149011612"
<<<<<<< HEAD
          {...getOverrideProps(overrides, "Rectangle3607573")}
=======
          {...getOverrideProps(overrides, "Rectangle1")}
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
        ></View>
        <Text
          fontFamily="Abhaya Libre SemiBold"
          fontSize="14px"
          fontWeight="400"
          color="rgba(27,26,87,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-end"
          width="134px"
          position="absolute"
<<<<<<< HEAD
<<<<<<< HEAD
          top="25px"
          left="14px"
=======
          top="23px"
          left="44px"
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Write a post..."
          {...getOverrideProps(overrides, "Write a post...")}
        ></Text>
        <View
          position="absolute"
          top="23.26%"
          bottom="48.84%"
          left="2.13%"
          right="91.47%"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Pencil image")}
        >
          <View
            width="24px"
            height="24px"
            position="absolute"
            top="0px"
            left="0px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "32 / pencil edit 1")}
          >
            <Icon
              width="8px"
              height="24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.627418518066406,
                height: 22.62744140625,
              }}
              paths={[
                {
                  d: "M1.10052 6.3934L7.10052 6.3934L7.10052 4.3934L1.10052 4.3934L1.10052 6.3934ZM4.86946 22.4698L3.13054 21.4817L4.86946 22.4698ZM3.13054 22.4698L4.86946 21.4817L3.13054 22.4698ZM0.130543 17.1898L1.86946 16.2017L0.130543 17.1898ZM7.86946 17.1898L6.13054 16.2017L7.86946 17.1898ZM7.98793 2.81261L9.94857 2.41778L7.98793 2.81261ZM6 2.94902L6 16.6957L10 16.6957L10 2.94902L6 2.94902ZM2 16.6957L2 2.94902L-2 2.94902L-2 16.6957L2 16.6957ZM6.13054 16.2017L3.13054 21.4817L6.60837 23.4578L9.60837 18.1778L6.13054 16.2017ZM4.86946 21.4817L1.86946 16.2017L-1.60837 18.1778L1.39163 23.4578L4.86946 21.4817ZM1.97271 3.20745C1.98023 3.17013 2.05679 2.85322 2.30625 2.57266C2.4918 2.36397 2.91675 2 4 2L4 -2C1.81082 -2 0.285466 -1.17445 -0.683015 -0.0852216C-1.58759 0.932131 -1.86877 2.02153 -1.94857 2.41778L1.97271 3.20745ZM4 2C5.08325 2 5.5082 2.36397 5.69375 2.57265C5.94321 2.85322 6.01977 3.17013 6.02729 3.20745L9.94857 2.41778C9.86877 2.02153 9.58759 0.93213 8.68301 -0.0852224C7.71453 -1.17445 6.18918 -2 4 -2L4 2ZM3.13054 21.4817C3.51387 20.8071 4.48613 20.8071 4.86946 21.4817L1.39163 23.4578C2.54161 25.4817 5.45839 25.4817 6.60837 23.4578L3.13054 21.4817ZM-2 16.6957C-2 17.2153 -1.86505 17.726 -1.60837 18.1778L1.86946 16.2017C1.95502 16.3523 2 16.5226 2 16.6957L-2 16.6957ZM6 16.6957C6 16.5226 6.04498 16.3523 6.13054 16.2017L9.60837 18.1778C9.86505 17.726 10 17.2153 10 16.6957L6 16.6957ZM10 2.94902C10 2.81885 9.99189 2.63293 9.94857 2.41778L6.02729 3.20745C6.00211 3.08241 6 2.98727 6 2.94902L10 2.94902ZM2 2.94902C2 2.98727 1.99789 3.08241 1.97271 3.20745L-1.94857 2.41778C-1.9919 2.63294 -2 2.81886 -2 2.94902L2 2.94902Z",
                  stroke: "rgba(110,116,145,1)",
                  fillRule: "nonzero",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="calc(50% - 12px - -2px)"
              left="calc(50% - 4px - -8.97px)"
              transformOrigin="top left"
              transform="rotate(45deg)"
              {...getOverrideProps(overrides, "icon")}
            ></Icon>
          </View>
        </View>
      </View>
      <Icon
        width="375px"
<<<<<<< HEAD
        height="0px"
=======
          top="23px"
          left="44px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Write a post..."
          {...getOverrideProps(overrides, "Post Write")}
        ></Text>
        <View
          position="absolute"
          top="23.26%"
          bottom="48.84%"
          left="2.13%"
          right="91.47%"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Pencil image")}
        >
          <View
            width="24px"
            height="24px"
            position="absolute"
            top="0px"
            left="0px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "32 / pencil edit 1")}
          >
            <Icon
              width="8px"
              height="24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.627410888671875,
                height: 22.627410888671875,
              }}
              paths={[
                {
                  d: "M1.10052 6.3934L7.10052 6.3934L7.10052 4.3934L1.10052 4.3934L1.10052 6.3934ZM4.86946 22.4698L3.13054 21.4817L4.86946 22.4698ZM3.13054 22.4698L4.86946 21.4817L3.13054 22.4698ZM0.130543 17.1898L1.86946 16.2017L0.130543 17.1898ZM7.86946 17.1898L6.13054 16.2017L7.86946 17.1898ZM7.98793 2.81261L9.94857 2.41778L7.98793 2.81261ZM6 2.94902L6 16.6957L10 16.6957L10 2.94902L6 2.94902ZM2 16.6957L2 2.94902L-2 2.94902L-2 16.6957L2 16.6957ZM6.13054 16.2017L3.13054 21.4817L6.60837 23.4578L9.60837 18.1778L6.13054 16.2017ZM4.86946 21.4817L1.86946 16.2017L-1.60837 18.1778L1.39163 23.4578L4.86946 21.4817ZM1.97271 3.20745C1.98023 3.17013 2.05679 2.85322 2.30625 2.57266C2.4918 2.36397 2.91675 2 4 2L4 -2C1.81082 -2 0.285466 -1.17445 -0.683015 -0.0852216C-1.58759 0.932131 -1.86877 2.02153 -1.94857 2.41778L1.97271 3.20745ZM4 2C5.08325 2 5.5082 2.36397 5.69375 2.57265C5.94321 2.85322 6.01977 3.17013 6.02729 3.20745L9.94857 2.41778C9.86877 2.02153 9.58759 0.93213 8.68301 -0.0852224C7.71453 -1.17445 6.18918 -2 4 -2L4 2ZM3.13054 21.4817C3.51387 20.8071 4.48613 20.8071 4.86946 21.4817L1.39163 23.4578C2.54161 25.4817 5.45839 25.4817 6.60837 23.4578L3.13054 21.4817ZM-2 16.6957C-2 17.2153 -1.86505 17.726 -1.60837 18.1778L1.86946 16.2017C1.95502 16.3523 2 16.5226 2 16.6957L-2 16.6957ZM6 16.6957C6 16.5226 6.04498 16.3523 6.13054 16.2017L9.60837 18.1778C9.86505 17.726 10 17.2153 10 16.6957L6 16.6957ZM10 2.94902C10 2.81885 9.99189 2.63293 9.94857 2.41778L6.02729 3.20745C6.00211 3.08241 6 2.98727 6 2.94902L10 2.94902ZM2 2.94902C2 2.98727 1.99789 3.08241 1.97271 3.20745L-1.94857 2.41778C-1.9919 2.63294 -2 2.81886 -2 2.94902L2 2.94902Z",
                  stroke: "rgba(110,116,145,1)",
                  fillRule: "nonzero",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="calc(50% - 12px - -2px)"
              left="calc(50% - 4px - -8.97px)"
              transformOrigin="top left"
              transform="rotate(45deg)"
              {...getOverrideProps(overrides, "icon")}
            ></Icon>
          </View>
        </View>
      </View>
      <Icon
        width="375px"
        height="1px"
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
        height="1px"
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
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
        {...getOverrideProps(overrides, "Line1580")}
      ></Icon>
      <Icon
        width="375px"
<<<<<<< HEAD
        height="0px"
=======
        {...getOverrideProps(overrides, "LineSOANy")}
      ></Icon>
      <Icon
        width="375px"
        height="1px"
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
=======
        height="1px"
>>>>>>> 8f008be5b3eb70d1d1637e7dd03f08dbc981c076
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
        top="726px"
        left="0px"
<<<<<<< HEAD
        {...getOverrideProps(overrides, "Line21820")}
=======
        {...getOverrideProps(overrides, "Line")}
>>>>>>> 54499d8e63b05b7293b57c541b35ea82f41b14a4
      ></Icon>
    </View>
  );
}
