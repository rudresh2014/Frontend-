import React from 'react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const data = [
  { subject: 'CGPA', A: 85, fullMark: 100 },
  { subject: 'Projects', A: 90, fullMark: 100 },
  { subject: 'Internships', A: 65, fullMark: 100 },
  { subject: 'Skills', A: 80, fullMark: 100 },
  { subject: 'Achievements', A: 60, fullMark: 100 },
];

export default function AIRAScore() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      {/* Fallback structure when recharts is loading or in text-only mode */}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Student Score" dataKey="A" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.5} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
