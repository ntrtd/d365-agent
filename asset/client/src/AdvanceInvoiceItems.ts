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
import type { AdvanceInvoiceItemsApi } from './AdvanceInvoiceItemsApi';

/**
 * This class represents the entity "AdvanceInvoiceItems" of service "d365_metadata".
 */
export class AdvanceInvoiceItems<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AdvanceInvoiceItemsType<T>
{
  /**
   * Technical entity name for AdvanceInvoiceItems.
   */
  static override _entityName = 'AdvanceInvoiceItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdvanceInvoiceItems entity.
   */
  static _keys = ['dataAreaId', 'ParentRecId', 'RefRecId', 'RefTableId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Rec Id.
   */
  declare parentRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Original Item Name.
   * @nullable
   */
  declare originalItemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Sales Price Excl Tax.
   */
  declare originalSalesPriceExclTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Item Id.
   * @nullable
   */
  declare originalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Line Amount Excl Tax.
   */
  declare originalLineAmountExclTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Sales Unit.
   * @nullable
   */
  declare originalSalesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Tax Amount.
   */
  declare originalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Line Amount Incl Tax.
   */
  declare originalLineAmountInclTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Tax Code.
   * @nullable
   */
  declare originalTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Qty.
   */
  declare originalQty: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AdvanceInvoiceItemsApi<T>) {
    super(_entityApi);
  }
}

export interface AdvanceInvoiceItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  parentRecId: DeserializedType<T, 'Edm.Int64'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  originalItemName?: DeserializedType<T, 'Edm.String'> | null;
  originalSalesPriceExclTax: DeserializedType<T, 'Edm.Decimal'>;
  originalItemId?: DeserializedType<T, 'Edm.String'> | null;
  originalLineAmountExclTax: DeserializedType<T, 'Edm.Decimal'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  originalSalesUnit?: DeserializedType<T, 'Edm.String'> | null;
  originalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  originalLineAmountInclTax: DeserializedType<T, 'Edm.Decimal'>;
  originalTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  originalQty: DeserializedType<T, 'Edm.Decimal'>;
}
