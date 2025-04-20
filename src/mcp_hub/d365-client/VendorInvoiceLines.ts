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
import type { VendorInvoiceLinesApi } from './VendorInvoiceLinesApi';
import { NoYes } from './NoYes';
import { Tax1099Type } from './Tax1099Type';
import { VendInvoiceRequestStatus } from './VendInvoiceRequestStatus';
import { PurchInvoiceLineType } from './PurchInvoiceLineType';
import { DocumentStatus } from './DocumentStatus';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { InvoiceSubLinesV2, InvoiceSubLinesV2Type } from './InvoiceSubLinesV2';
import { InvoiceSubLines, InvoiceSubLinesType } from './InvoiceSubLines';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  VendorInvoiceHeaders,
  VendorInvoiceHeadersType
} from './VendorInvoiceHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "VendorInvoiceLines" of service "d365_metadata".
 */
export class VendorInvoiceLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorInvoiceLinesType<T>
{
  /**
   * Technical entity name for VendorInvoiceLines.
   */
  static override _entityName = 'VendorInvoiceLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorInvoiceLines entity.
   */
  static _keys = ['dataAreaId', 'HeaderReference', 'InvoiceLineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Reference.
   */
  declare headerReference: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Line Number.
   */
  declare invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Category Hierarchy Name.
   * @nullable
   */
  declare procurementCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax 1099 S Address Or Legal Description.
   * @nullable
   */
  declare tax1099SAddressOrLegalDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 G Tax Year.
   */
  declare tax1099GTaxYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Name.
   * @nullable
   */
  declare itemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Percentage.
   */
  declare multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Now.
   */
  declare inventNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Sales Tax.
   * @nullable
   */
  declare itemSalesTax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Group.
   * @nullable
   */
  declare withholdingTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remain After Invent.
   */
  declare remainAfterInvent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Category Name.
   * @nullable
   */
  declare procurementCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tax 1099 S Property Or Services.
   * @nullable
   */
  declare isTax1099SPropertyOrServices?: NoYes | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release All Retained Amount.
   * @nullable
   */
  declare releaseAllRetainedAmount?: NoYes | null;
  /**
   * Tax Withhold Group.
   * @nullable
   */
  declare taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Id.
   * @nullable
   */
  declare partyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 G Vendor State Id.
   * @nullable
   */
  declare tax1099GVendorStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent.
   */
  declare discountPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Adjusted Unit Price.
   */
  declare adjustedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 Type.
   * @nullable
   */
  declare tax1099Type?: Tax1099Type | null;
  /**
   * Multiline Discount.
   */
  declare multilineDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Change Quantity Manually.
   * @nullable
   */
  declare changeQuantityManually?: NoYes | null;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tax 1099 G Trade Or Business Income.
   * @nullable
   */
  declare isTax1099GTradeOrBusinessIncome?: NoYes | null;
  /**
   * Inventory Warehouse Id.
   * @nullable
   */
  declare inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Retained Amount.
   */
  declare totalRetainedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 S Buyer Part Of Real Estate Tax Amount.
   */
  declare tax1099SBuyerPartOfRealEstateTaxAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Deliver Remainder.
   */
  declare originalDeliverRemainder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 S Closing Date.
   */
  declare tax1099SClosingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Invoice Line Review Status.
   * @nullable
   */
  declare vendorInvoiceLineReviewStatus?: VendInvoiceRequestStatus | null;
  /**
   * Receive Now.
   */
  declare receiveNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Reservation Line Number.
   */
  declare budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * State Of Origin.
   * @nullable
   */
  declare stateOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remain Before.
   */
  declare remainBefore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: PurchInvoiceLineType | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area Company.
   * @nullable
   */
  declare dataAreaCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Line Number.
   */
  declare purchLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County Orig Dest.
   * @nullable
   */
  declare countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retainage Amount.
   */
  declare retainageAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cw Update.
   */
  declare cwUpdate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Order.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordering.
   * @nullable
   */
  declare ordering?: DocumentStatus | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 G State Tax Withheld Amount.
   */
  declare tax1099GStateTaxWithheldAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retain Percentage.
   */
  declare retainPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remain Before Invent.
   */
  declare remainBeforeInvent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packed Extensions.
   * @nullable
   */
  declare packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Box.
   * @nullable
   */
  declare tax1099Box?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cw Delivery Remainder.
   */
  declare cwDeliveryRemainder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Service Code.
   * @nullable
   */
  declare taxServiceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Close For Receipt.
   * @nullable
   */
  declare closeForReceipt?: NoYes | null;
  /**
   * Remain After.
   */
  declare remainAfter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Reservation Document Number.
   * @nullable
   */
  declare budgetReservationDocumentNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charges On Purchases.
   */
  declare chargesOnPurchases: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Item Group Name.
   * @nullable
   */
  declare taxWithholdItemGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfop Code.
   * @nullable
   */
  declare cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 State Amount.
   */
  declare tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Distribution Template Id.
   * @nullable
   */
  declare accountingDistributionTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistics Procedure.
   * @nullable
   */
  declare statisticsProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cw Remaining Quantity.
   */
  declare cwRemainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Number.
   * @nullable
   */
  declare dimensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Amount.
   */
  declare tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Calculation Id.
   * @nullable
   */
  declare pdsCalculationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 G Vendor State Tax Id.
   * @nullable
   */
  declare tax1099GVendorStateTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Item Group.
   * @nullable
   */
  declare withholdingTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount.
   */
  declare discount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery State.
   * @nullable
   */
  declare deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commodity.
   * @nullable
   */
  declare commodity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Diot Operation Type.
   * @nullable
   */
  declare diotOperationType?: VendorOperationTypeMx | null;
  /**
   * One-to-many navigation property to the {@link InvoiceSubLinesV2} entity.
   */
  declare invoiceSubLineV2: InvoiceSubLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link InvoiceSubLines} entity.
   */
  declare invoiceSubLine: InvoiceSubLines<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorInvoiceHeaders} entity.
   */
  declare vendorInvoiceHeader?: VendorInvoiceHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: VendorInvoiceLinesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorInvoiceLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerReference: DeserializedType<T, 'Edm.String'>;
  invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  procurementCategoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  tax1099SAddressOrLegalDescription?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  tax1099GTaxYear: DeserializedType<T, 'Edm.Int32'>;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  itemName?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  inventNow: DeserializedType<T, 'Edm.Decimal'>;
  itemSalesTax?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  remainAfterInvent: DeserializedType<T, 'Edm.Decimal'>;
  procurementCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  isTax1099SPropertyOrServices?: NoYes | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  releaseAllRetainedAmount?: NoYes | null;
  taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  partyId?: DeserializedType<T, 'Edm.String'> | null;
  tax1099GVendorStateId?: DeserializedType<T, 'Edm.String'> | null;
  discountPercent: DeserializedType<T, 'Edm.Decimal'>;
  adjustedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  tax1099Type?: Tax1099Type | null;
  multilineDiscount: DeserializedType<T, 'Edm.Decimal'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  changeQuantityManually?: NoYes | null;
  port?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  isTax1099GTradeOrBusinessIncome?: NoYes | null;
  inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  totalRetainedAmount: DeserializedType<T, 'Edm.Decimal'>;
  tax1099SBuyerPartOfRealEstateTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  originalDeliverRemainder: DeserializedType<T, 'Edm.Decimal'>;
  tax1099SClosingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  vendorInvoiceLineReviewStatus?: VendInvoiceRequestStatus | null;
  receiveNow: DeserializedType<T, 'Edm.Decimal'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  stateOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  remainBefore: DeserializedType<T, 'Edm.Decimal'>;
  lineType?: PurchInvoiceLineType | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  dataAreaCompany?: DeserializedType<T, 'Edm.String'> | null;
  purchLineNumber: DeserializedType<T, 'Edm.Int64'>;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  retainageAmount: DeserializedType<T, 'Edm.Decimal'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  cwUpdate: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  ordering?: DocumentStatus | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  tax1099GStateTaxWithheldAmount: DeserializedType<T, 'Edm.Decimal'>;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  retainPercentage: DeserializedType<T, 'Edm.Decimal'>;
  remainBeforeInvent: DeserializedType<T, 'Edm.Decimal'>;
  packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Box?: DeserializedType<T, 'Edm.String'> | null;
  cwDeliveryRemainder: DeserializedType<T, 'Edm.Decimal'>;
  taxServiceCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  closeForReceipt?: NoYes | null;
  remainAfter: DeserializedType<T, 'Edm.Decimal'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  budgetReservationDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  chargesOnPurchases: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdItemGroupName?: DeserializedType<T, 'Edm.String'> | null;
  cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountingDistributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  statisticsProcedure?: DeserializedType<T, 'Edm.String'> | null;
  cwRemainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  dimensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  pdsCalculationId?: DeserializedType<T, 'Edm.String'> | null;
  tax1099GVendorStateTaxId?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  discount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  commodity?: DeserializedType<T, 'Edm.String'> | null;
  diotOperationType?: VendorOperationTypeMx | null;
  invoiceSubLineV2: InvoiceSubLinesV2Type<T>[];
  invoiceSubLine: InvoiceSubLinesType<T>[];
  dimensionCombination?: DimensionCombinationsType<T> | null;
  vendorInvoiceHeader?: VendorInvoiceHeadersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
