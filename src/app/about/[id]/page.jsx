
export default function Page({ params }) {
  return (
    <div className="text-4xl">My Post: {params.id}</div>
  )
}