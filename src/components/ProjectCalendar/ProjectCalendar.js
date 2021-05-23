import React, { useState } from 'react';
import Calendar from 'react-calendar';

function ProjectCalendar() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div className="cal" class="bg-white w-2/5 border-8 rounded-md border-blue-400 p-6 h-3/5">
    <Calendar
      onChange={onChange}
      value={value}
    />
    </div>
  );
}

export default ProjectCalendar
