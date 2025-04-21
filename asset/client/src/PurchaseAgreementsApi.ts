/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseAgreements } from './PurchaseAgreements';
import { PurchaseAgreementsRequestBuilder } from './PurchaseAgreementsRequestBuilder';
import { PurchaseAgreementConfirmationLinesApi } from './PurchaseAgreementConfirmationLinesApi';
import { TransportationRoutePlansApi } from './TransportationRoutePlansApi';
import { PaymentSchedulesApi } from './PaymentSchedulesApi';
import { VendorBankAccountsApi } from './VendorBankAccountsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { PaymentTermsApi } from './PaymentTermsApi';
import { ShippingCarrierServicesApi } from './ShippingCarrierServicesApi';
import { ShippingCarriersApi } from './ShippingCarriersApi';
import { WorkersApi } from './WorkersApi';
import { ContactPersonsApi } from './ContactPersonsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProjectsApi } from './ProjectsApi';
import { DeliveryModesV2Api } from './DeliveryModesV2Api';
import { CashDiscountsApi } from './CashDiscountsApi';
import { DeliveryTermsApi } from './DeliveryTermsApi';
import { ShippingCarrierServicesGroupsApi } from './ShippingCarrierServicesGroupsApi';
import { VendorPaymentMethodsApi } from './VendorPaymentMethodsApi';
import { VendorPaymentMethodSpecificationsApi } from './VendorPaymentMethodSpecificationsApi';
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
export class PurchaseAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PurchaseAgreements<DeSerializersT>, DeSerializersT>
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
  ): PurchaseAgreementsApi<DeSerializersT> {
    return new PurchaseAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationRoutePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_ROUTE_PLAN: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      TransportationRoutePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_BANK_ACCOUNT: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      VendorBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_RESPONSIBLE_WORKER: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimensionDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION_DIMENSION_SET: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link secondaryResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECONDARY_RESPONSIBLE_WORKER: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_DISCOUNT: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      CashDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierServiceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE_GROUP: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD_SPECIFICATION: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodSpecificationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>,
      TransportationRoutePlansApi<DeSerializersT>,
      PaymentSchedulesApi<DeSerializersT>,
      VendorBankAccountsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      PaymentTermsApi<DeSerializersT>,
      ShippingCarrierServicesApi<DeSerializersT>,
      ShippingCarriersApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      ContactPersonsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      DeliveryModesV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      CashDiscountsApi<DeSerializersT>,
      DeliveryTermsApi<DeSerializersT>,
      ShippingCarrierServicesGroupsApi<DeSerializersT>,
      VendorPaymentMethodsApi<DeSerializersT>,
      VendorPaymentMethodSpecificationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_LINES_V_2: new OneToManyLink(
        'PurchaseAgreementLinesV2',
        this,
        linkedApis[0]
      ),
      TRANSPORTATION_ROUTE_PLAN: new OneToOneLink(
        'TransportationRoutePlan',
        this,
        linkedApis[1]
      ),
      PAYMENT_SCHEDULE: new OneToOneLink(
        'PaymentSchedule',
        this,
        linkedApis[2]
      ),
      VENDOR_BANK_ACCOUNT: new OneToOneLink(
        'VendorBankAccount',
        this,
        linkedApis[3]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[4]),
      PAYMENT_TERMS: new OneToOneLink('PaymentTerms', this, linkedApis[5]),
      SHIPPING_CARRIER_SERVICE: new OneToOneLink(
        'ShippingCarrierService',
        this,
        linkedApis[6]
      ),
      SHIPPING_CARRIER: new OneToOneLink(
        'ShippingCarrier',
        this,
        linkedApis[7]
      ),
      PRIMARY_RESPONSIBLE_WORKER: new OneToOneLink(
        'PrimaryResponsibleWorker',
        this,
        linkedApis[8]
      ),
      CONTACT_PERSON: new OneToOneLink('ContactPerson', this, linkedApis[9]),
      DEFAULT_LEDGER_DIMENSION_DIMENSION_SET: new OneToOneLink(
        'DefaultLedgerDimensionDimensionSet',
        this,
        linkedApis[10]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[11]),
      DELIVERY_MODE: new OneToOneLink('DeliveryMode', this, linkedApis[12]),
      SECONDARY_RESPONSIBLE_WORKER: new OneToOneLink(
        'SecondaryResponsibleWorker',
        this,
        linkedApis[13]
      ),
      CASH_DISCOUNT: new OneToOneLink('CashDiscount', this, linkedApis[14]),
      DELIVERY_TERMS: new OneToOneLink('DeliveryTerms', this, linkedApis[15]),
      SHIPPING_CARRIER_SERVICE_GROUP: new OneToOneLink(
        'ShippingCarrierServiceGroup',
        this,
        linkedApis[16]
      ),
      VENDOR_PAYMENT_METHOD: new OneToOneLink(
        'VendorPaymentMethod',
        this,
        linkedApis[17]
      ),
      VENDOR_PAYMENT_METHOD_SPECIFICATION: new OneToOneLink(
        'VendorPaymentMethodSpecification',
        this,
        linkedApis[18]
      )
    };
    return this;
  }

  entityConstructor = PurchaseAgreements;

  requestBuilder(): PurchaseAgreementsRequestBuilder<DeSerializersT> {
    return new PurchaseAgreementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PurchaseAgreements<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseAgreements<DeSerializersT>,
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
    typeof PurchaseAgreements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_AGREEMENT_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_PURPOSE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNET_ADDRESS: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_STATUS: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      AgreementState,
      true,
      true
    >;
    BUYING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_VAT_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_PAYMENT_METHOD_SPECIFICATION_NAME: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INTEREST_BASED_ON_CENTRAL_EUROPEAN_BANK: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_CONTRACT_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_ROUTE_PLAN_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_CLASSIFICATION: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_OF_BUSINESS: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_AGREEMENT_CLASSIFICATION_NAME: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TITLE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CALENDAR_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_DIFFERENCE_IN_TAX_ACCOUNTING: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_CITY_IN_KANA: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KIND_OF_ACTIVITY: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_WITH_PREPAYMENT_JOURNAL_VOUCHER: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AGREEMENT_RENEWABLE: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_CONTRACT_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MOBILE_PHONE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_EXPIRATION_DATE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_COMMITMENT_TYPE: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      CommitmentType,
      true,
      true
    >;
    PURCHASE_RESPONSIBLE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_EFFECTIVE_DATE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYM_DAY: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REFERENCE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_PROFILE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_WORKFLOW_STATUS: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      PurchAgreementWorkflowStatus,
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCLUDE_FROM_RESERVE_IN_BUSINESS_ACCOUNTING: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_FROM_RESERVE_IN_TAX_ACCOUNTING: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_MODE_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECONDARY_RESPONSIBLE_WORKER_NAME: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_AGREEMENT_SPECIFIC: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_ORDER_POOL_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTENSION: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STREET_IN_KANA: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_AGREEMENT: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      AgencyAgreementRu,
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_CHARGE: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      VatChargeSourceRu,
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    VAT_OPERATION_CODE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPARER_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASING_PROCEDURE_TYPE: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      PurchAgreementTypePsn,
      true,
      true
    >;
    CHARGE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_GROUP_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_RESPONSIBLE_WORKER_NAME: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_TEMPLATE_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEX_NUMBER: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBJECT_OF_AN_AGREEMENT: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_SUM: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGREEMENT_DATE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FAX: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_DOCUMENT_REFERENCE: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUYER_GROUP_ID: OrderableEdmTypeField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCHING_POLICY: EnumField<
      PurchaseAgreements<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyWithNotSetOption,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationRoutePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_ROUTE_PLAN: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      TransportationRoutePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_BANK_ACCOUNT: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      VendorBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_RESPONSIBLE_WORKER: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ContactPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimensionDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION_DIMENSION_SET: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link secondaryResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECONDARY_RESPONSIBLE_WORKER: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_DISCOUNT: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      CashDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierServiceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE_GROUP: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentMethodSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD_SPECIFICATION: OneToOneLink<
      PurchaseAgreements<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodSpecificationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseAgreements<DeSerializers>>;
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
         * Static representation of the {@link purchasingPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PurchasingPurpose',
          'Edm.String',
          true
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
         * Static representation of the {@link buyingLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYING_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'BuyingLegalEntityId',
          'Edm.String',
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
         * Static representation of the {@link transportationRoutePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_ROUTE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'TransportationRoutePlanId',
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
         * Static representation of the {@link lineOfBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_OF_BUSINESS: fieldBuilder.buildEdmTypeField(
          'LineOfBusiness',
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
         * Static representation of the {@link shippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'ShipCalendarId',
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
         * Static representation of the {@link deliveryCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryCityInKana',
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
         * Static representation of the {@link purchaseResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'PurchaseResponsible',
          'Edm.Int64',
          false
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
         * Static representation of the {@link vendorReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REFERENCE: fieldBuilder.buildEdmTypeField(
          'VendorReference',
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
         * Static representation of the {@link agreementWorkflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'AgreementWorkflowStatus',
          PurchAgreementWorkflowStatus,
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
         * Static representation of the {@link secondaryResponsibleWorkerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_RESPONSIBLE_WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'SecondaryResponsibleWorkerName',
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
         * Static representation of the {@link deliveryBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryBuildingCompliment',
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
         * Static representation of the {@link extension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION: fieldBuilder.buildEdmTypeField(
          'Extension',
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
         * Static representation of the {@link deliveryStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryStreetInKana',
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
         * Static representation of the {@link vatCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_CHARGE: fieldBuilder.buildEnumField(
          'VATCharge',
          VatChargeSourceRu,
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
         * Static representation of the {@link vatOperationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_OPERATION_CODE: fieldBuilder.buildEdmTypeField(
          'VATOperationCode',
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
         * Static representation of the {@link purchasingProcedureType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_PROCEDURE_TYPE: fieldBuilder.buildEnumField(
          'PurchasingProcedureType',
          PurchAgreementTypePsn,
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
         * Static representation of the {@link shippingCarrierServiceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryResponsibleWorkerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_RESPONSIBLE_WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'PrimaryResponsibleWorkerName',
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
         * Static representation of the {@link subjectOfAnAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT_OF_AN_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'SubjectOfAnAgreement',
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
         * Static representation of the {@link agreementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'AgreementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
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
        /**
         * Static representation of the {@link matchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_POLICY: fieldBuilder.buildEnumField(
          'MatchingPolicy',
          PurchMatchingPolicyWithNotSetOption,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchaseAgreements)
      };
    }

    return this._schema;
  }
}
