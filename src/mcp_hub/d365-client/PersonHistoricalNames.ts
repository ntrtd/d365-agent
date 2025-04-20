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
import type { PersonHistoricalNamesApi } from './PersonHistoricalNamesApi';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import { PayrollEmployees, PayrollEmployeesType } from './PayrollEmployees';

/**
 * This class represents the entity "PersonHistoricalNames" of service "d365_metadata".
 */
export class PersonHistoricalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonHistoricalNamesType<T>
{
  /**
   * Technical entity name for PersonHistoricalNames.
   */
  static override _entityName = 'PersonHistoricalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonHistoricalNames entity.
   */
  static _keys = ['PartyNumber', 'ValidFrom'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-many navigation property to the {@link PayrollEmployees} entity.
   */
  declare payrollEmployee: PayrollEmployees<T>[];

  constructor(_entityApi: PersonHistoricalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonHistoricalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  baseWorker?: BaseWorkersType<T> | null;
  payrollEmployee: PayrollEmployeesType<T>[];
}
