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
import type { WorkerTaxCodeParametersApi } from './WorkerTaxCodeParametersApi';
import { WorkerTaxCodes, WorkerTaxCodesType } from './WorkerTaxCodes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "WorkerTaxCodeParameters" of service "d365_metadata".
 */
export class WorkerTaxCodeParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerTaxCodeParametersType<T>
{
  /**
   * Technical entity name for WorkerTaxCodeParameters.
   */
  static override _entityName = 'WorkerTaxCodeParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerTaxCodeParameters entity.
   */
  static _keys = [
    'WorkerId',
    'TaxCodeParameterName',
    'TaxCodeId',
    'CountryRegionId',
    'ValidFrom',
    'ValidTo',
    'CompanyInfoId'
  ];
  /**
   * Worker Id.
   */
  declare workerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Parameter Name.
   */
  declare taxCodeParameterName: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Id.
   */
  declare taxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company Info Id.
   */
  declare companyInfoId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkerTaxCodes} entity.
   */
  declare workerTaxCode?: WorkerTaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: WorkerTaxCodeParametersApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerTaxCodeParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerId: DeserializedType<T, 'Edm.String'>;
  taxCodeParameterName: DeserializedType<T, 'Edm.String'>;
  taxCodeId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  companyInfoId: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  workerTaxCode?: WorkerTaxCodesType<T> | null;
  worker?: WorkersType<T> | null;
}
