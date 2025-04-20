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
import type { VendorsV3Api } from './VendorsV3Api';
import { VendVendorCollaborationType } from './VendVendorCollaborationType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { NoYes } from './NoYes';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { TaxIdType } from './TaxIdType';
import { InvestorType } from './InvestorType';
import { TaxWithholdVendorTypeTh } from './TaxWithholdVendorTypeTh';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
import { CustVendorBlocked } from './CustVendorBlocked';
import { RetailSalesPriceRoundingBase } from './RetailSalesPriceRoundingBase';
import { Timezone } from './Timezone';
import { MonthsOfYear } from './MonthsOfYear';
import { VendorTypeMx } from './VendorTypeMx';
import { VendCisStatus } from './VendCisStatus';
import { UseCashDisc } from './UseCashDisc';
import { Abc } from './Abc';
import { Gender } from './Gender';
import { Tax1099Type } from './Tax1099Type';
import { PanStatusIn } from './PanStatusIn';
import { VatPartnerKindRu } from './VatPartnerKindRu';
import { Tax1099NameChoice } from './Tax1099NameChoice';
import { CompanyTypeMx } from './CompanyTypeMx';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { RetailRoundingTypeBase } from './RetailRoundingTypeBase';
import { RetailVendTypeBase } from './RetailVendTypeBase';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "VendorsV3" of service "d365_metadata".
 */
