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
import type { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { AgreementState } from './AgreementState';
import { NoYes } from './NoYes';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { CommitmentType } from './CommitmentType';
import { PurchAgreementWorkflowStatus } from './PurchAgreementWorkflowStatus';
import { AgencyAgreementRu } from './AgencyAgreementRu';
import { VatChargeSourceRu } from './VatChargeSourceRu';
import { Timezone } from './Timezone';
import { PurchAgreementTypePsn } from './PurchAgreementTypePsn';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
import {
  PurchaseAgreementConfirmationLines,
  PurchaseAgreementConfirmationLinesType
} from './PurchaseAgreementConfirmationLines';
import {
  TransportationRoutePlans,
  TransportationRoutePlansType
} from './TransportationRoutePlans';
import { PaymentSchedules, PaymentSchedulesType } from './PaymentSchedules';
import {
  VendorBankAccounts,
  VendorBankAccountsType
} from './VendorBankAccounts';
import { Currencies, CurrenciesType } from './Currencies';
import { PaymentTerms, PaymentTermsType } from './PaymentTerms';
import {
  ShippingCarrierServices,
  ShippingCarrierServicesType
} from './ShippingCarrierServices';
import { ShippingCarriers, ShippingCarriersType } from './ShippingCarriers';
import { Workers, WorkersType } from './Workers';
import { ContactPersons, ContactPersonsType } from './ContactPersons';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { Projects, ProjectsType } from './Projects';
import { DeliveryModesV2, DeliveryModesV2Type } from './DeliveryModesV2';
import { CashDiscounts, CashDiscountsType } from './CashDiscounts';
import { DeliveryTerms, DeliveryTermsType } from './DeliveryTerms';
import {
  ShippingCarrierServicesGroups,
  ShippingCarrierServicesGroupsType
} from './ShippingCarrierServicesGroups';
import {
  VendorPaymentMethods,
  VendorPaymentMethodsType
} from './VendorPaymentMethods';
import {
  VendorPaymentMethodSpecifications,
  VendorPaymentMethodSpecificationsType
} from './VendorPaymentMethodSpecifications';

/**
 * This class represents the entity "PurchaseAgreements" of service "d365_metadata".
 */
export class PurchaseAgreements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PurchaseAgreementsType<T>
{
  /**
   * Technical entity name for PurchaseAgreements.
   */
  static override _entityName = 'PurchaseAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseAgreements entity.
   */
  static _keys = ['dataAreaId', 'PurchaseAgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Agreement Id.
   */
  declare purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Purpose.
   * @nullable
   */
  declare purchasingPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet Address.
   * @nullable
   */
  declare internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Status.
   * @nullable
   */
  declare agreementStatus?: AgreementState | null;
  /**
   * Buying Legal Entity Id.
   * @nullable
   */
  declare buyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Vat Amount.
   */
  declare agreementVatAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Payment Method Specification Name.
   * @nullable
   */
  declare vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Interest Based On Central European Bank.
   * @nullable
   */
  declare isInterestBasedOnCentralEuropeanBank?: NoYes | null;
  /**
   * Agreement Vendor Account Number.
   * @nullable
   */
  declare agreementVendorAccountNumber?: DeserializedType<
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
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Contract Amount.
   */
  declare maximumContractAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transportation Route Plan Id.
   * @nullable
   */
  declare transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Classification.
   * @nullable
   */
  declare procurementClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Of Business.
   * @nullable
   */
  declare lineOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Agreement Classification Name.
   * @nullable
   */
  declare purchaseAgreementClassificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document Title.
   * @nullable
   */
  declare documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Bank Account Id.
   * @nullable
   */
  declare vendorBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Calendar Id.
   * @nullable
   */
  declare shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Limit.
   */
  declare creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Difference In Tax Accounting.
   * @nullable
   */
  declare amountDifferenceInTaxAccounting?: NoYes | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery City In Kana.
   * @nullable
   */
  declare deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Kind Of Activity.
   * @nullable
   */
  declare kindOfActivity?: InventProfileTypeRu | null;
  /**
   * Payment Schedule Name.
   * @nullable
   */
  declare paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile With Prepayment Journal Voucher.
   * @nullable
   */
  declare postingProfileWithPrepaymentJournalVoucher?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Agreement Renewable.
   * @nullable
   */
  declare isAgreementRenewable?: NoYes | null;
  /**
   * Minimum Contract Amount.
   */
  declare minimumContractAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mobile Phone.
   * @nullable
   */
  declare mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Expiration Date.
   */
  declare defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Commitment Type.
   * @nullable
   */
  declare defaultCommitmentType?: CommitmentType | null;
  /**
   * Purchase Responsible.
   */
  declare purchaseResponsible: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Effective Date.
   */
  declare defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Paym Day.
   * @nullable
   */
  declare paymDay?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Reference.
   * @nullable
   */
  declare vendorReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Profile.
   * @nullable
   */
  declare inventoryProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Workflow Status.
   * @nullable
   */
  declare agreementWorkflowStatus?: PurchAgreementWorkflowStatus | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exclude From Reserve In Business Accounting.
   * @nullable
   */
  declare excludeFromReserveInBusinessAccounting?: NoYes | null;
  /**
   * Exclude From Reserve In Tax Accounting.
   * @nullable
   */
  declare excludeFromReserveInTaxAccounting?: NoYes | null;
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
   * Secondary Responsible Worker Name.
   * @nullable
   */
  declare secondaryResponsibleWorkerName?: DeserializedType<
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
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Agreement Specific.
   * @nullable
   */
  declare isDeliveryAddressAgreementSpecific?: NoYes | null;
  /**
   * Purchase Order Pool Id.
   * @nullable
   */
  declare purchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Extension.
   * @nullable
   */
  declare extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street In Kana.
   * @nullable
   */
  declare deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Agreement.
   * @nullable
   */
  declare commissionAgreement?: AgencyAgreementRu | null;
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
   * Vat Charge.
   * @nullable
   */
  declare vatCharge?: VatChargeSourceRu | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Vat Operation Code.
   * @nullable
   */
  declare vatOperationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preparer Person Party Number.
   * @nullable
   */
  declare preparerPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing Procedure Type.
   * @nullable
   */
  declare purchasingProcedureType?: PurchAgreementTypePsn | null;
  /**
   * Charge Vendor Group Id.
   * @nullable
   */
  declare chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Group Id.
   * @nullable
   */
  declare shippingCarrierServiceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Responsible Worker Name.
   * @nullable
   */
  declare primaryResponsibleWorkerName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transportation Template Id.
   * @nullable
   */
  declare transportationTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telex Number.
   * @nullable
   */
  declare telexNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Subject Of An Agreement.
   * @nullable
   */
  declare subjectOfAnAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Agreement Sum.
   */
  declare agreementSum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Agreement Date.
   */
  declare agreementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fax.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Document Reference.
   * @nullable
   */
  declare externalDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Buyer Group Id.
   * @nullable
   */
  declare buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matching Policy.
   * @nullable
   */
  declare matchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementConfirmationLines} entity.
   */
  declare purchaseAgreementLinesV2: PurchaseAgreementConfirmationLines<T>[];
  /**
   * One-to-one navigation property to the {@link TransportationRoutePlans} entity.
   */
  declare transportationRoutePlan?: TransportationRoutePlans<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentSchedules} entity.
   */
  declare paymentSchedule?: PaymentSchedules<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorBankAccounts} entity.
   */
  declare vendorBankAccount?: VendorBankAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTerms} entity.
   */
  declare paymentTerms?: PaymentTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarrierServices} entity.
   */
  declare shippingCarrierService?: ShippingCarrierServices<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarriers} entity.
   */
  declare shippingCarrier?: ShippingCarriers<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare primaryResponsibleWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link ContactPersons} entity.
   */
  declare contactPerson?: ContactPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultLedgerDimensionDimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryModesV2} entity.
   */
  declare deliveryMode?: DeliveryModesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare secondaryResponsibleWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link CashDiscounts} entity.
   */
  declare cashDiscount?: CashDiscounts<T> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryTerms} entity.
   */
  declare deliveryTerms?: DeliveryTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarrierServicesGroups} entity.
   */
  declare shippingCarrierServiceGroup?: ShippingCarrierServicesGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorPaymentMethods} entity.
   */
  declare vendorPaymentMethod?: VendorPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorPaymentMethodSpecifications} entity.
   */
  declare vendorPaymentMethodSpecification?: VendorPaymentMethodSpecifications<T> | null;

  constructor(_entityApi: PurchaseAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  purchasingPurpose?: DeserializedType<T, 'Edm.String'> | null;
  internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  agreementStatus?: AgreementState | null;
  buyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  agreementVatAmount: DeserializedType<T, 'Edm.Decimal'>;
  vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isInterestBasedOnCentralEuropeanBank?: NoYes | null;
  agreementVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  maximumContractAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  procurementClassification?: DeserializedType<T, 'Edm.String'> | null;
  lineOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementClassificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  vendorBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  amountDifferenceInTaxAccounting?: NoYes | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  kindOfActivity?: InventProfileTypeRu | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileWithPrepaymentJournalVoucher?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  isAgreementRenewable?: NoYes | null;
  minimumContractAmount: DeserializedType<T, 'Edm.Decimal'>;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultCommitmentType?: CommitmentType | null;
  purchaseResponsible: DeserializedType<T, 'Edm.Int64'>;
  defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymDay?: DeserializedType<T, 'Edm.String'> | null;
  vendorReference?: DeserializedType<T, 'Edm.String'> | null;
  inventoryProfile?: DeserializedType<T, 'Edm.String'> | null;
  agreementWorkflowStatus?: PurchAgreementWorkflowStatus | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  excludeFromReserveInBusinessAccounting?: NoYes | null;
  excludeFromReserveInTaxAccounting?: NoYes | null;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  secondaryResponsibleWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressAgreementSpecific?: NoYes | null;
  purchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  commissionAgreement?: AgencyAgreementRu | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  vatCharge?: VatChargeSourceRu | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  vatOperationCode?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  preparerPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchasingProcedureType?: PurchAgreementTypePsn | null;
  chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  primaryResponsibleWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  transportationTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  subjectOfAnAgreement?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  agreementSum: DeserializedType<T, 'Edm.Decimal'>;
  agreementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  externalDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  matchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  purchaseAgreementLinesV2: PurchaseAgreementConfirmationLinesType<T>[];
  transportationRoutePlan?: TransportationRoutePlansType<T> | null;
  paymentSchedule?: PaymentSchedulesType<T> | null;
  vendorBankAccount?: VendorBankAccountsType<T> | null;
  currency?: CurrenciesType<T> | null;
  paymentTerms?: PaymentTermsType<T> | null;
  shippingCarrierService?: ShippingCarrierServicesType<T> | null;
  shippingCarrier?: ShippingCarriersType<T> | null;
  primaryResponsibleWorker?: WorkersType<T> | null;
  contactPerson?: ContactPersonsType<T> | null;
  defaultLedgerDimensionDimensionSet?: DimensionSetsType<T> | null;
  project?: ProjectsType<T> | null;
  deliveryMode?: DeliveryModesV2Type<T> | null;
  secondaryResponsibleWorker?: WorkersType<T> | null;
  cashDiscount?: CashDiscountsType<T> | null;
  deliveryTerms?: DeliveryTermsType<T> | null;
  shippingCarrierServiceGroup?: ShippingCarrierServicesGroupsType<T> | null;
  vendorPaymentMethod?: VendorPaymentMethodsType<T> | null;
  vendorPaymentMethodSpecification?: VendorPaymentMethodSpecificationsType<T> | null;
}
