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
import type { AssetMaintenanceReleasedProductsApi } from './AssetMaintenanceReleasedProductsApi';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { EcoResProductType } from './EcoResProductType';
import {
  AssetMaintenanceAssetBillOfMaterialsV2,
  AssetMaintenanceAssetBillOfMaterialsV2Type
} from './AssetMaintenanceAssetBillOfMaterialsV2';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  TrackingDimensionGroups,
  TrackingDimensionGroupsType
} from './TrackingDimensionGroups';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  ProductLifecycleStates,
  ProductLifecycleStatesType
} from './ProductLifecycleStates';
import { ProductColors, ProductColorsType } from './ProductColors';
import {
  AssetMaintenanceAssetTypeDefaultSparePartsV2,
  AssetMaintenanceAssetTypeDefaultSparePartsV2Type
} from './AssetMaintenanceAssetTypeDefaultSparePartsV2';

/**
 * This class represents the entity "AssetMaintenanceReleasedProducts" of service "d365_metadata".
 */
export class AssetMaintenanceReleasedProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceReleasedProductsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceReleasedProducts.
   */
  static override _entityName = 'AssetMaintenanceReleasedProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceReleasedProducts entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Sub Type.
   * @nullable
   */
  declare productSubType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Product Configuration Id.
   * @nullable
   */
  declare alternativeProductConfigurationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Product Configuration Id.
   * @nullable
   */
  declare defaultProductConfigurationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Type.
   * @nullable
   */
  declare serviceType?: EcoResProductServiceType | null;
  /**
   * Default Product Size Id.
   * @nullable
   */
  declare defaultProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Product Style Id.
   * @nullable
   */
  declare alternativeProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Item Number.
   * @nullable
   */
  declare alternativeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Product Style Id.
   * @nullable
   */
  declare defaultProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Alternative Product Color Id.
   * @nullable
   */
  declare alternativeProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Product Version Id.
   * @nullable
   */
  declare alternativeProductVersionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Alternative Product Size Id.
   * @nullable
   */
  declare alternativeProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tracking Dimension Group Name.
   * @nullable
   */
  declare trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Dimension Group Name.
   * @nullable
   */
  declare productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Product Version Id.
   * @nullable
   */
  declare defaultProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Product Color Id.
   * @nullable
   */
  declare defaultProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetBillOfMaterialsV2} entity.
   */
  declare maintenanceAssetBillOfMaterialsProduct: AssetMaintenanceAssetBillOfMaterialsV2<T>[];
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare alternativeProductStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link TrackingDimensionGroups} entity.
   */
  declare trackingDimensionGroup?: TrackingDimensionGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare alternativeProductVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare defaultProductSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare alternativeProductSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductLifecycleStates} entity.
   */
  declare productLifecycleState?: ProductLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare alternativeProductColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare defaultProductVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare defaultProductColor?: ProductColors<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeDefaultSparePartsV2} entity.
   */
  declare maintenanceAssetSparePartsAlternativeSparePartProductNumber: AssetMaintenanceAssetTypeDefaultSparePartsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeDefaultSparePartsV2} entity.
   */
  declare maintenanceAssetSparePartsSparePartProductNumber: AssetMaintenanceAssetTypeDefaultSparePartsV2<T>[];

  constructor(_entityApi: AssetMaintenanceReleasedProductsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceReleasedProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSubType?: DeserializedType<T, 'Edm.String'> | null;
  alternativeProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  serviceType?: EcoResProductServiceType | null;
  defaultProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  productType?: EcoResProductType | null;
  alternativeProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetBillOfMaterialsProduct: AssetMaintenanceAssetBillOfMaterialsV2Type<T>[];
  alternativeProductStyle?: ProductStylesType<T> | null;
  trackingDimensionGroup?: TrackingDimensionGroupsType<T> | null;
  alternativeProductVersion?: ProductVersionsType<T> | null;
  defaultProductSize?: ProductSizesType<T> | null;
  alternativeProductSize?: ProductSizesType<T> | null;
  productLifecycleState?: ProductLifecycleStatesType<T> | null;
  alternativeProductColor?: ProductColorsType<T> | null;
  defaultProductVersion?: ProductVersionsType<T> | null;
  defaultProductColor?: ProductColorsType<T> | null;
  maintenanceAssetSparePartsAlternativeSparePartProductNumber: AssetMaintenanceAssetTypeDefaultSparePartsV2Type<T>[];
  maintenanceAssetSparePartsSparePartProductNumber: AssetMaintenanceAssetTypeDefaultSparePartsV2Type<T>[];
}
