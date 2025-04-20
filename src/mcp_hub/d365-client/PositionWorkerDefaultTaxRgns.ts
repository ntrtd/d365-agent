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
import type { PositionWorkerDefaultTaxRgnsApi } from './PositionWorkerDefaultTaxRgnsApi';
import { WorkerTaxRegions, WorkerTaxRegionsType } from './WorkerTaxRegions';
import { Workers, WorkersType } from './Workers';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "PositionWorkerDefaultTaxRgns" of service "d365_metadata".
 */
export class PositionWorkerDefaultTaxRgns<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PositionWorkerDefaultTaxRgnsType<T>
{
  /**
   * Technical entity name for PositionWorkerDefaultTaxRgns.
   */
  static override _entityName = 'PositionWorkerDefaultTaxRgns';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionWorkerDefaultTaxRgns entity.
   */
  static _keys = ['PersonnelNumber', 'PositionId'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkerTaxRegions} entity.
   */
  declare workerTaxRegion?: WorkerTaxRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare positionV2?: PositionsV2<T> | null;

  constructor(_entityApi: PositionWorkerDefaultTaxRgnsApi<T>) {
    super(_entityApi);
  }
}

export interface PositionWorkerDefaultTaxRgnsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  positionId: DeserializedType<T, 'Edm.String'>;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  workerTaxRegion?: WorkerTaxRegionsType<T> | null;
  worker?: WorkersType<T> | null;
  positionV2?: PositionsV2Type<T> | null;
}
