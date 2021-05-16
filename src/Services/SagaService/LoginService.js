export function login(payload) {
  // return doPost(onstant.LOGIN_URL, payload).then(res => {
  //   if (res.flag == 1) {
  //     return {login:'done'};
  //   } else if (res.flag == 0) {
  //     alert('fail to Login');
  //     return null;
  //   }
  // });{

  return {login: 'done'};
}

// export const StoreUserAllData = async (userdata) => {
//   try {
//     const jsonValue = JSON.stringify(userdata);
//     await AsyncStorage.setItem('UserAllData', jsonValue);
//   } catch (e) {
//     console.log(e);
//   }
// };
// export const storeData = async (userdata) => {
//   try {
//     await AsyncStorage.setItem('LoginData', userdata.user_id);
//   } catch (e) {
//     console.log(e);
//   }
// };
