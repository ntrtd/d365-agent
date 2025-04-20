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
import type { CustomersV2Api } from './CustomersV2Api';
import { NoYes } from './NoYes';
import { InvoiceOrderAccount } from './InvoiceOrderAccount';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { Timezone } from './Timezone';
import { PaymentStub } from './PaymentStub';
import { CreditCardCvc } from './CreditCardCvc';
import { CustomerTypeIn } from './CustomerTypeIn';
import { DirPersonMaritalStatus } from './DirPersonMaritalStatus';
import { CustVendorBlocked } from './CustVendorBlocked';
import { WhsFulfillmentType } from './WhsFulfillmentType';
import { CustAccountStatement } from './CustAccountStatement';
import { FederalNonFederalIndicatorCode } from './FederalNonFederalIndicatorCode';
import { CreditCardAddressVerification } from './CreditCardAddressVerification';
import { RetailReceiptOptionBase } from './RetailReceiptOptionBase';
import { WhsCustFulfillmentErrorTolerance } from './WhsCustFulfillmentErrorTolerance';
import { MonthsOfYear } from './MonthsOfYear';
import { CustWhtContributionTypeBr } from './CustWhtContributionTypeBr';
import { Abc } from './Abc';
import { Gender } from './Gender';
import { CreditCardAddressVerificationLevel } from './CreditCardAddressVerificationLevel';
import { PanStatusIn } from './PanStatusIn';
import { CompanyTypeMx } from './CompanyTypeMx';
import { UseCashDisc } from './UseCashDisc';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "CustomersV2" of service "d365_metadata".
 */
