export default function RecentMatches() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="font-semibold text-sm mb-2">Your Recent Matches</div>
      <div className="border p-3 rounded">
        <div className="font-medium">Alex Nwosu — Mechanical Engineer</div>
        <div className="text-xs text-gray-500">
          Match: 98% • Location: Lagos • Experience: 3–5 years
        </div>
        <div className="text-xs text-gray-500">
          Skills: AutoCad, SolidWorks, Thermodynamics, Design
        </div>
        <p className="text-sm mt-2 text-gray-600">
          I'm a mechanical engineer who loves solving real-world problems
          through design, motion, and innovation...
        </p>
        <div className="flex gap-2 mt-2">
          <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded">
            View Profile
          </button>
          <button className="text-sm px-3 py-1 border rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
