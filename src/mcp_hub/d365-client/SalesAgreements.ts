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
import type { SalesAgreementsApi } from './SalesAgreementsApi';
import { AgreementState } from './AgreementState';
import { NoYes } from './NoYes';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { CommitmentType } from './CommitmentType';
import { AgencyAgreementRu } from './AgencyAgreementRu';
import { Timezone } from './Timezone';
import { SalesInvoicePostingTypeRu } from './SalesInvoicePostingTypeRu';
import {
  SalesAgreementLines,
  SalesAgreementLinesType
} from './SalesAgreementLines';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import { ShippingCarriers, ShippingCarriersType } from './ShippingCarriers';
import { Currencies, CurrenciesType } from './Currencies';
import {
  ShippingCarrierServices,
  ShippingCarrierServicesType
} from './ShippingCarrierServices';
import { DeliveryTerms, DeliveryTermsType } from './DeliveryTerms';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { SalesOrderPools, SalesOrderPoolsType } from './SalesOrderPools';
import { DeliveryModesV2, DeliveryModesV2Type } from './DeliveryModesV2';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  CustomerPaymentMethodSpecifications,
  CustomerPaymentMethodSpecificationsType
} from './CustomerPaymentMethodSpecifications';
import { PaymentSchedules, PaymentSchedulesType } from './PaymentSchedules';
import {
  TransportationRoutePlans,
  TransportationRoutePlansType
} from './TransportationRoutePlans';
import {
  ShippingCarrierServicesGroups,
  ShippingCarrierServicesGroupsType
} from './ShippingCarrierServicesGroups';
import { ContactPersons, ContactPersonsType } from './ContactPersons';

/**
 * This class represents the entity "SalesAgreements" of service "d365_metadata".
 */
export class SalesAgreements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesAgreementsType<T>
{
  /**
   * Technical entity name for SalesAgreements.
   */
  static override _entityName = 'SalesAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAgreements entity.
   */
  static _keys = ['dataAreaId', 'SalesAgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Agreement Id.
   */
  declare salesAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Unit Id.
   * @nullable
   */
  declare salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Fixed Exchange Rate.
   */
  declare reportingCurrencyFixedExchangeRate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
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
   * Agreement Vat Amount.
   */
  declare agreementVatAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Transportation Route Plan Id.
   * @nullable
   */
  declare transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Of Business.
   * @nullable
   */
  declare lineOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Title.
   * @nullable
   */
  declare documentTitle?: DeserializedType<T, 'Edm.String'> | null;
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
   * Credit Limit.
   */
  declare creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Method Name.
   * @nullable
   */
  declare customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Agreement Customer Account Number.
   * @nullable
   */
  declare agreementCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Sales Order Pool Id.
   * @nullable
   */
  declare salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Inventory Profile.
   * @nullable
   */
  declare inventoryProfile?: DeserializedType<T, 'Edm.String'> | null;
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
   * Customer Reference.
   * @nullable
   */
  declare customerReference?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Delivery Address Agreement Specific.
   * @nullable
   */
  declare isDeliveryAddressAgreementSpecific?: NoYes | null;
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
   * Sales Agreement Classification Name.
   * @nullable
   */
  declare salesAgreementClassificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Selling Legal Entity Id.
   * @nullable
   */
  declare sellingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Rebate Calculation Exclude Line By Default.
   * @nullable
   */
  declare willRebateCalculationExcludeLineByDefault?: NoYes | null;
  /**
   * Commission Customer Group Id.
   * @nullable
   */
  declare commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Campaign Id.
   * @nullable
   */
  declare campaignId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: SalesInvoicePostingTypeRu | null;
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
   * Charge Customer Group Id.
   * @nullable
   */
  declare chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subject Of An Agreement.
   * @nullable
   */
  declare subjectOfAnAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City In Kana.
   * @nullable
   */
  declare deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Fax.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Date.
   */
  declare agreementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * One-to-many navigation property to the {@link SalesAgreementLines} entity.
   */
  declare salesAgreementLines: SalesAgreementLines<T>[];
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare customerPaymentMethod?: CustomerPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarriers} entity.
   */
  declare shippingCarrier?: ShippingCarriers<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarrierServices} entity.
   */
  declare shippingCarrierService?: ShippingCarrierServices<T> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryTerms} entity.
   */
  declare deliveryTerms?: DeliveryTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultLedgerDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderPools} entity.
   */
  declare salesOrderPool?: SalesOrderPools<T> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryModesV2} entity.
   */
  declare deliveryMode?: DeliveryModesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare agreementCustomer?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethodSpecifications} entity.
   */
  declare customerPaymentMethodSpecification?: CustomerPaymentMethodSpecifications<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentSchedules} entity.
   */
  declare paymentSchedule?: PaymentSchedules<T> | null;
  /**
   * One-to-one navigation property to the {@link TransportationRoutePlans} entity.
   */
  declare transportationRoutePlan?: TransportationRoutePlans<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarrierServicesGroups} entity.
   */
  declare shippingCarrierServiceGroup?: ShippingCarrierServicesGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ContactPersons} entity.
   */
  declare contactPerson?: ContactPersons<T> | null;

  constructor(_entityApi: SalesAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesAgreementId: DeserializedType<T, 'Edm.String'>;
  salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyFixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  agreementStatus?: AgreementState | null;
  agreementVatAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  lineOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  amountDifferenceInTaxAccounting?: NoYes | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  kindOfActivity?: InventProfileTypeRu | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileWithPrepaymentJournalVoucher?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  agreementCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultCommitmentType?: CommitmentType | null;
  salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymDay?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inventoryProfile?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  excludeFromReserveInBusinessAccounting?: NoYes | null;
  excludeFromReserveInTaxAccounting?: NoYes | null;
  customerReference?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressAgreementSpecific?: NoYes | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementClassificationName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  commissionAgreement?: AgencyAgreementRu | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  sellingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  willRebateCalculationExcludeLineByDefault?: NoYes | null;
  commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  preparerPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  campaignId?: DeserializedType<T, 'Edm.String'> | null;
  postingType?: SalesInvoicePostingTypeRu | null;
  orderResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  transportationTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  subjectOfAnAgreement?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  agreementSum: DeserializedType<T, 'Edm.Decimal'>;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  agreementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  externalDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementLines: SalesAgreementLinesType<T>[];
  customerPaymentMethod?: CustomerPaymentMethodsType<T> | null;
  shippingCarrier?: ShippingCarriersType<T> | null;
  currency?: CurrenciesType<T> | null;
  shippingCarrierService?: ShippingCarrierServicesType<T> | null;
  deliveryTerms?: DeliveryTermsType<T> | null;
  defaultLedgerDimension?: DimensionSetsType<T> | null;
  salesOrderPool?: SalesOrderPoolsType<T> | null;
  deliveryMode?: DeliveryModesV2Type<T> | null;
  agreementCustomer?: CustomersV3Type<T> | null;
  customerPaymentMethodSpecification?: CustomerPaymentMethodSpecificationsType<T> | null;
  paymentSchedule?: PaymentSchedulesType<T> | null;
  transportationRoutePlan?: TransportationRoutePlansType<T> | null;
  shippingCarrierServiceGroup?: ShippingCarrierServicesGroupsType<T> | null;
  contactPerson?: ContactPersonsType<T> | null;
}
