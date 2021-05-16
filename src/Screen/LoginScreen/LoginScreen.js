import React, {useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonContainer from '../../Component/ButtonContainer';
import {fetchUser} from '../../Services/Redux/UserDetails/Action';
import Colors from '../../Utils/Colors';
import ScreenName from '../../Utils/ScreenName';
import {style} from './Style';

const LoginScreen = props => {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);

  const Validation = () => {
    let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    if (email == null || email == '' || regemail.test(email) == false) {
      alert('Please Enter a Valid Email');
    } else if (
      password == null ||
      password == '' ||
      regPassword.test(password) == false
    ) {
      alert('password is incorrect');
    } else {
      Login();
    }
  };
  const Login = () => {
    const formdata = new FormData();
    formdata.append('user_email', email);
    formdata.append('user_password', email);
    dispatch(fetchUser(formdata));
  };

  return (
    <SafeAreaView style={style.container}>
      {state.loading ? (
        <ActivityIndicator size="large" color={Colors.BLACK} />
      ) : (
        <>
          <Text style={style.signUpText}>Sign Up</Text>
          <TextInput
            placeholder="Email"
            style={style.inputBox}
            value={email}
            onChangeText={email => setemail(email)}
          />
          <TextInput
            placeholder="Password"
            style={style.inputBox}
            value={password}
            onChangeText={pass => setpassword(pass)}
          />
          <ButtonContainer
            buttonStyle={style.buttonStyle}
            name={'Login'}
            onClick={() => Validation()}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
