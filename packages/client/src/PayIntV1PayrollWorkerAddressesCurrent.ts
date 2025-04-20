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
import type { PayIntV1PayrollWorkerAddressesCurrentApi } from './PayIntV1PayrollWorkerAddressesCurrentApi';
import { NoYes } from './NoYes';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';

/**
 * This class represents the entity "PayIntV1PayrollWorkerAddressesCurrent" of service "d365_metadata".
 */
export class PayIntV1PayrollWorkerAddressesCurrent<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PayrollWorkerAddressesCurrentType<T>
{
  /**
   * Technical entity name for PayIntV1PayrollWorkerAddressesCurrent.
   */
  static override _entityName = 'PayIntV1PayrollWorkerAddressesCurrent';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PayrollWorkerAddressesCurrent entity.
   */
  static _keys = ['PersonnelNumber', 'LocationId'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Postal Address Valid To.
   */
  declare postalAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assignment Date.
   */
  declare assignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Address Valid From.
   */
  declare postalAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Lived In Address.
   * @nullable
   */
  declare isLivedInAddress?: NoYes | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Worked In Address.
   * @nullable
   */
  declare isWorkedInAddress?: NoYes | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;

  constructor(_entityApi: PayIntV1PayrollWorkerAddressesCurrentApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PayrollWorkerAddressesCurrentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  locationId: DeserializedType<T, 'Edm.String'>;
  postalAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  assignmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  postalAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  isLivedInAddress?: NoYes | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  isWorkedInAddress?: NoYes | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  baseWorker?: BaseWorkersType<T> | null;
}
