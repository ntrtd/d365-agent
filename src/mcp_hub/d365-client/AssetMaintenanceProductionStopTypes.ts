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
import type { AssetMaintenanceProductionStopTypesApi } from './AssetMaintenanceProductionStopTypesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenanceProductionStopTypes" of service "d365_metadata".
 */
export class AssetMaintenanceProductionStopTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceProductionStopTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceProductionStopTypes.
   */
  static override _entityName = 'AssetMaintenanceProductionStopTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceProductionStopTypes entity.
   */
  static _keys = ['dataAreaId', 'ProductionStopTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Stop Type Id.
   */
  declare productionStopTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Kpi Include.
   * @nullable
   */
  declare kpiInclude?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceProductionStopTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceProductionStopTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productionStopTypeId: DeserializedType<T, 'Edm.String'>;
  kpiInclude?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
