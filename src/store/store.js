import todoSlice from "../todoFeatures/todo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";

export const store = configureStore({ reducer: { reducer: todoSlice } });
