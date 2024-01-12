import prisma from "@/app/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";
import DeleteButton from "../DeleteButton";
import Link from "next/link";

const DisplayVideo = async () => {
  noStore();
  const videos = await prisma.video.findMany();
  return (
    <div className="ml-64 p-4">
      <div className="grid lg:grid-cols-3 place-items-center mt-24">
        {videos.map((video) => (
          <Link key={video.id} href={`/${video.id}`}>
            <div key={video.id} className="border rounded-lg px-4 py-4 my-2 relative bg-emerald-500 hover:bg-emerald-700">
              <div className="absolute top-0 right-0">
              </div>
              <h1 className="text-black">{video.title}</h1>
              <p>{video.description}</p>
              <video src={video.url} width="350" height="150" controls />
              <DeleteButton videoId={video.id}/>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DisplayVideo;
