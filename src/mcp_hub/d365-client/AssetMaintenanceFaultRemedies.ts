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
import type { AssetMaintenanceFaultRemediesApi } from './AssetMaintenanceFaultRemediesApi';
import {
  AssetMaintenanceWorkOrderAssetFaults,
  AssetMaintenanceWorkOrderAssetFaultsType
} from './AssetMaintenanceWorkOrderAssetFaults';
import {
  AssetMaintenanceRequestAssetFaults,
  AssetMaintenanceRequestAssetFaultsType
} from './AssetMaintenanceRequestAssetFaults';

/**
 * This class represents the entity "AssetMaintenanceFaultRemedies" of service "d365_metadata".
 */
export class AssetMaintenanceFaultRemedies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFaultRemediesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFaultRemedies.
   */
  static override _entityName = 'AssetMaintenanceFaultRemedies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFaultRemedies entity.
   */
  static _keys = ['dataAreaId', 'FaultRemedyId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Remedy Id.
   */
  declare faultRemedyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderAssetFaults} entity.
   */
  declare faultRemedyMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestAssetFaults} entity.
   */
  declare faultRemedyMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaults<T>[];

  constructor(_entityApi: AssetMaintenanceFaultRemediesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFaultRemediesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faultRemedyId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  faultRemedyMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaultsType<T>[];
  faultRemedyMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaultsType<T>[];
}
