# react native 0.63.4 專案錯誤

## flipper 版本過舊

這問題在 debug 及 release 版本都會發生錯誤，解決方法為使用新版的 flipper
ref: https://fbflipper.com/docs/getting-started/react-native/#using-the-latest-flipper-sdk

## swift 連結錯誤

這問題只會發生在 ios release 版本，需要依照以下兩個步驟修正

- 將 `project.pbxproj` 內的專案修改 swift 版本，開啟 `project.pbxproj` 檔案，將其中的 `"\"$(TOOLCHAIN_DIR)/usr/lib/swift-5.0/$(PLATFORM_NAME)\"",` 修改為 `"\"$(TOOLCHAIN_DIR)/usr/lib/swift-5.3.2/$(PLATFORM_NAME)\"",`
- 新增一個 swift 檔案，讓系統自動加上 `Bridging-Header`，用 xcode 打開專案 -> file -> new -> file -> swift file -> create bridging header
