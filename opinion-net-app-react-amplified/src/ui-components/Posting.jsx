/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { StarDimPost } from "../models";
import { schema } from "../models/schema";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Posting(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useDataStoreCreateAction({
    fields: {},
    model: StarDimPost,
    schema: schema,
  });
  const postOnClick = useDataStoreCreateAction({
    fields: {},
    model: StarDimPost,
    schema: schema,
  });
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
      {...getOverrideProps(overrides, "Posting")}
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
          {...getOverrideProps(overrides, "Rectangle34792817")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="355px"
          height="26px"
          position="absolute"
          top="19px"
          left="8px"
          {...getOverrideProps(overrides, "Group")}
        >
          <View
            position="absolute"
            top="3.85%"
            bottom="3.85%"
            left="6.76%"
            right="0%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text Box")}
          >
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
              top="3px"
              left="12px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Write a post..."
              {...getOverrideProps(overrides, "Write a post...")}
            ></Text>
          </View>
          <View
            width="331px"
            height="26px"
            position="absolute"
            top="0px"
            left="24px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(47,128,237,1)"
            opacity="0.10000000149011612"
            {...getOverrideProps(overrides, "Rectangle34792821")}
          ></View>
          <View
            position="absolute"
            top="3.85%"
            bottom="3.85%"
            left="0%"
            right="93.24%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Pencil Logo")}
          >
            <Icon
              width="8px"
              height="24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.627410888671875,
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
          {...getOverrideProps(overrides, "Line34792824")}
        ></Icon>
      </View>
      <View
        width="327px"
        height="296px"
        position="absolute"
        top="127px"
        left="25px"
        overflow="hidden"
        border="1px SOLID rgba(47,128,237,1)"
        boxShadow="0px 2px 4px rgba(0.02840001881122589, 0.017256975173950195, 0.5744096636772156, 0.10000000149011612)"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Group Middle (Page Pop)")}
      >
        <View
          width="281px"
          height="238px"
          position="absolute"
          top="40px"
          left="31px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Many Text Frame")}
        >
          <Icon
            width="254px"
            height="1px"
            viewBox={{ minX: 0, minY: 0, width: 254, height: 1 }}
            paths={[
              {
                d: "M-2.88675 0L0 2.88675L2.88675 0L0 -2.88675L-2.88675 0ZM256.887 0L254 -2.88675L251.113 0L254 2.88675L256.887 0ZM0 0.5L254 0.5L254 -0.5L0 -0.5L0 0.5Z",
                stroke: "rgba(124,141,176,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            position="absolute"
            top="161.25px"
            left="7px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "Line 1")}
          ></Icon>
          <View
            width="186px"
            height="22px"
            position="absolute"
            top="178px"
            left="7px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title34792828")}
          >
            <Text
              fontFamily="Nunito Sans"
              fontSize="13px"
              fontWeight="400"
              color="rgba(124,141,176,1)"
              lineHeight="15.234375px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="186px"
              height="22px"
              position="absolute"
              top="0px"
              left="calc(50% - 93px - 0px)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="100 Characters Max"
              {...getOverrideProps(overrides, "100 Characters Max")}
            ></Text>
          </View>
          <View
            width="244px"
            height="104px"
            position="absolute"
            top="43px"
            left="7px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title34792830")}
          >
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
              width="246px"
              height="104px"
              position="absolute"
              top="0px"
              left="calc(50% - 123px - -1px)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children=""
              {...getOverrideProps(overrides, "Post Title34792831")}
            ></Text>
          </View>
          <View
            width="246px"
            height="32px"
            position="absolute"
            top="0px"
            left="7px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title34792832")}
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
              {...getOverrideProps(overrides, "Post Title34792833")}
            ></Text>
          </View>
          <Flex
            gap="4px"
            position="absolute"
            top="190px"
            left="204px"
            width="77px"
            height="48px"
            justifyContent="center"
            alignItems="flex-start"
            overflow="hidden"
            border="1px SOLID rgba(47,128,237,1)"
            borderRadius="4px"
            padding="11px 19px 11px 19px"
            onClick={() => {
              buttonOnClick();
            }}
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
              onClick={() => {
                postOnClick();
              }}
              {...getOverrideProps(overrides, "Post")}
            ></Text>
          </Flex>
        </View>
      </View>
      <View
        width="322px"
        height="76px"
        position="absolute"
        top="21px"
        left="28px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group Top")}
      >
        <View
          width="375px"
          height="97px"
          position="absolute"
          top="-21px"
          left="-28px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle34792837")}
        ></View>
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
          top="76px"
          left="-28px"
          {...getOverrideProps(overrides, "Line34792838")}
        ></Icon>
        <View
          width="34.43px"
          height="24.54px"
          position="absolute"
          top="25px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Categories")}
        >
          <Icon
            width="18.41400146484375px"
            height="15.41400146484375px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 18.41400146484375,
              height: 15.41400146484375,
            }}
            paths={[
              {
                d: "M18.414 6.707L3.828 6.707L9.121 1.414L7.707 0L0 7.707L7.707 15.414L9.121 14L3.828 8.707L18.414 8.707L18.414 6.707Z",
                fill: "rgba(79,94,123,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="16.3%"
            bottom="20.87%"
            left="23.24%"
            right="23.28%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <View
          width="144px"
          height="34px"
          position="absolute"
          top="3px"
          left="87px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title34792841")}
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
