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
import type { JobPreferredExamsApi } from './JobPreferredExamsApi';
import { Jobs, JobsType } from './Jobs';
import { TestTypes, TestTypesType } from './TestTypes';

/**
 * This class represents the entity "JobPreferredExams" of service "d365_metadata".
 */
export class JobPreferredExams<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobPreferredExamsType<T>
{
  /**
   * Technical entity name for JobPreferredExams.
   */
  static override _entityName = 'JobPreferredExams';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobPreferredExams entity.
   */
  static _keys = ['JobId', 'TestId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Test Id.
   */
  declare testId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link TestTypes} entity.
   */
  declare testType?: TestTypes<T> | null;

  constructor(_entityApi: JobPreferredExamsApi<T>) {
    super(_entityApi);
  }
}

export interface JobPreferredExamsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  testId: DeserializedType<T, 'Edm.String'>;
  job?: JobsType<T> | null;
  testType?: TestTypesType<T> | null;
}
