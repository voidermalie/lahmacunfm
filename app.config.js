export default {
      name: "lahmacunfm",
      slug: "lahmacunfm",
      scheme: "lahmacun",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/logo/lahma120.png",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/img/dj-citrom-web.png",
        resizeMode: "contain",
        backgroundColor: "#d09cf8"
      },
      assetBundlePatterns: [
        "**/*"
      ],
      ios: {
        supportsTablet: true,
        bundleIdentifier: "com.lahmacun.lahmacunfm",
        googleServicesFile: process.env.GoogleServiceInfoPlist
      },
      android: {
        package: "com.lahmacun.lahmacunfm",
        googleServicesFile: process.env.GoogleServicesFile,
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#d09cf8"
        }
      },
      web: {
        favicon: "./assets/favicon.png"
      },
      plugins: [
        "expo-router",
        "expo-font",
        "@react-native-firebase/app",
        [
          "expo-build-properties",
          {
            ios: {
              useFrameworks: "static"
            }
          }
        ]
      ],
      experiments: {
        typedRoutes: true
      },
      extra: {
        router: {
          origin: false
        },
        eas: {
          projectId: "71202919-16bc-4e11-99ae-19794da03c00"
        }
      }
    };
  