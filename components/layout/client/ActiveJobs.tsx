export default function ActiveJobs() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="font-semibold text-sm mb-2">Your Active Jobs</div>
      <div className="border p-3 rounded">
        <div className="font-medium">Mechanical Engineer</div>
        <div className="text-xs text-gray-500">Full Time • On Site</div>
        <div className="text-sm mt-1">₦350K - ₦450K</div>
        <div className="text-xs text-gray-500">
          Status: Accepting Applicants
        </div>
        <div className="text-xs mt-2">
          Views: 2567 • Applications: 56 • Shortlisted: 2 • Interviewed: 0 •
          Hired: 0
        </div>
        <div className="text-xs text-gray-400">Posted: 2 days ago</div>
      </div>
    </div>
  );
}
