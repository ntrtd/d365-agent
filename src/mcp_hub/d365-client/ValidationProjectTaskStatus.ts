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
import type { ValidationProjectTaskStatusApi } from './ValidationProjectTaskStatusApi';
import { DataValidationTaskStatus } from './DataValidationTaskStatus';

/**
 * This class represents the entity "ValidationProjectTaskStatus" of service "d365_metadata".
 */
export class ValidationProjectTaskStatus<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ValidationProjectTaskStatusType<T>
{
  /**
   * Technical entity name for ValidationProjectTaskStatus.
   */
  static override _entityName = 'ValidationProjectTaskStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValidationProjectTaskStatus entity.
   */
  static _keys = [
    'DataValidationProject_Name',
    'DataValidationProjectTask_LineNumber',
    'LegalEntity'
  ];
  /**
   * Data Validation Project Name.
   */
  declare dataValidationProjectName: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Validation Project Task Line Number.
   */
  declare dataValidationProjectTaskLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Completed By Worker Personnel Number.
   * @nullable
   */
  declare completedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Data Validation Project Task Name.
   * @nullable
   */
  declare dataValidationProjectTaskName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Responsible Worker Personnel Number.
   * @nullable
   */
  declare responsibleWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: DataValidationTaskStatus | null;
  /**
   * Completed Date Time.
   */
  declare completedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ValidationProjectTaskStatusApi<T>) {
    super(_entityApi);
  }
}

export interface ValidationProjectTaskStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataValidationProjectName: DeserializedType<T, 'Edm.String'>;
  dataValidationProjectTaskLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  completedByWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  dataValidationProjectTaskName?: DeserializedType<T, 'Edm.String'> | null;
  responsibleWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  status?: DataValidationTaskStatus | null;
  completedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
