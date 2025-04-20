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
import type { AssetMaintenanceRequestAssetFaultsApi } from './AssetMaintenanceRequestAssetFaultsApi';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';
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
 * This class represents the entity "AssetMaintenanceRequestAssetFaults" of service "d365_metadata".
 */
export class AssetMaintenanceRequestAssetFaults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceRequestAssetFaultsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceRequestAssetFaults.
   */
  static override _entityName = 'AssetMaintenanceRequestAssetFaults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceRequestAssetFaults entity.
   */
  static _keys = ['dataAreaId', 'FaultID', 'RequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Id.
   */
  declare faultId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Remedy Id.
   * @nullable
   */
  declare faultRemedyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Cause Id.
   * @nullable
   */
  declare faultCauseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Type Id.
   * @nullable
   */
  declare assetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Remedy.
   */
  declare faultRemedy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fault Type Id.
   * @nullable
   */
  declare faultTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Table.
   */
  declare requestTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fault Symptom Id.
   * @nullable
   */
  declare faultSymptomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Area Id.
   * @nullable
   */
  declare faultAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Cause.
   */
  declare faultCause: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fault Date.
   */
  declare faultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequest?: AssetMaintenanceRequestsV2<T> | null;
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

  constructor(_entityApi: AssetMaintenanceRequestAssetFaultsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceRequestAssetFaultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faultId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  faultRemedyId?: DeserializedType<T, 'Edm.String'> | null;
  faultCauseId?: DeserializedType<T, 'Edm.String'> | null;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  assetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  faultRemedy: DeserializedType<T, 'Edm.Int64'>;
  faultTypeId?: DeserializedType<T, 'Edm.String'> | null;
  requestTable: DeserializedType<T, 'Edm.Int64'>;
  faultSymptomId?: DeserializedType<T, 'Edm.String'> | null;
  faultAreaId?: DeserializedType<T, 'Edm.String'> | null;
  faultCause: DeserializedType<T, 'Edm.Int64'>;
  faultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceRequest?: AssetMaintenanceRequestsV2Type<T> | null;
  maintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
  maintenanceAsset?: AssetMaintenanceAssetsV3Type<T> | null;
  maintenanceFaultRemedy?: AssetMaintenanceFaultRemediesType<T> | null;
  maintenanceFaultType?: AssetMaintenanceFaultTypesType<T> | null;
  maintenanceFaultSymptom?: AssetMaintenanceFaultSymptomsType<T> | null;
  maintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  maintenanceFaultCause?: AssetMaintenanceFaultCausesType<T> | null;
  maintenanceFaultArea?: AssetMaintenanceFaultAreasType<T> | null;
}
