/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillParameters } from './SubBillParameters';
import { SubBillParametersRequestBuilder } from './SubBillParametersRequestBuilder';
import { NoYes } from './NoYes';
import { SubBillSupportAndRenewalQuantity } from './SubBillSupportAndRenewalQuantity';
import { SubBillShortTermUnbilledMethod } from './SubBillShortTermUnbilledMethod';
import { SubBillCpiIndexCalculation } from './SubBillCpiIndexCalculation';
import { SubBillProrationMethod } from './SubBillProrationMethod';
import { SubBillInvoiceBillingScheduleDateFilter } from './SubBillInvoiceBillingScheduleDateFilter';
import { SubBillSupDefaultStartDate } from './SubBillSupDefaultStartDate';
import { SubBillTerminationType } from './SubBillTerminationType';
import { SubBillInvTransType } from './SubBillInvTransType';
import { SubBillUniqueScheduleType } from './SubBillUniqueScheduleType';
import { SubBillCreditOption } from './SubBillCreditOption';
import { SubBillSupportRenewalFrequency } from './SubBillSupportRenewalFrequency';
import { SubBillPostSalesOrderOption } from './SubBillPostSalesOrderOption';
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
export class SubBillParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubBillParameters<DeSerializersT>, DeSerializersT>
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
  ): SubBillParametersApi<DeSerializersT> {
    return new SubBillParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillParameters;

  requestBuilder(): SubBillParametersRequestBuilder<DeSerializersT> {
    return new SubBillParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SubBillParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SubBillParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SubBillParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COPY_SERIAL_NUMBER: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_SCHEDULE_GROUP: OrderableEdmTypeField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_SALES_AGREEMENTS: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUPPORT_AND_RENEWAL_QUANTITY: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillSupportAndRenewalQuantity,
      true,
      true
    >;
    SHORT_TERM_UNBILLED_METHOD: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillShortTermUnbilledMethod,
      true,
      true
    >;
    CONSOLIDATE_BY_CUSTOMER: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HOLD: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UPDATE_FROM_TRADE_AGREEMENT_ONLY_AT_RENEWAL: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPI_INDEX_CALCULATION: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillCpiIndexCalculation,
      true,
      true
    >;
    PRORATION_METHOD: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillProrationMethod,
      true,
      true
    >;
    USE_WEIGHTED_TRADE_AGREEMENT_PRICE: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_DISCOUNT_IN_CALCULATION: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_TRADE_AGREEMENTS: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSOLIDATE_BY_ITEM: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATE_DEFERRAL_FOR_CREDIT: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_BILLING_SCHEDULE_DATE_FILTER: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillInvoiceBillingScheduleDateFilter,
      true,
      true
    >;
    USE_ACTIVE_STATUS_FOR_ON_HOLD_HEADER: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUPPORT_DEFAULT_START_DATE: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillSupDefaultStartDate,
      true,
      true
    >;
    PRORATE_DAILY: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TERMINATION_TYPE: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillTerminationType,
      true,
      true
    >;
    ONE_TIME_TERMINATE_WITH_REFUND: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALIGN_DEFERRAL_TO_BILLING: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INV_TRANS_TYPE: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillInvTransType,
      true,
      true
    >;
    UNIQUE_SCHEDULE_TYPE: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillUniqueScheduleType,
      true,
      true
    >;
    CREDIT_OPTION: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillCreditOption,
      true,
      true
    >;
    AUTO_POST_UNBILLED_REVENUE: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_ZERO_QTY: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALIGN_TO_MONTH: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADD_BILLING_DATES_TO_ITEM: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUPPORT_AND_RENEWAL_LEVEL: OrderableEdmTypeField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPLIT_BY_ITEM_GROUP: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_JOURNAL_NAME: OrderableEdmTypeField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_FREQUENCY: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillSupportRenewalFrequency,
      true,
      true
    >;
    ALIGN_BY_ITEM_GROUP: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_ENABLE_SUPPORT_AND_RENEWAL: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSOLIDATE_ALL_PERIODS: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RENEWAL_FREQUENCY: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillSupportRenewalFrequency,
      true,
      true
    >;
    ALIGN_TO_NEXT_UNBILLED_PERIOD: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_SPLIT: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_OPTION: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      SubBillPostSalesOrderOption,
      true,
      true
    >;
    PRORATE_PARTIAL_PERIODS: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVENUE_SPLIT_AUTOMATIC_ITEMS: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUPPRESS_CHILD_ITEMS: EnumField<
      SubBillParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillParameters<DeSerializers>>;
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
         * Static representation of the {@link copySerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_SERIAL_NUMBER: fieldBuilder.buildEnumField(
          'CopySerialNumber',
          NoYes,
          true
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
         * Static representation of the {@link useSalesAgreements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SALES_AGREEMENTS: fieldBuilder.buildEnumField(
          'UseSalesAgreements',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link supportAndRenewalQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_AND_RENEWAL_QUANTITY: fieldBuilder.buildEnumField(
          'SupportAndRenewalQuantity',
          SubBillSupportAndRenewalQuantity,
          true
        ),
        /**
         * Static representation of the {@link shortTermUnbilledMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_UNBILLED_METHOD: fieldBuilder.buildEnumField(
          'ShortTermUnbilledMethod',
          SubBillShortTermUnbilledMethod,
          true
        ),
        /**
         * Static representation of the {@link consolidateByCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATE_BY_CUSTOMER: fieldBuilder.buildEnumField(
          'ConsolidateByCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLD: fieldBuilder.buildEnumField('Hold', NoYes, true),
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
         * Static representation of the {@link cpiIndexCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPI_INDEX_CALCULATION: fieldBuilder.buildEnumField(
          'CPIIndexCalculation',
          SubBillCpiIndexCalculation,
          true
        ),
        /**
         * Static representation of the {@link prorationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATION_METHOD: fieldBuilder.buildEnumField(
          'ProrationMethod',
          SubBillProrationMethod,
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
         * Static representation of the {@link includeDiscountInCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_DISCOUNT_IN_CALCULATION: fieldBuilder.buildEnumField(
          'IncludeDiscountInCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useTradeAgreements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_TRADE_AGREEMENTS: fieldBuilder.buildEnumField(
          'UseTradeAgreements',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link consolidateByItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATE_BY_ITEM: fieldBuilder.buildEnumField(
          'ConsolidateByItem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link createDeferralForCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DEFERRAL_FOR_CREDIT: fieldBuilder.buildEnumField(
          'CreateDeferralForCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceBillingScheduleDateFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_BILLING_SCHEDULE_DATE_FILTER: fieldBuilder.buildEnumField(
          'InvoiceBillingScheduleDateFilter',
          SubBillInvoiceBillingScheduleDateFilter,
          true
        ),
        /**
         * Static representation of the {@link useActiveStatusForOnHoldHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ACTIVE_STATUS_FOR_ON_HOLD_HEADER: fieldBuilder.buildEnumField(
          'UseActiveStatusForOnHoldHeader',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link supportDefaultStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_DEFAULT_START_DATE: fieldBuilder.buildEnumField(
          'SupportDefaultStartDate',
          SubBillSupDefaultStartDate,
          true
        ),
        /**
         * Static representation of the {@link prorateDaily} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATE_DAILY: fieldBuilder.buildEnumField('ProrateDaily', NoYes, true),
        /**
         * Static representation of the {@link terminationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINATION_TYPE: fieldBuilder.buildEnumField(
          'TerminationType',
          SubBillTerminationType,
          true
        ),
        /**
         * Static representation of the {@link oneTimeTerminateWithRefund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_TERMINATE_WITH_REFUND: fieldBuilder.buildEnumField(
          'OneTimeTerminateWithRefund',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alignDeferralToBilling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGN_DEFERRAL_TO_BILLING: fieldBuilder.buildEnumField(
          'AlignDeferralToBilling',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INV_TRANS_TYPE: fieldBuilder.buildEnumField(
          'InvTransType',
          SubBillInvTransType,
          true
        ),
        /**
         * Static representation of the {@link uniqueScheduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_SCHEDULE_TYPE: fieldBuilder.buildEnumField(
          'UniqueScheduleType',
          SubBillUniqueScheduleType,
          true
        ),
        /**
         * Static representation of the {@link creditOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_OPTION: fieldBuilder.buildEnumField(
          'CreditOption',
          SubBillCreditOption,
          true
        ),
        /**
         * Static representation of the {@link autoPostUnbilledRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_POST_UNBILLED_REVENUE: fieldBuilder.buildEnumField(
          'AutoPostUnbilledRevenue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link excludeZeroQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_ZERO_QTY: fieldBuilder.buildEnumField(
          'ExcludeZeroQty',
          NoYes,
          true
        ),
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
         * Static representation of the {@link addBillingDatesToItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADD_BILLING_DATES_TO_ITEM: fieldBuilder.buildEnumField(
          'AddBillingDatesToItem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link supportAndRenewalLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_AND_RENEWAL_LEVEL: fieldBuilder.buildEdmTypeField(
          'SupportAndRenewalLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link splitByItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_BY_ITEM_GROUP: fieldBuilder.buildEnumField(
          'SplitByItemGroup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_FREQUENCY: fieldBuilder.buildEnumField(
          'SupportFrequency',
          SubBillSupportRenewalFrequency,
          true
        ),
        /**
         * Static representation of the {@link alignByItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGN_BY_ITEM_GROUP: fieldBuilder.buildEnumField(
          'AlignByItemGroup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link autoEnableSupportAndRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_ENABLE_SUPPORT_AND_RENEWAL: fieldBuilder.buildEnumField(
          'AutoEnableSupportAndRenewal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link consolidateAllPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATE_ALL_PERIODS: fieldBuilder.buildEnumField(
          'ConsolidateAllPeriods',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link renewalFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_FREQUENCY: fieldBuilder.buildEnumField(
          'RenewalFrequency',
          SubBillSupportRenewalFrequency,
          true
        ),
        /**
         * Static representation of the {@link alignToNextUnbilledPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGN_TO_NEXT_UNBILLED_PERIOD: fieldBuilder.buildEnumField(
          'AlignToNextUnbilledPeriod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_SPLIT: fieldBuilder.buildEnumField(
          'CustomerSplit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_OPTION: fieldBuilder.buildEnumField(
          'PostingOption',
          SubBillPostSalesOrderOption,
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
        /**
         * Static representation of the {@link revenueSplitAutomaticItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_SPLIT_AUTOMATIC_ITEMS: fieldBuilder.buildEnumField(
          'RevenueSplitAutomaticItems',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link suppressChildItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPRESS_CHILD_ITEMS: fieldBuilder.buildEnumField(
          'SuppressChildItems',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillParameters)
      };
    }

    return this._schema;
  }
}
