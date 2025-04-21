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
import type { PurchaseOrderHeadersV2Api } from './PurchaseOrderHeadersV2Api';
import { NoYes } from './NoYes';
import { SettlementType } from './SettlementType';
import { PurchPurchaseOrderCreationMethod } from './PurchPurchaseOrderCreationMethod';
import { BankDocumentType } from './BankDocumentType';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { Listcode } from './Listcode';
import { PurchStatus } from './PurchStatus';
import { VersioningDocumentState } from './VersioningDocumentState';
import { Timezone } from './Timezone';
import {
  EmploymentContractors,
  EmploymentContractorsType
} from './EmploymentContractors';
import {
  CdsPurchaseOrderLines,
  CdsPurchaseOrderLinesType
} from './CdsPurchaseOrderLines';
import {
  PurchaseOrderLines,
  PurchaseOrderLinesType
} from './PurchaseOrderLines';
import {
  PurchaseOrderHeaderDocumentAttachments,
  PurchaseOrderHeaderDocumentAttachmentsType
} from './PurchaseOrderHeaderDocumentAttachments';
import {
  PurchaseOrderLinesV2,
  PurchaseOrderLinesV2Type
} from './PurchaseOrderLinesV2';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  PurchaseOrderHeaderCharges,
  PurchaseOrderHeaderChargesType
} from './PurchaseOrderHeaderCharges';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { PlannedOrders, PlannedOrdersType } from './PlannedOrders';

/**
 * This class represents the entity "PurchaseOrderHeadersV2" of service "d365_metadata".
 */
