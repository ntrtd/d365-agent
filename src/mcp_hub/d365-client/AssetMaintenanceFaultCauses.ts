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
import type { AssetMaintenanceFaultCausesApi } from './AssetMaintenanceFaultCausesApi';
import {
  AssetMaintenanceWorkOrderAssetFaults,
  AssetMaintenanceWorkOrderAssetFaultsType
} from './AssetMaintenanceWorkOrderAssetFaults';
import {
  AssetMaintenanceRequestAssetFaults,
  AssetMaintenanceRequestAssetFaultsType
} from './AssetMaintenanceRequestAssetFaults';

/**
 * This class represents the entity "AssetMaintenanceFaultCauses" of service "d365_metadata".
 */
export class AssetMaintenanceFaultCauses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFaultCausesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFaultCauses.
   */
  static override _entityName = 'AssetMaintenanceFaultCauses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFaultCauses entity.
   */
  static _keys = ['dataAreaId', 'FaultCauseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Cause Id.
   */
  declare faultCauseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderAssetFaults} entity.
   */
  declare faultCauseMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestAssetFaults} entity.
   */
  declare faultCauseMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaults<T>[];

  constructor(_entityApi: AssetMaintenanceFaultCausesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFaultCausesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faultCauseId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  faultCauseMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaultsType<T>[];
  faultCauseMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaultsType<T>[];
}
