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
import type { CdsReleasedDistinctProductsApi } from './CdsReleasedDistinctProductsApi';
import { WarrantyDurationTimeUnit } from './WarrantyDurationTimeUnit';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { NoYes } from './NoYes';
import { EcoResFieldServiceProductType } from './EcoResFieldServiceProductType';
import { EcoResProductType } from './EcoResProductType';
import { WarrantablePriceRangeBaseType } from './WarrantablePriceRangeBaseType';
import {
  CdsInventoryOnHandRequests,
  CdsInventoryOnHandRequestsType
} from './CdsInventoryOnHandRequests';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductSizes, ProductSizesType } from './ProductSizes';

/**
 * This class represents the entity "CDSReleasedDistinctProducts" of service "d365_metadata".
 */
export class CdsReleasedDistinctProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsReleasedDistinctProductsType<T>
{
  /**
   * Technical entity name for CdsReleasedDistinctProducts.
   */
  static override _entityName = 'CDSReleasedDistinctProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsReleasedDistinctProducts entity.
   */
  static _keys = ['dataAreaId', 'ProductNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lower Warrantable Price Range Limit.
   */
  declare lowerWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Decimal Precision.
   */
  declare salesUnitDecimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warranty Duration Time Unit.
   * @nullable
   */
  declare warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
  /**
   * Inventory Unit Decimal Precision.
   */
  declare inventoryUnitDecimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Stocked Product.
   * @nullable
   */
  declare isStockedProduct?: NoYes | null;
  /**
   * Field Service Product Type.
   * @nullable
   */
  declare fieldServiceProductType?: EcoResFieldServiceProductType | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warranty Duration Time.
   */
  declare warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Catch Weight Product.
   * @nullable
   */
  declare isCatchWeightProduct?: NoYes | null;
  /**
   * Upper Warrantable Price Range Limit.
   */
  declare upperWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warrantable Price Range Base Type.
   * @nullable
   */
  declare warrantablePriceRangeBaseType?: WarrantablePriceRangeBaseType | null;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CdsInventoryOnHandRequests} entity.
   */
  declare cdsInventoryOnHandRequests?: CdsInventoryOnHandRequests<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;

  constructor(_entityApi: CdsReleasedDistinctProductsApi<T>) {
    super(_entityApi);
  }
}

export interface CdsReleasedDistinctProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  lowerWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitDecimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
  inventoryUnitDecimalPrecision: DeserializedType<T, 'Edm.Int32'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  serviceType?: EcoResProductServiceType | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  isStockedProduct?: NoYes | null;
  fieldServiceProductType?: EcoResFieldServiceProductType | null;
  productType?: EcoResProductType | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  isCatchWeightProduct?: NoYes | null;
  upperWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  warrantablePriceRangeBaseType?: WarrantablePriceRangeBaseType | null;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  cdsInventoryOnHandRequests?: CdsInventoryOnHandRequestsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productSize?: ProductSizesType<T> | null;
}