export class VendorsV3<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorsV3Type<T>
{
  /**
   * Technical entity name for VendorsV3.
   */
  static override _entityName = 'VendorsV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorsV3 entity.
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
   * Address Brazilian Cnpj Or Cpf.
   * @nullable
   */
  declare addressBrazilianCnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Portal Collaboration Method.
   * @nullable
   */
  declare vendorPortalCollaborationMethod?: VendVendorCollaborationType | null;
  /**
   * Barcode Number Sequence.
   * @nullable
   */
  declare barcodeNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Price Tolerance Group Id.
   * @nullable
   */
  declare vendorPriceToleranceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Size Id Prefix.
   * @nullable
   */
  declare sizeIdPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Style Id Prefix.
   * @nullable
   */
  declare styleIdPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Offset Account Type.
   * @nullable
   */
  declare defaultOffsetAccountType?: LedgerJournalAcType | null;
  /**
   * Birth County Code.
   * @nullable
   */
  declare birthCountyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Fax Number Purpose.
   * @nullable
   */
  declare primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Segment Code.
   * @nullable
   */
  declare businessSegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ssi Validity Date.
   */
  declare ssiValidityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Party Number.
   * @nullable
   */
  declare vendorPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Delivery Mode Id.
   * @nullable
   */
  declare defaultDeliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duns Number.
   * @nullable
   */
  declare dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Invoice Declaration Id.
   * @nullable
   */
  declare vendorInvoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Owner Disabled.
   * @nullable
   */
  declare isOwnerDisabled?: NoYes | null;
  /**
   * Vendor Duns Number.
   * @nullable
   */
  declare vendorDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Vendor Locally Owned.
   * @nullable
   */
  declare isVendorLocallyOwned?: NoYes | null;
  /**
   * Address Post Box.
   * @nullable
   */
  declare addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Professional Title.
   * @nullable
   */
  declare personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth Year.
   */
  declare personBirthYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Service Delivery Address Based.
   * @nullable
   */
  declare isServiceDeliveryAddressBased?: NoYes | null;
  /**
   * Vendor Group Id.
   * @nullable
   */
  declare vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Operation Presence Type.
   * @nullable
   */
  declare fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  /**
   * Address Building Compliment.
   * @nullable
   */
  declare addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Transaction Code.
   * @nullable
   */
  declare paymentTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Product Hierarchy Id.
   */
  declare vendorProductHierarchyId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Zakat Service Type.
   * @nullable
   */
  declare zakatServiceType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Record Id.
   */
  declare primaryContactFaxRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Offset Ledger Account Display Value.
   * @nullable
   */
  declare defaultOffsetLedgerAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Primary Phone Number Mobile.
   * @nullable
   */
  declare isPrimaryPhoneNumberMobile?: NoYes | null;
  /**
   * Tcs Group.
   * @nullable
   */
  declare tcsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Of Business Id.
   * @nullable
   */
  declare lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gta Vendor.
   * @nullable
   */
  declare gtaVendor?: NoYes | null;
  /**
   * Organization Phonetic Name.
   * @nullable
   */
  declare organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Organization Name.
   * @nullable
   */
  declare vendorOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Twitter.
   * @nullable
   */
  declare primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address.
   * @nullable
   */
  declare primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County Id.
   * @nullable
   */
  declare addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number.
   * @nullable
   */
  declare primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Gst Composition Scheme Enabled.
   * @nullable
   */
  declare isGstCompositionSchemeEnabled?: NoYes | null;
  /**
   * Tax 1099 Id Type.
   * @nullable
   */
  declare tax1099IdType?: TaxIdType | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ethnic Origin Id.
   * @nullable
   */
  declare ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Place.
   * @nullable
   */
  declare birthPlace?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Purchase Consumed.
   * @nullable
   */
  declare isPurchaseConsumed?: NoYes | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Initials.
   * @nullable
   */
  declare personInitials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Consolidation Day Of Month.
   */
  declare purchaseOrderConsolidationDayOfMonth: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Central Bank Purpose Code.
   * @nullable
   */
  declare centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url Purpose.
   * @nullable
   */
  declare primaryUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Oid Investor Type.
   * @nullable
   */
  declare oidInvestorType?: InvestorType | null;
  /**
   * Foreigner Id.
   * @nullable
   */
  declare foreignerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Supplementary Product Vendor Group Id.
   * @nullable
   */
  declare defaultSupplementaryProductVendorGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Change Management Activated.
   * @nullable
   */
  declare isChangeManagementActivated?: NoYes | null;
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
   * Primary Phone Number Purpose.
   * @nullable
   */
  declare primaryPhoneNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Vendor Type.
   * @nullable
   */
  declare withholdingTaxVendorType?: TaxWithholdVendorTypeTh | null;
  /**
   * Cis Unique Tax Payer Reference.
   * @nullable
   */
  declare cisUniqueTaxPayerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Fax Number.
   * @nullable
   */
  declare primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Purchase Site Id.
   * @nullable
   */
  declare defaultPurchaseSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Marital Status.
   * @nullable
   */
  declare personMaritalStatus?: DirPersonMaritalStatus | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Financial Interest Code.
   * @nullable
   */
  declare vendorPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ssi Vendor.
   * @nullable
   */
  declare ssiVendor?: NoYes | null;
  /**
   * Vendor Invoice Line Matching Policy.
   * @nullable
   */
  declare vendorInvoiceLineMatchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  /**
   * Bank Order Of Payment.
   * @nullable
   */
  declare bankOrderOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cis Company Registration Number.
   * @nullable
   */
  declare cisCompanyRegistrationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Income Code.
   * @nullable
   */
  declare fiscalDocumentIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Change Mangement Override By Vendor Allowed.
   * @nullable
   */
  declare isChangeMangementOverrideByVendorAllowed?: NoYes | null;
  /**
   * Default Payment Day Name.
   * @nullable
   */
  declare defaultPaymentDayName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Children Names.
   * @nullable
   */
  declare personChildrenNames?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Resident.
   * @nullable
   */
  declare foreignResident?: NoYes | null;
  /**
   * Diot Country Code.
   * @nullable
   */
  declare diotCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Professional Suffix.
   * @nullable
   */
  declare personProfessionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Hold Status.
   * @nullable
   */
  declare onHoldStatus?: CustVendorBlocked | null;
  /**
   * Is One Time Vendor.
   * @nullable
   */
  declare isOneTimeVendor?: NoYes | null;
  /**
   * Commercial Register Name.
   * @nullable
   */
  declare commercialRegisterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Employee Amount.
   */
  declare organizationEmployeeAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Telex Description.
   * @nullable
   */
  declare primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Work Calendar Id.
   * @nullable
   */
  declare purchaseWorkCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Linked In Purpose.
   * @nullable
   */
  declare primaryLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Code.
   * @nullable
   */
  declare destinationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Method.
   * @nullable
   */
  declare roundingMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brazilian Nit.
   * @nullable
   */
  declare brazilianNit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Receipts List Processing Summary Update Purchase Order.
   * @nullable
   */
  declare willReceiptsListProcessingSummaryUpdatePurchaseOrder?: NoYes | null;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Zakat Registration Number.
   * @nullable
   */
  declare zakatRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Box Id.
   * @nullable
   */
  declare tax1099BoxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number Extension.
   * @nullable
   */
  declare primaryPhoneNumberExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Person Anniversary Year.
   */
  declare personAnniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Primary Linked In Description.
   * @nullable
   */
  declare primaryLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Rounding.
   * @nullable
   */
  declare salesPriceRounding?: RetailSalesPriceRoundingBase | null;
  /**
   * Will Invoice Processing Summary Update Purchase Order.
   * @nullable
   */
  declare willInvoiceProcessingSummaryUpdatePurchaseOrder?: NoYes | null;
  /**
   * Default Inventory Status Id.
   * @nullable
   */
  declare defaultInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Reporting Tax 1099.
   * @nullable
   */
  declare isReportingTax1099?: NoYes | null;
  /**
   * Rfc Federal Tax Number.
   * @nullable
   */
  declare rfcFederalTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Nationality.
   * @nullable
   */
  declare nationality?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commercial Register Section.
   * @nullable
   */
  declare commercialRegisterSection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street In Kana.
   * @nullable
   */
  declare addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Record Id.
   */
  declare primaryContactPhoneRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pan Reference Number.
   * @nullable
   */
  declare panReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Operation Code.
   * @nullable
   */
  declare taxOperationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Profile.
   * @nullable
   */
  declare inventoryProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group Id.
   * @nullable
   */
  declare numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brazilian Cnpj Or Cpf.
   * @nullable
   */
  declare brazilianCnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pan Number.
   * @nullable
   */
  declare panNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Doing Business As Name.
   * @nullable
   */
  declare tax1099DoingBusinessAsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Service Veteran Owned.
   * @nullable
   */
  declare isServiceVeteranOwned?: NoYes | null;
  /**
   * Person First Name.
   * @nullable
   */
  declare personFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brazilian Ccm.
   * @nullable
   */
  declare brazilianCcm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tds Group.
   * @nullable
   */
  declare tdsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url Description.
   * @nullable
   */
  declare primaryUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zakat File Number.
   * @nullable
   */
  declare zakatFileNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is National Registry Number.
   * @nullable
   */
  declare isNationalRegistryNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Anniversary Day.
   */
  declare personAnniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Withholding Tax Calculated.
   * @nullable
   */
  declare isWithholdingTaxCalculated?: NoYes | null;
  /**
   * Default Vendor Payment Method Name.
   * @nullable
   */
  declare defaultVendorPaymentMethodName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Person Id.
   * @nullable
   */
  declare primaryContactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Record Id.
   */
  declare addressRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Composition Scheme.
   * @nullable
   */
  declare compositionScheme?: NoYes | null;
  /**
   * Person Birth Month.
   * @nullable
   */
  declare personBirthMonth?: MonthsOfYear | null;
  /**
   * Address Books.
   * @nullable
   */
  declare addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique Population Registry Code.
   * @nullable
   */
  declare uniquePopulationRegistryCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Minority Owned.
   * @nullable
   */
  declare isMinorityOwned?: NoYes | null;
  /**
   * Multiline Discount Vendor Group Code.
   * @nullable
   */
  declare multilineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Fax Number Extension.
   * @nullable
   */
  declare primaryFaxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Oid Nominee Details.
   * @nullable
   */
  declare oidNomineeDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Diot Vendor Type.
   * @nullable
   */
  declare diotVendorType?: VendorTypeMx | null;
  /**
   * Primary Twitter Description.
   * @nullable
   */
  declare primaryTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factoring Vendor Account Number.
   * @nullable
   */
  declare factoringVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cis Verification Date.
   */
  declare cisVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cusip Identification Number.
   * @nullable
   */
  declare cusipIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Structure Department.
   * @nullable
   */
  declare structureDepartment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Clearing Period Payment Terms Id.
   * @nullable
   */
  declare clearingPeriodPaymentTermsId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Person Birth Day.
   */
  declare personBirthDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Category.
   * @nullable
   */
  declare serviceCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Buyer Group Id.
   * @nullable
   */
  declare buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Code.
   * @nullable
   */
  declare fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number Description.
   * @nullable
   */
  declare primaryPhoneNumberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Brazilian Ie.
   * @nullable
   */
  declare brazilianIe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Record Id.
   */
  declare primaryContactEmailRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Foreign Vendor Tax Registration Id.
   * @nullable
   */
  declare foreignVendorTaxRegistrationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Brazilian Ie.
   * @nullable
   */
  declare addressBrazilianIe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Anniversary Month.
   * @nullable
   */
  declare personAnniversaryMonth?: MonthsOfYear | null;
  /**
   * Primary Facebook Description.
   * @nullable
   */
  declare primaryFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Point Group Id.
   * @nullable
   */
  declare pricePointGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Id.
   * @nullable
   */
  declare paymentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Number.
   * @nullable
   */
  declare organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cis Status.
   * @nullable
   */
  declare cisStatus?: VendCisStatus | null;
  /**
   * Product Description Vendor Group Id.
   * @nullable
   */
  declare productDescriptionVendorGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Purchase Order Include Prices And Amounts.
   * @nullable
   */
  declare willPurchaseOrderIncludePricesAndAmounts?: NoYes | null;
  /**
   * Default Cash Discount Usage.
   * @nullable
   */
  declare defaultCashDiscountUsage?: UseCashDisc | null;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Agent.
   * @nullable
   */
  declare taxAgent?: NoYes | null;
  /**
   * State Inscription.
   * @nullable
   */
  declare stateInscription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Last Name Prefix.
   * @nullable
   */
  declare personLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Fax Number Description.
   * @nullable
   */
  declare primaryFaxNumberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Payment Schedule Name.
   * @nullable
   */
  declare defaultPaymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Phonetic Middle Name.
   * @nullable
   */
  declare personPhoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * National Registry Number Id.
   * @nullable
   */
  declare nationalRegistryNumberId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Facebook Purpose.
   * @nullable
   */
  declare primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Vendor Group Code.
   * @nullable
   */
  declare lineDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Organization Abc Code.
   * @nullable
   */
  declare organizationAbcCode?: Abc | null;
  /**
   * Brazilian Cnae.
   * @nullable
   */
  declare brazilianCnae?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Group Code.
   * @nullable
   */
  declare withholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Naf Code.
   * @nullable
   */
  declare nafCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Location Roles.
   * @nullable
   */
  declare addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Linked In.
   * @nullable
   */
  declare primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Rebate Vendor Group Id.
   * @nullable
   */
  declare purchaseRebateVendorGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Siret Number.
   * @nullable
   */
  declare siretNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Exception Group Id.
   * @nullable
   */
  declare vendorExceptionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Purchase Order Processing Summary Update Purchase Order.
   * @nullable
   */
  declare willPurchaseOrderProcessingSummaryUpdatePurchaseOrder?: NoYes | null;
  /**
   * Is W 9 Checking Enabled.
   * @nullable
   */
  declare isW9CheckingEnabled?: NoYes | null;
  /**
   * Credit Rating.
   * @nullable
   */
  declare creditRating?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Fine Code.
   * @nullable
   */
  declare vendorPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is W 9 Received.
   * @nullable
   */
  declare isW9Received?: NoYes | null;
  /**
   * Charge Vendor Group Id.
   * @nullable
   */
  declare chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Vendor Paying Bank Payment Fee.
   * @nullable
   */
  declare isVendorPayingBankPaymentFee?: NoYes | null;
  /**
   * Primary Facebook.
   * @nullable
   */
  declare primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Incoming Fiscal Document Generated.
   * @nullable
   */
  declare isIncomingFiscalDocumentGenerated?: NoYes | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Our Account Number.
   * @nullable
   */
  declare ourAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Hold Release Date.
   */
  declare vendorHoldReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Twitter Purpose.
   * @nullable
   */
  declare primaryTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Federal Tax Id.
   * @nullable
   */
  declare tax1099FederalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url.
   * @nullable
   */
  declare primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Email Address Purpose.
   * @nullable
   */
  declare primaryEmailAddressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Fee Group Id.
   * @nullable
   */
  declare paymentFeeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State Id.
   * @nullable
   */
  declare addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Gender.
   * @nullable
   */
  declare personGender?: Gender | null;
  /**
   * Primary Email Address Description.
   * @nullable
   */
  declare primaryEmailAddressDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Purchase Order Change Request Override Allowed.
   * @nullable
   */
  declare isPurchaseOrderChangeRequestOverrideAllowed?: NoYes | null;
  /**
   * Default Delivery Terms Code.
   * @nullable
   */
  declare defaultDeliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Telex.
   * @nullable
   */
  declare primaryTelex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Vendor Group Id.
   * @nullable
   */
  declare priceVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cis National Insurance Number.
   * @nullable
   */
  declare cisNationalInsuranceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Procument Warehouse Id.
   * @nullable
   */
  declare defaultProcumentWarehouseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Formatted Primary Address.
   * @nullable
   */
  declare formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Payment Terms Name.
   * @nullable
   */
  declare defaultPaymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Color Id Prefix.
   * @nullable
   */
  declare colorIdPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cusip Details.
   * @nullable
   */
  declare cusipDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url Record Id.
   */
  declare primaryContactUrlRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Enterprise Number.
   * @nullable
   */
  declare enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Icms Contributor.
   * @nullable
   */
  declare isIcmsContributor?: NoYes | null;
  /**
   * Person Personal Suffix.
   * @nullable
   */
  declare personPersonalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City In Kana.
   * @nullable
   */
  declare addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Limit.
   */
  declare creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Foreign Entity.
   * @nullable
   */
  declare isForeignEntity?: NoYes | null;
  /**
   * Tax 1099 Type.
   * @nullable
   */
  declare tax1099Type?: Tax1099Type | null;
  /**
   * Pan Status.
   * @nullable
   */
  declare panStatus?: PanStatusIn | null;
  /**
   * Separate Division Id.
   * @nullable
   */
  declare separateDivisionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Control.
   * @nullable
   */
  declare nameControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Partner Kind.
   * @nullable
   */
  declare taxPartnerKind?: VatPartnerKindRu | null;
  /**
   * Central Bank Purpose Text.
   * @nullable
   */
  declare centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Subsegment Code.
   * @nullable
   */
  declare businessSubsegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Small Business.
   * @nullable
   */
  declare isSmallBusiness?: NoYes | null;
  /**
   * Vendor Known As Name.
   * @nullable
   */
  declare vendorKnownAsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Last Name.
   * @nullable
   */
  declare personLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exchange Rate.
   * @nullable
   */
  declare fixedExchangeRate?: NoYes | null;
  /**
   * Is Cusip Identification Number Applicable.
   * @nullable
   */
  declare isCusipIdentificationNumberApplicable?: NoYes | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Account Id.
   * @nullable
   */
  declare bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Residence Foreign Country Region Id.
   * @nullable
   */
  declare residenceForeignCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Telex Purpose.
   * @nullable
   */
  declare primaryTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Hobbies.
   * @nullable
   */
  declare personHobbies?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Name To Use.
   * @nullable
   */
  declare tax1099NameToUse?: Tax1099NameChoice | null;
  /**
   * Main Contact Personnel Number.
   * @nullable
   */
  declare mainContactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company Type.
   * @nullable
   */
  declare companyType?: CompanyTypeMx | null;
  /**
   * Commercial Register Inset Number.
   * @nullable
   */
  declare commercialRegisterInsetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Person Personal Title.
   * @nullable
   */
  declare personPersonalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Party Type.
   * @nullable
   */
  declare vendorPartyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Diot Operation Type.
   * @nullable
   */
  declare diotOperationType?: VendorOperationTypeMx | null;
  /**
   * Create Barcode If Needed.
   * @nullable
   */
  declare createBarcodeIfNeeded?: NoYes | null;
  /**
   * Price Point Rounding Type.
   * @nullable
   */
  declare pricePointRoundingType?: RetailRoundingTypeBase | null;
  /**
   * Is Primary Email Address Im Enabled.
   * @nullable
   */
  declare isPrimaryEmailAddressImEnabled?: NoYes | null;
  /**
   * Is Vendor Located In Hub Zone.
   * @nullable
   */
  declare isVendorLocatedInHubZone?: NoYes | null;
  /**
   * Is Flagged With Second Tin.
   * @nullable
   */
  declare isFlaggedWithSecondTin?: NoYes | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Specification Id.
   * @nullable
   */
  declare paymentSpecificationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Vendor.
   * @nullable
   */
  declare foreignVendor?: NoYes | null;
  /**
   * Vendor Type.
   * @nullable
   */
  declare vendorType?: RetailVendTypeBase | null;
  /**
   * Person Phonetic First Name.
   * @nullable
   */
  declare personPhoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Woman Owner.
   * @nullable
   */
  declare isWomanOwner?: NoYes | null;
  /**
   * Has Only Taken Bids.
   * @nullable
   */
  declare hasOnlyTakenBids?: NoYes | null;
  /**
   * Default Purchase Order Pool Id.
   * @nullable
   */
  declare defaultPurchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferential Vendor.
   * @nullable
   */
  declare preferentialVendor?: NoYes | null;
  /**
   * Default Total Discount Vendor Group Code.
   * @nullable
   */
  declare defaultTotalDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Brazilian Insscei.
   * @nullable
   */
  declare brazilianInsscei?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cis Verification Number.
   * @nullable
   */
  declare cisVerificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Profile Type.
   * @nullable
   */
  declare inventoryProfileType?: InventProfileTypeRu | null;
  /**
   * Nature Of Assessee.
   * @nullable
   */
  declare natureOfAssessee?: NatureOfAssesseeIn | null;
  /**
   * Ups Freight Zone.
   * @nullable
   */
  declare upsFreightZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Middle Name.
   * @nullable
   */
  declare personMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Product Receipt Processing Summary Update Purchase Order.
   * @nullable
   */
  declare willProductReceiptProcessingSummaryUpdatePurchaseOrder?: NoYes | null;
  /**
   * Person Phonetic Last Name.
   * @nullable
   */
  declare personPhoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Vendor Account Number.
   * @nullable
   */
  declare invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Subcontractor.
   * @nullable
   */
  declare isSubcontractor?: NoYes | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Public Sector It.
   * @nullable
   */
  declare isPublicSectorIt?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: VendorsV3Api<T>) {
    super(_entityApi);
  }
}

