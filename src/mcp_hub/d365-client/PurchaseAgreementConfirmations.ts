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
import type { PurchaseAgreementConfirmationsApi } from './PurchaseAgreementConfirmationsApi';
import { AgreementState } from './AgreementState';
import { NoYes } from './NoYes';
import { CommitmentType } from './CommitmentType';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "PurchaseAgreementConfirmations" of service "d365_metadata".
 */
export class PurchaseAgreementConfirmations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseAgreementConfirmationsType<T>
{
  /**
   * Technical entity name for PurchaseAgreementConfirmations.
   */
  static override _entityName = 'PurchaseAgreementConfirmations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseAgreementConfirmations entity.
   */
  static _keys = ['dataAreaId', 'PurchaseAgreementId', 'ConfirmationNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Agreement Id.
   */
  declare purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Confirmation Number.
   */
  declare confirmationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Purpose.
   * @nullable
   */
  declare purchasingPurpose?: DeserializedType<T, 'Edm.String'> | null;
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
   * Procurement Classification.
   * @nullable
   */
  declare procurementClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmation Creation Date Time.
   */
  declare confirmationCreationDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Purchase Agreement Confirmation Number.
   * @nullable
   */
  declare purchaseAgreementConfirmationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default Expiration Date.
   */
  declare defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Commitment Type.
   * @nullable
   */
  declare defaultCommitmentType?: CommitmentType | null;
  /**
   * Default Effective Date.
   */
  declare defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Reference.
   * @nullable
   */
  declare vendorReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * Charge Vendor Group Id.
   * @nullable
   */
  declare chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: PurchaseAgreementConfirmationsApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseAgreementConfirmationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  confirmationNumber: DeserializedType<T, 'Edm.String'>;
  purchasingPurpose?: DeserializedType<T, 'Edm.String'> | null;
  agreementStatus?: AgreementState | null;
  buyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
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
  procurementClassification?: DeserializedType<T, 'Edm.String'> | null;
  confirmationCreationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementClassificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  vendorBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementConfirmationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  paymentScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  isAgreementRenewable?: NoYes | null;
  minimumContractAmount: DeserializedType<T, 'Edm.Decimal'>;
  defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultCommitmentType?: CommitmentType | null;
  defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressAgreementSpecific?: NoYes | null;
  purchaseOrderPoolId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  preparerPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  chargeVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  externalDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
}
