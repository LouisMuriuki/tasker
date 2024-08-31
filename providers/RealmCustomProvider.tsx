import { View, Text } from "react-native";
import React, { PropsWithChildren } from "react";
import { RealmProvider } from "@realm/react";
import { Task } from "@/models/task";

const RealmCustomProvider = ({ children }: PropsWithChildren) => {
  return <RealmProvider schema={[Task]}>{children}</RealmProvider>;
};

export default RealmCustomProvider;
