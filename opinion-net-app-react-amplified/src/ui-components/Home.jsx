/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
<<<<<<< HEAD
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
=======
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
>>>>>>> cf8717873de6daa0efbe4d06256172b5784f7b9c
export default function Home(props) {
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
      {...getOverrideProps(overrides, "Home")}
    >
      <View
<<<<<<< HEAD
=======
        width="328px"
        height="580px"
        position="absolute"
        top="136px"
        left="25px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group Middle (Scroll Section)")}
      >
        <View
          width="322px"
          height="79px"
          position="absolute"
          top="9px"
          left="3px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Example 1 Posted")}
        >
          <View
            width="313px"
            height="79px"
            position="absolute"
            top="0px"
            left="4px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(47,128,237,1)"
            opacity="0.10000000149011612"
            {...getOverrideProps(overrides, "Rectangle34792877")}
          ></View>
          <Text
            fontFamily="Abhaya Libre SemiBold"
            fontSize="12px"
            fontWeight="400"
            color="rgba(79,94,123,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-end"
            width="89px"
            height="40px"
            position="absolute"
            top="28px"
            left="52px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Post Title can be this long 36 char."
            {...getOverrideProps(
              overrides,
              "Post Title can be this long 36 char."
            )}
          ></Text>
          <Text
            fontFamily="Anek Tamil"
            fontSize="14px"
            fontWeight="500"
            color="rgba(27,26,87,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-end"
            width="252px"
            height="24px"
            position="absolute"
            top="4px"
            left="52px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1c84fb90-12c4-11e1-840d-7b25c5ee775h"
            {...getOverrideProps(
              overrides,
              "1c84fb90-12c4-11e1-840d-7b25c5ee775h"
            )}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="30.38%"
            bottom="31.65%"
            left="3.42%"
            right="87.27%"
            {...getOverrideProps(overrides, "Group34792880")}
          >
            <Icon
              width="30px"
              height="30px"
              viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
              paths={[
                {
                  d: "M15 0C6.8685 0 0 6.8685 0 15C0 23.1315 6.8685 30 15 30C23.1315 30 30 23.1315 30 15C30 6.8685 23.1315 0 15 0ZM15 7.5C17.5905 7.5 19.5 9.408 19.5 12C19.5 14.592 17.5905 16.5 15 16.5C12.411 16.5 10.5 14.592 10.5 12C10.5 9.408 12.411 7.5 15 7.5ZM7.341 22.158C8.6865 20.178 10.9305 18.858 13.5 18.858L16.5 18.858C19.071 18.858 21.3135 20.178 22.659 22.158C20.742 24.21 18.0225 25.5 15 25.5C11.9775 25.5 9.258 24.21 7.341 22.158Z",
                  fill: "rgba(79,94,123,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Vector34792881")}
            ></Icon>
          </View>
          <View
            height="32px"
            position="absolute"
            top="36px"
            left="178px"
            right="112px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Vote Types")}
          >
            <View
              width="32px"
              height="32px"
              position="absolute"
              top="0px"
              left="67px"
              border="1px SOLID rgba(151,151,151,1)"
              borderRadius="4px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(250,250,250,1)"
              {...getOverrideProps(overrides, "Background White for Minus (-)")}
            >
              <View
                width="32px"
                height="32px"
                position="absolute"
                top="calc(50% - 16px - 0px)"
                left="calc(50% - 16px - 0px)"
                overflow="hidden"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Minus (-)")}
              >
                <Icon
                  width="16px"
                  height="2px"
                  viewBox={{ minX: 0, minY: 0, width: 16, height: 2 }}
                  paths={[
                    {
                      d: "M1 0L15 0C15.5523 0 16 0.447716 16 1C16 1.55229 15.5523 2 15 2L1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0Z",
                      fill: "rgba(225,41,41,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="15px"
                  left="8px"
                  {...getOverrideProps(overrides, "Vector34792885")}
                ></Icon>
              </View>
            </View>
            <View
              width="20px"
              height="20px"
              position="absolute"
              top="4px"
              left="39px"
              overflow="hidden"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Vote Count")}
            >
              <Text
                fontFamily="Anek Tamil"
                fontSize="16px"
                fontWeight="500"
                color="rgba(51,51,51,1)"
                lineHeight="18.75px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="flex-end"
                width="18px"
                position="absolute"
                top="0px"
                left="1px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="0"
                {...getOverrideProps(overrides, "0")}
              ></Text>
            </View>
            <View
              width="32px"
              height="32px"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(151,151,151,1)"
              borderRadius="4px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(250,250,250,1)"
              {...getOverrideProps(overrides, "Background White for Plus (-)")}
            >
              <View
                width="32px"
                height="32px"
                position="absolute"
                top="calc(50% - 16px - 0px)"
                left="calc(50% - 16px - 0px)"
                overflow="hidden"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Plus (+)")}
              >
                <Icon
                  width="16px"
                  height="16px"
                  viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
                  paths={[
                    {
                      d: "M7 7L7 1C7 0.447715 7.44772 0 8 0C8.55229 0 9 0.447715 9 1L9 7L15 7C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9L9 9L9 15C9 15.5523 8.55229 16 8 16C7.44772 16 7 15.5523 7 15L7 9L1 9C0.447715 9 0 8.55228 0 8C0 7.44771 0.447715 7 1 7L7 7Z",
                      fill: "rgba(74,245,14,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="8px"
                  left="8px"
                  {...getOverrideProps(overrides, "Vector34792890")}
                ></Icon>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
>>>>>>> cf8717873de6daa0efbe4d06256172b5784f7b9c
        width="375px"
        height="84px"
        position="absolute"
        bottom="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group Bottom")}
      >
        <View
          width="375px"
          height="83px"
          position="absolute"
          top="1px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle34792892")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="226px"
          height="62px"
          position="absolute"
          top="15px"
          left="85px"
          {...getOverrideProps(overrides, "Group34792893")}
        >
          <View
            width="24px"
            height="24px"
            position="absolute"
            top="16px"
            left="202px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            opacity="0.5"
            {...getOverrideProps(overrides, "Right button")}
          >
            <Icon
              width="22px"
              height="22px"
              viewBox={{ minX: 0, minY: 0, width: 22, height: 22 }}
              paths={[
                {
                  d: "M11 0C5.0369 0 0 5.0369 0 11C0 16.9631 5.0369 22 11 22C16.9631 22 22 16.9631 22 11C22 5.0369 16.9631 0 11 0ZM11 5.5C12.8997 5.5 14.3 6.8992 14.3 8.8C14.3 10.7008 12.8997 12.1 11 12.1C9.1014 12.1 7.7 10.7008 7.7 8.8C7.7 6.8992 9.1014 5.5 11 5.5ZM5.3834 16.2492C6.3701 14.7972 8.0157 13.8292 9.9 13.8292L12.1 13.8292C13.9854 13.8292 15.6299 14.7972 16.6166 16.2492C15.2108 17.754 13.2165 18.7 11 18.7C8.7835 18.7 6.7892 17.754 5.3834 16.2492Z",
                  fill: "rgba(79,94,123,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="4.17%"
              bottom="4.17%"
              left="4.17%"
              right="4.17%"
              {...getOverrideProps(overrides, "Vector34792895")}
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
            {...getOverrideProps(overrides, "Left button")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M10 0C4.486 0 0 3.589 0 8C0 10.908 1.898 13.515 5 14.934L5 20L10.34 15.995C15.697 15.852 20 12.32 20 8C20 3.589 15.514 0 10 0Z",
                  fill: "rgba(47,128,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector34792897")}
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
              {...getOverrideProps(overrides, "Vector34792901")}
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
          {...getOverrideProps(overrides, "Line34793547")}
        ></Icon>
      </View>
      <View
        width="375px"
        height="9px"
        position="absolute"
        top="717px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(
          overrides,
          "Group Middle (Rectangle Board Bottom)"
        )}
      ></View>
      <View
        width="24px"
        height="628px"
        position="absolute"
        top="98px"
        left="1px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Group Middle (Rectangle Baord Right)")}
      ></View>
      <View
        width="24px"
        height="628px"
        position="absolute"
        top="97px"
        left="352px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Group Middle (Rectangle Board Left)")}
      ></View>
      <View
        width="375px"
        height="38px"
        position="absolute"
        top="98px"
        left="1px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Group Middle (Rectangle Board Top)")}
      ></View>
      <View
        width="327px"
        height="580px"
        position="absolute"
        top="136px"
        left="25px"
        overflow="hidden"
        border="1px SOLID rgba(47,128,237,1)"
        boxShadow="0px 2px 4px rgba(0.02840001881122589, 0.017256975173950195, 0.5744096636772156, 0.10000000149011612)"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "Group Middle (Page Pop)")}
      ></View>
      <View
