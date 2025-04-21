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
import type { OpenSalesMultiLineDiscountJournalLinesApi } from './OpenSalesMultiLineDiscountJournalLinesApi';
import { NoYes } from './NoYes';
import {
  MultilineDiscountProductGroups,
  MultilineDiscountProductGroupsType
} from './MultilineDiscountProductGroups';
import {
  MultilineDiscountCustomerGroups,
  MultilineDiscountCustomerGroupsType
} from './MultilineDiscountCustomerGroups';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "OpenSalesMultiLineDiscountJournalLines" of service "d365_metadata".
 */
export class OpenSalesMultiLineDiscountJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OpenSalesMultiLineDiscountJournalLinesType<T>
{
  /**
   * Technical entity name for OpenSalesMultiLineDiscountJournalLines.
   */
  static override _entityName = 'OpenSalesMultiLineDiscountJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpenSalesMultiLineDiscountJournalLines entity.
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
   * Is Generic Currency Search Enabled.
   * @nullable
   */
  declare isGenericCurrencySearchEnabled?: NoYes | null;
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
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Search Continue.
   * @nullable
   */
  declare willSearchContinue?: NoYes | null;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multi Line Discount Customer Group Code.
   * @nullable
   */
  declare multiLineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link MultilineDiscountProductGroups} entity.
   */
  declare multilineDiscountProductGroup?: MultilineDiscountProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link MultilineDiscountCustomerGroups} entity.
   */
  declare multilineDiscountCustomerGroup?: MultilineDiscountCustomerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3?: CustomersV3<T> | null;

  constructor(_entityApi: OpenSalesMultiLineDiscountJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface OpenSalesMultiLineDiscountJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isGenericCurrencySearchEnabled?: NoYes | null;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
  multiLineDiscountProductGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  willSearchContinue?: NoYes | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  multiLineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountProductGroup?: MultilineDiscountProductGroupsType<T> | null;
  multilineDiscountCustomerGroup?: MultilineDiscountCustomerGroupsType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
}
