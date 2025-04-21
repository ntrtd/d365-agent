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
import type { SalesTotalDiscountAgreementsApi } from './SalesTotalDiscountAgreementsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SalesTotalDiscountAgreements" of service "d365_metadata".
 */
export class SalesTotalDiscountAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesTotalDiscountAgreementsType<T>
{
  /**
   * Technical entity name for SalesTotalDiscountAgreements.
   */
  static override _entityName = 'SalesTotalDiscountAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTotalDiscountAgreements entity.
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

  constructor(_entityApi: SalesTotalDiscountAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTotalDiscountAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
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
}
