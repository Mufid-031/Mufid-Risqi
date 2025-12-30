import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Blog Detail: {slug}</h1>
    </div>
  );
}
