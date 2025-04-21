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
import type { ProductBarcodesV2Api } from './ProductBarcodesV2Api';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProductBarcodesV2" of service "d365_metadata".
 */
export class ProductBarcodesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductBarcodesV2Type<T>
{
  /**
   * Technical entity name for ProductBarcodesV2.
   */
  static override _entityName = 'ProductBarcodesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductBarcodesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'ProductQuantityUnitSymbol',
    'BarcodeSetupId',
    'Barcode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Quantity Unit Symbol.
   */
  declare productQuantityUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Barcode Setup Id.
   */
  declare barcodeSetupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Barcode.
   */
  declare barcode: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Scanned Barcode.
   * @nullable
   */
  declare isDefaultScannedBarcode?: NoYes | null;
  /**
   * Is Default Displayed Barcode.
   * @nullable
   */
  declare isDefaultDisplayedBarcode?: NoYes | null;
  /**
   * Is Default Printed Barcode.
   * @nullable
   */
  declare isDefaultPrintedBarcode?: NoYes | null;
  /**
   * Product Quantity.
   */
  declare productQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProductBarcodesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductBarcodesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  productQuantityUnitSymbol: DeserializedType<T, 'Edm.String'>;
  barcodeSetupId: DeserializedType<T, 'Edm.String'>;
  barcode: DeserializedType<T, 'Edm.String'>;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultScannedBarcode?: NoYes | null;
  isDefaultDisplayedBarcode?: NoYes | null;
  isDefaultPrintedBarcode?: NoYes | null;
  productQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
