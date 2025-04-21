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
import type { AssetMaintenanceAssetsV2Api } from './AssetMaintenanceAssetsV2Api';
import { Timezone } from './Timezone';
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
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';

/**
 * This class represents the entity "AssetMaintenanceAssetsV2" of service "d365_metadata".
 */
export class AssetMaintenanceAssetsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetsV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetsV2.
   */
  static override _entityName = 'AssetMaintenanceAssetsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetsV2 entity.
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
   * One-to-one navigation property to the {@link AssetMaintenanceAssetLifecycleStates} entity.
   */
  declare lifecycleStateEntAssetObjectTableEntity?: AssetMaintenanceAssetLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceProducts} entity.
   */
  declare productEntAssetObjectTableEntity?: AssetMaintenanceProducts<T> | null;
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
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV2} entity.
   */
  declare entAssetObjectTableEntityParentAsset: AssetMaintenanceAssetsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare entAssetObjectTableV3EntityParentAsset: AssetMaintenanceAssetsV3<T>[];

  constructor(_entityApi: AssetMaintenanceAssetsV2Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetsV2Type<
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
  lifecycleStateEntAssetObjectTableEntity?: AssetMaintenanceAssetLifecycleStatesType<T> | null;
  productEntAssetObjectTableEntity?: AssetMaintenanceProductsType<T> | null;
  modelEntAssetObjectTableEntity?: AssetMaintenanceModelsType<T> | null;
  warrantyEntAssetObjectTableEntity?: AssetMaintenanceWarrantiesType<T> | null;
  functionalLocationEntAssetObjectTableEntity?: AssetMaintenanceFunctionalLocationsType<T> | null;
  parentAssetEntAssetObjectTableEntity?: AssetMaintenanceAssetsV2Type<T> | null;
  entAssetObjectTableEntityParentAsset: AssetMaintenanceAssetsV2Type<T>[];
  entAssetObjectTableV3EntityParentAsset: AssetMaintenanceAssetsV3Type<T>[];
}
