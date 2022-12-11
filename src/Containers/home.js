import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'

const windowWidth = Dimensions.get('window').width

const Home = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }
  const image = { uri: 'https://reactjs.org/logo-og.png' }
  const profilePic = {
    uri: 'https://www.syracuse.com/resizer/LjTbKFiHmJSEJyboi68vnEYh40U=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EAACMW43EZAVNDPNCAV26JZAFI.jpg',
  }
  const more = {
    uri: 'https://w7.pngwing.com/pngs/141/210/png-transparent-three-dots-multimedia-solid-px-icon-thumbnail.png',
  }

  const like ={uri : 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png'}

  const chat = { uri : 'https://cdn-icons-png.flaticon.com/512/1380/1380370.png'}

  const share = { uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ei-share-apple.svg/1200px-Ei-share-apple.svg.png'}

  const bookmark = { uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEcwPSkVmuU4m2Gm7g-02eGrTr1A3OjpdMQ&usqp=CAU'}

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[Layout.fill, { marginTop: 20 }]}
    >
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{ width: windowWidth, height: 500 }}
        >
          <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
            <View style={{ flex: 2 }}>
              <Image
                source={profilePic}
                style={{ with: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={{ flex: 8 }}>
              <Text
                style={{ color: 'white', fontWeight: 'bold', marginTop: 5 }}
              >
                Apoorva Chaturvedi
              </Text>
              <Text
                style={{ color: 'white', fontWeight: 'bold', marginTop: 5 }}
              >
                3H Ago | Public
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Image source={more} style={{ with: 50, height: 50 }} />
            </View>
          </View>

          <View style={{position: 'absolute', right: 10, bottom: 50}}>
           <Image source={profilePic} style={{width: 30, height: 30, borderRadius: 15, position: 'absolute', right: 20, bottom: 5}}/>
           <Image source={profilePic} style={{width: 30, height: 30, borderRadius: 15, position: 'absolute', right: 35, bottom: 5}}/>
           <Image source={profilePic} style={{width: 30, height: 30, borderRadius: 15, position: 'absolute', right: 55, bottom: 5}}/>
            <View style={{right: 18, bottom: 5,backgroundColor: 'rgba(52, 52, 52, 0.8),', width: 30, height: 30, borderRadius: 15}}>
            <Text style={{color: 'white', marginTop: 6, marginLeft: 2}}>+10</Text>
           </View>
          </View>

          <View>
              <TouchableOpacity style={{backgroundColor: '#8e582e', position: 'absolute', right: 30, bottom: 10, width: 160, height: 30, borderRadius: 30 }}>
                  <Text style={{color: 'white', justifyContent: 'center', textAlign: 'center', marginTop: 7, fontWeight: 'bold'}}>
                      Pending Oct-22
                  </Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={{flexDirection: 'row', margin: 10}}>
        <View style={{flex: 2}}>
        <Image source={like} style={{ with: 20, height: 40, }} resizeMode ={'contain'} />
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}> 8.5K</Text>
        </View>
        <View style={{flex: 2}}>
        <Image source={chat} style={{ with: 20, height: 40, }} resizeMode ={'contain'} />
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}> 8.5K</Text>
        </View>
        <View style={{flex: 2}}>
        <Image source={share} style={{ with: 20, height: 40, }} resizeMode ={'contain'} />
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}> 8.5K</Text>
        </View>
        <View style={{flex: 4}}>
          
        </View>
        <View style={{flex: 2}}>
        <Image source={bookmark} style={{ with: 20, height: 40, }} resizeMode ={'contain'} />
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}> 8.5K</Text>
        </View>



        </View>

        <Text style={{marginLeft: 12, fontWeight: 'bold'}}> Live Free</Text>
      </View>
    </ScrollView>
  )
}

export default Home
