const AppointmentDay = (state, day) => {
  const days = state.days;
  if(days.length === 0) {
    return [];
  }
  for (let d of days) {
    if(d.name === day) {
      return d.appointments
    }
  }
  return [];
}

const AppointmentForDay = (AppDay, appointments) => {
  const arr = [];
  for (let d of AppDay) {
    if(appointments[d]) {
      arr.push(appointments[d]);
    }
  }
  return arr;
}

export function getAppointmentsForDay(state, day) {
const AppDay = AppointmentDay(state, day)
const AppSelectDay = AppointmentForDay(AppDay, state.appointments);
  return AppSelectDay
}

export function getInterview(state, interview) {
  if(!interview) {
    return null;
  }
  return {
    "student": interview.student,
    "interviewer": state.interviewers[interview.interviewer]
  }
}

const AppointmentDayInterviewer = (state, day) => {
  const days = state.days;
  if(days.length === 0) {
    return [];
  }
  for (let d of days) {
    if(d.name === day) {
      return d.interviewers
    }
  }
  return [];
}

const getInterviewerForDay = (InterviewForDay, interviewer) => {
  const arr = [];
  for (let d of InterviewForDay) {
    if(interviewer[d]) {
      arr.push(interviewer[d]);
    }
  }
  return arr;
}

export function getInterviewersForDay(state, day) {
  const InterviewForDay = AppointmentDayInterviewer(state, day)
  const AppSelectDay = getInterviewerForDay(InterviewForDay, state.interviewers);
    return AppSelectDay
  }