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
import type { OpenSalesTotalDiscountJournalLinesApi } from './OpenSalesTotalDiscountJournalLinesApi';
import { NoYes } from './NoYes';
import {
  TotalDiscountCustomerGroups,
  TotalDiscountCustomerGroupsType
} from './TotalDiscountCustomerGroups';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "OpenSalesTotalDiscountJournalLines" of service "d365_metadata".
 */
export class OpenSalesTotalDiscountJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OpenSalesTotalDiscountJournalLinesType<T>
{
  /**
   * Technical entity name for OpenSalesTotalDiscountJournalLines.
   */
  static override _entityName = 'OpenSalesTotalDiscountJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpenSalesTotalDiscountJournalLines entity.
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
   * Total Discount Customer Group Code.
   * @nullable
   */
  declare totalDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Log.
   * @nullable
   */
  declare processingLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link TotalDiscountCustomerGroups} entity.
   */
  declare totalDiscountCustomerGroup?: TotalDiscountCustomerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3?: CustomersV3<T> | null;

  constructor(_entityApi: OpenSalesTotalDiscountJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface OpenSalesTotalDiscountJournalLinesType<
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
  totalDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountCustomerGroup?: TotalDiscountCustomerGroupsType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
}
