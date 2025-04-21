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
import type { OpenPurchaseMultiLineDiscountJournalLinesApi } from './OpenPurchaseMultiLineDiscountJournalLinesApi';
import { NoYes } from './NoYes';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  MultilineDiscountProductGroups,
  MultilineDiscountProductGroupsType
} from './MultilineDiscountProductGroups';
import {
  MultilineDiscountVendorGroups,
  MultilineDiscountVendorGroupsType
} from './MultilineDiscountVendorGroups';

/**
 * This class represents the entity "OpenPurchaseMultiLineDiscountJournalLines" of service "d365_metadata".
 */
export class OpenPurchaseMultiLineDiscountJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OpenPurchaseMultiLineDiscountJournalLinesType<T>
{
  /**
   * Technical entity name for OpenPurchaseMultiLineDiscountJournalLines.
   */
  static override _entityName = 'OpenPurchaseMultiLineDiscountJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpenPurchaseMultiLineDiscountJournalLines entity.
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
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Currency Code.
   * @nullable
   */
  declare discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Applicable From Date.
   */
  declare discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Quantity.
   */
  declare toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Percentage 2.
   */
  declare discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Percentage 1.
   */
  declare discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Applicable To Date.
   */
  declare discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Processing Log.
   * @nullable
   */
  declare processingLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multi Line Discount Product Group Code.
   * @nullable
   */
  declare multiLineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Search Continue.
   * @nullable
   */
  declare willSearchContinue?: NoYes | null;
  /**
   * Multi Line Discount Vendor Group Code.
   * @nullable
   */
  declare multiLineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link MultilineDiscountProductGroups} entity.
   */
  declare multilineDiscountProductGroup?: MultilineDiscountProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link MultilineDiscountVendorGroups} entity.
   */
  declare multilineDiscountVendorGroup?: MultilineDiscountVendorGroups<T> | null;

  constructor(_entityApi: OpenPurchaseMultiLineDiscountJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface OpenPurchaseMultiLineDiscountJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
  multiLineDiscountProductGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  willSearchContinue?: NoYes | null;
  multiLineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  vendorV2?: VendorsV2Type<T> | null;
  multilineDiscountProductGroup?: MultilineDiscountProductGroupsType<T> | null;
  multilineDiscountVendorGroup?: MultilineDiscountVendorGroupsType<T> | null;
}