export interface VendorsV3Type<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  addressBrazilianCnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;
  vendorPortalCollaborationMethod?: VendVendorCollaborationType | null;
  barcodeNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  vendorPriceToleranceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sizeIdPrefix?: DeserializedType<T, 'Edm.String'> | null;
  styleIdPrefix?: DeserializedType<T, 'Edm.String'> | null;
  defaultOffsetAccountType?: LedgerJournalAcType | null;
  birthCountyCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  businessSegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  ssiValidityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultDeliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorInvoiceDeclarationId?: DeserializedType<T, 'Edm.String'> | null;
  isOwnerDisabled?: NoYes | null;
  vendorDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  isVendorLocallyOwned?: NoYes | null;
  addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  personBirthYear: DeserializedType<T, 'Edm.Int32'>;
  isServiceDeliveryAddressBased?: NoYes | null;
  vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  paymentTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorProductHierarchyId: DeserializedType<T, 'Edm.Int64'>;
  zakatServiceType?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxRecordId: DeserializedType<T, 'Edm.Int64'>;
  defaultOffsetLedgerAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isPrimaryPhoneNumberMobile?: NoYes | null;
  tcsGroup?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  gtaVendor?: NoYes | null;
  organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  vendorOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  primaryTwitter?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  isGstCompositionSchemeEnabled?: NoYes | null;
  tax1099IdType?: TaxIdType | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  birthPlace?: DeserializedType<T, 'Edm.String'> | null;
  isPurchaseConsumed?: NoYes | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  personInitials?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderConsolidationDayOfMonth: DeserializedType<T, 'Edm.Int32'>;
  centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  oidInvestorType?: InvestorType | null;
  foreignerId?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  defaultSupplementaryProductVendorGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isChangeManagementActivated?: NoYes | null;
  vendorSearchName?: DeserializedType<T, 'Edm.String'> | null;
  companyChainName?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberPurpose?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxVendorType?: TaxWithholdVendorTypeTh | null;
  cisUniqueTaxPayerReference?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultPurchaseSiteId?: DeserializedType<T, 'Edm.String'> | null;
  personMaritalStatus?: DirPersonMaritalStatus | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentFinancialInterestCode?: DeserializedType<T, 'Edm.String'> | null;
  ssiVendor?: NoYes | null;
  vendorInvoiceLineMatchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  bankOrderOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  cisCompanyRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  isChangeMangementOverrideByVendorAllowed?: NoYes | null;
  defaultPaymentDayName?: DeserializedType<T, 'Edm.String'> | null;
  personChildrenNames?: DeserializedType<T, 'Edm.String'> | null;
  foreignResident?: NoYes | null;
  diotCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  personProfessionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  onHoldStatus?: CustVendorBlocked | null;
  isOneTimeVendor?: NoYes | null;
  commercialRegisterName?: DeserializedType<T, 'Edm.String'> | null;
  organizationEmployeeAmount: DeserializedType<T, 'Edm.Int32'>;
  primaryTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  purchaseWorkCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  destinationCode?: DeserializedType<T, 'Edm.String'> | null;
  roundingMethod?: DeserializedType<T, 'Edm.String'> | null;
  brazilianNit?: DeserializedType<T, 'Edm.String'> | null;
  willReceiptsListProcessingSummaryUpdatePurchaseOrder?: NoYes | null;
  arePricesIncludingSalesTax?: NoYes | null;
  zakatRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  tax1099BoxId?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  primaryLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceRounding?: RetailSalesPriceRoundingBase | null;
  willInvoiceProcessingSummaryUpdatePurchaseOrder?: NoYes | null;
  defaultInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  isReportingTax1099?: NoYes | null;
  rfcFederalTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  nationality?: DeserializedType<T, 'Edm.String'> | null;
  commercialRegisterSection?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneRecordId: DeserializedType<T, 'Edm.Int64'>;
  panReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxOperationCode?: DeserializedType<T, 'Edm.String'> | null;
  inventoryProfile?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  brazilianCnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;
  panNumber?: DeserializedType<T, 'Edm.String'> | null;
  tax1099DoingBusinessAsName?: DeserializedType<T, 'Edm.String'> | null;
  isServiceVeteranOwned?: NoYes | null;
  personFirstName?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  brazilianCcm?: DeserializedType<T, 'Edm.String'> | null;
  tdsGroup?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  zakatFileNumber?: DeserializedType<T, 'Edm.String'> | null;
  isNationalRegistryNumber?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  isWithholdingTaxCalculated?: NoYes | null;
  defaultVendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  addressRecordId: DeserializedType<T, 'Edm.Int64'>;
  compositionScheme?: NoYes | null;
  personBirthMonth?: MonthsOfYear | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  uniquePopulationRegistryCode?: DeserializedType<T, 'Edm.String'> | null;
  isMinorityOwned?: NoYes | null;
  multilineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  oidNomineeDetails?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  diotVendorType?: VendorTypeMx | null;
  primaryTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  factoringVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  cisVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cusipIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  structureDepartment?: DeserializedType<T, 'Edm.String'> | null;
  clearingPeriodPaymentTermsId?: DeserializedType<T, 'Edm.String'> | null;
  personBirthDay: DeserializedType<T, 'Edm.Int32'>;
  serviceCategory?: DeserializedType<T, 'Edm.String'> | null;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  brazilianIe?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailRecordId: DeserializedType<T, 'Edm.Int64'>;
  foreignVendorTaxRegistrationId?: DeserializedType<T, 'Edm.String'> | null;
  addressBrazilianIe?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryMonth?: MonthsOfYear | null;
  primaryFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  pricePointGroupId?: DeserializedType<T, 'Edm.String'> | null;
  paymentId?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  cisStatus?: VendCisStatus | null;
  productDescriptionVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  willPurchaseOrderIncludePricesAndAmounts?: NoYes | null;
  defaultCashDiscountUsage?: UseCashDisc | null;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  taxAgent?: NoYes | null;
  stateInscription?: DeserializedType<T, 'Edm.String'> | null;
  personLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  primaryFaxNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  defaultPaymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  personPhoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  nationalRegistryNumberId?: DeserializedType<T, 'Edm.String'> | null;
  primaryFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  organizationAbcCode?: Abc | null;
  brazilianCnae?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  nafCode?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  primaryLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  purchaseRebateVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  siretNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorExceptionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  willPurchaseOrderProcessingSummaryUpdatePurchaseOrder?: NoYes | null;
  isW9CheckingEnabled?: NoYes | null;
  creditRating?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  isW9Received?: NoYes | null;
  chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isVendorPayingBankPaymentFee?: NoYes | null;
  primaryFacebook?: DeserializedType<T, 'Edm.String'> | null;
  isIncomingFiscalDocumentGenerated?: NoYes | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  ourAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorHoldReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  tax1099FederalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryEmailAddressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  paymentFeeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  personGender?: Gender | null;
  primaryEmailAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  isPurchaseOrderChangeRequestOverrideAllowed?: NoYes | null;
  defaultDeliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelex?: DeserializedType<T, 'Edm.String'> | null;
  priceVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  cisNationalInsuranceNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultProcumentWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  defaultPaymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  colorIdPrefix?: DeserializedType<T, 'Edm.String'> | null;
  cusipDetails?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlRecordId: DeserializedType<T, 'Edm.Int64'>;
  enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  isIcmsContributor?: NoYes | null;
  personPersonalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  isForeignEntity?: NoYes | null;
  tax1099Type?: Tax1099Type | null;
  panStatus?: PanStatusIn | null;
  separateDivisionId?: DeserializedType<T, 'Edm.String'> | null;
  nameControl?: DeserializedType<T, 'Edm.String'> | null;
  taxPartnerKind?: VatPartnerKindRu | null;
  centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  businessSubsegmentCode?: DeserializedType<T, 'Edm.String'> | null;
  isSmallBusiness?: NoYes | null;
  vendorKnownAsName?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  personLastName?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate?: NoYes | null;
  isCusipIdentificationNumberApplicable?: NoYes | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  residenceForeignCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  primaryTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  personHobbies?: DeserializedType<T, 'Edm.String'> | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  tax1099NameToUse?: Tax1099NameChoice | null;
  mainContactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  companyType?: CompanyTypeMx | null;
  commercialRegisterInsetNumber?: DeserializedType<T, 'Edm.String'> | null;
  personPersonalTitle?: DeserializedType<T, 'Edm.String'> | null;
  vendorPartyType?: DeserializedType<T, 'Edm.String'> | null;
  diotOperationType?: VendorOperationTypeMx | null;
  createBarcodeIfNeeded?: NoYes | null;
  pricePointRoundingType?: RetailRoundingTypeBase | null;
  isPrimaryEmailAddressImEnabled?: NoYes | null;
  isVendorLocatedInHubZone?: NoYes | null;
  isFlaggedWithSecondTin?: NoYes | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  paymentSpecificationId?: DeserializedType<T, 'Edm.String'> | null;
  foreignVendor?: NoYes | null;
  vendorType?: RetailVendTypeBase | null;
  personPhoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  isWomanOwner?: NoYes | null;
  hasOnlyTakenBids?: NoYes | null;
  defaultPurchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  preferentialVendor?: NoYes | null;
  defaultTotalDiscountVendorGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  overrideSalesTax?: NoYes | null;
  brazilianInsscei?: DeserializedType<T, 'Edm.String'> | null;
  cisVerificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryProfileType?: InventProfileTypeRu | null;
  natureOfAssessee?: NatureOfAssesseeIn | null;
  upsFreightZone?: DeserializedType<T, 'Edm.String'> | null;
  personMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  willProductReceiptProcessingSummaryUpdatePurchaseOrder?: NoYes | null;
  personPhoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isSubcontractor?: NoYes | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isPublicSectorIt?: NoYes | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
