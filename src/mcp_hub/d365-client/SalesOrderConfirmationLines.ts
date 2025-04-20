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
import type { SalesOrderConfirmationLinesApi } from './SalesOrderConfirmationLinesApi';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  SalesOrderConfirmationHeaders,
  SalesOrderConfirmationHeadersType
} from './SalesOrderConfirmationHeaders';

/**
 * This class represents the entity "SalesOrderConfirmationLines" of service "d365_metadata".
 */
export class SalesOrderConfirmationLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderConfirmationLinesType<T>
{
  /**
   * Technical entity name for SalesOrderConfirmationLines.
   */
  static override _entityName = 'SalesOrderConfirmationLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderConfirmationLines entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesOrderNumber',
    'ConfirmationDate',
    'ConfirmationNumber',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Confirmation Date.
   */
  declare confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Confirmation Number.
   */
  declare confirmationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Confirmed Catch Weight Quantity.
   */
  declare confirmedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Amount.
   */
  declare multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multiline Discount Percentage.
   */
  declare multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Quantity.
   */
  declare salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Line Inventory Lot Id.
   * @nullable
   */
  declare salesOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Product Category Name.
   * @nullable
   */
  declare salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Inventory Status Id.
   * @nullable
   */
  declare confirmedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordering Customer Account Number.
   * @nullable
   */
  declare orderingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmation Document Reference.
   * @nullable
   */
  declare confirmationDocumentReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Line Sales Tax Amount.
   */
  declare totalLineSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount Sales Tax Amount.
   */
  declare lineAmountSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Print Code.
   * @nullable
   */
  declare salesTaxPrintCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Confirmed Inventory Quantity.
   */
  declare confirmedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commission Sales Representative Group Id.
   * @nullable
   */
  declare commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Confirmed Sales Quantity.
   */
  declare confirmedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Discount Percentage.
   */
  declare cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Warehouse Id.
   * @nullable
   */
  declare shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Site Id.
   * @nullable
   */
  declare shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultLedgerDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderConfirmationHeaders} entity.
   */
  declare salesOrderConfirmationHeader?: SalesOrderConfirmationHeaders<T> | null;

  constructor(_entityApi: SalesOrderConfirmationLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderConfirmationLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  confirmationNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  confirmedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderLineInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  confirmedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  confirmationDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalLineSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineAmountSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxPrintCode?: DeserializedType<T, 'Edm.String'> | null;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  confirmedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  confirmedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimension?: DimensionSetsType<T> | null;
  salesOrderConfirmationHeader?: SalesOrderConfirmationHeadersType<T> | null;
}
