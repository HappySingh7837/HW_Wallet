import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface Props {
  color?: string;
  route?: any;
}

const HomeIcon = ({color, route, ...rest}: Props) => {
  if (!route.navigation.isFocused()) {
    return (
      <Svg width={31} height={37} viewBox="0 0 31 37" fill="none" {...rest}>
        <Path
          d="M25.33 19.828a1.092 1.092 0 01-1.092 1.092H6.762a1.092 1.092 0 01-1.092-1.092V8.348a1.092 1.092 0 01.422-.862L14.829.69a1.092 1.092 0 011.342 0l8.737 6.796a1.093 1.093 0 01.422.863v11.479zm-2.184-1.092V8.882L15.5 2.936 7.854 8.882v9.854h15.292zM.936 27.52h1.416v3.24h4.224v-3.24h1.416v8.4H6.576v-3.852H2.352v3.852H.936v-8.4zM8.966 33.16c0-.568.128-1.068.384-1.5.264-.432.62-.768 1.068-1.008a3.137 3.137 0 011.524-.372c.568 0 1.076.124 1.524.372.448.24.8.576 1.056 1.008.264.432.396.932.396 1.5 0 .56-.132 1.06-.396 1.5a2.754 2.754 0 01-1.056 1.02c-.448.24-.956.36-1.524.36-.56 0-1.068-.12-1.524-.36a2.843 2.843 0 01-1.068-1.02 2.927 2.927 0 01-.384-1.5zm1.332 0c0 .512.156.932.468 1.26.32.32.712.48 1.176.48.472 0 .864-.16 1.176-.48.312-.328.468-.748.468-1.26 0-.52-.156-.94-.468-1.26-.312-.32-.704-.48-1.176-.48a1.6 1.6 0 00-1.176.48c-.312.32-.468.74-.468 1.26zM23.684 32.416v3.504h-1.296v-3.36c0-.824-.304-1.236-.912-1.236-.336 0-.604.108-.804.324-.2.208-.3.512-.3.912v3.36h-1.308v-3.36c0-.824-.304-1.236-.912-1.236-.336 0-.604.108-.804.324-.192.208-.288.512-.288.912v3.36h-1.272V30.4h1.272v.804c.328-.616.844-.924 1.548-.924.816 0 1.348.328 1.596.984.4-.656.976-.984 1.728-.984.592 0 1.032.188 1.32.564.288.368.432.892.432 1.572zM27.378 36.04c-.567 0-1.064-.12-1.488-.36a2.487 2.487 0 01-.983-1.008c-.233-.432-.349-.936-.349-1.512 0-.584.116-1.088.349-1.512.24-.432.576-.768 1.008-1.008.431-.24.94-.36 1.524-.36.872 0 1.547.252 2.027.756.488.496.732 1.184.732 2.064 0 .072-.003.144-.012.216v.144H25.89c.049.48.204.852.468 1.116.273.264.633.396 1.08.396.704 0 1.233-.292 1.585-.876l1.128.444c-.576 1-1.5 1.5-2.773 1.5zm.049-4.776c-.84 0-1.34.432-1.5 1.296h2.855c-.023-.392-.16-.704-.407-.936-.248-.24-.564-.36-.948-.36z"
          fill="#fff"
          fillOpacity={0.38}
        />
      </Svg>
    );
  }
  return (
    <Svg width={31} height={37} viewBox="0 0 31 37" fill="none" {...rest}>
      <G clipPath="url(#clip0_2464_490)" fill={color} fillOpacity={0.96}>
        <Path d="M25.33 19.368a1.093 1.093 0 01-1.092 1.092H6.762a1.092 1.092 0 01-1.092-1.092V7.888a1.092 1.092 0 01.422-.862L14.829.23a1.092 1.092 0 011.341 0l8.738 6.796a1.091 1.091 0 01.422.863v11.479zM1.5 31.608h5.988V30.3H1.5v1.308zm5.076-4.548v8.4h1.416v-8.4H6.576zm-5.64 0v8.4h1.416v-8.4H.936zm8.042 5.64c0 .56.128 1.06.384 1.5.264.432.62.772 1.068 1.02.448.24.956.36 1.524.36.568 0 1.072-.12 1.512-.36a2.843 2.843 0 001.068-1.02c.264-.44.396-.94.396-1.5 0-.568-.132-1.068-.396-1.5a2.753 2.753 0 00-1.068-1.008c-.44-.248-.944-.372-1.512-.372-.568 0-1.076.124-1.524.372-.448.24-.804.576-1.068 1.008-.256.432-.384.932-.384 1.5zm1.332 0c0-.344.072-.648.216-.912.144-.264.34-.468.588-.612.248-.144.528-.216.84-.216.304 0 .58.072.828.216.256.144.456.348.6.612.144.264.216.568.216.912 0 .344-.072.648-.216.912-.144.256-.344.46-.6.612a1.619 1.619 0 01-.828.216c-.312 0-.592-.072-.84-.216a1.66 1.66 0 01-.588-.612 1.874 1.874 0 01-.216-.912zm13.385-.744c0-.456-.064-.844-.192-1.164a1.432 1.432 0 00-.588-.72c-.256-.168-.58-.252-.972-.252-.376 0-.712.084-1.008.252a2.039 2.039 0 00-.72.732 1.415 1.415 0 00-.588-.732c-.264-.168-.6-.252-1.008-.252-.352 0-.66.08-.924.24-.256.152-.464.38-.624.684v-.804H15.8v5.52h1.272V32.1c0-.264.044-.488.132-.672a.955.955 0 01.372-.42c.168-.096.364-.144.588-.144.32 0 .552.104.696.312.152.2.228.508.228.924v3.36h1.296V32.1c0-.264.044-.488.132-.672.096-.184.224-.324.384-.42a1.14 1.14 0 01.576-.144c.32 0 .552.104.696.312.152.2.228.508.228.924v3.36h1.296v-3.504zm3.695 3.624c.64 0 1.188-.124 1.644-.372.456-.248.828-.62 1.116-1.116l-1.116-.456a1.74 1.74 0 01-.66.66 1.9 1.9 0 01-.924.216c-.336 0-.624-.072-.864-.216a1.355 1.355 0 01-.528-.624c-.12-.28-.18-.62-.18-1.02.008-.4.072-.736.192-1.008.12-.272.296-.48.528-.624.232-.144.512-.216.84-.216.272 0 .508.06.708.18.208.12.368.288.48.504.12.216.18.472.18.768a.665.665 0 01-.048.216c-.024.08-.048.144-.072.192l.396-.552h-3.744V33h4.848a.715.715 0 00.012-.156c.008-.072.012-.14.012-.204 0-.592-.112-1.096-.336-1.512a2.243 2.243 0 00-.936-.972c-.408-.224-.904-.336-1.488-.336s-1.092.12-1.524.36a2.467 2.467 0 00-1.008.996c-.232.432-.348.94-.348 1.524 0 .576.116 1.08.348 1.512.232.432.56.768.984 1.008.432.24.928.36 1.488.36z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2464_490">
          <Path fill={color} d="M0 0H31V36.4603H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HomeIcon;