<<<<<<< HEAD
        width="328px"
        height="580px"
        position="absolute"
        top="136px"
        left="25px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group Middle (Scroll Section)")}
      >
        <View
          width="322px"
          height="79px"
          position="absolute"
          top="9px"
          left="3px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Example 1 Posted")}
        >
          <View
            width="313px"
            height="79px"
            position="absolute"
            top="0px"
            left="4px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(47,128,237,1)"
            opacity="0.10000000149011612"
            {...getOverrideProps(overrides, "Rectangle34792877")}
          ></View>
          <Text
            fontFamily="Abhaya Libre SemiBold"
            fontSize="12px"
            fontWeight="400"
            color="rgba(79,94,123,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-end"
            width="89px"
            height="40px"
            position="absolute"
            top="28px"
            left="52px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Post Title can be this long 36 char."
            {...getOverrideProps(
              overrides,
              "Post Title can be this long 36 char."
            )}
          ></Text>
          <Text
            fontFamily="Anek Tamil"
            fontSize="14px"
            fontWeight="500"
            color="rgba(27,26,87,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-end"
            width="252px"
            height="24px"
            position="absolute"
            top="4px"
            left="52px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1c84fb90-12c4-11e1-840d-7b25c5ee775h"
            {...getOverrideProps(
              overrides,
              "1c84fb90-12c4-11e1-840d-7b25c5ee775h"
            )}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="30.38%"
            bottom="31.65%"
            left="3.42%"
            right="87.27%"
            {...getOverrideProps(overrides, "Group34792880")}
          >
            <Icon
              width="30px"
              height="30px"
              viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
              paths={[
                {
                  d: "M15 0C6.8685 0 0 6.8685 0 15C0 23.1315 6.8685 30 15 30C23.1315 30 30 23.1315 30 15C30 6.8685 23.1315 0 15 0ZM15 7.5C17.5905 7.5 19.5 9.408 19.5 12C19.5 14.592 17.5905 16.5 15 16.5C12.411 16.5 10.5 14.592 10.5 12C10.5 9.408 12.411 7.5 15 7.5ZM7.341 22.158C8.6865 20.178 10.9305 18.858 13.5 18.858L16.5 18.858C19.071 18.858 21.3135 20.178 22.659 22.158C20.742 24.21 18.0225 25.5 15 25.5C11.9775 25.5 9.258 24.21 7.341 22.158Z",
                  fill: "rgba(79,94,123,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Vector34792881")}
            ></Icon>
          </View>
          <View
            height="32px"
            position="absolute"
            top="36px"
            left="178px"
            right="112px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Vote Types")}
          >
            <View
              width="32px"
              height="32px"
              position="absolute"
              top="0px"
              left="67px"
              border="1px SOLID rgba(151,151,151,1)"
              borderRadius="4px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(250,250,250,1)"
              {...getOverrideProps(overrides, "Background White for Minus (-)")}
            >
              <View
                width="32px"
                height="32px"
                position="absolute"
                top="calc(50% - 16px - 0px)"
                left="calc(50% - 16px - 0px)"
                overflow="hidden"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Minus (-)")}
              >
                <Icon
                  width="16px"
                  height="2px"
                  viewBox={{ minX: 0, minY: 0, width: 16, height: 2 }}
                  paths={[
                    {
                      d: "M1 0L15 0C15.5523 0 16 0.447716 16 1C16 1.55229 15.5523 2 15 2L1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0Z",
                      fill: "rgba(225,41,41,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="15px"
                  left="8px"
                  {...getOverrideProps(overrides, "Vector34792885")}
                ></Icon>
              </View>
            </View>
            <View
              width="20px"
              height="20px"
              position="absolute"
              top="4px"
              left="39px"
              overflow="hidden"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Vote Count")}
            >
              <Text
                fontFamily="Anek Tamil"
                fontSize="16px"
                fontWeight="500"
                color="rgba(51,51,51,1)"
                lineHeight="18.75px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="flex-end"
                width="18px"
                position="absolute"
                top="0px"
                left="1px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="0"
                {...getOverrideProps(overrides, "0")}
              ></Text>
            </View>
            <View
              width="32px"
              height="32px"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(151,151,151,1)"
              borderRadius="4px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(250,250,250,1)"
              {...getOverrideProps(overrides, "Background White for Plus (-)")}
            >
              <Flex
                gap="10px"
                position="absolute"
                top="calc(50% - 16px - 0px)"
                left="calc(50% - 16px - 0px)"
                alignItems="flex-start"
                padding="8px 8px 8px 8px"
                {...getOverrideProps(overrides, "Plus (+)")}
              >
                <Icon
                  width="16px"
                  height="16px"
                  viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
                  paths={[
                    {
                      d: "M7 7L7 1C7 0.447715 7.44772 0 8 0C8.55229 0 9 0.447715 9 1L9 7L15 7C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9L9 9L9 15C9 15.5523 8.55229 16 8 16C7.44772 16 7 15.5523 7 15L7 9L1 9C0.447715 9 0 8.55228 0 8C0 7.44771 0.447715 7 1 7L7 7Z",
                      fill: "rgba(74,245,14,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector34792890")}
                ></Icon>
              </Flex>
            </View>
          </View>
        </View>
      </View>
      <View
=======
>>>>>>> cf8717873de6daa0efbe4d06256172b5784f7b9c
        width="322px"
        height="77px"
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
          {...getOverrideProps(overrides, "Rectangle34792909")}
        ></View>
        <View
          width="34.43px"
          height="24.54px"
          position="absolute"
          top="39px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Categories")}
        >
          <View
            position="absolute"
            top="-16.3%"
            bottom="10.33%"
            left="749.37%"
            right="-823.64%"
            overflow="hidden"
            boxShadow="0px 4px 32px rgba(0.27450981736183167, 0.3764705955982208, 0.529411792755127, 0.10000000149011612)"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Negative34792912")}
          >
            <Text
              fontFamily="Abhaya Libre SemiBold"
              fontSize="12px"
              fontWeight="400"
              color="rgba(27,26,87,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="4px"
              left="8px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Negative"
              {...getOverrideProps(overrides, "Negative34792913")}
            ></Text>
          </View>
          <View
            position="absolute"
            top="0%"
            bottom="-5.97%"
            left="487.96%"
            right="-539%"
            overflow="hidden"
            boxShadow="0px 4px 32px rgba(0.27450981736183167, 0.3764705955982208, 0.529411792755127, 0.10000000149011612)"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Postive34792914")}
          >
            <Text
              fontFamily="Abhaya Libre SemiBold"
              fontSize="12px"
              fontWeight="400"
              color="rgba(27,26,87,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="4px"
              left="8px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Postive  "
              {...getOverrideProps(overrides, "Postive34792915")}
            ></Text>
          </View>
          <View
            position="absolute"
            top="0%"
            bottom="-5.97%"
            left="212.03%"
            right="-274.69%"
            overflow="hidden"
            boxShadow="0px 4px 32px rgba(0.27450981736183167, 0.3764705955982208, 0.529411792755127, 0.10000000149011612)"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Popular34792916")}
          >
            <Text
              fontFamily="Abhaya Libre SemiBold"
              fontSize="12px"
              fontWeight="400"
              color="rgba(27,26,87,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="4px"
              left="8px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Popular"
              {...getOverrideProps(overrides, "Popular34792917")}
            ></Text>
          </View>
          <View
            position="absolute"
            top="0%"
            bottom="-5.97%"
            left="0%"
            right="-10.37%"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(47,128,237,1)"
            {...getOverrideProps(overrides, "New34792918")}
          >
            <Text
              fontFamily="Abhaya Libre SemiBold"
              fontSize="12px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="4px"
              left="8px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="New"
              {...getOverrideProps(overrides, "New34792919")}
            ></Text>
          </View>
        </View>
        <View
          width="144px"
          height="34px"
          position="absolute"
          top="3px"
          left="87px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title")}
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
          {...getOverrideProps(overrides, "Line34792910")}
        ></Icon>
      </View>
    </View>
  );
}
