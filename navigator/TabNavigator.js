import CreateBottomNavigator from 'react navigation/bottom-tabs'
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === "Feed") {
                    iconName = focused
                        ? "book"
                        : "book-outline";
                } else if (route.name === "CreatePost") {
                    iconName = focused
                        ? "create"
                        : "create-outline";
                }
                return (<Ionicons name={iconName} size={size} color={color}/>);
            }
        })}
            tabbaroptions={{
            activeTintcolor: "tomato",
            inactiveTintColor: 'gray'
        }}>

            <Tab.Screen name="Feed" conponent={Feed}/>
            <Tab.Screen nane="CriarPost" component={CreatePost}/>
        </Tab.Navigator>
    );
};