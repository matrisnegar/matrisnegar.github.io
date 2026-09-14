import type { DemoRequest } from "@/types";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbymblatYXJfJt2jJjIj14WyWR4vv9Z3lXq6GDtetPLgfRewC9LrOxqV3SlP86URsmE12Q/exec";

export const demoRequestService = {
  async create(
    data: Omit<DemoRequest, "id" | "createdAt">
  ): Promise<DemoRequest> {
    const item: DemoRequest = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(item),
    });

    return item;
  },

  getAll(): DemoRequest[] {
    return [];
  },
};
