import type { DemoRequest } from "@/types";

const DEMO_API_URL =
  "https://script.google.com/macros/s/AKfycbymblatYXJfJt2jJjIj14WyWR4vv9Z3lXq6GDtetPLgfRewC9LrOxqV3SlP86URsmE12Q/exec";

type NewDemoRequest = Omit<DemoRequest, "id" | "createdAt">;

export const demoRequestService = {
  async create(data: NewDemoRequest): Promise<void> {
    await fetch(DEMO_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
  },
};
