import prisma from "@/lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  console.log({ posts });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Feed</p>
    </main>
  );
}
