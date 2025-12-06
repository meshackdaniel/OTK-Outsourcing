export default function TodoPanel() {
  const todos = [
    "Set up your company profile completely",
    "Post your first job opening",
    "Review your first batch of matched candidates",
    "Customize your hiring preferences and filters",
  ];

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <div className="font-semibold text-sm">To-do & Schedule</div>
      <ul className="list-disc pl-5 text-sm text-gray-600">
        {todos.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