export class PurchaseOrderHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderHeadersV2Type<T>
{
  /**
   * Technical entity name for PurchaseOrderHeadersV2.
   */
  static override _entityName = 'PurchaseOrderHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderHeadersV2 entity.
   */
  static _keys = ['dataAreaId', 'PurchaseOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Operation Type Id.
   * @nullable
   */
  declare fiscalDocumentOperationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Expected Store Available Sales Date.
   */
  declare expectedStoreAvailableSalesDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Vendor Invoice Declaration Id.
   * @nullable
   */
  declare vendorInvoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Id.
   * @nullable
   */
  declare deliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Street.
   * @nullable
   */
  declare invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Vendor Account Number.
   * @nullable
   */
  declare orderVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Mode Id.
   * @nullable
   */
  declare transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Change Management Active.
   * @nullable
   */
  declare isChangeManagementActive?: NoYes | null;
  /**
   * Accounting Distribution Template Name.
   * @nullable
   */
  declare accountingDistributionTemplateName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Transaction Settlement Type.
   * @nullable
   */
  declare vendorTransactionSettlementType?: SettlementType | null;
  /**
   * Delivery City In Kana.
   * @nullable
   */
  declare deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street In Kana.
   * @nullable
   */
  declare deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group Id.
   * @nullable
   */
  declare numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Template Id.
   * @nullable
   */
  declare transportationTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cash Discount Percentage.
   */
  declare cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Order Name.
   * @nullable
   */
  declare purchaseOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Multiline Discount Vendor Group Code.
   * @nullable
   */
  declare multilineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Delivery Date.
   */
  declare confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Rebate Vendor Group Id.
   * @nullable
   */
  declare purchaseRebateVendorGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address County.
   * @nullable
   */
  declare invoiceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Vendor Group Id.
   * @nullable
   */
  declare chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requester Personnel Number.
   * @nullable
   */
  declare requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Price Vendor Group Code.
   * @nullable
   */
  declare priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Header Creation Method.
   * @nullable
   */
  declare purchaseOrderHeaderCreationMethod?: PurchPurchaseOrderCreationMethod | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Consolidated Invoice Target.
   * @nullable
   */
  declare isConsolidatedInvoiceTarget?: NoYes | null;
  /**
   * Confirming Purchase Order Code.
   * @nullable
   */
  declare confirmingPurchaseOrderCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Id.
   * @nullable
   */
  declare deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Document Type.
   * @nullable
   */
  declare bankDocumentType?: BankDocumentType | null;
  /**
   * Expected Store Receipt Date.
   */
  declare expectedStoreReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Replenishment Service Category Id.
   * @nullable
   */
  declare replenishmentServiceCategoryId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Order Pool Id.
   * @nullable
   */
  declare purchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Requested Ship Date.
   */
  declare requestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expected Cross Docking Date.
   */
  declare expectedCrossDockingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Formatted Invoice Address.
   * @nullable
   */
  declare formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Buyer Group Id.
   * @nullable
   */
  declare buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Confirming Purchase Order Code Language Id.
   * @nullable
   */
  declare confirmingPurchaseOrderCodeLanguageId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Type.
   * @nullable
   */
  declare invoiceType?: InvoiceTypeMy | null;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gst Self Billed Invoice Approval Number.
   * @nullable
   */
  declare gstSelfBilledInvoiceApprovalNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Delivered Directly.
   * @nullable
   */
  declare isDeliveredDirectly?: NoYes | null;
  /**
   * Confirmed Ship Date.
   */
  declare confirmedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Calendar Id.
   * @nullable
   */
  declare shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Statistics Procedure Code.
   * @nullable
   */
  declare intrastatStatisticsProcedureCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Vendor Account Number.
   * @nullable
   */
  declare invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vendor Order Reference.
   * @nullable
   */
  declare vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replenishment Warehouse Id.
   * @nullable
   */
  declare replenishmentWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vendor Posting Profile Id.
   * @nullable
   */
  declare vendorPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Method Specification Name.
   * @nullable
   */
  declare vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address City.
   * @nullable
   */
  declare invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default Receiving Warehouse Id.
   * @nullable
   */
  declare defaultReceivingWarehouseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Eu Sales List Code.
   * @nullable
   */
  declare euSalesListCode?: Listcode | null;
  /**
   * Import Declaration Number.
   * @nullable
   */
  declare importDeclarationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Status.
   * @nullable
   */
  declare purchaseOrderStatus?: PurchStatus | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Approval Status.
   * @nullable
   */
  declare documentApprovalStatus?: VersioningDocumentState | null;
  /**
   * Invoice Address Zip Code.
   * @nullable
   */
  declare invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Attention Information.
   * @nullable
   */
  declare attentionInformation?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is One Time Vendor.
   * @nullable
   */
  declare isOneTimeVendor?: NoYes | null;
  /**
   * Intrastat Port Id.
   * @nullable
   */
  declare intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orderer Personnel Number.
   * @nullable
   */
  declare ordererPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Method Name.
   * @nullable
   */
  declare vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address State.
   * @nullable
   */
  declare invoiceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Receiving Site Id.
   * @nullable
   */
  declare defaultReceivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Vendor Group Code.
   * @nullable
   */
  declare lineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transportation Route Plan Id.
   * @nullable
   */
  declare transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zakat Contract Number.
   * @nullable
   */
  declare zakatContractNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Vendor Group Code.
   * @nullable
   */
  declare totalDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Trade End Customer Account.
   * @nullable
   */
  declare tradeEndCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EmploymentContractors} entity.
   */
  declare employmentContractors: EmploymentContractors<T>[];
  /**
   * One-to-many navigation property to the {@link CdsPurchaseOrderLines} entity.
   */
  declare cdsPurchaseOrderLines: CdsPurchaseOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLines} entity.
   */
  declare purchaseOrderLines: PurchaseOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderHeaderDocumentAttachments} entity.
   */
  declare purchaseOrderHeaderDocumentAttachmentEntity: PurchaseOrderHeaderDocumentAttachments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLinesV2} entity.
   */
  declare purchaseOrderLinesV2: PurchaseOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderHeaderCharges} entity.
   */
  declare purchaseOrderHeaderCharges: PurchaseOrderHeaderCharges<T>[];
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link PlannedOrders} entity.
   */
  declare plannedOrders: PlannedOrders<T>[];

  constructor(_entityApi: PurchaseOrderHeadersV2Api<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentOperationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  expectedStoreAvailableSalesDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorInvoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  orderVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  isChangeManagementActive?: NoYes | null;
  accountingDistributionTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  vendorTransactionSettlementType?: SettlementType | null;
  deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  transportationTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderName?: DeserializedType<T, 'Edm.String'> | null;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  multilineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseRebateVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderHeaderCreationMethod?: PurchPurchaseOrderCreationMethod | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  isConsolidatedInvoiceTarget?: NoYes | null;
  confirmingPurchaseOrderCode?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  bankDocumentType?: BankDocumentType | null;
  expectedStoreReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentServiceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  requestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expectedCrossDockingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  confirmingPurchaseOrderCodeLanguageId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  invoiceType?: InvoiceTypeMy | null;
  arePricesIncludingSalesTax?: NoYes | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  gstSelfBilledInvoiceApprovalNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveredDirectly?: NoYes | null;
  confirmedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatStatisticsProcedureCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transportationDocumentLineId: DeserializedType<T, 'Edm.Guid'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  vendorPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  defaultReceivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  euSalesListCode?: Listcode | null;
  importDeclarationNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderStatus?: PurchStatus | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  documentApprovalStatus?: VersioningDocumentState | null;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  attentionInformation?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeVendor?: NoYes | null;
  intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  ordererPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  defaultReceivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  zakatContractNumber?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  tradeEndCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  employmentContractors: EmploymentContractorsType<T>[];
  cdsPurchaseOrderLines: CdsPurchaseOrderLinesType<T>[];
  purchaseOrderLines: PurchaseOrderLinesType<T>[];
  purchaseOrderHeaderDocumentAttachmentEntity: PurchaseOrderHeaderDocumentAttachmentsType<T>[];
  purchaseOrderLinesV2: PurchaseOrderLinesV2Type<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  purchaseOrderHeaderCharges: PurchaseOrderHeaderChargesType<T>[];
  vendorV2?: VendorsV2Type<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  plannedOrders: PlannedOrdersType<T>[];
}
