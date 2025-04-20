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
import type { VendInvoicePackingSlipQuantityMatchBiEntitiesApi } from './VendInvoicePackingSlipQuantityMatchBiEntitiesApi';

/**
 * This class represents the entity "VendInvoicePackingSlipQuantityMatchBiEntities" of service "d365_metadata".
 */
export class VendInvoicePackingSlipQuantityMatchBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoicePackingSlipQuantityMatchBiEntitiesType<T>
{
  /**
   * Technical entity name for VendInvoicePackingSlipQuantityMatchBiEntities.
   */
  static override _entityName = 'VendInvoicePackingSlipQuantityMatchBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoicePackingSlipQuantityMatchBiEntities entity.
   */
  static _keys = ['InvoiceSourceDocumentLIne', 'PackingSlipSourceDocumentLine'];
  /**
   * Invoice Source Document L Ine.
   */
  declare invoiceSourceDocumentLIne: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Packing Slip Source Document Line.
   */
  declare packingSlipSourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Quantity.
   */
  declare inventQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pds Cw Quantity.
   */
  declare pdsCwQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: VendInvoicePackingSlipQuantityMatchBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoicePackingSlipQuantityMatchBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  invoiceSourceDocumentLIne: DeserializedType<T, 'Edm.Int64'>;
  packingSlipSourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  inventQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  pdsCwQuantity: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
}