export class CustomersV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomersV2Type<T>
{
  /**
   * Technical entity name for CustomersV2.
   */
  static override _entityName = 'CustomersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomersV2 entity.
   */
  static _keys = ['dataAreaId', 'CustomerAccount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Brazilian Cnpj Or Cpf.
   * @nullable
   */
  declare addressBrazilianCnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Extension.
   * @nullable
   */
  declare primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Fuel Surcharge Applied.
   * @nullable
   */
  declare isFuelSurchargeApplied?: NoYes | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Fine Code.
   * @nullable
   */
  declare customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth County Code.
   * @nullable
   */
  declare birthCountyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address.
   * @nullable
   */
  declare invoiceAddress?: InvoiceOrderAccount | null;
  /**
   * Packing Material Fee License Number.
   * @nullable
   */
  declare packingMaterialFeeLicenseNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transaction Presence Type.
   * @nullable
   */
  declare transactionPresenceType?: EfDocPresenceTypeBr | null;
  /**
   * Primary Contact Twitter.
   * @nullable
   */
  declare primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Is Im.
   * @nullable
   */
  declare primaryContactEmailIsIm?: NoYes | null;
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
   * Primary Contact Email.
   * @nullable
   */
  declare primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address County.
   * @nullable
   */
  declare deliveryAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Has Suframa Discount Pi Sand Cofins.
   * @nullable
   */
  declare hasSuframaDiscountPiSandCofins?: NoYes | null;
  /**
   * Invoice Address Street.
   * @nullable
   */
  declare invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Curp Number.
   * @nullable
   */
  declare curpNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Description.
   * @nullable
   */
  declare primaryContactLinkedInDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Customer Group Id.
   * @nullable
   */
  declare itemCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Professional Title.
   * @nullable
   */
  declare personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Segment Id.
   * @nullable
   */
  declare salesSegmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Service Delivery Address Based.
   * @nullable
   */
  declare isServiceDeliveryAddressBased?: NoYes | null;
  /**
   * Primary Contact Telex Description.
   * @nullable
   */
  declare primaryContactTelexDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address District Name.
   * @nullable
   */
  declare invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Time Zone.
   * @nullable
   */
  declare invoiceAddressTimeZone?: Timezone | null;
  /**
   * Sales Account Number.
   * @nullable
   */
  declare salesAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook Description.
   * @nullable
   */
  declare primaryContactFacebookDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Phone Is Mobile.
   * @nullable
   */
  declare primaryContactPhoneIsMobile?: NoYes | null;
  /**
   * Tcs Group.
   * @nullable
   */
  declare tcsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Auto Create Orders.
   * @nullable
   */
  declare interCompanyAutoCreateOrders?: NoYes | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Type Proj Invoice.
   * @nullable
   */
  declare giroTypeProjInvoice?: PaymentStub | null;
  /**
   * Line Of Business Id.
   * @nullable
   */
  declare lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Phonetic Name.
   * @nullable
   */
  declare organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Cvc.
   * @nullable
   */
  declare creditCardCvc?: CreditCardCvc | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Valid From.
   */
  declare deliveryAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Giro Type Account Statement.
   * @nullable
   */
  declare giroTypeAccountStatement?: PaymentStub | null;
  /**
   * Calculate Withholding Tax.
   * @nullable
   */
  declare calculateWithholdingTax?: NoYes | null;
  /**
   * Electronic Invoice Ean.
   * @nullable
   */
  declare electronicInvoiceEan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Freight Zone.
   * @nullable
   */
  declare deliveryFreightZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax.
   * @nullable
   */
  declare primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Birth Place.
   * @nullable
   */
  declare birthPlace?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default E Commerce Operator.
   * @nullable
   */
  declare defaultECommerceOperator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Bank Purpose Code.
   * @nullable
   */
  declare centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Primary Address.
   * @nullable
   */
  declare fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Type Collectionletter.
   * @nullable
   */
  declare giroTypeCollectionletter?: PaymentStub | null;
  /**
   * Order Entry Deadline.
   * @nullable
   */
  declare orderEntryDeadline?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreigner Id.
   * @nullable
   */
  declare foreignerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Is Asn Generated.
   * @nullable
   */
  declare warehouseIsAsnGenerated?: NoYes | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Type.
   * @nullable
   */
  declare customerType?: CustomerTypeIn | null;
  /**
   * Primary Contact Linked In.
   * @nullable
   */
  declare primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url.
   * @nullable
   */
  declare primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Freight Accrued.
   * @nullable
   */
  declare isFreightAccrued?: NoYes | null;
  /**
   * Party State.
   * @nullable
   */
  declare partyState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Fulfillment Rate.
   */
  declare warehouseFulfillmentRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Central Bank Purpose Notes.
   * @nullable
   */
  declare centralBankPurposeNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collections Contact Person Id.
   * @nullable
   */
  declare collectionsContactPersonId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Payment Schedule.
   * @nullable
   */
  declare paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter Purpose.
   * @nullable
   */
  declare primaryContactTwitterPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Giro Type.
   * @nullable
   */
  declare giroType?: PaymentStub | null;
  /**
   * Invoice Address Description.
   * @nullable
   */
  declare invoiceAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms.
   * @nullable
   */
  declare deliveryTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Children Names.
   * @nullable
   */
  declare personChildrenNames?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method.
   * @nullable
   */
  declare paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode.
   * @nullable
   */
  declare deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Warehouse Fulfillment Type.
   * @nullable
   */
  declare warehouseFulfillmentType?: WhsFulfillmentType | null;
  /**
   * Account Statement.
   * @nullable
   */
  declare accountStatement?: CustAccountStatement | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Code.
   * @nullable
   */
  declare destinationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Irs 1099 C Indicator.
   * @nullable
   */
  declare irs1099CIndicator?: NoYes | null;
  /**
   * French Siret.
   * @nullable
   */
  declare frenchSiret?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Day.
   * @nullable
   */
  declare paymentDay?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brazilian Nit.
   * @nullable
   */
  declare brazilianNit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Federal Indicator.
   * @nullable
   */
  declare federalIndicator?: FederalNonFederalIndicatorCode | null;
  /**
   * Employee Responsible Number.
   * @nullable
   */
  declare employeeResponsibleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Anniversary Year.
   */
  declare personAnniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Inventory Status Id.
   * @nullable
   */
  declare defaultInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Description.
   * @nullable
   */
  declare primaryContactEmailDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Primary Contact Phone.
   * @nullable
   */
  declare primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address County.
   * @nullable
   */
  declare invoiceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pan Reference Number.
   * @nullable
   */
  declare panReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Currency Code.
   * @nullable
   */
  declare salesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Sales Tax Included In Prices.
   * @nullable
   */
  declare isSalesTaxIncludedInPrices?: NoYes | null;
  /**
   * Brazilian Cnpj Or Cpf.
   * @nullable
   */
  declare brazilianCnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Factoring Account.
   * @nullable
   */
  declare paymentFactoringAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pan Number.
   * @nullable
   */
  declare panNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter Description.
   * @nullable
   */
  declare primaryContactTwitterDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Person First Name.
   * @nullable
   */
  declare personFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brazilian Ccm.
   * @nullable
   */
  declare brazilianCcm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Email.
   * @nullable
   */
  declare receiptEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tds Group.
   * @nullable
   */
  declare tdsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multi Line Discount Code.
   * @nullable
   */
  declare multiLineDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Anniversary Day.
   */
  declare personAnniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Supplementary Item Group Id.
   * @nullable
   */
  declare supplementaryItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Withholding Tax Calculated.
   * @nullable
   */
  declare isWithholdingTaxCalculated?: NoYes | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Books.
   * @nullable
   */
  declare addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Purpose.
   * @nullable
   */
  declare primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales District.
   * @nullable
   */
  declare salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consolidation Day.
   */
  declare consolidationDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Express Bill Of Lading Accepted.
   * @nullable
   */
  declare isExpressBillOfLadingAccepted?: NoYes | null;
  /**
   * Credit Card Address Verification.
   * @nullable
   */
  declare creditCardAddressVerification?: CreditCardAddressVerification | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Excluded From Collection Fee Calculation.
   * @nullable
   */
  declare isExcludedFromCollectionFeeCalculation?: NoYes | null;
  /**
   * Customer Payment Financial Interest Code.
   * @nullable
   */
  declare customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Transaction Posted As Shipment.
   * @nullable
   */
  declare isTransactionPostedAsShipment?: NoYes | null;
  /**
   * Is Externally Maintained.
   * @nullable
   */
  declare isExternallyMaintained?: NoYes | null;
  /**
   * Credit Limit Is Mandatory.
   * @nullable
   */
  declare creditLimitIsMandatory?: NoYes | null;
  /**
   * Payment Terms Base Days.
   */
  declare paymentTermsBaseDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fiscal Code.
   * @nullable
   */
  declare fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Telex.
   * @nullable
   */
  declare primaryContactTelex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Bank Account.
   * @nullable
   */
  declare paymentBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brazilian Ie.
   * @nullable
   */
  declare brazilianIe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferential Customer.
   * @nullable
   */
  declare preferentialCustomer?: NoYes | null;
  /**
   * Receipt Option.
   * @nullable
   */
  declare receiptOption?: RetailReceiptOptionBase | null;
  /**
   * Fulfillment Error Tolerance.
   * @nullable
   */
  declare fulfillmentErrorTolerance?: WhsCustFulfillmentErrorTolerance | null;
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
   * Primary Contact Phone Extension.
   * @nullable
   */
  declare primaryContactPhoneExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Phone Purpose.
   * @nullable
   */
  declare primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Sale.
   * @nullable
   */
  declare exportSale?: NoYes | null;
  /**
   * Organization Number.
   * @nullable
   */
  declare organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Address Verification Is Authorization Voided On Failure.
   * @nullable
   */
  declare creditCardAddressVerificationIsAuthorizationVoidedOnFailure?: NoYes | null;
  /**
   * Invoice Address State.
   * @nullable
   */
  declare invoiceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Calendar.
   * @nullable
   */
  declare receiptCalendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State.
   * @nullable
   */
  declare deliveryAddressState?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sales Return Tax Group.
   * @nullable
   */
  declare salesReturnTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url Description.
   * @nullable
   */
  declare primaryContactUrlDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Withholding Contribution Type.
   * @nullable
   */
  declare customerWithholdingContributionType?: CustWhtContributionTypeBr | null;
  /**
   * Is Electronic Invoice.
   * @nullable
   */
  declare isElectronicInvoice?: NoYes | null;
  /**
   * Federal Agency Location Code.
   * @nullable
   */
  declare federalAgencyLocationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Type Free Text Invoice.
   * @nullable
   */
  declare giroTypeFreeTextInvoice?: PaymentStub | null;
  /**
   * Delivery Address Valid To.
   */
  declare deliveryAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Person Phonetic Middle Name.
   * @nullable
   */
  declare personPhoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Total Discount Code.
   * @nullable
   */
  declare totalDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Roles.
   * @nullable
   */
  declare addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Cash Discount.
   * @nullable
   */
  declare paymentCashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Merchant Id.
   * @nullable
   */
  declare merchantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Rating.
   * @nullable
   */
  declare creditRating?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook.
   * @nullable
   */
  declare primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Longitude.
   */
  declare invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Code.
   * @nullable
   */
  declare lineDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Country.
   * @nullable
   */
  declare partyCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Latitude.
   */
  declare invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is In Suframa Region.
   * @nullable
   */
  declare isInSuframaRegion?: NoYes | null;
  /**
   * Is Incoming Fiscal Document Generated.
   * @nullable
   */
  declare isIncomingFiscalDocumentGenerated?: NoYes | null;
  /**
   * Sales Memo.
   * @nullable
   */
  declare salesMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relief Group Id.
   * @nullable
   */
  declare reliefGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Excluded From Interest Charge Calculation.
   * @nullable
   */
  declare isExcludedFromInterestChargeCalculation?: NoYes | null;
  /**
   * Statistics Group Id.
   * @nullable
   */
  declare statisticsGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Pool Id.
   * @nullable
   */
  declare salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Name.
   * @nullable
   */
  declare organizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Order Number Reference Used.
   * @nullable
   */
  declare isOrderNumberReferenceUsed?: NoYes | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Federal Comments.
   * @nullable
   */
  declare federalComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Gender.
   * @nullable
   */
  declare personGender?: Gender | null;
  /**
   * Payment Terms.
   * @nullable
   */
  declare paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Description.
   * @nullable
   */
  declare primaryContactPhoneDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Subsegment Id.
   * @nullable
   */
  declare salesSubsegmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Rebate Group Id.
   * @nullable
   */
  declare customerRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Icms Contributor.
   * @nullable
   */
  declare isIcmsContributor?: NoYes | null;
  /**
   * Invoice Address Valid To.
   */
  declare invoiceAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Invoice Address Valid From.
   */
  declare invoiceAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Credit Limit.
   */
  declare creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Card Address Verification Level.
   * @nullable
   */
  declare creditCardAddressVerificationLevel?: CreditCardAddressVerificationLevel | null;
  /**
   * Warehouse Is Entire Shipment Filled.
   * @nullable
   */
  declare warehouseIsEntireShipmentFilled?: NoYes | null;
  /**
   * Packing Duty License.
   * @nullable
   */
  declare packingDutyLicense?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * National Registry Number.
   * @nullable
   */
  declare nationalRegistryNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Site Id.
   * @nullable
   */
  declare siteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Iso Code.
   * @nullable
   */
  declare invoiceAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Url Purpose.
   * @nullable
   */
  declare primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charges Group Id.
   * @nullable
   */
  declare chargesGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pan Status.
   * @nullable
   */
  declare panStatus?: PanStatusIn | null;
  /**
   * Commission Sales Group Id.
   * @nullable
   */
  declare commissionSalesGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Purpose.
   * @nullable
   */
  declare primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Last Name.
   * @nullable
   */
  declare personLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Id Type.
   * @nullable
   */
  declare paymentIdType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Residence Foreign Country Region Id.
   * @nullable
   */
  declare residenceForeignCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rfc Number.
   * @nullable
   */
  declare rfcNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Invoice Address Zip Code.
   * @nullable
   */
  declare invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Purpose.
   * @nullable
   */
  declare primaryContactLinkedInPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is One Time Customer.
   * @nullable
   */
  declare isOneTimeCustomer?: NoYes | null;
  /**
   * Foreign Customer.
   * @nullable
   */
  declare foreignCustomer?: NoYes | null;
  /**
   * Customer Tma Group Id.
   * @nullable
   */
  declare customerTmaGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Organization Number Of Employees.
   */
  declare organizationNumberOfEmployees: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Group Id.
   * @nullable
   */
  declare customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Type Interest Note.
   * @nullable
   */
  declare giroTypeInterestNote?: PaymentStub | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Reason.
   * @nullable
   */
  declare deliveryReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Registration Id.
   * @nullable
   */
  declare taxRegistrationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Use Cash Discount.
   * @nullable
   */
  declare paymentUseCashDiscount?: UseCashDisc | null;
  /**
   * Discount Price Group Id.
   * @nullable
   */
  declare discountPriceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Suframa Number.
   * @nullable
   */
  declare suframaNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Number.
   * @nullable
   */
  declare identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Phonetic First Name.
   * @nullable
   */
  declare personPhoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Telex Purpose.
   * @nullable
   */
  declare primaryContactTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address Country Region Id.
   * @nullable
   */
  declare invoiceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Facebook Purpose.
   * @nullable
   */
  declare primaryContactFacebookPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Company Chain.
   * @nullable
   */
  declare companyChain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brazilian Insscei.
   * @nullable
   */
  declare brazilianInsscei?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Customer Group Id.
   * @nullable
   */
  declare commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Description.
   * @nullable
   */
  declare primaryContactFaxDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Nature Of Assessee.
   * @nullable
   */
  declare natureOfAssessee?: NatureOfAssesseeIn | null;
  /**
   * Writeoff Reason.
   * @nullable
   */
  declare writeoffReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Middle Name.
   * @nullable
   */
  declare personMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Location Id.
   * @nullable
   */
  declare invoiceAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Purch Request Used.
   * @nullable
   */
  declare isPurchRequestUsed?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: CustomersV2Api<T>) {
    super(_entityApi);
  }
}

