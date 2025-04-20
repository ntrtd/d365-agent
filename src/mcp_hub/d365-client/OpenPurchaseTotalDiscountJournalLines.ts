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
import type { OpenPurchaseTotalDiscountJournalLinesApi } from './OpenPurchaseTotalDiscountJournalLinesApi';
import { NoYes } from './NoYes';
import {
  TotalDiscountVendorGroups,
  TotalDiscountVendorGroupsType
} from './TotalDiscountVendorGroups';
import { VendorsV2, VendorsV2Type } from './VendorsV2';

/**
 * This class represents the entity "OpenPurchaseTotalDiscountJournalLines" of service "d365_metadata".
 */
export class OpenPurchaseTotalDiscountJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OpenPurchaseTotalDiscountJournalLinesType<T>
{
  /**
   * Technical entity name for OpenPurchaseTotalDiscountJournalLines.
   */
  static override _entityName = 'OpenPurchaseTotalDiscountJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpenPurchaseTotalDiscountJournalLines entity.
   */
  static _keys = ['dataAreaId', 'TradeAgreementJournalNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Agreement Journal Number.
   */
  declare tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Order Subtotal Amount.
   */
  declare toOrderSubtotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Order Subtotal Amount.
   */
  declare fromOrderSubtotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Search Continue.
   * @nullable
   */
  declare willSearchContinue?: NoYes | null;
  /**
   * Discount Percentage 2.
   */
  declare discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Percentage 1.
   */
  declare discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Applicable From Date.
   */
  declare discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discount Applicable To Date.
   */
  declare discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Currency Code.
   * @nullable
   */
  declare discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Vendor Group Code.
   * @nullable
   */
  declare totalDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Log.
   * @nullable
   */
  declare processingLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link TotalDiscountVendorGroups} entity.
   */
  declare totalDiscountVendorGroup?: TotalDiscountVendorGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;

  constructor(_entityApi: OpenPurchaseTotalDiscountJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface OpenPurchaseTotalDiscountJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  toOrderSubtotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  fromOrderSubtotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  willSearchContinue?: NoYes | null;
  discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountVendorGroup?: TotalDiscountVendorGroupsType<T> | null;
  vendorV2?: VendorsV2Type<T> | null;
}
