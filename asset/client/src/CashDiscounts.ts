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
import type { CashDiscountsApi } from './CashDiscountsApi';
import { DiscountOffsetMethod } from './DiscountOffsetMethod';
import { NetCurrent } from './NetCurrent';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  FreeTextInvoiceHeaders,
  FreeTextInvoiceHeadersType
} from './FreeTextInvoiceHeaders';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  CdsFreeTextInvoiceHeaders,
  CdsFreeTextInvoiceHeadersType
} from './CdsFreeTextInvoiceHeaders';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "CashDiscounts" of service "d365_metadata".
 */
export class CashDiscounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CashDiscountsType<T>
{
  /**
   * Technical entity name for CashDiscounts.
   */
  static override _entityName = 'CashDiscounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashDiscounts entity.
   */
  static _keys = ['dataAreaId', 'CashDiscountCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Discount Code.
   */
  declare cashDiscountCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Method For Vendor Discounts.
   * @nullable
   */
  declare offsetMethodForVendorDiscounts?: DiscountOffsetMethod | null;
  /**
   * Next Cash Discount Code.
   * @nullable
   */
  declare nextCashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Months.
   */
  declare numberOfMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Main Account Id For Customer Discounts Display Value.
   * @nullable
   */
  declare mainAccountIdForCustomerDiscountsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Method.
   * @nullable
   */
  declare discountMethod?: NetCurrent | null;
  /**
   * Main Account Id For Vendor Discounts Display Value.
   * @nullable
   */
  declare mainAccountIdForVendorDiscountsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Number Of Days.
   */
  declare numberOfDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description Qr Bill.
   * @nullable
   */
  declare descriptionQrBill?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceHeaders} entity.
   */
  declare freeTextInvoiceHeaderCashDiscount: FreeTextInvoiceHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link CdsFreeTextInvoiceHeaders} entity.
   */
  declare cdsFreeTextInvoiceHeaders: CdsFreeTextInvoiceHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: CashDiscountsApi<T>) {
    super(_entityApi);
  }
}

export interface CashDiscountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cashDiscountCode: DeserializedType<T, 'Edm.String'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  offsetMethodForVendorDiscounts?: DiscountOffsetMethod | null;
  nextCashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  numberOfMonths: DeserializedType<T, 'Edm.Int32'>;
  mainAccountIdForCustomerDiscountsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  discountMethod?: NetCurrent | null;
  mainAccountIdForVendorDiscountsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  numberOfDays: DeserializedType<T, 'Edm.Int32'>;
  descriptionQrBill?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  freeTextInvoiceHeaderCashDiscount: FreeTextInvoiceHeadersType<T>[];
  dimensionCombination?: DimensionCombinationsType<T> | null;
  cdsFreeTextInvoiceHeaders: CdsFreeTextInvoiceHeadersType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
