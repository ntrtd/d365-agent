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
import type { SalesAgreementConfirmationsApi } from './SalesAgreementConfirmationsApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { CommitmentType } from './CommitmentType';
import { AgreementState } from './AgreementState';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import { Currencies, CurrenciesType } from './Currencies';
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
import { ContactPersons, ContactPersonsType } from './ContactPersons';
import {
  SalesAgreementConfirmationLines,
  SalesAgreementConfirmationLinesType
} from './SalesAgreementConfirmationLines';

/**
 * This class represents the entity "SalesAgreementConfirmations" of service "d365_metadata".
 */
export class SalesAgreementConfirmations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAgreementConfirmationsType<T>
{
  /**
   * Technical entity name for SalesAgreementConfirmations.
   */
  static override _entityName = 'SalesAgreementConfirmations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAgreementConfirmations entity.
   */
  static _keys = ['dataAreaId', 'SalesAgreementId', 'ConfirmationNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Agreement Id.
   */
  declare salesAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Confirmation Number.
   */
  declare confirmationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Reference.
   * @nullable
   */
  declare customerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Fixed Exchange Rate.
   */
  declare reportingCurrencyFixedExchangeRate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Payment Schedule Name.
   * @nullable
   */
  declare paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Effective Date.
   */
  declare defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exchange Rate.
   */
  declare fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Payment Method Name.
   * @nullable
   */
  declare customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document Title.
   * @nullable
   */
  declare documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Customer Payment Method Specification Name.
   * @nullable
   */
  declare customerPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Commission Customer Group Id.
   * @nullable
   */
  declare commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preparer Person Party Number.
   * @nullable
   */
  declare preparerPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Expiration Date.
   */
  declare defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmation Creation Date Time.
   */
  declare confirmationCreationDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Agreement Confirmation Number.
   * @nullable
   */
  declare salesAgreementConfirmationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default Commitment Type.
   * @nullable
   */
  declare defaultCommitmentType?: CommitmentType | null;
  /**
   * Campaign Id.
   * @nullable
   */
  declare campaignId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Agreement Classification Name.
   * @nullable
   */
  declare salesAgreementClassificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Charge Customer Group Id.
   * @nullable
   */
  declare chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Sales Representative Group Id.
   * @nullable
   */
  declare commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Agreement Status.
   * @nullable
   */
  declare agreementStatus?: AgreementState | null;
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
   * Is Delivery Address Agreement Specific.
   * @nullable
   */
  declare isDeliveryAddressAgreementSpecific?: NoYes | null;
  /**
   * Agreement Customer Account Number.
   * @nullable
   */
  declare agreementCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Id.
   * @nullable
   */
  declare salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Responsible Personnel Number.
   * @nullable
   */
  declare orderResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External Document Reference.
   * @nullable
   */
  declare externalDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Selling Legal Entity Id.
   * @nullable
   */
  declare sellingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street In Kana.
   * @nullable
   */
  declare deliveryAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare customerPaymentMethod?: CustomerPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
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
   * One-to-one navigation property to the {@link ContactPersons} entity.
   */
  declare contactPerson?: ContactPersons<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmationLines} entity.
   */
  declare salesAgreementConfirmationLines: SalesAgreementConfirmationLines<T>[];

  constructor(_entityApi: SalesAgreementConfirmationsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAgreementConfirmationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesAgreementId: DeserializedType<T, 'Edm.String'>;
  confirmationNumber: DeserializedType<T, 'Edm.String'>;
  customerReference?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyFixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  customerPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  customerPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  commissionCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  preparerPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  confirmationCreationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementConfirmationNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  defaultCommitmentType?: CommitmentType | null;
  campaignId?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementClassificationName?: DeserializedType<T, 'Edm.String'> | null;
  chargeCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  agreementStatus?: AgreementState | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressAgreementSpecific?: NoYes | null;
  agreementCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  orderResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  externalDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  sellingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentMethod?: CustomerPaymentMethodsType<T> | null;
  currency?: CurrenciesType<T> | null;
  deliveryTerms?: DeliveryTermsType<T> | null;
  defaultLedgerDimension?: DimensionSetsType<T> | null;
  salesOrderPool?: SalesOrderPoolsType<T> | null;
  deliveryMode?: DeliveryModesV2Type<T> | null;
  agreementCustomer?: CustomersV3Type<T> | null;
  customerPaymentMethodSpecification?: CustomerPaymentMethodSpecificationsType<T> | null;
  paymentSchedule?: PaymentSchedulesType<T> | null;
  contactPerson?: ContactPersonsType<T> | null;
  salesAgreementConfirmationLines: SalesAgreementConfirmationLinesType<T>[];
}
