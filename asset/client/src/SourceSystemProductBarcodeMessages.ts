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
import type { SourceSystemProductBarcodeMessagesApi } from './SourceSystemProductBarcodeMessagesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SourceSystemProductBarcodeMessages" of service "d365_metadata".
 */
export class SourceSystemProductBarcodeMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SourceSystemProductBarcodeMessagesType<T>
{
  /**
   * Technical entity name for SourceSystemProductBarcodeMessages.
   */
  static override _entityName = 'SourceSystemProductBarcodeMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceSystemProductBarcodeMessages entity.
   */
  static _keys = ['dataAreaId', 'MessageId', 'SourceSystemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
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
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode Setup Id.
   * @nullable
   */
  declare barcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Scanned Barcode.
   * @nullable
   */
  declare isDefaultScannedBarcode?: NoYes | null;
  /**
   * Sys Message.
   */
  declare sysMessage: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fields With Value.
   * @nullable
   */
  declare fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
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

  constructor(_entityApi: SourceSystemProductBarcodeMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface SourceSystemProductBarcodeMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  productQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  barcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultScannedBarcode?: NoYes | null;
  sysMessage: DeserializedType<T, 'Edm.Int64'>;
  fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultPrintedBarcode?: NoYes | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
}
