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
import type { WorkerExamsApi } from './WorkerExamsApi';
import { HcmCompletionStatus } from './HcmCompletionStatus';
import { TestTypes, TestTypesType } from './TestTypes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "WorkerExams" of service "d365_metadata".
 */
export class WorkerExams<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerExamsType<T>
{
  /**
   * Technical entity name for WorkerExams.
   */
  static override _entityName = 'WorkerExams';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerExams entity.
   */
  static _keys = ['RequiredBy', 'PersonnelNumber', 'TestId'];
  /**
   * Required By.
   */
  declare requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Test Id.
   */
  declare testId: DeserializedType<T, 'Edm.String'>;
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
  /**
   * One-to-one navigation property to the {@link TestTypes} entity.
   */
  declare testType?: TestTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: WorkerExamsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerExamsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  testId: DeserializedType<T, 'Edm.String'>;
  score: DeserializedType<T, 'Edm.Int32'>;
  completedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: HcmCompletionStatus | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  testType?: TestTypesType<T> | null;
  worker?: WorkersType<T> | null;
}
