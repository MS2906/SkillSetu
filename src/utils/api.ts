export async function postJson<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const contentType = (response.headers.get("content-type") ?? "").toLowerCase();
  if (!contentType.includes("application/json")) {
    throw new Error("Server not reachable, please retry");
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new Error("Server not reachable, please retry");
  }

  if (!response.ok) {
    const errPayload = data as { error?: string } | null;
    throw new Error(errPayload?.error || "Server not reachable, please retry");
  }

  return data as T;
}
