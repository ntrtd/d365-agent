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
import type { PurchaseOrderConfirmationHeadersApi } from './PurchaseOrderConfirmationHeadersApi';
import { BankDocumentType } from './BankDocumentType';
import { Listcode } from './Listcode';
import { PurchStatus } from './PurchStatus';
import { VersioningDocumentState } from './VersioningDocumentState';
import { NoYes } from './NoYes';
import { SettlementType } from './SettlementType';
import { PurchPurchaseOrderCreationMethod } from './PurchPurchaseOrderCreationMethod';
import { Timezone } from './Timezone';
import {
  PurchaseOrderConfirmationLines,
  PurchaseOrderConfirmationLinesType
} from './PurchaseOrderConfirmationLines';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { Projects, ProjectsType } from './Projects';

/**
 * This class represents the entity "PurchaseOrderConfirmationHeaders" of service "d365_metadata".
 */
export class PurchaseOrderConfirmationHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderConfirmationHeadersType<T>
{
  /**
   * Technical entity name for PurchaseOrderConfirmationHeaders.
   */
  static override _entityName = 'PurchaseOrderConfirmationHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderConfirmationHeaders entity.
   */
  static _keys = [
    'dataAreaId',
    'PurchaseOrderNumber',
    'ConfirmationNumber',
    'ConfirmationDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Confirmation Number.
   */
  declare confirmationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Confirmation Date.
   */
  declare confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Secondary Exchange Rate.
   */
  declare fixedSecondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Port Id.
   * @nullable
   */
  declare intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Document Type.
   * @nullable
   */
  declare bankDocumentType?: BankDocumentType | null;
  /**
   * Vendor Payment Method Specification Name.
   * @nullable
   */
  declare vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Confirmation Voucher Number.
   * @nullable
   */
  declare confirmationVoucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Document Reference.
   * @nullable
   */
  declare purchaseOrderDocumentReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Vendor Account Number.
   * @nullable
   */
  declare invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirming Purchase Order Code Language Id.
   * @nullable
   */
  declare confirmingPurchaseOrderCodeLanguageId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Receiving Warehouse Id.
   * @nullable
   */
  declare defaultReceivingWarehouseId?: DeserializedType<
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
   * Total Net Volume.
   */
  declare totalNetVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Net Weight.
   */
  declare totalNetWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Terms Id.
   * @nullable
   */
  declare deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Number Sequence Group Id.
   * @nullable
   */
  declare numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orderer Personnel Number.
   * @nullable
   */
  declare ordererPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Name.
   * @nullable
   */
  declare purchaseOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Round Off Amount.
   */
  declare totalRoundOffAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Default Receiving Site Id.
   * @nullable
   */
  declare defaultReceivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Sales List Code.
   * @nullable
   */
  declare euSalesListCode?: Listcode | null;
  /**
   * Purchase Order Status.
   * @nullable
   */
  declare purchaseOrderStatus?: PurchStatus | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Prepayment Amount.
   */
  declare prepaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Method Name.
   * @nullable
   */
  declare vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Approval Status.
   * @nullable
   */
  declare documentApprovalStatus?: VersioningDocumentState | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Vendor Group Code.
   * @nullable
   */
  declare multilineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Total Confirmed Amount.
   */
  declare totalConfirmedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Due Date.
   */
  declare fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Charge Amount.
   */
  declare totalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is One Time Vendor.
   * @nullable
   */
  declare isOneTimeVendor?: NoYes | null;
  /**
   * Confirming Purchase Order Code.
   * @nullable
   */
  declare confirmingPurchaseOrderCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cash Discount Percentage.
   */
  declare cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Transaction Settlement Type.
   * @nullable
   */
  declare vendorTransactionSettlementType?: SettlementType | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Order Pool Id.
   * @nullable
   */
  declare purchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attention Information.
   * @nullable
   */
  declare attentionInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Header Creation Method.
   * @nullable
   */
  declare purchaseOrderHeaderCreationMethod?: PurchPurchaseOrderCreationMethod | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Vendor Group Code.
   * @nullable
   */
  declare totalDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sub Total Amount.
   */
  declare subTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Posting Profile Id.
   * @nullable
   */
  declare vendorPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Id.
   * @nullable
   */
  declare deliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Vendor Group Code.
   * @nullable
   */
  declare lineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Total Quantity.
   */
  declare totalQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Invoice Declaration Id.
   * @nullable
   */
  declare vendorInvoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Vendor Group Id.
   * @nullable
   */
  declare chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Statistics Procedure Code.
   * @nullable
   */
  declare intrastatStatisticsProcedureCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Prepayment.
   * @nullable
   */
  declare isPrepayment?: NoYes | null;
  /**
   * Price Vendor Group Code.
   * @nullable
   */
  declare priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Address.
   * @nullable
   */
  declare emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City In Kana.
   * @nullable
   */
  declare deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Order Vendor Account Number.
   * @nullable
   */
  declare orderVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street In Kana.
   * @nullable
   */
  declare deliveryAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Order Reference.
   * @nullable
   */
  declare vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requester Personnel Number.
   * @nullable
   */
  declare requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accounting Distribution Template Name.
   * @nullable
   */
  declare accountingDistributionTemplateName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Line Discount Amount.
   */
  declare totalLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Buyer Group Id.
   * @nullable
   */
  declare buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link PurchaseOrderConfirmationLines} entity.
   */
  declare purchaseOrderConfirmationLines: PurchaseOrderConfirmationLines<T>[];
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare orderVendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;

  constructor(_entityApi: PurchaseOrderConfirmationHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderConfirmationHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  confirmationNumber: DeserializedType<T, 'Edm.String'>;
  confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedSecondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  bankDocumentType?: BankDocumentType | null;
  vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  confirmationVoucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  confirmingPurchaseOrderCodeLanguageId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  defaultReceivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  totalNetVolume: DeserializedType<T, 'Edm.Decimal'>;
  totalNetWeight: DeserializedType<T, 'Edm.Decimal'>;
  deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  ordererPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderName?: DeserializedType<T, 'Edm.String'> | null;
  totalRoundOffAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  defaultReceivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  euSalesListCode?: Listcode | null;
  purchaseOrderStatus?: PurchStatus | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  prepaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  documentApprovalStatus?: VersioningDocumentState | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  totalConfirmedAmount: DeserializedType<T, 'Edm.Decimal'>;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  totalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  transportationDocumentLineId: DeserializedType<T, 'Edm.Guid'>;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeVendor?: NoYes | null;
  confirmingPurchaseOrderCode?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  vendorTransactionSettlementType?: SettlementType | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  attentionInformation?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderHeaderCreationMethod?: PurchPurchaseOrderCreationMethod | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  subTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  vendorPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  arePricesIncludingSalesTax?: NoYes | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  totalQuantity: DeserializedType<T, 'Edm.Decimal'>;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  vendorInvoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  intrastatStatisticsProcedureCode?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  isPrepayment?: NoYes | null;
  priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  orderVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  totalLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseOrderConfirmationLines: PurchaseOrderConfirmationLinesType<T>[];
  orderVendor?: VendorsV2Type<T> | null;
  project?: ProjectsType<T> | null;
}
