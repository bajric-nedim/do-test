import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { ServiceTitle } from "../service/ServiceTitle";
import { UserTitle } from "../user/UserTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointment.id"
          reference="Appointment"
          label="appointment"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <ReferenceInput source="service.id" reference="Service" label="service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
