/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseAgreementConfirmations } from './PurchaseAgreementConfirmations';
import { PurchaseAgreementConfirmationsRequestBuilder } from './PurchaseAgreementConfirmationsRequestBuilder';
import { AgreementState } from './AgreementState';
import { NoYes } from './NoYes';
import { CommitmentType } from './CommitmentType';
import { Timezone } from './Timezone';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseAgreementConfirmationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseAgreementConfirmations<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PurchaseAgreementConfirmationsApi<DeSerializersT> {
    return new PurchaseAgreementConfirmationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchaseAgreementConfirmations;

  requestBuilder(): PurchaseAgreementConfirmationsRequestBuilder<DeSerializersT> {
    return new PurchaseAgreementConfirmationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseAgreementConfirmations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseAgreementConfirmations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseAgreementConfirmations<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PurchaseAgreementConfirmations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseAgreementConfirmations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_AGREEMENT_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONFIRMATION_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_PURPOSE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_STATUS: EnumField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      AgreementState,
      true,
      true
    >;
    BUYING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_METHOD_SPECIFICATION_NAME: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INTEREST_BASED_ON_CENTRAL_EUROPEAN_BANK: EnumField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_CONTRACT_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_CLASSIFICATION: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMATION_CREATION_DATE_TIME: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_AGREEMENT_CLASSIFICATION_NAME: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TITLE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_AGREEMENT_CONFIRMATION_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AGREEMENT_RENEWABLE: EnumField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_CONTRACT_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_EXPIRATION_DATE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_COMMITMENT_TYPE: EnumField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      CommitmentType,
      true,
      true
    >;
    DEFAULT_EFFECTIVE_DATE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_REFERENCE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_AGREEMENT_SPECIFIC: EnumField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_ORDER_POOL_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPARER_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_DOCUMENT_REFERENCE: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUYER_GROUP_ID: OrderableEdmTypeField<
      PurchaseAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PurchaseAgreementConfirmations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link confirmationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConfirmationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchasingPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PurchasingPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_STATUS: fieldBuilder.buildEnumField(
          'AgreementStatus',
          AgreementState,
          true
        ),
        /**
         * Static representation of the {@link buyingLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYING_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'BuyingLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentMethodSpecificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_METHOD_SPECIFICATION_NAME:
          fieldBuilder.buildEdmTypeField(
            'VendorPaymentMethodSpecificationName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isInterestBasedOnCentralEuropeanBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTEREST_BASED_ON_CENTRAL_EUROPEAN_BANK: fieldBuilder.buildEnumField(
          'IsInterestBasedOnCentralEuropeanBank',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link agreementVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumContractAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_CONTRACT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumContractAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DeliveryAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link procurementClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'ProcurementClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmationCreationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMATION_CREATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ConfirmationCreationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseAgreementClassificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_CLASSIFICATION_NAME: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementClassificationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TITLE: fieldBuilder.buildEdmTypeField(
          'DocumentTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'VendorBankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseAgreementConfirmationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_CONFIRMATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementConfirmationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'VendorPaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentScheduleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAgreementRenewable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AGREEMENT_RENEWABLE: fieldBuilder.buildEnumField(
          'IsAgreementRenewable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link minimumContractAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_CONTRACT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumContractAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultCommitmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COMMITMENT_TYPE: fieldBuilder.buildEnumField(
          'DefaultCommitmentType',
          CommitmentType,
          true
        ),
        /**
         * Static representation of the {@link defaultEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendorReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REFERENCE: fieldBuilder.buildEdmTypeField(
          'VendorReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryAddressAgreementSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_AGREEMENT_SPECIFIC: fieldBuilder.buildEnumField(
          'IsDeliveryAddressAgreementSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_POOL_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDeliveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preparerPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPARER_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PreparerPersonPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargeVendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalDocumentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_DOCUMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ExternalDocumentReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BuyerGroupId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseAgreementConfirmations)
      };
    }

    return this._schema;
  }
}
