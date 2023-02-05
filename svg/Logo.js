import * as React from "react"
import Svg, { Path, Text, TSpan } from "react-native-svg"

function Logo() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={150}
      viewBox="0 0 264.583 105.833"
    >
      <Path
        d="M11.364 65.144l5.094-21.552L46.63 80.818l30.956-38.793-46.63-11.756 27.821-11.755L46.63 81.6"
        fill="none"
        stroke="#ff4a4a"
        strokeWidth={1.323}
      />
      <Path
        d="M11.364 65.144L54.589 36.34 16.845 83.444l15.285 5.614 14.5-7.457L30.956 30.27 69.25 77.83l8.336-35.804-18.809-23.511.18 46.213z"
        fill="none"
        stroke="#ffab4a"
        strokeWidth={1.323}
      />
      <Path
        d="M49.924 79.549a3.431 3.431 0 01-1.73 4.53 3.431 3.431 0 01-4.532-1.722 3.431 3.431 0 011.715-4.535 3.431 3.431 0 014.538 1.708M29.336 53.97a3.431 3.431 0 01-1.73 4.53 3.431 3.431 0 01-4.532-1.722 3.431 3.431 0 011.715-4.535 3.431 3.431 0 014.538 1.708M58.034 34.63a3.431 3.431 0 01-1.729 4.53 3.431 3.431 0 01-4.533-1.722 3.431 3.431 0 011.715-4.535 3.431 3.431 0 014.538 1.708M81.43 41.492a3.431 3.431 0 01-1.73 4.53 3.431 3.431 0 01-4.532-1.721 3.431 3.431 0 011.715-4.536 3.431 3.431 0 014.538 1.708M61.465 15.602a3.431 3.431 0 01-1.729 4.53 3.431 3.431 0 01-4.532-1.722 3.431 3.431 0 011.715-4.536 3.431 3.431 0 014.538 1.708M34.327 29.015a3.431 3.431 0 01-1.73 4.53 3.431 3.431 0 01-4.532-1.722 3.431 3.431 0 011.715-4.535 3.431 3.431 0 014.538 1.708M54.29 53.97a3.431 3.431 0 01-1.728 4.53 3.431 3.431 0 01-4.533-1.722 3.431 3.431 0 011.715-4.535 3.431 3.431 0 014.538 1.708"
        opacity={0.988}
        fill="#008b91"
        stroke="#008b91"
        strokeWidth={0.529}
      />
      <Path
        d="M11.23 64.727l5.927 18.405"
        fill="none"
        stroke="#ff4b4a"
        strokeWidth={1.323}
      />
      <Path
        d="M20.29 81.42a3.431 3.431 0 01-1.73 4.53 3.431 3.431 0 01-4.532-1.721 3.431 3.431 0 011.715-4.536 3.431 3.431 0 014.538 1.708"
        opacity={0.988}
        fill="#008b91"
        stroke="#008b91"
        strokeWidth={0.529}
      />
      <Path
        d="M13.305 64.112a2.273 2.273 0 01-1.145 3.001 2.273 2.273 0 01-3.003-1.14 2.273 2.273 0 011.136-3.005A2.273 2.273 0 0113.3 64.1"
        opacity={0.988}
        fill="#008b91"
        stroke="#008b91"
        strokeWidth={0.351}
      />
      <Text
        style={{
          lineHeight: 0,
          InkscapeFontSpecification: "'Bahnschrift, Normal'",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
        }}
        x={84.723}
        y={60.658}
        transform="scale(.99935 1.00065)"
        fontWeight={400}
        fontSize={57.897}
        fontFamily="Bahnschrift"
        fill="#008b91"
        strokeWidth={0.579}
      >
        <TSpan
          x={84.723}
          y={60.658}
          style={{
            InkscapeFontSpecification: "'Bahnschrift, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
        >
          {"CavyAI"}
        </TSpan>
      </Text>
      <Text
        style={{
          lineHeight: 0,
          InkscapeFontSpecification: "'Bahnschrift, Normal'",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
        }}
        x={184.619}
        y={85.129}
        fontWeight={400}
        fontSize={7.938}
        fontFamily="Bahnschrift"
        fill="#008b91"
        strokeWidth={0.265}
      >
        <TSpan
          x={184.619}
          y={85.129}
          style={{
            InkscapeFontSpecification: "'Bahnschrift, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
        >
          {"Powered by CavyIoT"}
        </TSpan>
      </Text>
    </Svg>
  )
}

export default Logo
