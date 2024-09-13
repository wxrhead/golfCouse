import {Text, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {fontFamily} from '../constants/fonts';

const Slider = ({
  color,
  amount,
  item,
}: {
  color: string;
  amount: number;
  item: string;
}) => {
  return (
    <View style={{width: '100%', height: verticalScale(35)}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: scale(10),
        }}>
        <Text
          style={{
            fontFamily: fontFamily.interRegular,
            fontSize: verticalScale(12),
            fontWeight: '500',
          }}>
          {item}
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.interRegular,
            fontSize: verticalScale(14),
            fontWeight: '600',
          }}>
          {amount}
        </Text>
      </View>
      <View
        style={{
          height: verticalScale(4),
          width: '100%',
          zIndex: 1,
          borderRadius: 10,
        }}>
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: '#EDECEC',
            borderRadius: 10,
            zIndex: 1,
          }}
        />
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: `${(amount / 5) * 100}%`,
            borderRadius: 10,
            backgroundColor: color,
            zIndex: 2,
          }}
        />
      </View>
    </View>
  );
};
export default Slider;
