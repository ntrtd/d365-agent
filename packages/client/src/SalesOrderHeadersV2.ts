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
import type { SalesOrderHeadersV2Api } from './SalesOrderHeadersV2Api';
import { NoYes } from './NoYes';
import { DocumentTypeIt } from './DocumentTypeIt';
import { SalesStatus } from './SalesStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { SettlementType } from './SettlementType';
import { MpsFullRunCtpStatus } from './MpsFullRunCtpStatus';
import { Listcode } from './Listcode';
import { Timezone } from './Timezone';
import { PaymentStub } from './PaymentStub';
import { ItemReservation } from './ItemReservation';
import { SalesOrderProcessingStatus } from './SalesOrderProcessingStatus';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  SalesOrderHeaderDocumentAttachmentsV2,
  SalesOrderHeaderDocumentAttachmentsV2Type
} from './SalesOrderHeaderDocumentAttachmentsV2';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import { SalesOrderLines, SalesOrderLinesType } from './SalesOrderLines';

/**
 * This class represents the entity "SalesOrderHeadersV2" of service "d365_metadata".
 */
export class SalesOrderHeadersV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOrderHeadersV2Type<T>
{
  /**
   * Technical entity name for SalesOrderHeadersV2.
   */
  static override _entityName = 'SalesOrderHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderHeadersV2 entity.
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
   * Order Total Charges Amount.
   */
  declare orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fiscal Document Operation Type Id.
   * @nullable
   */
  declare fiscalDocumentOperationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Order Taker Personnel Number.
   * @nullable
   */
  declare orderTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Receipt Date.
   */
  declare requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * E Invoice Dimension Account Code.
   * @nullable
   */
  declare eInvoiceDimensionAccountCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Own Entry Certificate Issued.
   * @nullable
   */
  declare isOwnEntryCertificateIssued?: NoYes | null;
  /**
   * Invoice Address Street.
   * @nullable
   */
  declare invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Campaign Id.
   * @nullable
   */
  declare campaignId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delvery Address.
   * @nullable
   */
  declare formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Document Line Number.
   */
  declare baseDocumentLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Base Document Type.
   * @nullable
   */
  declare baseDocumentType?: DocumentTypeIt | null;
  /**
   * Default Shipping Site Id.
   * @nullable
   */
  declare defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Broker Id.
   * @nullable
   */
  declare transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Mode Id.
   * @nullable
   */
  declare transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfps Code.
   * @nullable
   */
  declare cfpsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Invoice Address Private.
   * @nullable
   */
  declare isInvoiceAddressPrivate?: NoYes | null;
  /**
   * Is Sales Processing Stopped.
   * @nullable
   */
  declare isSalesProcessingStopped?: NoYes | null;
  /**
   * Shipping Carrier Customer Account Number.
   * @nullable
   */
  declare shippingCarrierCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tma Customer Group Id.
   * @nullable
   */
  declare tmaCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Specific Symbol.
   * @nullable
   */
  declare bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Status.
   * @nullable
   */
  declare salesOrderStatus?: SalesStatus | null;
  /**
   * Number Sequence Group Id.
   * @nullable
   */
  declare numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Latitude.
   */
  declare invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Origin Code.
   * @nullable
   */
  declare salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Financial Interest Code.
   * @nullable
   */
  declare customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transportation Template Id.
   * @nullable
   */
  declare transportationTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Street In Kana.
   * @nullable
   */
  declare invoiceAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Constant Symbol.
   * @nullable
   */
  declare bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Tax Amount.
   */
  declare orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is One Time Customer.
   * @nullable
   */
  declare isOneTimeCustomer?: NoYes | null;
  /**
   * Sales Order Pool Id.
   * @nullable
   */
  declare salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Discount Customer Group Code.
   * @nullable
   */
  declare totalDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Rebate Customer Group Id.
   * @nullable
   */
  declare salesRebateCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Sales Digital Platform Cnpj.
   * @nullable
   */
  declare thirdPartySalesDigitalPlatformCnpj?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Receipt Date.
   */
  declare confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Base Document Item Number.
   * @nullable
   */
  declare baseDocumentItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Operation Presence Type.
   * @nullable
   */
  declare fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  /**
   * Quotation Number.
   * @nullable
   */
  declare quotationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Consolidated Invoice Target.
   * @nullable
   */
  declare isConsolidatedInvoiceTarget?: NoYes | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Customer Group Code.
   * @nullable
   */
  declare multilineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fulfillment Policy Name.
   * @nullable
   */
  declare fulfillmentPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Document Number.
   * @nullable
   */
  declare baseDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address State Id.
   * @nullable
   */
  declare invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Method Specification Name.
   * @nullable
   */
  declare customerPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Fiscal Information Code.
   * @nullable
   */
  declare serviceFiscalInformationCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Commission Customer Group Id.
   * @nullable
   */
  declare commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Id.
   * @nullable
   */
  declare invoiceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Terms Base Date.
   */
  declare paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Credit Note Reason Code.
   * @nullable
   */
  declare creditNoteReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Street In Kana.
   * @nullable
   */
  declare deliveryAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Charge Customer Group Id.
   * @nullable
   */
  declare chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Street Number.
   * @nullable
   */
  declare invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Totals Calculated.
   * @nullable
   */
  declare areTotalsCalculated?: NoYes | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Total Amount.
   */
  declare orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Invoice Address.
   * @nullable
   */
  declare formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Reason.
   * @nullable
   */
  declare exportReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Responsible Personnel Number.
   * @nullable
   */
  declare orderResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Or Agreement Code.
   * @nullable
   */
  declare orderOrAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Iso Code.
   * @nullable
   */
  declare invoiceAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Schedule Name.
   * @nullable
   */
  declare paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Transaction Code.
   * @nullable
   */
  declare intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Discount Amount.
   */
  declare orderTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Type.
   * @nullable
   */
  declare invoiceType?: InvoiceTypeMy | null;
  /**
   * Order Creation Date Time.
   */
  declare orderCreationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Sales Representative Group Id.
   * @nullable
   */
  declare commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Transaction Settlement Type.
   * @nullable
   */
  declare customerTransactionSettlementType?: SettlementType | null;
  /**
   * Invoice Address City In Kana.
   * @nullable
   */
  declare invoiceAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Automatic Inventory Reservation Consider Batch Attributes.
   * @nullable
   */
  declare willAutomaticInventoryReservationConsiderBatchAttributes?: NoYes | null;
  /**
   * Is E Invoice Dimension Account Code Specified Per Line.
   * @nullable
   */
  declare isEInvoiceDimensionAccountCodeSpecifiedPerLine?: NoYes | null;
  /**
   * Intrastat Statistics Procedure Code.
   * @nullable
   */
  declare intrastatStatisticsProcedureCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Export Sale.
   * @nullable
   */
  declare isExportSale?: NoYes | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Full Run Ctp Status.
   * @nullable
   */
  declare fullRunCtpStatus?: MpsFullRunCtpStatus | null;
  /**
   * Fixed Due Date.
   */
  declare fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transportation Document Line Id.
   */
  declare transportationDocumentLineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Longitude.
   */
  declare invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address City.
   * @nullable
   */
  declare invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Final User.
   * @nullable
   */
  declare isFinalUser?: NoYes | null;
  /**
   * Invoice Address Post Box.
   * @nullable
   */
  declare invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Group Id.
   * @nullable
   */
  declare shippingCarrierServiceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Sales List Code.
   * @nullable
   */
  declare euSalesListCode?: Listcode | null;
  /**
   * Invoice Address District Name.
   * @nullable
   */
  declare invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Sales Digital Platform.
   * @nullable
   */
  declare thirdPartySalesDigitalPlatform?: NoYes | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City In Kana.
   * @nullable
   */
  declare deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Document Date.
   */
  declare baseDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Posting Profile Id.
   * @nullable
   */
  declare customerPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tender Code.
   * @nullable
   */
  declare tenderCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Zip Code.
   * @nullable
   */
  declare invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Sales Order Name.
   * @nullable
   */
  declare salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Shipping Warehouse Id.
   * @nullable
   */
  declare defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Entry Certificate Required.
   * @nullable
   */
  declare isEntryCertificateRequired?: NoYes | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Transport Mode Code.
   * @nullable
   */
  declare intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Payment Attachment Type.
   * @nullable
   */
  declare invoicePaymentAttachmentType?: PaymentStub | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Time Zone.
   * @nullable
   */
  declare invoiceAddressTimeZone?: Timezone | null;
  /**
   * Invoice Address County Id.
   * @nullable
   */
  declare invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direct Debit Mandate Id.
   * @nullable
   */
  declare directDebitMandateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Customer Group Code.
   * @nullable
   */
  declare lineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Intrastat Port Id.
   * @nullable
   */
  declare intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cip Ecode.
   * @nullable
   */
  declare cipEcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordering Customer Account Number.
   * @nullable
   */
  declare orderingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Payment Fine Code.
   * @nullable
   */
  declare customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Building Compliment.
   * @nullable
   */
  declare invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Customer Group Code.
   * @nullable
   */
  declare priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Reason Code.
   * @nullable
   */
  declare deliveryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Fixed Exchange Rate.
   */
  declare reportingCurrencyFixedExchangeRate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Is Service Delivery Address Based.
   * @nullable
   */
  declare isServiceDeliveryAddressBased?: NoYes | null;
  /**
   * Order Header Tax Amount.
   */
  declare orderHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Reservation Method.
   * @nullable
   */
  declare inventoryReservationMethod?: ItemReservation | null;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Order Processing Status.
   * @nullable
   */
  declare salesOrderProcessingStatus?: SalesOrderProcessingStatus | null;
  /**
   * Transportation Route Plan Id.
   * @nullable
   */
  declare transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Create Auto Charges.
   * @nullable
   */
  declare skipCreateAutoCharges?: NoYes | null;
  /**
   * Customer Payment Method Name.
   * @nullable
   */
  declare customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Id.
   * @nullable
   */
  declare salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exchange Rate.
   */
  declare fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Created From Subscription Billing.
   * @nullable
   */
  declare subBillCreatedFromSubscriptionBilling?: NoYes | null;
  /**
   * Rev Rec Reallocation Id.
   * @nullable
   */
  declare revRecReallocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Follow Original Pricing Method.
   * @nullable
   */
  declare revRecFollowOriginalPricingMethod?: NoYes | null;
  /**
   * Rev Rec Multiple So Reallocation.
   * @nullable
   */
  declare revRecMultipleSoReallocation?: NoYes | null;
  /**
   * Rev Rec Contract End Date.
   */
  declare revRecContractEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rev Rec Latest Reverse Journal.
   */
  declare revRecLatestReverseJournal: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Rev Rec Contract Start Date.
   */
  declare revRecContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Skip Global Unified Pricing Calculation.
   * @nullable
   */
  declare skipGlobalUnifiedPricingCalculation?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderHeaderDocumentAttachmentsV2} entity.
   */
  declare salesOrderHeaderDocumentAttachments: SalesOrderHeaderDocumentAttachmentsV2<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderLines} entity.
   */
  declare salesOrderLines: SalesOrderLines<T>[];

  constructor(_entityApi: SalesOrderHeadersV2Api<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  fiscalDocumentOperationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  orderTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  eInvoiceDimensionAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  isOwnEntryCertificateIssued?: NoYes | null;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  campaignId?: DeserializedType<T, 'Edm.String'> | null;
  formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  baseDocumentLineNumber: DeserializedType<T, 'Edm.Int32'>;
  baseDocumentType?: DocumentTypeIt | null;
  defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  cfpsCode?: DeserializedType<T, 'Edm.String'> | null;
  isInvoiceAddressPrivate?: NoYes | null;
  isSalesProcessingStopped?: NoYes | null;
  shippingCarrierCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  tmaCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderStatus?: SalesStatus | null;
  numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  transportationTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  isOneTimeCustomer?: NoYes | null;
  salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  salesRebateCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartySalesDigitalPlatformCnpj?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  baseDocumentItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  quotationNumber?: DeserializedType<T, 'Edm.String'> | null;
  isConsolidatedInvoiceTarget?: NoYes | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  fulfillmentPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  baseDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  serviceFiscalInformationCode?: DeserializedType<T, 'Edm.String'> | null;
  commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditNoteReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  areTotalsCalculated?: NoYes | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  exportReason?: DeserializedType<T, 'Edm.String'> | null;
  orderResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  orderOrAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceType?: InvoiceTypeMy | null;
  orderCreationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  arePricesIncludingSalesTax?: NoYes | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  customerTransactionSettlementType?: SettlementType | null;
  invoiceAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  willAutomaticInventoryReservationConsiderBatchAttributes?: NoYes | null;
  isEInvoiceDimensionAccountCodeSpecifiedPerLine?: NoYes | null;
  intrastatStatisticsProcedureCode?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isExportSale?: NoYes | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fullRunCtpStatus?: MpsFullRunCtpStatus | null;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transportationDocumentLineId: DeserializedType<T, 'Edm.Guid'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  isFinalUser?: NoYes | null;
  invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  euSalesListCode?: Listcode | null;
  invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartySalesDigitalPlatform?: NoYes | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  baseDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  tenderCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  isEntryCertificateRequired?: NoYes | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  invoicePaymentAttachmentType?: PaymentStub | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressTimeZone?: Timezone | null;
  invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  directDebitMandateId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  cipEcode?: DeserializedType<T, 'Edm.String'> | null;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyFixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  isServiceDeliveryAddressBased?: NoYes | null;
  orderHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventoryReservationMethod?: ItemReservation | null;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesOrderProcessingStatus?: SalesOrderProcessingStatus | null;
  transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  skipCreateAutoCharges?: NoYes | null;
  customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  subBillCreatedFromSubscriptionBilling?: NoYes | null;
  revRecReallocationId?: DeserializedType<T, 'Edm.String'> | null;
  revRecFollowOriginalPricingMethod?: NoYes | null;
  revRecMultipleSoReallocation?: NoYes | null;
  revRecContractEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  revRecLatestReverseJournal: DeserializedType<T, 'Edm.Int64'>;
  revRecContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  skipGlobalUnifiedPricingCalculation?: NoYes | null;
  dimensionSet?: DimensionSetsType<T> | null;
  salesOrderHeaderDocumentAttachments: SalesOrderHeaderDocumentAttachmentsV2Type<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  salesOrderLines: SalesOrderLinesType<T>[];
}
