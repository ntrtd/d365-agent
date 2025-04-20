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
import type { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { Timezone } from './Timezone';
import {
  AssetMaintenanceWorkOrderUserReferences,
  AssetMaintenanceWorkOrderUserReferencesType
} from './AssetMaintenanceWorkOrderUserReferences';
import {
  AssetMaintenanceAssetAttributes,
  AssetMaintenanceAssetAttributesType
} from './AssetMaintenanceAssetAttributes';
import {
  AssetMaintenanceWorkOrderAssetFaults,
  AssetMaintenanceWorkOrderAssetFaultsType
} from './AssetMaintenanceWorkOrderAssetFaults';
import {
  AssetMaintenanceAssetPrioritiesV2,
  AssetMaintenanceAssetPrioritiesV2Type
} from './AssetMaintenanceAssetPrioritiesV2';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenanceRequestAssetFaults,
  AssetMaintenanceRequestAssetFaultsType
} from './AssetMaintenanceRequestAssetFaults';
import {
  AssetMaintenanceAssetRounds,
  AssetMaintenanceAssetRoundsType
} from './AssetMaintenanceAssetRounds';
import {
  AssetMaintenancePlanWorkOrderLines,
  AssetMaintenancePlanWorkOrderLinesType
} from './AssetMaintenancePlanWorkOrderLines';
import {
  AssetMaintenanceAssetDocuments,
  AssetMaintenanceAssetDocumentsType
} from './AssetMaintenanceAssetDocuments';
import {
  AssetMaintenanceAssetBillOfMaterialsV2,
  AssetMaintenanceAssetBillOfMaterialsV2Type
} from './AssetMaintenanceAssetBillOfMaterialsV2';
import {
  AssetMaintenanceWorkOrderParentProjectsV2,
  AssetMaintenanceWorkOrderParentProjectsV2Type
} from './AssetMaintenanceWorkOrderParentProjectsV2';
import {
  AssetMaintenanceStopObjects,
  AssetMaintenanceStopObjectsType
} from './AssetMaintenanceStopObjects';
import {
  AssetMaintenanceAssetPriorities,
  AssetMaintenanceAssetPrioritiesType
} from './AssetMaintenanceAssetPriorities';
import {
  AssetMaintenanceWorkOrderLinesV2,
  AssetMaintenanceWorkOrderLinesV2Type
} from './AssetMaintenanceWorkOrderLinesV2';
import {
  AssetMaintenanceWorkOrderStandardProjectGroups,
  AssetMaintenanceWorkOrderStandardProjectGroupsType
} from './AssetMaintenanceWorkOrderStandardProjectGroups';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  AssetMaintenanceAssetLifecycleStates,
  AssetMaintenanceAssetLifecycleStatesType
} from './AssetMaintenanceAssetLifecycleStates';
import {
  AssetMaintenanceProducts,
  AssetMaintenanceProductsType
} from './AssetMaintenanceProducts';
import {
  AssetMaintenanceModels,
  AssetMaintenanceModelsType
} from './AssetMaintenanceModels';
import {
  AssetMaintenanceWarranties,
  AssetMaintenanceWarrantiesType
} from './AssetMaintenanceWarranties';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  AssetMaintenanceAssetsV2,
  AssetMaintenanceAssetsV2Type
} from './AssetMaintenanceAssetsV2';
import {
  AssetMaintenanceAssetCriticalities,
  AssetMaintenanceAssetCriticalitiesType
} from './AssetMaintenanceAssetCriticalities';
import {
  AssetMaintenanceJobTypeDefaults,
  AssetMaintenanceJobTypeDefaultsType
} from './AssetMaintenanceJobTypeDefaults';
import {
  AssetMaintenanceUnplannedWorkOrderLines,
  AssetMaintenanceUnplannedWorkOrderLinesType
} from './AssetMaintenanceUnplannedWorkOrderLines';
import {
  AssetMaintenanceRoundWorkOrderLines,
  AssetMaintenanceRoundWorkOrderLinesType
} from './AssetMaintenanceRoundWorkOrderLines';
import {
  AssetMaintenanceWorkersResponsible,
  AssetMaintenanceWorkersResponsibleType
} from './AssetMaintenanceWorkersResponsible';
import {
  AssetMaintenanceRequestWorkOrderLines,
  AssetMaintenanceRequestWorkOrderLinesType
} from './AssetMaintenanceRequestWorkOrderLines';
import {
  AssetMaintenanceAssetCalendars,
  AssetMaintenanceAssetCalendarsType
} from './AssetMaintenanceAssetCalendars';
import {
  SensorMaintenanceAssetMappings,
  SensorMaintenanceAssetMappingsType
} from './SensorMaintenanceAssetMappings';
import {
  AssetMaintenanceAssetMaintenancePlans,
  AssetMaintenanceAssetMaintenancePlansType
} from './AssetMaintenanceAssetMaintenancePlans';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';

