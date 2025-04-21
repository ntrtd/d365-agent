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
import type { PayIntV1EmploymentEmployeesApi } from './PayIntV1EmploymentEmployeesApi';

/**
 * This class represents the entity "PayIntV1EmploymentEmployees" of service "d365_metadata".
 */
export class PayIntV1EmploymentEmployees<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1EmploymentEmployeesType<T>
{
  /**
   * Technical entity name for PayIntV1EmploymentEmployees.
   */
  static override _entityName = 'PayIntV1EmploymentEmployees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1EmploymentEmployees entity.
   */
  static _keys = [
    'PersonnelNumber',
    'LegalEntityId',
    'EmploymentEndDate',
    'EmploymentStartDate',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Probation Period.
   */
  declare probationPeriod: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PayIntV1EmploymentEmployeesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1EmploymentEmployeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  probationPeriod: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
