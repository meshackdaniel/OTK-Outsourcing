export default function Metrics() {
  const items = [
    { label: "Outstanding Invoice", value: "₦450K" },
    { label: "Total Active Workers", value: "15" },
    { label: "Open Job Posts", value: "6" },
    { label: "Matches", value: "27" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(({ label, value }) => (
        <div key={label} className="bg-white p-4 rounded shadow">
          <div className="text-xs text-gray-500">{label}</div>
          <div className="text-lg font-bold">{value}</div>
        </div>
      ))}
    </div>
  );
}