/**
 * This class represents the entity "AssetMaintenanceAssetsV3" of service "d365_metadata".
 */
export class AssetMaintenanceAssetsV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetsV3Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetsV3.
   */
  static override _entityName = 'AssetMaintenanceAssetsV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetsV3 entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceAssetId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Maintenance Asset Type Id.
   * @nullable
   */
  declare maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Year.
   * @nullable
   */
  declare modelYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Id.
   * @nullable
   */
  declare fixedAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Replacement Value.
   */
  declare replacementValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Maintenance Asset Id.
   * @nullable
   */
  declare parentMaintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * R Asset Account Num.
   * @nullable
   */
  declare rAssetAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wrk Ctr Id.
   * @nullable
   */
  declare wrkCtrId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active To.
   */
  declare activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Acquisition Cost.
   */
  declare acquisitionCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Id.
   * @nullable
   */
  declare purchaseOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Owner Customer Account Number.
   * @nullable
   */
  declare ownerCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warranty Date From Vend.
   */
  declare warrantyDateFromVend: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Serial Id.
   * @nullable
   */
  declare serialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Acquisition Date.
   */
  declare acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Primary Address.
   * @nullable
   */
  declare fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replacement Date.
   */
  declare replacementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Lifecycle State Id.
   * @nullable
   */
  declare maintenanceAssetLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warranty Id.
   * @nullable
   */
  declare warrantyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Building Complement.
   * @nullable
   */
  declare addressBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Asset Not Responding Threshold Mins.
   */
  declare assetNotRespondingThresholdMins: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderUserReferences} entity.
   */
  declare maintenanceWorkOrderUserReferencesMaintenanceWorkOrderJobAsset: AssetMaintenanceWorkOrderUserReferences<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetAttributes} entity.
   */
  declare maintenanceAssetAttributes: AssetMaintenanceAssetAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderAssetFaults} entity.
   */
  declare assetMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPrioritiesV2} entity.
   */
  declare maintenanceAssetServiceLevelsMaintenanceAsset: AssetMaintenanceAssetPrioritiesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare assetMaintenanceRequest: AssetMaintenanceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestAssetFaults} entity.
   */
  declare assetMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetRounds} entity.
   */
  declare maintenanceAssetRounds: AssetMaintenanceAssetRounds<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare replacementAssetMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare assetMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetDocuments} entity.
   */
  declare maintenanceAssetDocuments: AssetMaintenanceAssetDocuments<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetBillOfMaterialsV2} entity.
   */
  declare maintenanceAssetBillOfMaterialsMaintenanceAssets: AssetMaintenanceAssetBillOfMaterialsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjectsV2} entity.
   */
  declare maintenanceWorkOrderParentProjects: AssetMaintenanceWorkOrderParentProjectsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceStopObjects} entity.
   */
  declare maintenanceStopAssets: AssetMaintenanceStopObjects<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPriorities} entity.
   */
  declare maintenanceAssetServiceLevels: AssetMaintenanceAssetPriorities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare replacementAssetMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare assetMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderStandardProjectGroups} entity.
   */
  declare maintenanceWorkOrderStandardProjectGroups: AssetMaintenanceWorkOrderStandardProjectGroups<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultDimensionSetEntityEntAssetObjectTableEntity?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetLifecycleStates} entity.
   */
  declare lifecycleStateEntAssetObjectTableEntity?: AssetMaintenanceAssetLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceProducts} entity.
   */
  declare productEntAssetObjectTableEntity?: AssetMaintenanceProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare parentAssetMaintenanceAssetV3Entity?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceAssets: AssetMaintenanceAssetsV3<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceModels} entity.
   */
  declare modelEntAssetObjectTableEntity?: AssetMaintenanceModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWarranties} entity.
   */
  declare warrantyEntAssetObjectTableEntity?: AssetMaintenanceWarranties<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare functionalLocationEntAssetObjectTableEntity?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV2} entity.
   */
  declare parentAssetEntAssetObjectTableEntity?: AssetMaintenanceAssetsV2<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCriticalities} entity.
   */
  declare maintenanceAssetCriticality: AssetMaintenanceAssetCriticalities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeDefaults} entity.
   */
  declare maintenanceJobTypeDefaults: AssetMaintenanceJobTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare replacementAssetMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare assetMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare replacementAssetMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare assetMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkersResponsible} entity.
   */
  declare maintenanceWorkerResponsibles: AssetMaintenanceWorkersResponsible<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare assetMaintenanceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare replacementAssetMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCalendars} entity.
   */
  declare maintenanceAssetCalendars: AssetMaintenanceAssetCalendars<T>[];
  /**
   * One-to-many navigation property to the {@link SensorMaintenanceAssetMappings} entity.
   */
  declare sensorMaintenanceAssetMappings: SensorMaintenanceAssetMappings<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetMaintenancePlans} entity.
   */
  declare maintenanceAssetMaintenancePlans: AssetMaintenanceAssetMaintenancePlans<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsAsset: AssetMaintenanceRequestsV2<T>[];

  constructor(_entityApi: AssetMaintenanceAssetsV3Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetsV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressTimeZone?: Timezone | null;
  maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  modelYear?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetId?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  replacementValue: DeserializedType<T, 'Edm.Decimal'>;
  parentMaintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  rAssetAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  wrkCtrId?: DeserializedType<T, 'Edm.String'> | null;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  acquisitionCost: DeserializedType<T, 'Edm.Decimal'>;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderId?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  ownerCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  warrantyDateFromVend: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serialId?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  replacementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  warrantyId?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  addressBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assetNotRespondingThresholdMins: DeserializedType<T, 'Edm.Int32'>;
  maintenanceWorkOrderUserReferencesMaintenanceWorkOrderJobAsset: AssetMaintenanceWorkOrderUserReferencesType<T>[];
  maintenanceAssetAttributes: AssetMaintenanceAssetAttributesType<T>[];
  assetMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaultsType<T>[];
  maintenanceAssetServiceLevelsMaintenanceAsset: AssetMaintenanceAssetPrioritiesV2Type<T>[];
  assetMaintenanceRequest: AssetMaintenanceRequestsType<T>[];
  assetMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaultsType<T>[];
  maintenanceAssetRounds: AssetMaintenanceAssetRoundsType<T>[];
  replacementAssetMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLinesType<T>[];
  assetMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLinesType<T>[];
  maintenanceAssetDocuments: AssetMaintenanceAssetDocumentsType<T>[];
  maintenanceAssetBillOfMaterialsMaintenanceAssets: AssetMaintenanceAssetBillOfMaterialsV2Type<T>[];
  maintenanceWorkOrderParentProjects: AssetMaintenanceWorkOrderParentProjectsV2Type<T>[];
  maintenanceStopAssets: AssetMaintenanceStopObjectsType<T>[];
  maintenanceAssetServiceLevels: AssetMaintenanceAssetPrioritiesType<T>[];
  replacementAssetMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2Type<T>[];
  assetMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2Type<T>[];
  maintenanceWorkOrderStandardProjectGroups: AssetMaintenanceWorkOrderStandardProjectGroupsType<T>[];
  defaultDimensionSetEntityEntAssetObjectTableEntity?: DimensionSetsType<T> | null;
  lifecycleStateEntAssetObjectTableEntity?: AssetMaintenanceAssetLifecycleStatesType<T> | null;
  productEntAssetObjectTableEntity?: AssetMaintenanceProductsType<T> | null;
  parentAssetMaintenanceAssetV3Entity?: AssetMaintenanceAssetsV3Type<T> | null;
  maintenanceAssets: AssetMaintenanceAssetsV3Type<T>[];
  modelEntAssetObjectTableEntity?: AssetMaintenanceModelsType<T> | null;
  warrantyEntAssetObjectTableEntity?: AssetMaintenanceWarrantiesType<T> | null;
  functionalLocationEntAssetObjectTableEntity?: AssetMaintenanceFunctionalLocationsType<T> | null;
  parentAssetEntAssetObjectTableEntity?: AssetMaintenanceAssetsV2Type<T> | null;
  maintenanceAssetCriticality: AssetMaintenanceAssetCriticalitiesType<T>[];
  maintenanceJobTypeDefaults: AssetMaintenanceJobTypeDefaultsType<T>[];
  replacementAssetMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLinesType<T>[];
  assetMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLinesType<T>[];
  replacementAssetMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLinesType<T>[];
  assetMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLinesType<T>[];
  maintenanceWorkerResponsibles: AssetMaintenanceWorkersResponsibleType<T>[];
  assetMaintenanceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLinesType<T>[];
  replacementAssetMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLinesType<T>[];
  maintenanceAssetCalendars: AssetMaintenanceAssetCalendarsType<T>[];
  sensorMaintenanceAssetMappings: SensorMaintenanceAssetMappingsType<T>[];
  maintenanceAssetMaintenancePlans: AssetMaintenanceAssetMaintenancePlansType<T>[];
  maintenanceRequestsAsset: AssetMaintenanceRequestsV2Type<T>[];
}
