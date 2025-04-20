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
import type { ReleasedProductCreationsV2Api } from './ReleasedProductCreationsV2Api';
import { EcoResProductType } from './EcoResProductType';
import { WarrantablePriceRangeBaseType } from './WarrantablePriceRangeBaseType';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { WarrantyDurationTimeUnit } from './WarrantyDurationTimeUnit';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ReleasedProductCreationsV2" of service "d365_metadata".
 */
export class ReleasedProductCreationsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductCreationsV2Type<T>
{
  /**
   * Technical entity name for ReleasedProductCreationsV2.
   */
  static override _entityName = 'ReleasedProductCreationsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductCreationsV2 entity.
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
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Warranty Duration Time.
   */
  declare warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warrantable Price Range Base Type.
   * @nullable
   */
  declare warrantablePriceRangeBaseType?: WarrantablePriceRangeBaseType | null;
  /**
   * Upper Warrantable Price Range Limit.
   */
  declare upperWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Product Categoryname.
   * @nullable
   */
  declare retailProductCategoryname?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Reservation Hierarchy Name.
   * @nullable
   */
  declare inventoryReservationHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Sub Type.
   * @nullable
   */
  declare productSubType?: EcoResProductSubtype | null;
  /**
   * Bom Unit Symbol.
   * @nullable
   */
  declare bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Type.
   * @nullable
   */
  declare serviceType?: EcoResProductServiceType | null;
  /**
   * Warranty Duration Time Unit.
   * @nullable
   */
  declare warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
  /**
   * Variant Configuration Technology.
   * @nullable
   */
  declare variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  /**
   * Product Dimension Group Name.
   * @nullable
   */
  declare productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Product Kit.
   * @nullable
   */
  declare isProductKit?: NoYes | null;
  /**
   * Sales Sales Tax Item Group Code.
   * @nullable
   */
  declare salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Catch Weight Product.
   * @nullable
   */
  declare isCatchWeightProduct?: NoYes | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lower Warrantable Price Range Limit.
   */
  declare lowerWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tracking Dimension Group Name.
   * @nullable
   */
  declare trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Sales Tax Item Group Code.
   * @nullable
   */
  declare purchaseSalesTaxItemGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Model Group Id.
   * @nullable
   */
  declare itemModelGroupId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReleasedProductCreationsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductCreationsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productType?: EcoResProductType | null;
  warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  warrantablePriceRangeBaseType?: WarrantablePriceRangeBaseType | null;
  upperWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  retailProductCategoryname?: DeserializedType<T, 'Edm.String'> | null;
  inventoryReservationHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSubType?: EcoResProductSubtype | null;
  bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  serviceType?: EcoResProductServiceType | null;
  warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
  variantConfigurationTechnology?: EcoResVariantConfigurationTechnologyType | null;
  productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  isProductKit?: NoYes | null;
  salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  isCatchWeightProduct?: NoYes | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  lowerWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  itemModelGroupId?: DeserializedType<T, 'Edm.String'> | null;
}
