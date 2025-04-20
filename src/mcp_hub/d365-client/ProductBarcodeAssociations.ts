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
import type { ProductBarcodeAssociationsApi } from './ProductBarcodeAssociationsApi';
import { NoYes } from './NoYes';
import { BarcodeSetups, BarcodeSetupsType } from './BarcodeSetups';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductSizes, ProductSizesType } from './ProductSizes';

/**
 * This class represents the entity "ProductBarcodeAssociations" of service "d365_metadata".
 */
export class ProductBarcodeAssociations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductBarcodeAssociationsType<T>
{
  /**
   * Technical entity name for ProductBarcodeAssociations.
   */
  static override _entityName = 'ProductBarcodeAssociations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductBarcodeAssociations entity.
   */
  static _keys = ['dataAreaId', 'AssociationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Association Id.
   */
  declare associationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Quantity.
   */
  declare productQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Quantity Unit Symbol.
   * @nullable
   */
  declare productQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode Setup Id.
   * @nullable
   */
  declare barcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Scanned Barcode.
   * @nullable
   */
  declare isDefaultScannedBarcode?: NoYes | null;
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
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode.
   * @nullable
   */
  declare barcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Printed Barcode.
   * @nullable
   */
  declare isDefaultPrintedBarcode?: NoYes | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Displayed Barcode.
   * @nullable
   */
  declare isDefaultDisplayedBarcode?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link BarcodeSetups} entity.
   */
  declare barcodeSetup?: BarcodeSetups<T> | null;
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

  constructor(_entityApi: ProductBarcodeAssociationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductBarcodeAssociationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  associationId: DeserializedType<T, 'Edm.String'>;
  productQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  barcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultScannedBarcode?: NoYes | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultPrintedBarcode?: NoYes | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultDisplayedBarcode?: NoYes | null;
  barcodeSetup?: BarcodeSetupsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productSize?: ProductSizesType<T> | null;
}
