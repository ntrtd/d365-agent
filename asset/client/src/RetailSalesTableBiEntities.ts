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
import type { RetailSalesTableBiEntitiesApi } from './RetailSalesTableBiEntitiesApi';
import { RetailPaymentsType } from './RetailPaymentsType';
import { NoYes } from './NoYes';
import { RetailCfdiDocumentTypeMx } from './RetailCfdiDocumentTypeMx';
import { RetailRetailStatusTypeBase } from './RetailRetailStatusTypeBase';

/**
 * This class represents the entity "RetailSalesTableBiEntities" of service "d365_metadata".
 */
export class RetailSalesTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSalesTableBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailSalesTableBiEntities.
   */
  static override _entityName = 'RetailSalesTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSalesTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payments Type.
   * @nullable
   */
  declare paymentsType?: RetailPaymentsType | null;
  /**
   * Total Manual Discount Amount.
   */
  declare totalManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tmp Price Discount Data.
   * @nullable
   */
  declare tmpPriceDiscountData?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Retail Store Id.
   * @nullable
   */
  declare retailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Type Id.
   * @nullable
   */
  declare creditCardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Product List Update Id.
   * @nullable
   */
  declare retailProductListUpdateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coupons.
   * @nullable
   */
  declare coupons?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Is Tax Exempted For Price Inclusive.
   * @nullable
   */
  declare isTaxExemptedForPriceInclusive?: NoYes | null;
  /**
   * Original Transaction Time.
   */
  declare originalTransactionTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Terminal Id.
   * @nullable
   */
  declare retailTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Replenishment Location Id.
   * @nullable
   */
  declare retailReplenishmentLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Override Code.
   * @nullable
   */
  declare taxOverrideCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Order.
   * @nullable
   */
  declare retailOrder?: NoYes | null;
  /**
   * Credit Card Tender Type Id.
   * @nullable
   */
  declare creditCardTenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gst Transaction Id From Pos In.
   * @nullable
   */
  declare gstTransactionIdFromPosIn?: NoYes | null;
  /**
   * Is Price And Discount Recalculation Required.
   * @nullable
   */
  declare isPriceAndDiscountRecalculationRequired?: NoYes | null;
  /**
   * Discount Codes.
   * @nullable
   */
  declare discountCodes?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Gst Transaction Id In.
   * @nullable
   */
  declare gstTransactionIdIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Manual Discount Percentage.
   */
  declare totalManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Prepayment Overridden.
   * @nullable
   */
  declare retailPrepaymentOverridden?: NoYes | null;
  /**
   * Retail Cfdi Document Type Mx.
   * @nullable
   */
  declare retailCfdiDocumentTypeMx?: RetailCfdiDocumentTypeMx | null;
  /**
   * Channel Reference Id.
   * @nullable
   */
  declare channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Product List Update Name.
   * @nullable
   */
  declare retailProductListUpdateName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Should Use Unified Pricing Engine On Sales Order.
   * @nullable
   */
  declare shouldUseUnifiedPricingEngineOnSalesOrder?: NoYes | null;
  /**
   * Initial Receipt Id.
   * @nullable
   */
  declare initialReceiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Retail Status Type.
   * @nullable
   */
  declare retailRetailStatusType?: RetailRetailStatusTypeBase | null;

  constructor(_entityApi: RetailSalesTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSalesTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  paymentsType?: RetailPaymentsType | null;
  totalManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  tmpPriceDiscountData?: DeserializedType<T, 'Edm.Binary'> | null;
  retailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  creditCardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  retailProductListUpdateId?: DeserializedType<T, 'Edm.String'> | null;
  coupons?: DeserializedType<T, 'Edm.Binary'> | null;
  isTaxExemptedForPriceInclusive?: NoYes | null;
  originalTransactionTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  retailReplenishmentLocationId?: DeserializedType<T, 'Edm.String'> | null;
  taxOverrideCode?: DeserializedType<T, 'Edm.String'> | null;
  retailOrder?: NoYes | null;
  creditCardTenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  gstTransactionIdFromPosIn?: NoYes | null;
  isPriceAndDiscountRecalculationRequired?: NoYes | null;
  discountCodes?: DeserializedType<T, 'Edm.Binary'> | null;
  gstTransactionIdIn?: DeserializedType<T, 'Edm.String'> | null;
  totalManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  retailPrepaymentOverridden?: NoYes | null;
  retailCfdiDocumentTypeMx?: RetailCfdiDocumentTypeMx | null;
  channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  retailProductListUpdateName?: DeserializedType<T, 'Edm.String'> | null;
  shouldUseUnifiedPricingEngineOnSalesOrder?: NoYes | null;
  initialReceiptId?: DeserializedType<T, 'Edm.String'> | null;
  retailRetailStatusType?: RetailRetailStatusTypeBase | null;
}
