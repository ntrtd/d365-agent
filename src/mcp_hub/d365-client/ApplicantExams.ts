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
import type { ApplicantExamsApi } from './ApplicantExamsApi';
import { HcmCompletionStatus } from './HcmCompletionStatus';

/**
 * This class represents the entity "ApplicantExams" of service "d365_metadata".
 */
export class ApplicantExams<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApplicantExamsType<T>
{
  /**
   * Technical entity name for ApplicantExams.
   */
  static override _entityName = 'ApplicantExams';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicantExams entity.
   */
  static _keys = ['ApplicantId', 'TestId', 'RequiredBy'];
  /**
   * Applicant Id.
   */
  declare applicantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Test Id.
   */
  declare testId: DeserializedType<T, 'Edm.String'>;
  /**
   * Required By.
   */
  declare requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Score.
   */
  declare score: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Completed On.
   */
  declare completedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: HcmCompletionStatus | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApplicantExamsApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicantExamsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  applicantId: DeserializedType<T, 'Edm.String'>;
  testId: DeserializedType<T, 'Edm.String'>;
  requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  score: DeserializedType<T, 'Edm.Int32'>;
  completedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: HcmCompletionStatus | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
}
