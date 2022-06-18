## Digicard Fork additions/changes

Custom Swipeable component based on Sowtware Mansion React Native Gesture Handler

Based on Ver 2.1.0 (Expo SDK44 compatible)

- Added properties `leftStop` and `rightStop`.
  When opened passing this breakpoint (but before left/rightThreshold) opening stops there when released
- New 
`getState()`  method return internal state (dirty hack, I know!)
- Methods `openLeft`/`openRight` accept optional parameter `position` to perform a partial opening.
- `onSwipeableLeftOpen`/`onSwipeableRightOpen`/`onSwipeableOpen` now provide argument `toValue`
- `currentOffset()` internal function takes last real position instead of returning full width. This was causing weird animation effect before closing


```

## React Native Support

| version | react-native version |
| ------- | -------------------- |
| 1.4.0+  | 0.60.0+              |
| 1.1.0+  | 0.57.2+              |
| <1.1.0  | 0.50.0+              |

It may be possible to use newer versions of react-native-gesture-handler on React Native with version <= 0.59 by reverse Jetifying.
Read more on that here https://github.com/mikehardy/jetifier#to-reverse-jetify--convert-node_modules-dependencies-to-support-libraries

