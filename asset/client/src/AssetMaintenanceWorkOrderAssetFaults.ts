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
import type { AssetMaintenanceWorkOrderAssetFaultsApi } from './AssetMaintenanceWorkOrderAssetFaultsApi';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceFaultRemedies,
  AssetMaintenanceFaultRemediesType
} from './AssetMaintenanceFaultRemedies';
import {
  AssetMaintenanceFaultTypes,
  AssetMaintenanceFaultTypesType
} from './AssetMaintenanceFaultTypes';
import {
  AssetMaintenanceFaultSymptoms,
  AssetMaintenanceFaultSymptomsType
} from './AssetMaintenanceFaultSymptoms';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  AssetMaintenanceFaultCauses,
  AssetMaintenanceFaultCausesType
} from './AssetMaintenanceFaultCauses';
import {
  AssetMaintenanceFaultAreas,
  AssetMaintenanceFaultAreasType
} from './AssetMaintenanceFaultAreas';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderAssetFaults" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderAssetFaults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderAssetFaultsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderAssetFaults.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderAssetFaults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderAssetFaults entity.
   */
  static _keys = ['dataAreaId', 'FaultID', 'WorkOrderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Id.
   */
  declare faultId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order.
   */
  declare workOrder: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fault Symptom Id.
   * @nullable
   */
  declare faultSymptomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Remedy.
   */
  declare faultRemedy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Cause Id.
   * @nullable
   */
  declare faultCauseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Remedy Id.
   * @nullable
   */
  declare faultRemedyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Type Id.
   * @nullable
   */
  declare assetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Type Id.
   * @nullable
   */
  declare faultTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Date.
   */
  declare faultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fault Cause.
   */
  declare faultCause: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fault Area Id.
   * @nullable
   */
  declare faultAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare maintenanceWorkOrder?: AssetMaintenanceWorkOrderTablesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare maintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceAsset?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFaultRemedies} entity.
   */
  declare maintenanceFaultRemedy?: AssetMaintenanceFaultRemedies<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFaultTypes} entity.
   */
  declare maintenanceFaultType?: AssetMaintenanceFaultTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFaultSymptoms} entity.
   */
  declare maintenanceFaultSymptom?: AssetMaintenanceFaultSymptoms<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare maintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFaultCauses} entity.
   */
  declare maintenanceFaultCause?: AssetMaintenanceFaultCauses<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFaultAreas} entity.
   */
  declare maintenanceFaultArea?: AssetMaintenanceFaultAreas<T> | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderAssetFaultsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderAssetFaultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faultId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  workOrder: DeserializedType<T, 'Edm.Int64'>;
  faultSymptomId?: DeserializedType<T, 'Edm.String'> | null;
  faultRemedy: DeserializedType<T, 'Edm.Int64'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  faultCauseId?: DeserializedType<T, 'Edm.String'> | null;
  faultRemedyId?: DeserializedType<T, 'Edm.String'> | null;
  assetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  faultTypeId?: DeserializedType<T, 'Edm.String'> | null;
  faultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  faultCause: DeserializedType<T, 'Edm.Int64'>;
  faultAreaId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceWorkOrder?: AssetMaintenanceWorkOrderTablesV2Type<T> | null;
  maintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
  maintenanceAsset?: AssetMaintenanceAssetsV3Type<T> | null;
  maintenanceFaultRemedy?: AssetMaintenanceFaultRemediesType<T> | null;
  maintenanceFaultType?: AssetMaintenanceFaultTypesType<T> | null;
  maintenanceFaultSymptom?: AssetMaintenanceFaultSymptomsType<T> | null;
  maintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  maintenanceFaultCause?: AssetMaintenanceFaultCausesType<T> | null;
  maintenanceFaultArea?: AssetMaintenanceFaultAreasType<T> | null;
}
