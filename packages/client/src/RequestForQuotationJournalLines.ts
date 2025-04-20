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
import type { RequestForQuotationJournalLinesApi } from './RequestForQuotationJournalLinesApi';
import { PurchRfqStatus } from './PurchRfqStatus';
import { AssetTransTypePurch } from './AssetTransTypePurch';

/**
 * This class represents the entity "RequestForQuotationJournalLines" of service "d365_metadata".
 */
export class RequestForQuotationJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RequestForQuotationJournalLinesType<T>
{
  /**
   * Technical entity name for RequestForQuotationJournalLines.
   */
  static override _entityName = 'RequestForQuotationJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RequestForQuotationJournalLines entity.
   */
  static _keys = [
    'dataAreaId',
    'RFQNumber',
    'RFQJournalDate',
    'InternalRFQJournalNumber',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Number.
   */
  declare rfqNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Journal Date.
   */
  declare rfqJournalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Internal Rfq Journal Number.
   */
  declare internalRfqJournalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Value Model Id.
   * @nullable
   */
  declare assetValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Status.
   * @nullable
   */
  declare lineStatus?: PurchRfqStatus | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Amount.
   */
  declare multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rfq Case Planned Order Requirement Plan Id.
   * @nullable
   */
  declare rfqCasePlannedOrderRequirementPlanId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Name.
   * @nullable
   */
  declare itemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Line Reason Code.
   * @nullable
   */
  declare vendorLineReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Purchase Order Number.
   * @nullable
   */
  declare plannedPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Print Code.
   * @nullable
   */
  declare salesTaxPrintCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Catch Weight Quantity.
   */
  declare requestedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount Tax Amount.
   */
  declare lineAmountTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rfq Delivery Date.
   */
  declare rfqDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Requested Inventory Quantity.
   */
  declare requestedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multiline Discount Percentage.
   */
  declare multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Asset Number.
   * @nullable
   */
  declare fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Transaction Type.
   * @nullable
   */
  declare fixedAssetTransactionType?: AssetTransTypePurch | null;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Purchase Quantity.
   */
  declare requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rfq Case Line Line Number.
   */
  declare rfqCaseLineLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vendor Line Reason Comment.
   * @nullable
   */
  declare vendorLineReasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Expiration Date Time.
   */
  declare rfqExpirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percentage.
   */
  declare discountPercentage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RequestForQuotationJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RequestForQuotationJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqNumber: DeserializedType<T, 'Edm.String'>;
  rfqJournalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  internalRfqJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  assetValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  lineStatus?: PurchRfqStatus | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  rfqCasePlannedOrderRequirementPlanId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemName?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  vendorLineReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  plannedPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxPrintCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  requestedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  lineAmountTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  rfqDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetTransactionType?: AssetTransTypePurch | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  rfqCaseLineLineNumber: DeserializedType<T, 'Edm.Int64'>;
  vendorLineReasonComment?: DeserializedType<T, 'Edm.String'> | null;
  rfqExpirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
}
