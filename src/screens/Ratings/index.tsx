import {Image, ScrollView, Text, View} from 'react-native';
import RatingBack from '../../assets/svg/ratingBack';
import {scale, verticalScale} from 'react-native-size-matters';
import {fontFamily} from '../../constants/fonts';
import navigateTo from '../../navigation/navigate';
import CardBackground from '../../components/CardBackground';
import StarFill from '../../assets/svg/starFill';
import StarEmpty from '../../assets/svg/starEmpty';
import {a1, a2, a3} from '../../constants/images';
import Slider from '../../components/Slider';

const Ratings = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: verticalScale(40),
        padding: verticalScale(10),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <RatingBack onPress={() => navigateTo()} />
        <Text
          style={{
            fontFamily: fontFamily.interRegular,
            fontSize: verticalScale(16),
            fontWeight: '600',
            color: 'black',
            marginLeft: scale(50),
          }}>
          Ratings and Reviews
        </Text>
      </View>
      <View
        style={{
          height: verticalScale(10),
        }}
      />
      <CardBackground>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{padding: scale(10), height: verticalScale(500)}}>
          <>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: fontFamily.farroBold,
                  fontSize: verticalScale(35),
                  fontWeight: '500',
                  color: 'black',
                }}>
                4.3
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: scale(5),
                    alignItems: 'center',
                  }}>
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarEmpty />
                </View>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(14),
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  {' '}
                  Based on 234 rating
                </Text>
              </View>
            </View>
            <View style={{height: verticalScale(10)}} />
            <Slider color={'#FF8954'} amount={3.7} item={'Value'} />
            <View style={{height: verticalScale(10)}} />
            <Slider color={'#52955F'} amount={4.7} item={'Condition'} />
            <View style={{height: verticalScale(10)}} />
            <Slider color={'#6EA679'} amount={4.2} item={'Difficulty'} />
            <View style={{height: verticalScale(10)}} />

            <View
              style={{
                height: verticalScale(2),
                backgroundColor: '#F5F4F4',
                width: '100%',
                marginTop: verticalScale(10),
                marginBottom: verticalScale(10),
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: scale(40),
                    height: scale(40),
                    marginLeft: scale(5),
                    marginRight: scale(5),
                  }}
                  source={a2}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: fontFamily.interRegular,
                      fontSize: verticalScale(14),
                      fontWeight: '400',
                      color: 'black',
                    }}>
                    {' '}
                    Harvey Specter
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: scale(5),
                      alignItems: 'center',
                    }}>
                    <StarFill />
                    <Text
                      style={{
                        fontFamily: fontFamily.interRegular,
                        fontSize: verticalScale(14),
                        fontWeight: '400',
                        color: 'black',
                      }}>
                      {' '}
                      4.3
                    </Text>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  fontFamily: fontFamily.farroBold,
                  fontSize: verticalScale(12),
                  fontWeight: '500',
                  color: 'black',
                }}>
                Jan 12
              </Text>
            </View>
            <View
              style={{
                height: verticalScale(10),
              }}
            />
            <Text
              style={{
                fontFamily: fontFamily.farroBold,
                fontSize: verticalScale(12),
                fontWeight: '400',
                color: '#5F6961',
              }}>
              Greenview Golf Club is a premier 18-hole golf course designed to
              offer a challenging and enjoyable experience for golfers of all
              skill levels. Nestled in the rolling hills of Golf City, the
              course features stunning views, well-maintained greens, and a
              variety of natural hazards.{' '}
            </Text>
            <View
              style={{
                height: verticalScale(2),
                backgroundColor: '#F5F4F4',
                width: '100%',
                marginTop: verticalScale(10),
                marginBottom: verticalScale(10),
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: scale(40),
                    height: scale(40),
                    marginLeft: scale(5),
                    marginRight: scale(5),
                  }}
                  source={a3}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: fontFamily.interRegular,
                      fontSize: verticalScale(14),
                      fontWeight: '400',
                      color: 'black',
                    }}>
                    {' '}
                    Ted Evelyn Mosby
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: scale(5),
                      alignItems: 'center',
                    }}>
                    <StarFill />
                    <Text
                      style={{
                        fontFamily: fontFamily.interRegular,
                        fontSize: verticalScale(14),
                        fontWeight: '400',
                        color: 'black',
                      }}>
                      {' '}
                      4.3
                    </Text>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  fontFamily: fontFamily.farroBold,
                  fontSize: verticalScale(12),
                  fontWeight: '500',
                  color: 'black',
                }}>
                Jan 12
              </Text>
            </View>
            <View
              style={{
                height: verticalScale(10),
              }}
            />
            <Text
              style={{
                fontFamily: fontFamily.farroBold,
                fontSize: verticalScale(12),
                fontWeight: '400',
                color: '#5F6961',
              }}>
              Greenview Golf Club is a premier 18-hole golf course designed to
              offer a challenging and enjoyable experience for golfers of all
              skill levels. Nestled in the rolling hills of Golf City, the
              course features stunning views, well-maintained greens, and a
              variety of natural hazards.{' '}
            </Text>
            <View
              style={{
                height: verticalScale(2),
                backgroundColor: '#F5F4F4',
                width: '100%',
                marginTop: verticalScale(10),
                marginBottom: verticalScale(10),
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: scale(40),
                    height: scale(40),
                    marginLeft: scale(5),
                    marginRight: scale(5),
                  }}
                  source={a2}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: fontFamily.interRegular,
                      fontSize: verticalScale(14),
                      fontWeight: '400',
                      color: 'black',
                    }}>
                    {' '}
                    Harvey Specter
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: scale(5),
                      alignItems: 'center',
                    }}>
                    <StarFill />
                    <Text
                      style={{
                        fontFamily: fontFamily.interRegular,
                        fontSize: verticalScale(14),
                        fontWeight: '400',
                        color: 'black',
                      }}>
                      {' '}
                      4.3
                    </Text>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  fontFamily: fontFamily.farroBold,
                  fontSize: verticalScale(12),
                  fontWeight: '500',
                  color: 'black',
                }}>
                Jan 12
              </Text>
            </View>
            <View
              style={{
                height: verticalScale(10),
              }}
            />
            <Text
              style={{
                fontFamily: fontFamily.farroBold,
                fontSize: verticalScale(12),
                fontWeight: '400',
                color: '#5F6961',
              }}>
              Greenview Golf Club is a premier 18-hole golf course designed to
              offer a challenging and enjoyable experience for golfers of all
              skill levels. Nestled in the rolling hills of Golf City, the
              course features stunning views, well-maintained greens, and a
              variety of natural hazards.{' '}
            </Text>
            <View
              style={{
                height: verticalScale(30),
              }}
            />
          </>
        </ScrollView>
      </CardBackground>

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: scale(10),
          right: 0,
          alignSelf: 'center',
          height: verticalScale(56),
          width: '100%',
          flexDirection: 'row',
          borderColor: '#277A37',
          borderRadius: scale(40),
          borderWidth: 2,
          backgroundColor: '#E9F2EB',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: fontFamily.interRegular,
            fontSize: verticalScale(16),
            fontWeight: '600',
            color: '#277A37',
          }}>
          Write a review
        </Text>
      </View>
    </View>
  );
};
export default Ratings;
