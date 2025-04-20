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
import type { ProductNumberIdentifiedBarcodesApi } from './ProductNumberIdentifiedBarcodesApi';
import { NoYes } from './NoYes';
import { BarcodeSetups, BarcodeSetupsType } from './BarcodeSetups';

/**
 * This class represents the entity "ProductNumberIdentifiedBarcodes" of service "d365_metadata".
 */
export class ProductNumberIdentifiedBarcodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductNumberIdentifiedBarcodesType<T>
{
  /**
   * Technical entity name for ProductNumberIdentifiedBarcodes.
   */
  static override _entityName = 'ProductNumberIdentifiedBarcodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductNumberIdentifiedBarcodes entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductNumber',
    'ProductQuantityUnitSymbol',
    'BarcodeSetupId',
    'Barcode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
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
   * Product Quantity.
   */
  declare productQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Default Scanned Barcode.
   * @nullable
   */
  declare isDefaultScannedBarcode?: NoYes | null;
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

  constructor(_entityApi: ProductNumberIdentifiedBarcodesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductNumberIdentifiedBarcodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  productQuantityUnitSymbol: DeserializedType<T, 'Edm.String'>;
  barcodeSetupId: DeserializedType<T, 'Edm.String'>;
  barcode: DeserializedType<T, 'Edm.String'>;
  productQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isDefaultScannedBarcode?: NoYes | null;
  isDefaultPrintedBarcode?: NoYes | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultDisplayedBarcode?: NoYes | null;
  barcodeSetup?: BarcodeSetupsType<T> | null;
}
