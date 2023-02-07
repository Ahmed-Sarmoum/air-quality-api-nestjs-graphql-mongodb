/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { DatabaseModule } from './database/database.module';
import { AppRepository } from './app.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { AirQualityModel } from './models/ari-quality.model';
import { AirQualitySchema } from './models/air-quality.schema';
import { AirQualistyResolver } from './app.resolver';
import { Poluttion } from './models/poluttion.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/air-quality'),
    MongooseModule.forFeature([
        { 
          name: Poluttion.name,
          schema: AirQualitySchema
        }
      ]) ,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }), 
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: "schema.gql",
      driver: ApolloDriver,
    }),
    DatabaseModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({isGlobal: true,})
  ],
  controllers: [AppController],
  providers: [AppService, AppRepository, AirQualistyResolver],
})
export class AppModule {}
