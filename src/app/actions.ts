"use server"

import { redirect } from "next/navigation";

export const sendToNewLink = async (url: string) => redirect(url)