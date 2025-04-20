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
import type { SalesOrderHeadersApi } from './SalesOrderHeadersApi';
import { NoYes } from './NoYes';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { Listcode } from './Listcode';
import { SalesOrderProcessingStatus } from './SalesOrderProcessingStatus';
import { Timezone } from './Timezone';
import { SalesStatus } from './SalesStatus';
import { ItemReservation } from './ItemReservation';
import { PaymentStub } from './PaymentStub';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { SettlementType } from './SettlementType';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { SalesOrderLines, SalesOrderLinesType } from './SalesOrderLines';
import { SalesOrderLinesV3, SalesOrderLinesV3Type } from './SalesOrderLinesV3';

/**
 * This class represents the entity "SalesOrderHeaders" of service "d365_metadata".
 */
export class SalesOrderHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOrderHeadersType<T>
{
  /**
   * Technical entity name for SalesOrderHeaders.
   */
  static override _entityName = 'SalesOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'SalesOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Unit Id.
   * @nullable
   */
  declare salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Tax Amount.
   */
  declare orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Are Totals Calculated.
   * @nullable
   */
  declare areTotalsCalculated?: NoYes | null;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Port Id.
   * @nullable
   */
  declare intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Automatic Inventory Reservation Consider Batch Attributes.
   * @nullable
   */
  declare willAutomaticInventoryReservationConsiderBatchAttributes?: NoYes | null;
  /**
   * Sales Order Name.
   * @nullable
   */
  declare salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Customer Group Code.
   * @nullable
   */
  declare multilineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Payment Fine Code.
   * @nullable
   */
  declare customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Route Plan Id.
   * @nullable
   */
  declare transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Invoice Address State Id.
   * @nullable
   */
  declare invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Customer Group Code.
   * @nullable
   */
  declare lineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Building Compliment.
   * @nullable
   */
  declare invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Id.
   * @nullable
   */
  declare invoiceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Number Sequence Group Id.
   * @nullable
   */
  declare numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Latitude.
   */
  declare invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formatted Invoice Address.
   * @nullable
   */
  declare formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exchange Rate.
   */
  declare fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fiscal Operation Presence Type.
   * @nullable
   */
  declare fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  /**
   * Bank Constant Symbol.
   * @nullable
   */
  declare bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Street.
   * @nullable
   */
  declare invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Receipt Date.
   */
  declare requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Posting Profile Id.
   * @nullable
   */
  declare customerPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delvery Address.
   * @nullable
   */
  declare formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Method Name.
   * @nullable
   */
  declare customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Sales List Code.
   * @nullable
   */
  declare euSalesListCode?: Listcode | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Order Processing Status.
   * @nullable
   */
  declare salesOrderProcessingStatus?: SalesOrderProcessingStatus | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Fiscal Information Code.
   * @nullable
   */
  declare serviceFiscalInformationCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address Time Zone.
   * @nullable
   */
  declare invoiceAddressTimeZone?: Timezone | null;
  /**
   * Is Consolidated Invoice Target.
   * @nullable
   */
  declare isConsolidatedInvoiceTarget?: NoYes | null;
  /**
   * Is E Invoice Dimension Account Code Specified Per Line.
   * @nullable
   */
  declare isEInvoiceDimensionAccountCodeSpecifiedPerLine?: NoYes | null;
  /**
   * Payment Schedule Name.
   * @nullable
   */
  declare paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Charges Amount.
   */
  declare orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Transaction Code.
   * @nullable
   */
  declare intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Taker Personnel Number.
   * @nullable
   */
  declare orderTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Financial Interest Code.
   * @nullable
   */
  declare customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Order Status.
   * @nullable
   */
  declare salesOrderStatus?: SalesStatus | null;
  /**
   * Invoice Address County Id.
   * @nullable
   */
  declare invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address District Name.
   * @nullable
   */
  declare invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Due Date.
   */
  declare fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Invoice Address Private.
   * @nullable
   */
  declare isInvoiceAddressPrivate?: NoYes | null;
  /**
   * Is Entry Certificate Required.
   * @nullable
   */
  declare isEntryCertificateRequired?: NoYes | null;
  /**
   * Cfps Code.
   * @nullable
   */
  declare cfpsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tma Customer Group Id.
   * @nullable
   */
  declare tmaCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Pool Id.
   * @nullable
   */
  declare salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Customer Group Code.
   * @nullable
   */
  declare priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address City.
   * @nullable
   */
  declare invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Method Specification Name.
   * @nullable
   */
  declare customerPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Commission Sales Representative Group Id.
   * @nullable
   */
  declare commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Intrastat Transport Mode Code.
   * @nullable
   */
  declare intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Document Line Id.
   */
  declare transportationDocumentLineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Payment Terms Base Date.
   */
  declare paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inventory Reservation Method.
   * @nullable
   */
  declare inventoryReservationMethod?: ItemReservation | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Invoice Address Longitude.
   */
  declare invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Mode Id.
   * @nullable
   */
  declare transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is One Time Customer.
   * @nullable
   */
  declare isOneTimeCustomer?: NoYes | null;
  /**
   * Is Final User.
   * @nullable
   */
  declare isFinalUser?: NoYes | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Credit Note Reason Code.
   * @nullable
   */
  declare creditNoteReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Amount.
   */
  declare orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Customer Group Code.
   * @nullable
   */
  declare totalDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Export Sale.
   * @nullable
   */
  declare isExportSale?: NoYes | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Broker Id.
   * @nullable
   */
  declare transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Reason Code.
   * @nullable
   */
  declare deliveryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Payment Attachment Type.
   * @nullable
   */
  declare invoicePaymentAttachmentType?: PaymentStub | null;
  /**
   * E Invoice Dimension Account Code.
   * @nullable
   */
  declare eInvoiceDimensionAccountCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address Zip Code.
   * @nullable
   */
  declare invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Shipping Warehouse Id.
   * @nullable
   */
  declare defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Bank Specific Symbol.
   * @nullable
   */
  declare bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Sales Rebate Customer Group Id.
   * @nullable
   */
  declare salesRebateCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordering Customer Account Number.
   * @nullable
   */
  declare orderingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Commission Customer Group Id.
   * @nullable
   */
  declare commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Operation Type Id.
   * @nullable
   */
  declare fiscalDocumentOperationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Third Party Sales Digital Platform Cnpj.
   * @nullable
   */
  declare thirdPartySalesDigitalPlatformCnpj?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Sales Processing Stopped.
   * @nullable
   */
  declare isSalesProcessingStopped?: NoYes | null;
  /**
   * Third Party Sales Digital Platform.
   * @nullable
   */
  declare thirdPartySalesDigitalPlatform?: NoYes | null;
  /**
   * Invoice Address Post Box.
   * @nullable
   */
  declare invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Origin Code.
   * @nullable
   */
  declare salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Campaign Id.
   * @nullable
   */
  declare campaignId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Type.
   * @nullable
   */
  declare invoiceType?: InvoiceTypeMy | null;
  /**
   * Order Responsible Personnel Number.
   * @nullable
   */
  declare orderResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Group Id.
   * @nullable
   */
  declare shippingCarrierServiceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Confirmed Receipt Date.
   */
  declare confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transportation Template Id.
   * @nullable
   */
  declare transportationTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Statistics Procedure Code.
   * @nullable
   */
  declare intrastatStatisticsProcedureCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Export Reason.
   * @nullable
   */
  declare exportReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Own Entry Certificate Issued.
   * @nullable
   */
  declare isOwnEntryCertificateIssued?: NoYes | null;
  /**
   * Is Service Delivery Address Based.
   * @nullable
   */
  declare isServiceDeliveryAddressBased?: NoYes | null;
  /**
   * Charge Customer Group Id.
   * @nullable
   */
  declare chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Discount Amount.
   */
  declare orderTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Shipping Site Id.
   * @nullable
   */
  declare defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Number.
   * @nullable
   */
  declare quotationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Street Number.
   * @nullable
   */
  declare invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Customer Transaction Settlement Type.
   * @nullable
   */
  declare customerTransactionSettlementType?: SettlementType | null;
  /**
   * Fiscal Document Type Id.
   * @nullable
   */
  declare fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direct Debit Mandate Id.
   * @nullable
   */
  declare directDebitMandateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderLines} entity.
   */
  declare salesOrderLine: SalesOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderLinesV3} entity.
   */
  declare salesOrderLineV3: SalesOrderLinesV3<T>[];

  constructor(_entityApi: SalesOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  areTotalsCalculated?: NoYes | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  willAutomaticInventoryReservationConsiderBatchAttributes?: NoYes | null;
  salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  customerPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  euSalesListCode?: Listcode | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderProcessingStatus?: SalesOrderProcessingStatus | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceFiscalInformationCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressTimeZone?: Timezone | null;
  isConsolidatedInvoiceTarget?: NoYes | null;
  isEInvoiceDimensionAccountCodeSpecifiedPerLine?: NoYes | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  orderTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  salesOrderStatus?: SalesStatus | null;
  invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isInvoiceAddressPrivate?: NoYes | null;
  isEntryCertificateRequired?: NoYes | null;
  cfpsCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  tmaCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  transportationDocumentLineId: DeserializedType<T, 'Edm.Guid'>;
  paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryReservationMethod?: ItemReservation | null;
  isDeliveryAddressPrivate?: NoYes | null;
  invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeCustomer?: NoYes | null;
  isFinalUser?: NoYes | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  creditNoteReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  url?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isExportSale?: NoYes | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoicePaymentAttachmentType?: PaymentStub | null;
  eInvoiceDimensionAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  arePricesIncludingSalesTax?: NoYes | null;
  bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  salesRebateCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentOperationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartySalesDigitalPlatformCnpj?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  isSalesProcessingStopped?: NoYes | null;
  thirdPartySalesDigitalPlatform?: NoYes | null;
  invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  campaignId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceType?: InvoiceTypeMy | null;
  orderResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transportationTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatStatisticsProcedureCode?: DeserializedType<T, 'Edm.String'> | null;
  exportReason?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  isOwnEntryCertificateIssued?: NoYes | null;
  isServiceDeliveryAddressBased?: NoYes | null;
  chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  quotationNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  customerTransactionSettlementType?: SettlementType | null;
  fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  directDebitMandateId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  salesOrderLine: SalesOrderLinesType<T>[];
  salesOrderLineV3: SalesOrderLinesV3Type<T>[];
}
