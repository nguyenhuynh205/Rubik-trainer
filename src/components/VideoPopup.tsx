import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { AlertDialog } from "native-base";
import { ICompetition } from "../types/competition";
import { ILecture } from "../types/lectures";

type Props = {
  isOpen: boolean;
  data: ILecture | null;
  onClose: () => any;
};
const SCREEN_W = Dimensions.get("screen").width;
// const SCREEN_H = Dimensions.get("screen").height;

const VideoPopup = ({ isOpen, onClose, data }: Props) => {
  const cancelRef = React.useRef(null);
  if (!data) return <View />;
  return (
    <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
      <AlertDialog.Content style={{ width: SCREEN_W }}>
        <AlertDialog.CloseButton />
        <AlertDialog.Header color="danger" w="60%">{data.title}</AlertDialog.Header>
        <AlertDialog.Body>
          <WebView
            style={{ width: "100%", height: 300 }}
            source={{
              uri: data.uri,
            }}
          />
        </AlertDialog.Body>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default VideoPopup;

const styles = StyleSheet.create({});
