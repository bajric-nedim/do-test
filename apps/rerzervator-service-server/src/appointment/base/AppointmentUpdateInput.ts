/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ReservationUpdateManyWithoutAppointmentsInput } from "./ReservationUpdateManyWithoutAppointmentsInput";

@InputType()
class AppointmentUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  doctor?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duration?: number | null;

  @ApiProperty({
    required: false,
    type: () => ReservationUpdateManyWithoutAppointmentsInput,
  })
  @ValidateNested()
  @Type(() => ReservationUpdateManyWithoutAppointmentsInput)
  @IsOptional()
  @Field(() => ReservationUpdateManyWithoutAppointmentsInput, {
    nullable: true,
  })
  reservations?: ReservationUpdateManyWithoutAppointmentsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  time?: Date | null;
}

export { AppointmentUpdateInput as AppointmentUpdateInput };
