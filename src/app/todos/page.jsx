'use client'

async function getData() {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 3600 },
  })
  const data = await req.json()

  return data
}

async function todos() {

  const data = await getData()
  console.log(data)

  return <div>
    <ul className="list-decimal text-sm container mx-auto font-bold">
      <h1 className="text-4xl mb-6 text-center">Todo List</h1>
      {data.map((todo) => {
        return <li className="mb-3 bg-slate-200 px-3 py-2 rounded-sm flex items-center gap-10" key={todo.id}>
          <h3 className="w-full max-w-78 capitalize">{todo.title}</h3>
          <p>{todo.completed ? "true" : "false"}</p>
        </li>
      })}
    </ul>
  </div>;
}

export default todos;