/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillScheduleTableBiEntities } from './SubBillScheduleTableBiEntities';
import { SubBillScheduleTableBiEntitiesRequestBuilder } from './SubBillScheduleTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { SubBillInvTransType } from './SubBillInvTransType';
import { SubBillCpiIndexCalculation } from './SubBillCpiIndexCalculation';
import { InvoiceOrderAccount } from './InvoiceOrderAccount';
import { SubBillFrequency } from './SubBillFrequency';
import { SubBillTerminationType } from './SubBillTerminationType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class SubBillScheduleTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillScheduleTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SubBillScheduleTableBiEntitiesApi<DeSerializersT> {
    return new SubBillScheduleTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillScheduleTableBiEntities;

  requestBuilder(): SubBillScheduleTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new SubBillScheduleTableBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillScheduleTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillScheduleTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillScheduleTableBiEntities<DeSerializersT>,
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
    typeof SubBillScheduleTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillScheduleTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUB_BILL_BILLING_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYM_TERM_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_CONTRACT_COMPLETION_DATE: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_CLASSIFICATION: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_ADDRESS: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_START_DATE: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_PARTNER_COMMISSION_RATE: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_ADDRESS_NAME: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_ALIGN_TO_MONTH: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_INV_TRANS_TYPE: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillInvTransType,
      true,
      true
    >;
    SUB_BILL_AUTO_RENEW: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_FROM_TRADE_AGREEMENT_ONLY_AT_RENEWAL: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_PARTNER_ACCOUNT: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_TERMINATION_DATE: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_INTERVAL: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_WEIGHTED_TRADE_AGREEMENT_PRICE: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_CPI_INDEX_CALCULATION: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillCpiIndexCalculation,
      true,
      true
    >;
    CUSTOMER_REQUISITION: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_CONTRACT_START_DATE: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ADDRESS: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      InvoiceOrderAccount,
      true,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_INVOICE_PROJ_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYM_SCHED: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_CURRENCY_CODE: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_PRORATE_PARTIAL_PERIOD: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_FREQUENCY: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillFrequency,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_LINES_PER_RENEWAL: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUB_BILL_MILESTONE_TEMPLATE_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_NUM_OF_PERIODS: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUB_BILL_SCHEDULE_GROUP: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_TERMINATION_TYPE: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillTerminationType,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FUNDING_SOURCE_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCHING_AGREEMENT: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_END_DATE: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_SCHEDULE_STATUS: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillScheduleStatus,
      true,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_END_USER_ACCOUNT: OrderableEdmTypeField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_INVOICE_SEPARATELY: EnumField<
      SubBillScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillScheduleTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link subBillBillingScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_BILLING_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubBillBillingScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_TERM_ID: fieldBuilder.buildEdmTypeField(
          'PaymTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillContractCompletionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CONTRACT_COMPLETION_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillContractCompletionDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link subBillAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'SubBillAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_START_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillPartnerCommissionRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_PARTNER_COMMISSION_RATE: fieldBuilder.buildEdmTypeField(
          'SubBillPartnerCommissionRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'SubBillAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillAlignToMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ALIGN_TO_MONTH: fieldBuilder.buildEnumField(
          'SubBillAlignToMonth',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillInvTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_INV_TRANS_TYPE: fieldBuilder.buildEnumField(
          'SubBillInvTransType',
          SubBillInvTransType,
          true
        ),
        /**
         * Static representation of the {@link subBillAutoRenew} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_AUTO_RENEW: fieldBuilder.buildEnumField(
          'SubBillAutoRenew',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'PaymMode',
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
         * Static representation of the {@link subBillPartnerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_PARTNER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillPartnerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillTerminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_TERMINATION_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillTerminationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_INTERVAL: fieldBuilder.buildEdmTypeField(
          'SubBillInterval',
          'Edm.Int32',
          false
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
         * Static representation of the {@link subBillCpiIndexCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CPI_INDEX_CALCULATION: fieldBuilder.buildEnumField(
          'SubBillCPIIndexCalculation',
          SubBillCpiIndexCalculation,
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
         * Static representation of the {@link subBillContractStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CONTRACT_START_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillContractStartDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link projInvoiceProjId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_PROJ_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceProjId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymSched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SCHED: fieldBuilder.buildEdmTypeField(
          'PaymSched',
          'Edm.String',
          true
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
         * Static representation of the {@link custCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CustCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillProratePartialPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_PRORATE_PARTIAL_PERIOD: fieldBuilder.buildEnumField(
          'SubBillProratePartialPeriod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link subBillFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_FREQUENCY: fieldBuilder.buildEnumField(
          'SubBillFrequency',
          SubBillFrequency,
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillLinesPerRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_LINES_PER_RENEWAL: fieldBuilder.buildEdmTypeField(
          'SubBillLinesPerRenewal',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link subBillMilestoneTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MILESTONE_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'SubBillMilestoneTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillNumOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_NUM_OF_PERIODS: fieldBuilder.buildEdmTypeField(
          'SubBillNumOfPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link subBillScheduleGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SCHEDULE_GROUP: fieldBuilder.buildEdmTypeField(
          'SubBillScheduleGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillTerminationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_TERMINATION_TYPE: fieldBuilder.buildEnumField(
          'SubBillTerminationType',
          SubBillTerminationType,
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link fundingSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDING_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'FundingSourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matchingAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'MatchingAgreement',
          'Edm.Int64',
          false
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
         * Static representation of the {@link subBillEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_END_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillEndDate',
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
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link subBillScheduleStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SCHEDULE_STATUS: fieldBuilder.buildEnumField(
          'SubBillScheduleStatus',
          SubBillScheduleStatus,
          true
        ),
        /**
         * Static representation of the {@link addressRefTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link addressRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillEndUserAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_END_USER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillEndUserAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillInvoiceSeparately} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_INVOICE_SEPARATELY: fieldBuilder.buildEnumField(
          'SubBillInvoiceSeparately',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillScheduleTableBiEntities)
      };
    }

    return this._schema;
  }
}
