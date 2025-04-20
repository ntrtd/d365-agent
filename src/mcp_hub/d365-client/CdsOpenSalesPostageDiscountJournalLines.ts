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
import type { CdsOpenSalesPostageDiscountJournalLinesApi } from './CdsOpenSalesPostageDiscountJournalLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CDSOpenSalesPostageDiscountJournalLines" of service "d365_metadata".
 */
export class CdsOpenSalesPostageDiscountJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsOpenSalesPostageDiscountJournalLinesType<T>
{
  /**
   * Technical entity name for CdsOpenSalesPostageDiscountJournalLines.
   */
  static override _entityName = 'CDSOpenSalesPostageDiscountJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsOpenSalesPostageDiscountJournalLines entity.
   */
  static _keys = ['dataAreaId', 'JournalNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Currency Code.
   * @nullable
   */
  declare discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Site Id.
   * @nullable
   */
  declare discountSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Applicable From Date.
   */
  declare discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discount Percentage 2.
   */
  declare discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Percentage 1.
   */
  declare discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity From.
   */
  declare quantityFrom: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Applicable To Date.
   */
  declare discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Log.
   * @nullable
   */
  declare log?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Continued Search Enabled.
   * @nullable
   */
  declare isContinuedSearchEnabled?: NoYes | null;
  /**
   * Quantity To.
   */
  declare quantityTo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Postage Discount Customer Group Code.
   * @nullable
   */
  declare postageDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Warehouse Id.
   * @nullable
   */
  declare discountWarehouseId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CdsOpenSalesPostageDiscountJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsOpenSalesPostageDiscountJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  discountSiteId?: DeserializedType<T, 'Edm.String'> | null;
  discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  quantityFrom: DeserializedType<T, 'Edm.Decimal'>;
  discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  log?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  isContinuedSearchEnabled?: NoYes | null;
  quantityTo: DeserializedType<T, 'Edm.Decimal'>;
  postageDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  discountWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
}
