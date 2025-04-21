/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesAgreementConfirmations } from './SalesAgreementConfirmations';
import { SalesAgreementConfirmationsRequestBuilder } from './SalesAgreementConfirmationsRequestBuilder';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DeliveryTermsApi } from './DeliveryTermsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { SalesOrderPoolsApi } from './SalesOrderPoolsApi';
import { DeliveryModesV2Api } from './DeliveryModesV2Api';
import { CustomersV3Api } from './CustomersV3Api';
import { CustomerPaymentMethodSpecificationsApi } from './CustomerPaymentMethodSpecificationsApi';
import { PaymentSchedulesApi } from './PaymentSchedulesApi';
import { ContactPersonsApi } from './ContactPersonsApi';
import { SalesAgreementConfirmationLinesApi } from './SalesAgreementConfirmationLinesApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { CommitmentType } from './CommitmentType';
import { AgreementState } from './AgreementState';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesAgreementConfirmationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesAgreementConfirmations<DeSerializersT>, DeSerializersT>
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
  ): SalesAgreementConfirmationsApi<DeSerializersT> {
    return new SalesAgreementConfirmationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderPool} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_POOL: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      SalesOrderPoolsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link agreementCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGREEMENT_CUSTOMER: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustomerPaymentMethodsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      DeliveryTermsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      SalesOrderPoolsApi<DeSerializersT>,
      DeliveryModesV2Api<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      CustomerPaymentMethodSpecificationsApi<DeSerializersT>,
      PaymentSchedulesApi<DeSerializersT>,
      ContactPersonsApi<DeSerializersT>,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_PAYMENT_METHOD: new OneToOneLink(
        'CustomerPaymentMethod',
        this,
        linkedApis[0]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[1]),
      DELIVERY_TERMS: new OneToOneLink('DeliveryTerms', this, linkedApis[2]),
      DEFAULT_LEDGER_DIMENSION: new OneToOneLink(
        'DefaultLedgerDimension',
        this,
        linkedApis[3]
      ),
      SALES_ORDER_POOL: new OneToOneLink('SalesOrderPool', this, linkedApis[4]),
      DELIVERY_MODE: new OneToOneLink('DeliveryMode', this, linkedApis[5]),
      AGREEMENT_CUSTOMER: new OneToOneLink(
        'AgreementCustomer',
        this,
        linkedApis[6]
      ),
      CUSTOMER_PAYMENT_METHOD_SPECIFICATION: new OneToOneLink(
        'CustomerPaymentMethodSpecification',
        this,
        linkedApis[7]
      ),
      PAYMENT_SCHEDULE: new OneToOneLink(
        'PaymentSchedule',
        this,
        linkedApis[8]
      ),
      CONTACT_PERSON: new OneToOneLink('ContactPerson', this, linkedApis[9]),
      SALES_AGREEMENT_CONFIRMATION_LINES: new OneToManyLink(
        'SalesAgreementConfirmationLines',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = SalesAgreementConfirmations;

  requestBuilder(): SalesAgreementConfirmationsRequestBuilder<DeSerializersT> {
    return new SalesAgreementConfirmationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesAgreementConfirmations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesAgreementConfirmations<DeSerializersT>,
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
    typeof SalesAgreementConfirmations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesAgreementConfirmations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_AGREEMENT_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONFIRMATION_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_REFERENCE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_FIXED_EXCHANGE_RATE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_EFFECTIVE_DATE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCHANGE_RATE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TITLE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION_NAME: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REQUISITION_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPARER_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_EXPIRATION_DATE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMATION_CREATION_DATE_TIME: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_AGREEMENT_CONFIRMATION_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_POOL_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_COMMITMENT_TYPE: EnumField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      CommitmentType,
      true,
      true
    >;
    CAMPAIGN_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_AGREEMENT_CLASSIFICATION_NAME: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_SALES_REPRESENTATIVE_GROUP_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_STATUS: EnumField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      AgreementState,
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_AGREEMENT_SPECIFIC: EnumField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_DOCUMENT_REFERENCE: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SELLING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      SalesAgreementConfirmations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderPool} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_POOL: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      SalesOrderPoolsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link agreementCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGREEMENT_CUSTOMER: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      SalesAgreementConfirmations<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesAgreementConfirmations<DeSerializers>>;
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
         * Static representation of the {@link salesAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'SalesAgreementId',
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
         * Static representation of the {@link customerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CustomerReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyFixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_FIXED_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyFixedExchangeRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link isDeliveryAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceCustomerAccountNumber',
          'Edm.String',
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
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
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
         * Static representation of the {@link fixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'FixedExchangeRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link customerPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentMethodName',
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
         * Static representation of the {@link deliveryAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressName',
          'Edm.String',
          true
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
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
         * Static representation of the {@link documentTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TITLE: fieldBuilder.buildEdmTypeField(
          'DocumentTitle',
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
         * Static representation of the {@link customerPaymentMethodSpecificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_METHOD_SPECIFICATION_NAME:
          fieldBuilder.buildEdmTypeField(
            'CustomerPaymentMethodSpecificationName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link commissionCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CommissionCustomerGroupId',
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
         * Static representation of the {@link customerRequisitionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REQUISITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerRequisitionNumber',
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
         * Static representation of the {@link defaultExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultExpirationDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
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
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesAgreementConfirmationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_CONFIRMATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesAgreementConfirmationNumber',
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
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
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
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
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
         * Static representation of the {@link salesOrderPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_POOL_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderPoolId',
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
         * Static representation of the {@link defaultCommitmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COMMITMENT_TYPE: fieldBuilder.buildEnumField(
          'DefaultCommitmentType',
          CommitmentType,
          true
        ),
        /**
         * Static representation of the {@link campaignId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_ID: fieldBuilder.buildEdmTypeField(
          'CampaignId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesAgreementClassificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_CLASSIFICATION_NAME: fieldBuilder.buildEdmTypeField(
          'SalesAgreementClassificationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargeCustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionSalesRepresentativeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_SALES_REPRESENTATIVE_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'CommissionSalesRepresentativeGroupId',
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
         * Static representation of the {@link paymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsName',
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
         * Static representation of the {@link isDeliveryAddressAgreementSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_AGREEMENT_SPECIFIC: fieldBuilder.buildEnumField(
          'IsDeliveryAddressAgreementSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link agreementCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementCustomerAccountNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
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
         * Static representation of the {@link salesUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'SalesUnitId',
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
         * Static representation of the {@link orderResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderResponsiblePersonnelNumber',
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
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
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
         * Static representation of the {@link sellingLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELLING_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'SellingLegalEntityId',
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
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesAgreementConfirmations)
      };
    }

    return this._schema;
  }
}
