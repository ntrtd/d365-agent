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
import type { AssetMaintenanceAssetsApi } from './AssetMaintenanceAssetsApi';
import {
  AssetMaintenanceAssetAttributes,
  AssetMaintenanceAssetAttributesType
} from './AssetMaintenanceAssetAttributes';
import {
  AssetMaintenanceAssetRounds,
  AssetMaintenanceAssetRoundsType
} from './AssetMaintenanceAssetRounds';
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
  AssetMaintenanceAssetBillOfMaterials,
  AssetMaintenanceAssetBillOfMaterialsType
} from './AssetMaintenanceAssetBillOfMaterials';
import {
  AssetMaintenanceAssetDocuments,
  AssetMaintenanceAssetDocumentsType
} from './AssetMaintenanceAssetDocuments';
import {
  AssetMaintenanceWorkOrderLines,
  AssetMaintenanceWorkOrderLinesType
} from './AssetMaintenanceWorkOrderLines';
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
  AssetMaintenanceWorkOrderStandardProjectGroups,
  AssetMaintenanceWorkOrderStandardProjectGroupsType
} from './AssetMaintenanceWorkOrderStandardProjectGroups';
import {
  AssetMaintenanceAssetCriticalities,
  AssetMaintenanceAssetCriticalitiesType
} from './AssetMaintenanceAssetCriticalities';
import {
  AssetMaintenanceJobTypeDefaults,
  AssetMaintenanceJobTypeDefaultsType
} from './AssetMaintenanceJobTypeDefaults';
import {
  AssetMaintenanceWorkOrderParentProjects,
  AssetMaintenanceWorkOrderParentProjectsType
} from './AssetMaintenanceWorkOrderParentProjects';
import {
  AssetMaintenanceWorkersResponsible,
  AssetMaintenanceWorkersResponsibleType
} from './AssetMaintenanceWorkersResponsible';
import {
  AssetMaintenanceAssetCalendars,
  AssetMaintenanceAssetCalendarsType
} from './AssetMaintenanceAssetCalendars';

/**
 * This class represents the entity "AssetMaintenanceAssets" of service "d365_metadata".
 */
export class AssetMaintenanceAssets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssets.
   */
  static override _entityName = 'AssetMaintenanceAssets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssets entity.
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
   * Active To.
   */
  declare activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fixed Asset Id.
   * @nullable
   */
  declare fixedAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Acquisition Cost.
   */
  declare acquisitionCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Logistics Location Id.
   * @nullable
   */
  declare logisticsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Maintenance Asset Id.
   * @nullable
   */
  declare parentMaintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replacement Value.
   */
  declare replacementValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Model Year.
   * @nullable
   */
  declare modelYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acquisition Date.
   */
  declare acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wrk Ctr Id.
   * @nullable
   */
  declare wrkCtrId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Serial Id.
   * @nullable
   */
  declare serialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Id.
   * @nullable
   */
  declare purchaseOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warranty Id.
   * @nullable
   */
  declare warrantyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replacement Date.
   */
  declare replacementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Type Id.
   * @nullable
   */
  declare maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warranty Date From Vend.
   */
  declare warrantyDateFromVend: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maintenance Asset Lifecycle State Id.
   * @nullable
   */
  declare maintenanceAssetLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Model Product Id.
   * @nullable
   */
  declare modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetAttributes} entity.
   */
  declare assetMaintenanceAssetAttribute: AssetMaintenanceAssetAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetRounds} entity.
   */
  declare assetMaintenanceAssetRound: AssetMaintenanceAssetRounds<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultDimensionSetEntityEntAssetObjectTableEntity?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetLifecycleStates} entity.
   */
  declare assetMaintenanceAssetLifecycleState?: AssetMaintenanceAssetLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceProducts} entity.
   */
  declare assetMaintenanceProduct?: AssetMaintenanceProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceModels} entity.
   */
  declare assetMaintenanceModel?: AssetMaintenanceModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWarranties} entity.
   */
  declare assetMaintenanceWarranty?: AssetMaintenanceWarranties<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetBillOfMaterials} entity.
   */
  declare assetMaintenanceAssetBillOfMaterial: AssetMaintenanceAssetBillOfMaterials<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetDocuments} entity.
   */
  declare assetMaintenanceAssetDocument: AssetMaintenanceAssetDocuments<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLines} entity.
   */
  declare assetMaintenanceWorkOrderLine: AssetMaintenanceWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjectsV2} entity.
   */
  declare assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceStopObjects} entity.
   */
  declare assetMaintenanceStopObject: AssetMaintenanceStopObjects<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPriorities} entity.
   */
  declare assetMaintenanceAssetPriority: AssetMaintenanceAssetPriorities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderStandardProjectGroups} entity.
   */
  declare assetMaintenanceWorkOrderStandardProjectGroup: AssetMaintenanceWorkOrderStandardProjectGroups<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCriticalities} entity.
   */
  declare assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeDefaults} entity.
   */
  declare assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjects} entity.
   */
  declare assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjects<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkersResponsible} entity.
   */
  declare assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsible<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCalendars} entity.
   */
  declare assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendars<T>[];

  constructor(_entityApi: AssetMaintenanceAssetsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fixedAssetId?: DeserializedType<T, 'Edm.String'> | null;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  acquisitionCost: DeserializedType<T, 'Edm.Decimal'>;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  logisticsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  parentMaintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  replacementValue: DeserializedType<T, 'Edm.Decimal'>;
  modelYear?: DeserializedType<T, 'Edm.String'> | null;
  acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  wrkCtrId?: DeserializedType<T, 'Edm.String'> | null;
  serialId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderId?: DeserializedType<T, 'Edm.String'> | null;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  warrantyId?: DeserializedType<T, 'Edm.String'> | null;
  replacementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  warrantyDateFromVend: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maintenanceAssetLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceAssetAttribute: AssetMaintenanceAssetAttributesType<T>[];
  assetMaintenanceAssetRound: AssetMaintenanceAssetRoundsType<T>[];
  defaultDimensionSetEntityEntAssetObjectTableEntity?: DimensionSetsType<T> | null;
  assetMaintenanceAssetLifecycleState?: AssetMaintenanceAssetLifecycleStatesType<T> | null;
  assetMaintenanceProduct?: AssetMaintenanceProductsType<T> | null;
  assetMaintenanceModel?: AssetMaintenanceModelsType<T> | null;
  assetMaintenanceWarranty?: AssetMaintenanceWarrantiesType<T> | null;
  assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  assetMaintenanceAssetBillOfMaterial: AssetMaintenanceAssetBillOfMaterialsType<T>[];
  assetMaintenanceAssetDocument: AssetMaintenanceAssetDocumentsType<T>[];
  assetMaintenanceWorkOrderLine: AssetMaintenanceWorkOrderLinesType<T>[];
  assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2Type<T>[];
  assetMaintenanceStopObject: AssetMaintenanceStopObjectsType<T>[];
  assetMaintenanceAssetPriority: AssetMaintenanceAssetPrioritiesType<T>[];
  assetMaintenanceWorkOrderStandardProjectGroup: AssetMaintenanceWorkOrderStandardProjectGroupsType<T>[];
  assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalitiesType<T>[];
  assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaultsType<T>[];
  assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjectsType<T>[];
  assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsibleType<T>[];
  assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendarsType<T>[];
}
