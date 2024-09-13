import {
  BackHandler,
  Image,
  ImageBackground,
  LayoutAnimation,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import {a1, a2, a3, add, backCover, ball} from '../../constants/images';
import {fontFamily} from '../../constants/fonts';
import BackArrow from '../../assets/svg/backArrow';
import Heart from '../../assets/svg/heart';
import Location from '../../assets/svg/location';
import CardBackground from '../../components/CardBackground';
import {scale, verticalScale} from 'react-native-size-matters';
import OrangeLocation from '../../assets/svg/orangeLocation';
import StarFill from '../../assets/svg/starFill';
import Frame from '../../assets/svg/frame';
import Rectangle from '../../assets/svg/rectangle';
import Subtract from '../../assets/svg/subtract';
import Pencil from '../../assets/svg/pencil';
import Arrow from '../../assets/svg/arrow';
import Bee from '../../assets/svg/Bee';
import One from '../../assets/svg/one';
import Two from '../../assets/svg/two';
import Three from '../../assets/svg/three';
import StarEmpty from '../../assets/svg/starEmpty';
import MultipleArrow from '../../assets/svg/multipleArrow';
import navigateTo from '../../navigation/navigate';
import styles from './styles';
import {useState, useRef} from 'react';

const Home = () => {
  const ballPosition = useRef(new Animated.Value(0)).current;
  const [playWithFriends, setPlayWithFriends] = useState(false);
  const [roundType, setroundType] = useState(0);
  const [visible, setVisible] = useState(true);

  const roundTypeData = [
    {name: '18 Holes'},
    {name: 'Front 9'},
    {name: 'Back 9'},
  ];

  const toggleSlider = () => {
    if (visible) {
      Animated.timing(ballPosition, {
        toValue: 255,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(ballPosition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    setVisible(!visible);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerImg}>
        <Image source={backCover} style={{width: '100%', height: '100%'}} />
        <Pressable
          style={styles.headerButton}
          onPress={() => BackHandler.exitApp()}>
          <BackArrow />
        </Pressable>
        <Pressable style={styles.headerButtonleft}>
          <Heart />
        </Pressable>
        <Text style={styles.topHeading}>Newton Common Wealth Golf Course</Text>
        <Pressable style={styles.locationButton}>
          <Location />
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <>
          <CardBackground>
            <View>
              <View style={styles.locationBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <OrangeLocation />
                  <Text style={styles.locationDistance}>
                    {'  '}California Palms, USA
                  </Text>
                </View>

                <View style={styles.ratingBox}>
                  <StarFill />
                  <Text style={styles.rating}>
                    {'  '}
                    4.3
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: verticalScale(3.5),
                }}>
                <Frame />
                <Text style={styles.locationDistance}>{'  '}9 km away</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: verticalScale(14),
                marginHorizontal: scale(10),
              }}>
              <View>
                <Text style={styles.courseInfo}>Length</Text>
                <Text style={styles.courseData}>7017 Yds</Text>
              </View>
              <Rectangle />
              <View>
                <Text style={styles.courseInfo}>Rating/Slope</Text>
                <Text style={styles.courseData}>72.0/129</Text>
              </View>
              <Rectangle />
              <View>
                <Text style={styles.courseInfo}>Scorecard</Text>
                <Text style={styles.courseData}>18 Holes</Text>
              </View>
            </View>
          </CardBackground>
          <View style={{height: verticalScale(13)}} />
          <CardBackground>
            <View style={{justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: fontFamily.interRegular,
                  fontSize: verticalScale(16),
                  fontWeight: '600',
                  color: 'black',
                }}>
                Round Type
              </Text>
              <View style={{height: verticalScale(55)}}>
                <View
                  style={{
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}>
                  <Subtract
                    style={{width: '100%', marginTop: verticalScale(10)}}
                  />
                </View>

                <View style={styles.roundType}>
                  {roundTypeData.map((item, index) => (
                    <Pressable
                      style={[
                        styles.greenButton,
                        {
                          backgroundColor:
                            index == roundType ? '#277A37' : '#F5F4F4',
                        },
                      ]}
                      onPress={() => {
                        LayoutAnimation.configureNext(
                          LayoutAnimation.Presets.easeInEaseOut,
                        );
                        setroundType(index);
                      }}>
                      <Text
                        style={[
                          styles.greenButtonText,
                          {
                            color: index == roundType ? 'white' : '#277A37',
                          },
                        ]}>
                        {item.name}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              <Text
                style={{
                  fontFamily: fontFamily.interRegular,
                  fontSize: verticalScale(12),
                  fontWeight: '500',
                  color: '#8C9590',
                  marginTop: verticalScale(10),
                }}>
                This lets you choose the game length that best fits your time
                and preference.
              </Text>
            </View>
          </CardBackground>
          <View style={{height: verticalScale(10)}} />
          <CardBackground>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: fontFamily.interRegular,
                  fontSize: verticalScale(16),
                  fontWeight: '600',
                  color: 'black',
                }}>
                Play with Friends
              </Text>
              <Switch
                trackColor={{false: '#F5F4F4', true: '#277A37'}}
                onValueChange={value => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut,
                  );
                  setPlayWithFriends(!playWithFriends);
                }}
                value={playWithFriends}
              />
            </View>
            {playWithFriends && (
              <View style={styles.playWithFriends}>
                <View style={styles.hr} />
                {/* <Text
                  style={[
                    styles.greenButtonText,
                    {color: '#277A37', fontSize: verticalScale(16)},
                  ]}>
                  Coming Soon
                </Text> */}
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: scale(14),
                    marginTop: verticalScale(4),
                  }}>
                  {Array.from({length: 8}, (_, i) => (
                    <View style={styles.addPlayer}>
                      <Pressable style={styles.addIcon}>
                        <Image
                          style={{
                            height: verticalScale(24),
                            width: verticalScale(24),
                          }}
                          source={add}
                        />
                      </Pressable>
                      <Text style={styles.addText}>Add</Text>
                    </View>
                  ))}
                </ScrollView>

                <View style={styles.hr} />
              </View>
            )}
          </CardBackground>
          <View style={{height: verticalScale(10)}} />
          <CardBackground>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: fontFamily.interRegular,
                  fontSize: verticalScale(16),
                  fontWeight: '600',
                  color: 'black',
                }}>
                Starting from
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Hole 2{' '}
                </Text>
                <Pencil />
              </View>
            </View>
          </CardBackground>
          <View style={{height: verticalScale(10)}} />
          <CardBackground>
            <View style={{justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: fontFamily.interRegular,
                  fontSize: verticalScale(16),
                  fontWeight: '600',
                  color: 'black',
                }}>
                Starting Tee
              </Text>
              <View style={{height: verticalScale(10)}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Bee />
                  <Text
                    style={{
                      fontFamily: fontFamily.interRegular,
                      fontSize: verticalScale(16),
                      fontWeight: '500',
                      color: 'black',
                    }}>
                    {' '}
                    Black (6707 m)
                  </Text>
                </View>
                <Arrow />
              </View>
            </View>
          </CardBackground>
          <View style={{height: verticalScale(10)}} />
          <CardBackground>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '600',
                    color: '#2A342E',
                  }}>
                  Handicap
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.interRegular,
                      fontSize: verticalScale(16),
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    6.0
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: verticalScale(2),
                  backgroundColor: '#F5F4F4',
                  width: '100%',
                  marginTop: verticalScale(10),
                  marginBottom: verticalScale(10),
                }}
              />
            </View>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '600',
                    color: '#2A342E',
                  }}>
                  Playing Handicap
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.interRegular,
                      fontSize: verticalScale(16),
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    7
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: verticalScale(2),
                  backgroundColor: '#F5F4F4',
                  width: '100%',
                  marginTop: verticalScale(10),
                  marginBottom: verticalScale(10),
                }}
              />
            </View>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '600',
                    color: '#2A342E',
                  }}>
                  Handicap Percentage
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.interRegular,
                      fontSize: verticalScale(16),
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    100%
                  </Text>
                </View>
              </View>
            </View>
          </CardBackground>
          <View style={{height: verticalScale(10)}} />

          <CardBackground>
            <Text
              style={{
                fontFamily: fontFamily.interRegular,
                fontSize: verticalScale(16),
                fontWeight: '600',
                color: '#2A342E',
              }}>
              About Course
            </Text>
            <View style={{height: verticalScale(10)}} />

            <Text
              style={{
                fontFamily: fontFamily.interRegular,
                fontSize: verticalScale(12),
                fontWeight: '400',
                color: '#5F6961',
              }}>
              Greenview Golf Club is a premier 18-hole golf course designed to
              offer a challenging and enjoyable experience for golfers of all
              skill levels. Nestled in the rolling hills of Golf City, the
              course features stunning views, well-maintained greens, and a
              variety of natural hazards.
            </Text>
            <View style={styles.hr} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Directions
                </Text>
              </View>
              <Arrow />
            </View>
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
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Call +18 120 1223 132
                </Text>
              </View>
              <Arrow />
            </View>
            <View
              style={{
                height: verticalScale(5),
              }}
            />
          </CardBackground>
          <View
            style={{
              height: verticalScale(10),
            }}
          />
          <CardBackground>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Leaderboard
                </Text>
              </View>
              <Arrow />
            </View>
            <View
              style={{
                height: verticalScale(10),
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <One />
                <Image
                  style={{
                    width: scale(40),
                    height: scale(40),
                    marginLeft: scale(5),
                    marginRight: scale(5),
                  }}
                  source={a1}
                />
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(14),
                    fontWeight: '400',
                    color: '#2A342E',
                  }}>
                  Alexander Murphy
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  +18(90)
                </Text>
              </View>
            </View>
            <View
              style={{
                height: verticalScale(10),
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Two />
                <Image
                  style={{
                    width: scale(40),
                    height: scale(40),
                    marginLeft: scale(5),
                    marginRight: scale(5),
                  }}
                  source={a2}
                />
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(14),
                    fontWeight: '400',
                    color: '#2A342E',
                  }}>
                  Ted Evelyn Mosby
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  +31(103)
                </Text>
              </View>
            </View>
            <View
              style={{
                height: verticalScale(10),
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Three />
                <Image
                  style={{
                    width: scale(40),
                    height: scale(40),
                    marginLeft: scale(5),
                    marginRight: scale(5),
                  }}
                  source={a3}
                />
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(14),
                    fontWeight: '400',
                    color: '#2A342E',
                  }}>
                  Harvey Specter
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(16),
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  +19(91)
                </Text>
              </View>
            </View>
          </CardBackground>
          <View
            style={{
              height: verticalScale(10),
            }}
          />
          <CardBackground>
            <Pressable onPress={() => navigateTo('Ratings')}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.interRegular,
                      fontSize: verticalScale(16),
                      fontWeight: '500',
                      color: 'black',
                    }}>
                    Reviews and Ratings
                  </Text>
                </View>
                <Arrow />
              </View>
              <View
                style={{
                  height: verticalScale(10),
                }}
              />
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
            </Pressable>
          </CardBackground>
          <View
            style={{
              height: verticalScale(16),
            }}
          />
          <Pressable style={styles.slider} onPress={toggleSlider}>
            <Animated.Image
              style={[
                styles.ballImg,
                {transform: [{translateX: ballPosition}]},
              ]}
              source={ball}
            />
            {visible && (
              <>
                <Text
                  style={{
                    fontFamily: fontFamily.interRegular,
                    fontSize: verticalScale(14),
                    fontWeight: '600',
                    color: 'white',
                  }}>
                  Start Round
                </Text>
                <MultipleArrow />
              </>
            )}
          </Pressable>
        </>
        <View
          style={{
            height: verticalScale(100),
          }}
        />
      </ScrollView>
    </View>
  );
};
export default Home;
