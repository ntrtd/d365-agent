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
import type { PublishedRequestForQuotationAndReplyLinesApi } from './PublishedRequestForQuotationAndReplyLinesApi';
import { NoYes } from './NoYes';
import { PurchRfqStatus } from './PurchRfqStatus';
import { PurchRfqLineItemType } from './PurchRfqLineItemType';

/**
 * This class represents the entity "PublishedRequestForQuotationAndReplyLines" of service "d365_metadata".
 */
export class PublishedRequestForQuotationAndReplyLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PublishedRequestForQuotationAndReplyLinesType<T>
{
  /**
   * Technical entity name for PublishedRequestForQuotationAndReplyLines.
   */
  static override _entityName = 'PublishedRequestForQuotationAndReplyLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PublishedRequestForQuotationAndReplyLines entity.
   */
  static _keys = ['dataAreaId', 'RFQNumber', 'ReplyLineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Number.
   */
  declare rfqNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reply Line Number.
   */
  declare replyLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reply Multiline Discount Amount.
   */
  declare replyMultilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reply Purchase Quantity.
   */
  declare replyPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Name.
   * @nullable
   */
  declare vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reply Line Valid To Date.
   */
  declare replyLineValidToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reply Line Discount Amount.
   */
  declare replyLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Alternate Product.
   * @nullable
   */
  declare isAlternateProduct?: NoYes | null;
  /**
   * Requested Purchase Unit Symbol.
   * @nullable
   */
  declare requestedPurchaseUnitSymbol?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Line Discount Percentage.
   */
  declare requestedLineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rfq Status.
   * @nullable
   */
  declare rfqStatus?: PurchRfqStatus | null;
  /**
   * Reply Purchase Unit Symbol.
   * @nullable
   */
  declare replyPurchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reply Line Discount Percentage.
   */
  declare replyLineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Purchase Quantity.
   */
  declare requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Fixed Price Charges.
   */
  declare requestedFixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Multiline Discount Percentage.
   */
  declare requestedMultilineDiscountPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reply Line Valid From Date.
   */
  declare replyLineValidFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reply Line Amount.
   */
  declare replyLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Line Discount Amount.
   */
  declare requestedLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: PurchRfqLineItemType | null;
  /**
   * Reply Line Lead Time.
   */
  declare replyLineLeadTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Rfq Case Number.
   * @nullable
   */
  declare rfqCaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Highest Rfq Status.
   * @nullable
   */
  declare highestRfqStatus?: PurchRfqStatus | null;
  /**
   * Reply Line Working Days.
   * @nullable
   */
  declare replyLineWorkingDays?: NoYes | null;
  /**
   * Lowest Rfq Status.
   * @nullable
   */
  declare lowestRfqStatus?: PurchRfqStatus | null;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Case Requesting Worker Name.
   * @nullable
   */
  declare rfqCaseRequestingWorkerName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reply Multiline Discount Percentage.
   */
  declare replyMultilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Line Amount.
   */
  declare requestedLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reply Fixed Price Charges.
   */
  declare replyFixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reply Purchase Price.
   */
  declare replyPurchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reply Comment.
   * @nullable
   */
  declare replyComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Purchase Price.
   */
  declare requestedPurchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Multiline Discount Amount.
   */
  declare requestedMultilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: PublishedRequestForQuotationAndReplyLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PublishedRequestForQuotationAndReplyLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqNumber: DeserializedType<T, 'Edm.String'>;
  replyLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  replyMultilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  replyPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  replyLineValidToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  replyLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isAlternateProduct?: NoYes | null;
  requestedPurchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  requestedLineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  rfqStatus?: PurchRfqStatus | null;
  replyPurchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  replyLineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  requestedFixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  requestedMultilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  replyLineValidFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  replyLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  requestedLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineType?: PurchRfqLineItemType | null;
  replyLineLeadTime: DeserializedType<T, 'Edm.Int32'>;
  rfqCaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  highestRfqStatus?: PurchRfqStatus | null;
  replyLineWorkingDays?: NoYes | null;
  lowestRfqStatus?: PurchRfqStatus | null;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  rfqCaseRequestingWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  replyMultilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  requestedLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  replyFixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  replyPurchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  replyComment?: DeserializedType<T, 'Edm.String'> | null;
  requestedPurchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  requestedMultilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
}
