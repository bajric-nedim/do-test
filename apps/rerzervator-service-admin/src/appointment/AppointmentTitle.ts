import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "doctor";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.doctor?.toString() || String(record.id);
};
