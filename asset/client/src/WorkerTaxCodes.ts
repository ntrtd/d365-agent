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
import type { WorkerTaxCodesApi } from './WorkerTaxCodesApi';
import { Workers, WorkersType } from './Workers';
import {
  WorkerTaxCodeParameters,
  WorkerTaxCodeParametersType
} from './WorkerTaxCodeParameters';

/**
 * This class represents the entity "WorkerTaxCodes" of service "d365_metadata".
 */
export class WorkerTaxCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerTaxCodesType<T>
{
  /**
   * Technical entity name for WorkerTaxCodes.
   */
  static override _entityName = 'WorkerTaxCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerTaxCodes entity.
   */
  static _keys = ['PersonnelNumber', 'TaxCodeId', 'CountryRegionId'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Id.
   */
  declare taxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkerTaxCodeParameters} entity.
   */
  declare workerTaxCodeParameters: WorkerTaxCodeParameters<T>[];

  constructor(_entityApi: WorkerTaxCodesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerTaxCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  taxCodeId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  worker?: WorkersType<T> | null;
  workerTaxCodeParameters: WorkerTaxCodeParametersType<T>[];
}
