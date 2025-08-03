import { Profile } from "@/lib/definitions";

const baseUrl = "http://localhost:4000/api/";

export async function fetchUsers() {
  const url = new URL(`${baseUrl}users`);

  const res = await fetch(url, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`fetch failed: ${res.statusText}`);
  }

  const json = await res.json();

  const users: Profile[] = json.map((element: any) => ({
    id: element.id,
    email: element.email,
    firstName: element.firstName,
    lastName: element.lastName,
    nickname: element.nickname,
    bio: element.bio,
    status: element.status,
    profileImage: element.profileImage,
  }));

  return users;
}

export async function fetchUser(id: string) {
  const url = new URL(`${baseUrl}users/${id}`);

  const res = await fetch(url, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`fetch failed: ${res.statusText}`);
  }

  const element = await res.json();

  const user: Profile = {
    id: element.id,
    email: element.email,
    firstName: element.firstName,
    lastName: element.lastName,
    nickname: element.nickname,
    bio: element.bio,
    status: element.status,
    profileImage: element.profileImage,
  };

  return user;
}
