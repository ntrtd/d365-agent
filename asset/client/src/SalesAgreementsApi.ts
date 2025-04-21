/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesAgreements } from './SalesAgreements';
import { SalesAgreementsRequestBuilder } from './SalesAgreementsRequestBuilder';
import { SalesAgreementLinesApi } from './SalesAgreementLinesApi';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { ShippingCarriersApi } from './ShippingCarriersApi';
import { CurrenciesApi } from './CurrenciesApi';
import { ShippingCarrierServicesApi } from './ShippingCarrierServicesApi';
import { DeliveryTermsApi } from './DeliveryTermsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { SalesOrderPoolsApi } from './SalesOrderPoolsApi';
import { DeliveryModesV2Api } from './DeliveryModesV2Api';
import { CustomersV3Api } from './CustomersV3Api';
import { CustomerPaymentMethodSpecificationsApi } from './CustomerPaymentMethodSpecificationsApi';
import { PaymentSchedulesApi } from './PaymentSchedulesApi';
import { TransportationRoutePlansApi } from './TransportationRoutePlansApi';
import { ShippingCarrierServicesGroupsApi } from './ShippingCarrierServicesGroupsApi';
import { ContactPersonsApi } from './ContactPersonsApi';
import { AgreementState } from './AgreementState';
import { NoYes } from './NoYes';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { CommitmentType } from './CommitmentType';
import { AgencyAgreementRu } from './AgencyAgreementRu';
import { Timezone } from './Timezone';
import { SalesInvoicePostingTypeRu } from './SalesInvoicePostingTypeRu';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesAgreements<DeSerializersT>, DeSerializersT>
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
  ): SalesAgreementsApi<DeSerializersT> {
    return new SalesAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderPool} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_POOL: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      SalesOrderPoolsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link agreementCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGREEMENT_CUSTOMER: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationRoutePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_ROUTE_PLAN: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      TransportationRoutePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierServiceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE_GROUP: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesAgreementLinesApi<DeSerializersT>,
      CustomerPaymentMethodsApi<DeSerializersT>,
      ShippingCarriersApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      ShippingCarrierServicesApi<DeSerializersT>,
      DeliveryTermsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      SalesOrderPoolsApi<DeSerializersT>,
      DeliveryModesV2Api<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      CustomerPaymentMethodSpecificationsApi<DeSerializersT>,
      PaymentSchedulesApi<DeSerializersT>,
      TransportationRoutePlansApi<DeSerializersT>,
      ShippingCarrierServicesGroupsApi<DeSerializersT>,
      ContactPersonsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_AGREEMENT_LINES: new OneToManyLink(
        'SalesAgreementLines',
        this,
        linkedApis[0]
      ),
      CUSTOMER_PAYMENT_METHOD: new OneToOneLink(
        'CustomerPaymentMethod',
        this,
        linkedApis[1]
      ),
      SHIPPING_CARRIER: new OneToOneLink(
        'ShippingCarrier',
        this,
        linkedApis[2]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[3]),
      SHIPPING_CARRIER_SERVICE: new OneToOneLink(
        'ShippingCarrierService',
        this,
        linkedApis[4]
      ),
      DELIVERY_TERMS: new OneToOneLink('DeliveryTerms', this, linkedApis[5]),
      DEFAULT_LEDGER_DIMENSION: new OneToOneLink(
        'DefaultLedgerDimension',
        this,
        linkedApis[6]
      ),
      SALES_ORDER_POOL: new OneToOneLink('SalesOrderPool', this, linkedApis[7]),
      DELIVERY_MODE: new OneToOneLink('DeliveryMode', this, linkedApis[8]),
      AGREEMENT_CUSTOMER: new OneToOneLink(
        'AgreementCustomer',
        this,
        linkedApis[9]
      ),
      CUSTOMER_PAYMENT_METHOD_SPECIFICATION: new OneToOneLink(
        'CustomerPaymentMethodSpecification',
        this,
        linkedApis[10]
      ),
      PAYMENT_SCHEDULE: new OneToOneLink(
        'PaymentSchedule',
        this,
        linkedApis[11]
      ),
      TRANSPORTATION_ROUTE_PLAN: new OneToOneLink(
        'TransportationRoutePlan',
        this,
        linkedApis[12]
      ),
      SHIPPING_CARRIER_SERVICE_GROUP: new OneToOneLink(
        'ShippingCarrierServiceGroup',
        this,
        linkedApis[13]
      ),
      CONTACT_PERSON: new OneToOneLink('ContactPerson', this, linkedApis[14])
    };
    return this;
  }

  entityConstructor = SalesAgreements;

  requestBuilder(): SalesAgreementsRequestBuilder<DeSerializersT> {
    return new SalesAgreementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesAgreements<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesAgreements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesAgreements, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_AGREEMENT_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_UNIT_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_FIXED_EXCHANGE_RATE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTERNET_ADDRESS: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_STATUS: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      AgreementState,
      true,
      true
    >;
    AGREEMENT_VAT_AMOUNT: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_ROUTE_PLAN_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TITLE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCHANGE_RATE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_DIFFERENCE_IN_TAX_ACCOUNTING: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KIND_OF_ACTIVITY: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_WITH_PREPAYMENT_JOURNAL_VOUCHER: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_PHONE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_EXPIRATION_DATE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_COMMITMENT_TYPE: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      CommitmentType,
      true,
      true
    >;
    SALES_ORDER_POOL_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_EFFECTIVE_DATE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYM_DAY: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION_NAME: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_SALES_REPRESENTATIVE_GROUP_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_PROFILE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCLUDE_FROM_RESERVE_IN_BUSINESS_ACCOUNTING: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_FROM_RESERVE_IN_TAX_ACCOUNTING: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_REFERENCE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_MODE_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_AGREEMENT_SPECIFIC: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTENSION: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_AGREEMENT_CLASSIFICATION_NAME: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_AGREEMENT: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      AgencyAgreementRu,
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REQUISITION_NUMBER: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SELLING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_CALCULATION_EXCLUDE_LINE_BY_DEFAULT: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMISSION_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPARER_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAMPAIGN_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_TYPE: EnumField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      SalesInvoicePostingTypeRu,
      true,
      true
    >;
    ORDER_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_GROUP_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_TEMPLATE_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEX_NUMBER: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBJECT_OF_AN_AGREEMENT: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_SUM: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FAX: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_DATE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_DOCUMENT_REFERENCE: OrderableEdmTypeField<
      SalesAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderPool} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_POOL: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      SalesOrderPoolsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link agreementCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGREEMENT_CUSTOMER: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationRoutePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_ROUTE_PLAN: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      TransportationRoutePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierServiceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE_GROUP: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      SalesAgreements<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesAgreements<DeSerializers>>;
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
         * Static representation of the {@link salesUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'SalesUnitId',
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
         * Static representation of the {@link internetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InternetAddress',
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
         * Static representation of the {@link agreementVatAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_VAT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AgreementVatAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
          true
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
         * Static representation of the {@link transportationRoutePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_ROUTE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'TransportationRoutePlanId',
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
         * Static representation of the {@link lineOfBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_OF_BUSINESS: fieldBuilder.buildEdmTypeField(
          'LineOfBusiness',
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
         * Static representation of the {@link shippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceId',
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
         * Static representation of the {@link fixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'FixedExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link creditLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT: fieldBuilder.buildEdmTypeField(
          'CreditLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          true
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
         * Static representation of the {@link amountDifferenceInTaxAccounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DIFFERENCE_IN_TAX_ACCOUNTING: fieldBuilder.buildEnumField(
          'AmountDifferenceInTaxAccounting',
          NoYes,
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
         * Static representation of the {@link kindOfActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIND_OF_ACTIVITY: fieldBuilder.buildEnumField(
          'KindOfActivity',
          InventProfileTypeRu,
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
         * Static representation of the {@link postingProfileWithPrepaymentJournalVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_WITH_PREPAYMENT_JOURNAL_VOUCHER:
          fieldBuilder.buildEdmTypeField(
            'PostingProfileWithPrepaymentJournalVoucher',
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
         * Static representation of the {@link invoiceCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceCustomerAccountNumber',
          'Edm.String',
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
         * Static representation of the {@link mobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_PHONE: fieldBuilder.buildEdmTypeField(
          'MobilePhone',
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
         * Static representation of the {@link defaultCommitmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COMMITMENT_TYPE: fieldBuilder.buildEnumField(
          'DefaultCommitmentType',
          CommitmentType,
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
         * Static representation of the {@link defaultEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_DAY: fieldBuilder.buildEdmTypeField('PaymDay', 'Edm.String', true),
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
         * Static representation of the {@link inventoryProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE: fieldBuilder.buildEdmTypeField(
          'InventoryProfile',
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
         * Static representation of the {@link excludeFromReserveInBusinessAccounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_FROM_RESERVE_IN_BUSINESS_ACCOUNTING:
          fieldBuilder.buildEnumField(
            'ExcludeFromReserveInBusinessAccounting',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link excludeFromReserveInTaxAccounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_FROM_RESERVE_IN_TAX_ACCOUNTING: fieldBuilder.buildEnumField(
          'ExcludeFromReserveInTaxAccounting',
          NoYes,
          true
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
         * Static representation of the {@link transportationModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_MODE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationModeId',
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
         * Static representation of the {@link deliveryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link extension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION: fieldBuilder.buildEdmTypeField(
          'Extension',
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
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_AGREEMENT: fieldBuilder.buildEnumField(
          'CommissionAgreement',
          AgencyAgreementRu,
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
         * Static representation of the {@link customerRequisitionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REQUISITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerRequisitionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
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
         * Static representation of the {@link sellingLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELLING_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'SellingLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willRebateCalculationExcludeLineByDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_CALCULATION_EXCLUDE_LINE_BY_DEFAULT:
          fieldBuilder.buildEnumField(
            'WillRebateCalculationExcludeLineByDefault',
            NoYes,
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
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
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
         * Static representation of the {@link campaignId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_ID: fieldBuilder.buildEdmTypeField(
          'CampaignId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TYPE: fieldBuilder.buildEnumField(
          'PostingType',
          SalesInvoicePostingTypeRu,
          true
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
         * Static representation of the {@link deliveryAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierServiceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telexNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEX_NUMBER: fieldBuilder.buildEdmTypeField(
          'TelexNumber',
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
         * Static representation of the {@link chargeCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargeCustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subjectOfAnAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT_OF_AN_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'SubjectOfAnAgreement',
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
         * Static representation of the {@link agreementSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_SUM: fieldBuilder.buildEdmTypeField(
          'AgreementSum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
        /**
         * Static representation of the {@link agreementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'AgreementDate',
          'Edm.DateTimeOffset',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesAgreements)
      };
    }

    return this._schema;
  }
}
