/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ApplicantInterviewsApi } from './ApplicantInterviewsApi';
import { HrmInterviewStatus } from './HrmInterviewStatus';

/**
 * This class represents the entity "ApplicantInterviews" of service "d365_metadata".
 */
export class ApplicantInterviews<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApplicantInterviewsType<T>
{
  /**
   * Technical entity name for ApplicantInterviews.
   */
  static override _entityName = 'ApplicantInterviews';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicantInterviews entity.
   */
  static _keys = [
    'dataAreaId',
    'hrmApplicationId',
    'Start',
    'End',
    'Recruiter_PersonnelNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Hrm Application Id.
   */
  declare hrmApplicationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start.
   */
  declare start: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End.
   */
  declare end: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Recruiter Personnel Number.
   */
  declare recruiterPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: HrmInterviewStatus | null;
  /**
   * Interview Location.
   * @nullable
   */
  declare interviewLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dir Person Fk Party Number.
   * @nullable
   */
  declare dirPersonFkPartyNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApplicantInterviewsApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicantInterviewsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  hrmApplicationId: DeserializedType<T, 'Edm.String'>;
  start: DeserializedType<T, 'Edm.DateTimeOffset'>;
  end: DeserializedType<T, 'Edm.DateTimeOffset'>;
  recruiterPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  status?: HrmInterviewStatus | null;
  interviewLocation?: DeserializedType<T, 'Edm.String'> | null;
  dirPersonFkPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
}
