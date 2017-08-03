# RNTest
ActionSheetIOS orientation issue demo

### Environment

1. `react-native -v`: 2.0.1
2. `node -v`: v7.10.0
3. `npm -v`: 4.2.0

- Target Platform: iOS

- Development Operating System: macOS v10.12.4

- Build tools: Xcode

### Steps to Reproduce

React native ActionSheetIOS doesn’t. Seems to be centred when devices changes it’s orientation.
Steps are as below:

1. Launch the app
2. Make sure the device/simulator is in portrait mode
3. Tap on the button “Tap here... to Show Actionsheet”
4. It will show the Action sheet with - Title, message, Option 0, Option 1, Option 2 and Delete 
5. Now rotate device/simulator to Landscape
6. The action sheet displayed is not centred.

### Expected Behavior

Device/simulator is in portrait position. The action sheet is shown on screen and user rotates the device from portrait to landscape, the action sheet should remain centred.

### Actual Behavior

Device/simulator is in portrait position. The action sheet is shown on screen and user rotates the device from portrait to landscape, the action sheet doesn’t remain centred. However, it is positioned towards left and bottom.
