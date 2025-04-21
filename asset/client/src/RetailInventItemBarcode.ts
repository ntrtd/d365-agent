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
import type { RetailInventItemBarcodeApi } from './RetailInventItemBarcodeApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailInventItemBarcode" of service "d365_metadata".
 */
export class RetailInventItemBarcode<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInventItemBarcodeType<T>
{
  /**
   * Technical entity name for RetailInventItemBarcode.
   */
  static override _entityName = 'RetailInventItemBarcode';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInventItemBarcode entity.
   */
  static _keys = [
    'dataAreaId',
    'barcodeSetupId',
    'inventDimId',
    'itemId',
    'itemBarCode',
    'RetailVariantId',
    'UnitID'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Barcode Setup Id.
   */
  declare barcodeSetupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Dim Id.
   */
  declare inventDimId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Bar Code.
   */
  declare itemBarCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Variant Id.
   */
  declare retailVariantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Id.
   */
  declare unitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Blocked.
   * @nullable
   */
  declare blocked?: NoYes | null;
  /**
   * Use For Input.
   * @nullable
   */
  declare useForInput?: NoYes | null;
  /**
   * Retail Show For Item.
   * @nullable
   */
  declare retailShowForItem?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Use For Printing.
   * @nullable
   */
  declare useForPrinting?: NoYes | null;

  constructor(_entityApi: RetailInventItemBarcodeApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInventItemBarcodeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  barcodeSetupId: DeserializedType<T, 'Edm.String'>;
  inventDimId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  itemBarCode: DeserializedType<T, 'Edm.String'>;
  retailVariantId: DeserializedType<T, 'Edm.String'>;
  unitId: DeserializedType<T, 'Edm.String'>;
  blocked?: NoYes | null;
  useForInput?: NoYes | null;
  retailShowForItem?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  useForPrinting?: NoYes | null;
}
