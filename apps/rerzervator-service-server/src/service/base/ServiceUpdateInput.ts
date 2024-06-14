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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { ReservationUpdateManyWithoutServicesInput } from "./ReservationUpdateManyWithoutServicesInput";
import { Type } from "class-transformer";

@InputType()
class ServiceUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReservationUpdateManyWithoutServicesInput,
  })
  @ValidateNested()
  @Type(() => ReservationUpdateManyWithoutServicesInput)
  @IsOptional()
  @Field(() => ReservationUpdateManyWithoutServicesInput, {
    nullable: true,
  })
  reservations?: ReservationUpdateManyWithoutServicesInput;
}

export { ServiceUpdateInput as ServiceUpdateInput };
