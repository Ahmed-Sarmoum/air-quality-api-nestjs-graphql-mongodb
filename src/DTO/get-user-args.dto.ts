/* eslint-disable prettier/prettier */
import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class GetAirArgs {
  @Field()
  @IsNotEmpty()
  lat: number

  @Field()
  @IsNotEmpty()
  lon: number
}