export interface CustomersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  addressBrazilianCnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  isFuelSurchargeApplied?: NoYes | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  birthCountyCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddress?: InvoiceOrderAccount | null;
  packingMaterialFeeLicenseNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionPresenceType?: EfDocPresenceTypeBr | null;
  primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailIsIm?: NoYes | null;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  isFinalUser?: NoYes | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  hasSuframaDiscountPiSandCofins?: NoYes | null;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  curpNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  itemCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  personProfessionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  salesSegmentId?: DeserializedType<T, 'Edm.String'> | null;
  isServiceDeliveryAddressBased?: NoYes | null;
  primaryContactTelexDescription?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressTimeZone?: Timezone | null;
  salesAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneIsMobile?: NoYes | null;
  tcsGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyAutoCreateOrders?: NoYes | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  giroTypeProjInvoice?: PaymentStub | null;
  lineOfBusinessId?: DeserializedType<T, 'Edm.String'> | null;
  organizationPhoneticName?: DeserializedType<T, 'Edm.String'> | null;
  creditCardCvc?: CreditCardCvc | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  deliveryAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  giroTypeAccountStatement?: PaymentStub | null;
  calculateWithholdingTax?: NoYes | null;
  electronicInvoiceEan?: DeserializedType<T, 'Edm.String'> | null;
  deliveryFreightZone?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  birthPlace?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  personInitials?: DeserializedType<T, 'Edm.String'> | null;
  defaultECommerceOperator?: DeserializedType<T, 'Edm.String'> | null;
  centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  giroTypeCollectionletter?: PaymentStub | null;
  orderEntryDeadline?: DeserializedType<T, 'Edm.String'> | null;
  foreignerId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseIsAsnGenerated?: NoYes | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  customerType?: CustomerTypeIn | null;
  primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  isFreightAccrued?: NoYes | null;
  partyState?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseFulfillmentRate: DeserializedType<T, 'Edm.Decimal'>;
  centralBankPurposeNotes?: DeserializedType<T, 'Edm.String'> | null;
  collectionsContactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  personMaritalStatus?: DirPersonMaritalStatus | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  giroType?: PaymentStub | null;
  invoiceAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTerms?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  personChildrenNames?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  personProfessionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  onHoldStatus?: CustVendorBlocked | null;
  warehouseFulfillmentType?: WhsFulfillmentType | null;
  accountStatement?: CustAccountStatement | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  destinationCode?: DeserializedType<T, 'Edm.String'> | null;
  irs1099CIndicator?: NoYes | null;
  frenchSiret?: DeserializedType<T, 'Edm.String'> | null;
  paymentDay?: DeserializedType<T, 'Edm.String'> | null;
  brazilianNit?: DeserializedType<T, 'Edm.String'> | null;
  federalIndicator?: FederalNonFederalIndicatorCode | null;
  employeeResponsibleNumber?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryYear: DeserializedType<T, 'Edm.Int32'>;
  defaultInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCounty?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  panReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  salesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  isSalesTaxIncludedInPrices?: NoYes | null;
  brazilianCnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;
  paymentFactoringAccount?: DeserializedType<T, 'Edm.String'> | null;
  panNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  personFirstName?: DeserializedType<T, 'Edm.String'> | null;
  brazilianCcm?: DeserializedType<T, 'Edm.String'> | null;
  receiptEmail?: DeserializedType<T, 'Edm.String'> | null;
  tdsGroup?: DeserializedType<T, 'Edm.String'> | null;
  multiLineDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryDay: DeserializedType<T, 'Edm.Int32'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  supplementaryItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isWithholdingTaxCalculated?: NoYes | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  consolidationDay: DeserializedType<T, 'Edm.Int32'>;
  isExpressBillOfLadingAccepted?: NoYes | null;
  creditCardAddressVerification?: CreditCardAddressVerification | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  isExcludedFromCollectionFeeCalculation?: NoYes | null;
  customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isTransactionPostedAsShipment?: NoYes | null;
  isExternallyMaintained?: NoYes | null;
  creditLimitIsMandatory?: NoYes | null;
  paymentTermsBaseDays: DeserializedType<T, 'Edm.Int32'>;
  fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTelex?: DeserializedType<T, 'Edm.String'> | null;
  paymentBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  brazilianIe?: DeserializedType<T, 'Edm.String'> | null;
  preferentialCustomer?: NoYes | null;
  receiptOption?: RetailReceiptOptionBase | null;
  fulfillmentErrorTolerance?: WhsCustFulfillmentErrorTolerance | null;
  addressBrazilianIe?: DeserializedType<T, 'Edm.String'> | null;
  personAnniversaryMonth?: MonthsOfYear | null;
  primaryContactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  exportSale?: NoYes | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  creditCardAddressVerificationIsAuthorizationVoidedOnFailure?: NoYes | null;
  invoiceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  receiptCalendar?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressState?: DeserializedType<T, 'Edm.String'> | null;
  stateInscription?: DeserializedType<T, 'Edm.String'> | null;
  personLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  salesReturnTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  customerWithholdingContributionType?: CustWhtContributionTypeBr | null;
  isElectronicInvoice?: NoYes | null;
  federalAgencyLocationCode?: DeserializedType<T, 'Edm.String'> | null;
  giroTypeFreeTextInvoice?: PaymentStub | null;
  deliveryAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personPhoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  organizationAbcCode?: Abc | null;
  brazilianCnae?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  nafCode?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  paymentCashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  merchantId?: DeserializedType<T, 'Edm.String'> | null;
  creditRating?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  partyCountry?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  isInSuframaRegion?: NoYes | null;
  isIncomingFiscalDocumentGenerated?: NoYes | null;
  salesMemo?: DeserializedType<T, 'Edm.String'> | null;
  reliefGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isExcludedFromInterestChargeCalculation?: NoYes | null;
  statisticsGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  organizationName?: DeserializedType<T, 'Edm.String'> | null;
  isOrderNumberReferenceUsed?: NoYes | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  federalComments?: DeserializedType<T, 'Edm.String'> | null;
  personGender?: Gender | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesSubsegmentId?: DeserializedType<T, 'Edm.String'> | null;
  customerRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  isIcmsContributor?: NoYes | null;
  invoiceAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressTimeZone?: Timezone | null;
  invoiceAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  creditCardAddressVerificationLevel?: CreditCardAddressVerificationLevel | null;
  warehouseIsEntireShipmentFilled?: NoYes | null;
  packingDutyLicense?: DeserializedType<T, 'Edm.String'> | null;
  nationalRegistryNumber?: DeserializedType<T, 'Edm.String'> | null;
  siteId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  chargesGroupId?: DeserializedType<T, 'Edm.String'> | null;
  panStatus?: PanStatusIn | null;
  commissionSalesGroupId?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  personLastName?: DeserializedType<T, 'Edm.String'> | null;
  paymentIdType?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  residenceForeignCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  rfcNumber?: DeserializedType<T, 'Edm.String'> | null;
  personHobbies?: DeserializedType<T, 'Edm.String'> | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeCustomer?: NoYes | null;
  foreignCustomer?: NoYes | null;
  customerTmaGroupId?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  companyType?: CompanyTypeMx | null;
  organizationNumberOfEmployees: DeserializedType<T, 'Edm.Int32'>;
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  giroTypeInterestNote?: PaymentStub | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryReason?: DeserializedType<T, 'Edm.String'> | null;
  taxRegistrationId?: DeserializedType<T, 'Edm.String'> | null;
  paymentUseCashDiscount?: UseCashDisc | null;
  discountPriceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  suframaNumber?: DeserializedType<T, 'Edm.String'> | null;
  identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  personPhoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTelexPurpose?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  companyChain?: DeserializedType<T, 'Edm.String'> | null;
  brazilianInsscei?: DeserializedType<T, 'Edm.String'> | null;
  commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxDescription?: DeserializedType<T, 'Edm.String'> | null;
  natureOfAssessee?: NatureOfAssesseeIn | null;
  writeoffReason?: DeserializedType<T, 'Edm.String'> | null;
  personMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  personPhoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isPurchRequestUsed?: NoYes | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
