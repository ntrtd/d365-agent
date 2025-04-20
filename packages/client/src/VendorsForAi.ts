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
import type { VendorsForAiApi } from './VendorsForAiApi';
import { NoYes } from './NoYes';
import { CustVendorBlocked } from './CustVendorBlocked';
import {
  PurchaseAgreementHeadersForAi,
  PurchaseAgreementHeadersForAiType
} from './PurchaseAgreementHeadersForAi';
import {
  ProductApprovedVendorsForAi,
  ProductApprovedVendorsForAiType
} from './ProductApprovedVendorsForAi';
import { ContactsForAi, ContactsForAiType } from './ContactsForAi';
import {
  PostalAddressesForAi,
  PostalAddressesForAiType
} from './PostalAddressesForAi';
import {
  PurchaseOrderLinesForAi,
  PurchaseOrderLinesForAiType
} from './PurchaseOrderLinesForAi';

/**
 * This class represents the entity "VendorsForAI" of service "d365_metadata".
 */
export class VendorsForAi<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorsForAiType<T>
{
  /**
   * Technical entity name for VendorsForAi.
   */
  static override _entityName = 'VendorsForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorsForAi entity.
   */
  static _keys = ['dataAreaId', 'VendorAccountNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account Number.
   */
  declare vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Purchase Order Pool Id.
   * @nullable
   */
  declare defaultPurchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Vendor Account Number.
   * @nullable
   */
  declare invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Minority Owned.
   * @nullable
   */
  declare isMinorityOwned?: NoYes | null;
  /**
   * Credit Rating.
   * @nullable
   */
  declare creditRating?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address.
   * @nullable
   */
  declare primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Delivery Terms Code.
   * @nullable
   */
  declare defaultDeliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Vendor Group Id.
   * @nullable
   */
  declare priceVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Limit.
   */
  declare creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Clearing Period Payment Terms Id.
   * @nullable
   */
  declare clearingPeriodPaymentTermsId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Work Calendar Id.
   * @nullable
   */
  declare purchaseWorkCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Hold Release Date.
   */
  declare vendorHoldReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Search Name.
   * @nullable
   */
  declare vendorSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Chain Name.
   * @nullable
   */
  declare companyChainName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vendor Group Id.
   * @nullable
   */
  declare vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Small Business.
   * @nullable
   */
  declare isSmallBusiness?: NoYes | null;
  /**
   * Primary Url.
   * @nullable
   */
  declare primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Hold Status.
   * @nullable
   */
  declare onHoldStatus?: CustVendorBlocked | null;
  /**
   * Business Subsegment Code.
   * @nullable
   */
  declare businessSubsegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Specification Id.
   * @nullable
   */
  declare paymentSpecificationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Payment Terms Name.
   * @nullable
   */
  declare defaultPaymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Vendor Payment Method Name.
   * @nullable
   */
  declare defaultVendorPaymentMethodName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ethnic Origin Id.
   * @nullable
   */
  declare ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Delivery Mode Id.
   * @nullable
   */
  declare defaultDeliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Fax Number.
   * @nullable
   */
  declare primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Line Discount Vendor Group Code.
   * @nullable
   */
  declare lineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Of Business Id.
   * @nullable
   */
  declare lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Payment Schedule Name.
   * @nullable
   */
  declare defaultPaymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Vendor Locally Owned.
   * @nullable
   */
  declare isVendorLocallyOwned?: NoYes | null;
  /**
   * Default Payment Day Name.
   * @nullable
   */
  declare defaultPaymentDayName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nationality.
   * @nullable
   */
  declare nationality?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Organization Name.
   * @nullable
   */
  declare vendorOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number.
   * @nullable
   */
  declare primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Known As Name.
   * @nullable
   */
  declare vendorKnownAsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Service Veteran Owned.
   * @nullable
   */
  declare isServiceVeteranOwned?: NoYes | null;
  /**
   * Charge Vendor Group Id.
   * @nullable
   */
  declare chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Woman Owner.
   * @nullable
   */
  declare isWomanOwner?: NoYes | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Owner Disabled.
   * @nullable
   */
  declare isOwnerDisabled?: NoYes | null;
  /**
   * Business Segment Code.
   * @nullable
   */
  declare businessSegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Total Discount Vendor Group Code.
   * @nullable
   */
  declare defaultTotalDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Buyer Group Id.
   * @nullable
   */
  declare buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementHeadersForAi} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreementHeadersForAi<T>[];
  /**
   * One-to-many navigation property to the {@link ProductApprovedVendorsForAi} entity.
   */
  declare approvedVendor: ProductApprovedVendorsForAi<T>[];
  /**
   * One-to-many navigation property to the {@link ContactsForAi} entity.
   */
  declare contacts: ContactsForAi<T>[];
  /**
   * One-to-many navigation property to the {@link PostalAddressesForAi} entity.
   */
  declare addresses: PostalAddressesForAi<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLinesForAi} entity.
   */
  declare purchaseOrderLines: PurchaseOrderLinesForAi<T>[];

  constructor(_entityApi: VendorsForAiApi<T>) {
    super(_entityApi);
  }
}

export interface VendorsForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  defaultPurchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isMinorityOwned?: NoYes | null;
  creditRating?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  defaultDeliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  priceVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  clearingPeriodPaymentTermsId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseWorkCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  vendorHoldReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorSearchName?: DeserializedType<T, 'Edm.String'> | null;
  companyChainName?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isSmallBusiness?: NoYes | null;
  primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  onHoldStatus?: CustVendorBlocked | null;
  businessSubsegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  paymentSpecificationId?: DeserializedType<T, 'Edm.String'> | null;
  defaultPaymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  defaultVendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDeliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  arePricesIncludingSalesTax?: NoYes | null;
  lineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  defaultPaymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  isVendorLocallyOwned?: NoYes | null;
  defaultPaymentDayName?: DeserializedType<T, 'Edm.String'> | null;
  nationality?: DeserializedType<T, 'Edm.String'> | null;
  vendorOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorKnownAsName?: DeserializedType<T, 'Edm.String'> | null;
  isServiceVeteranOwned?: NoYes | null;
  chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isWomanOwner?: NoYes | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  isOwnerDisabled?: NoYes | null;
  businessSegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultTotalDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementHeaders: PurchaseAgreementHeadersForAiType<T>[];
  approvedVendor: ProductApprovedVendorsForAiType<T>[];
  contacts: ContactsForAiType<T>[];
  addresses: PostalAddressesForAiType<T>[];
  purchaseOrderLines: PurchaseOrderLinesForAiType<T>[];
}
