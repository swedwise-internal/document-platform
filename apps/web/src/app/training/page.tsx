import Link from 'next/link';

type CourseStatus = 'available' | 'coming_soon' | 'completed';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: CourseStatus;
  required: boolean;
  standard: string[];
}

// Placeholder training courses
const courses: Course[] = [
  {
    id: 'ims-awareness',
    title: 'IMS Awareness Training',
    description: 'Introduction to the Integrated Management System covering Quality, Environmental, and Information Security basics.',
    duration: '45 minutes',
    status: 'available',
    required: true,
    standard: ['ISO 9001', 'ISO 14001', 'ISO 27001'],
  },
  {
    id: 'info-security-basics',
    title: 'Information Security Fundamentals',
    description: 'Core information security concepts, phishing awareness, and secure work practices.',
    duration: '30 minutes',
    status: 'available',
    required: true,
    standard: ['ISO 27001'],
  },
  {
    id: 'environmental-awareness',
    title: 'Environmental Awareness',
    description: 'Understanding environmental aspects, sustainable practices, and our environmental policy.',
    duration: '20 minutes',
    status: 'coming_soon',
    required: false,
    standard: ['ISO 14001'],
  },
  {
    id: 'quality-principles',
    title: 'Quality Management Principles',
    description: 'Customer focus, process approach, and continuous improvement.',
    duration: '25 minutes',
    status: 'coming_soon',
    required: false,
    standard: ['ISO 9001'],
  },
  {
    id: 'risk-management',
    title: 'Risk Management Basics',
    description: 'How to identify, assess, and report risks in your daily work.',
    duration: '35 minutes',
    status: 'coming_soon',
    required: false,
    standard: ['ISO 9001', 'ISO 14001', 'ISO 27001'],
  },
];

const statusStyles: Record<CourseStatus, { bg: string; text: string; label: string }> = {
  available: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    label: 'Available',
  },
  coming_soon: {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    label: 'Coming Soon',
  },
  completed: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    label: 'Completed',
  },
};

export default function TrainingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Training Center</h1>
        <p className="mt-1 text-slate-600">
          Complete required training to maintain compliance with our Integrated Management System
        </p>
      </div>

      {/* Implementation notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-amber-500 text-xl">🎓</span>
          <div>
            <h3 className="font-semibold text-amber-800">Training Platform Coming Soon</h3>
            <p className="text-sm text-amber-700 mt-1">
              The interactive training modules are being developed. Currently, training content
              is available as documents in the Document Library.
            </p>
          </div>
        </div>
      </div>

      {/* Training statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-4">
          <p className="text-sm text-slate-500">Total Courses</p>
          <p className="text-2xl font-bold text-slate-900">{courses.length}</p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Available Now</p>
          <p className="text-2xl font-bold text-green-600">
            {courses.filter(c => c.status === 'available').length}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Required Courses</p>
          <p className="text-2xl font-bold text-sky-600">
            {courses.filter(c => c.required).length}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm text-slate-500">Your Progress</p>
          <p className="text-2xl font-bold text-slate-900">[TBD]</p>
        </div>
      </div>

      {/* Required training section */}
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Required Training</h2>
      <div className="grid gap-4 mb-8">
        {courses.filter(c => c.required).map(course => (
          <div key={course.id} className="card">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`badge ${statusStyles[course.status].bg} ${statusStyles[course.status].text}`}>
                      {statusStyles[course.status].label}
                    </span>
                    <span className="badge bg-red-100 text-red-800">Required</span>
                    {course.standard.map(std => (
                      <span key={std} className="badge bg-slate-100 text-slate-600">{std}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
                  <p className="text-slate-600 mt-1">{course.description}</p>
                  <p className="text-sm text-slate-500 mt-2">
                    <span className="inline-flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                  </p>
                </div>
                <div className="ml-4">
                  {course.status === 'available' ? (
                    <button className="btn btn-primary">
                      Start Course
                    </button>
                  ) : (
                    <button className="btn btn-secondary" disabled>
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional training section */}
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Additional Training</h2>
      <div className="grid gap-4">
        {courses.filter(c => !c.required).map(course => (
          <div key={course.id} className="card">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`badge ${statusStyles[course.status].bg} ${statusStyles[course.status].text}`}>
                      {statusStyles[course.status].label}
                    </span>
                    {course.standard.map(std => (
                      <span key={std} className="badge bg-slate-100 text-slate-600">{std}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
                  <p className="text-slate-600 mt-1">{course.description}</p>
                  <p className="text-sm text-slate-500 mt-2">
                    <span className="inline-flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                  </p>
                </div>
                <div className="ml-4">
                  {course.status === 'available' ? (
                    <button className="btn btn-outline">
                      Start Course
                    </button>
                  ) : (
                    <button className="btn btn-secondary" disabled>
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="mt-8 p-6 bg-slate-100 rounded-lg">
        <h3 className="font-semibold text-slate-900 mb-3">Training Documentation</h3>
        <p className="text-sm text-slate-600 mb-4">
          While interactive courses are being developed, you can access training materials
          in the Document Library.
        </p>
        <Link href="/documents" className="btn btn-secondary">
          Browse Training Documents
        </Link>
      </div>
    </div>
  );
}
