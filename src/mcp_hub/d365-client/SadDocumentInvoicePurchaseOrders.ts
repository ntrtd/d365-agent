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
import type { SadDocumentInvoicePurchaseOrdersApi } from './SadDocumentInvoicePurchaseOrdersApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "SADDocumentInvoicePurchaseOrders" of service "d365_metadata".
 */
export class SadDocumentInvoicePurchaseOrders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SadDocumentInvoicePurchaseOrdersType<T>
{
  /**
   * Technical entity name for SadDocumentInvoicePurchaseOrders.
   */
  static override _entityName = 'SADDocumentInvoicePurchaseOrders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadDocumentInvoicePurchaseOrders entity.
   */
  static _keys = ['dataAreaId', 'DocumentCode', 'Position'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Code.
   */
  declare documentCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Purchase.
   * @nullable
   */
  declare purchase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insurance.
   */
  declare insurance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Misc Charg.
   */
  declare invoiceMiscCharg: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport.
   */
  declare transport: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: SadDocumentInvoicePurchaseOrdersApi<T>) {
    super(_entityApi);
  }
}

export interface SadDocumentInvoicePurchaseOrdersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentCode: DeserializedType<T, 'Edm.String'>;
  position: DeserializedType<T, 'Edm.Int32'>;
  purchase?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  insurance: DeserializedType<T, 'Edm.Decimal'>;
  invoiceMiscCharg: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  transport: DeserializedType<T, 'Edm.Decimal'>;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
