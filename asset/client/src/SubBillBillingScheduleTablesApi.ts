/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillBillingScheduleTables } from './SubBillBillingScheduleTables';
import { SubBillBillingScheduleTablesRequestBuilder } from './SubBillBillingScheduleTablesRequestBuilder';
import { SubBillBillingScheduleLinesApi } from './SubBillBillingScheduleLinesApi';
import { SubBillAllocMeaType } from './SubBillAllocMeaType';
import { SubBillFrequency } from './SubBillFrequency';
import { NoYes } from './NoYes';
import { InvoiceOrderAccount } from './InvoiceOrderAccount';
import { SubBillInvTransType } from './SubBillInvTransType';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SubBillBillingScheduleTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillBillingScheduleTables<DeSerializersT>, DeSerializersT>
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
  ): SubBillBillingScheduleTablesApi<DeSerializersT> {
    return new SubBillBillingScheduleTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link relationToSubBillScheduleTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATION_TO_SUB_BILL_SCHEDULE_TABLE_ENTITY: OneToManyLink<
      SubBillBillingScheduleTables<DeSerializersT>,
      DeSerializersT,
      SubBillBillingScheduleLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillBillingScheduleLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELATION_TO_SUB_BILL_SCHEDULE_TABLE_ENTITY: new OneToManyLink(
        'RelationToSubBillScheduleTableEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillBillingScheduleTables;

  requestBuilder(): SubBillBillingScheduleTablesRequestBuilder<DeSerializersT> {
    return new SubBillBillingScheduleTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillBillingScheduleTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillBillingScheduleTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillBillingScheduleTables<DeSerializersT>,
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
    typeof SubBillBillingScheduleTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillBillingScheduleTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_SCHEDULE_GROUP: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MILESTONE_TEMPLATE: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_CLASSIFICATION: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_START_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEA_TYPE: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      SubBillAllocMeaType,
      true,
      true
    >;
    MEA_NUMBER: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_START_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_FREQUENCY: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      SubBillFrequency,
      true,
      true
    >;
    DELIVERY_STATE: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POSTAL_CODE: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_COMPLETION_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTNER_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_FROM_TRADE_AGREEMENT_ONLY_AT_RENEWAL: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_END_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_ADDRESS_NAME: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_WEIGHTED_TRADE_AGREEMENT_PRICE: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_REQUISITION: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_SEPARATELY: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_USER_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      InvoiceOrderAccount,
      true,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_PERIODS: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_DELIVERY_ADDRESS: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_INTERVAL: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELIVERY_CITY: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALIGN_TO_MONTH: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_ADDRESS_REC_ID: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHEDULE: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_TRANSACTION_TYPE: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      SubBillInvTransType,
      true,
      true
    >;
    DELIVERY_STREET: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULE_STATUS: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      SubBillScheduleStatus,
      true,
      true
    >;
    DEFERRED_CONTRACT_REVENUE_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_AGREEMENT_NUMBER: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRORATE_PARTIAL_PERIODS: EnumField<
      SubBillBillingScheduleTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relationToSubBillScheduleTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATION_TO_SUB_BILL_SCHEDULE_TABLE_ENTITY: OneToManyLink<
      SubBillBillingScheduleTables<DeSerializersT>,
      DeSerializersT,
      SubBillBillingScheduleLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillBillingScheduleTables<DeSerializers>>;
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
         * Static representation of the {@link scheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billingScheduleGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_SCHEDULE_GROUP: fieldBuilder.buildEdmTypeField(
          'BillingScheduleGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link milestoneTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILESTONE_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'MilestoneTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'BillingClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_START_DATE: fieldBuilder.buildEdmTypeField(
          'ContractStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link methodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'MethodOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link meaType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEA_TYPE: fieldBuilder.buildEnumField(
          'MEAType',
          SubBillAllocMeaType,
          true
        ),
        /**
         * Static representation of the {@link meaNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEA_NUMBER: fieldBuilder.buildEdmTypeField(
          'MEANumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_START_DATE: fieldBuilder.buildEdmTypeField(
          'BillingStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link billingFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_FREQUENCY: fieldBuilder.buildEnumField(
          'BillingFrequency',
          SubBillFrequency,
          true
        ),
        /**
         * Static representation of the {@link deliveryState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STATE: fieldBuilder.buildEdmTypeField(
          'DeliveryState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryPostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractCompletionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_COMPLETION_DATE: fieldBuilder.buildEdmTypeField(
          'ContractCompletionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link partnerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PartnerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link updateFromTradeAgreementOnlyAtRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_FROM_TRADE_AGREEMENT_ONLY_AT_RENEWAL:
          fieldBuilder.buildEnumField(
            'UpdateFromTradeAgreementOnlyAtRenewal',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link billingEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_END_DATE: fieldBuilder.buildEdmTypeField(
          'BillingEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link billingAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'BillingAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useWeightedTradeAgreementPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_WEIGHTED_TRADE_AGREEMENT_PRICE: fieldBuilder.buildEnumField(
          'UseWeightedTradeAgreementPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerRequisition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REQUISITION: fieldBuilder.buildEdmTypeField(
          'CustomerRequisition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceSeparately} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_SEPARATELY: fieldBuilder.buildEnumField(
          'InvoiceSeparately',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link endUserAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_USER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EndUserAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS: fieldBuilder.buildEnumField(
          'InvoiceAddress',
          InvoiceOrderAccount,
          true
        ),
        /**
         * Static representation of the {@link customerRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REF: fieldBuilder.buildEdmTypeField(
          'CustomerRef',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PERIODS: fieldBuilder.buildEdmTypeField(
          'NumberOfPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOneTimeDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_DELIVERY_ADDRESS: fieldBuilder.buildEnumField(
          'IsOneTimeDeliveryAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_INTERVAL: fieldBuilder.buildEdmTypeField(
          'BillingInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link deliveryCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link alignToMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGN_TO_MONTH: fieldBuilder.buildEnumField(
          'AlignToMonth',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link billingAddressRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_ADDRESS_REC_ID: fieldBuilder.buildEdmTypeField(
          'BillingAddressRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link paymentSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'PaymentSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'InvoiceTransactionType',
          SubBillInvTransType,
          true
        ),
        /**
         * Static representation of the {@link deliveryStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduleStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_STATUS: fieldBuilder.buildEnumField(
          'ScheduleStatus',
          SubBillScheduleStatus,
          true
        ),
        /**
         * Static representation of the {@link deferredContractRevenueAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_CONTRACT_REVENUE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DeferredContractRevenueAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesAgreementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesAgreementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
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
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
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
         * Static representation of the {@link proratePartialPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATE_PARTIAL_PERIODS: fieldBuilder.buildEnumField(
          'ProratePartialPeriods',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillBillingScheduleTables)
      };
    }

    return this._schema;
  }
}
