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
import type { WorkerResidentTaxRegionsApi } from './WorkerResidentTaxRegionsApi';
import { NoYes } from './NoYes';
import { WorkerTaxRegions, WorkerTaxRegionsType } from './WorkerTaxRegions';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "WorkerResidentTaxRegions" of service "d365_metadata".
 */
export class WorkerResidentTaxRegions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerResidentTaxRegionsType<T>
{
  /**
   * Technical entity name for WorkerResidentTaxRegions.
   */
  static override _entityName = 'WorkerResidentTaxRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerResidentTaxRegions entity.
   */
  static _keys = ['PersonnelNumber', 'ValidFrom'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Applying Courtesy Withholding.
   * @nullable
   */
  declare isApplyingCourtesyWithholding?: NoYes | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link WorkerTaxRegions} entity.
   */
  declare workerTaxRegion?: WorkerTaxRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: WorkerResidentTaxRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerResidentTaxRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isApplyingCourtesyWithholding?: NoYes | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerTaxRegion?: WorkerTaxRegionsType<T> | null;
  worker?: WorkersType<T> | null;
}
