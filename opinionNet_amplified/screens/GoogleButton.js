import {Auth} from 'aws-amplify';
import {Button, View} from 'react-native';

const GoogleButton = () => {
  return (
    <>
      <View>
        <Button
          title="Sign in with Google"
          onPress={() => Auth.federatedSignIn({provider: 'Google'})}
        />
      </View>
    </>
  );
};

export default GoogleButton;
