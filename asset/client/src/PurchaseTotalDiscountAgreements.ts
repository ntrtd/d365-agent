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
import type { PurchaseTotalDiscountAgreementsApi } from './PurchaseTotalDiscountAgreementsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PurchaseTotalDiscountAgreements" of service "d365_metadata".
 */
export class PurchaseTotalDiscountAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseTotalDiscountAgreementsType<T>
{
  /**
   * Technical entity name for PurchaseTotalDiscountAgreements.
   */
  static override _entityName = 'PurchaseTotalDiscountAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseTotalDiscountAgreements entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * To Order Sub Total Amount.
   */
  declare toOrderSubTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Search Continue.
   * @nullable
   */
  declare willSearchContinue?: NoYes | null;
  /**
   * From Order Sub Total Amount.
   */
  declare fromOrderSubTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(_entityApi: PurchaseTotalDiscountAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseTotalDiscountAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  toOrderSubTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  willSearchContinue?: NoYes | null;
  fromOrderSubTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage2: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage1: DeserializedType<T, 'Edm.Decimal'>;
  discountApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
}
