import { Profile } from "@/lib/definitions";

const baseUrl = "http://localhost:4000/api/";

export async function fetchUsers(): Promise<Profile[]> {
  const url = new URL(`${baseUrl}users`);

  const res = await fetch(url, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`fetch failed: ${res.statusText}`);
  }

  const json: Profile[] = await res.json();

  return json;
}

export async function fetchUser(id: string): Promise<Profile> {
  const url = new URL(`${baseUrl}users/${id}`);

  const res = await fetch(url, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`fetch failed: ${res.statusText}`);
  }

  const json: Profile = await res.json();

  return json;
}

export async function updateUser(
  id: string,
  data: Partial<Profile>
): Promise<Profile> {
  const url = new URL(`${baseUrl}users/${id}`);

  console.log(`update user id: ${id} | data: ${data} `)

  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`update failed: ${res.statusText}`);
  }

  const updatedUser: Profile = await res.json();

  return updatedUser;
}
