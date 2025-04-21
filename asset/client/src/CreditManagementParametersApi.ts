/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditManagementParameters } from './CreditManagementParameters';
import { CreditManagementParametersRequestBuilder } from './CreditManagementParametersRequestBuilder';
import { NoYes } from './NoYes';
import { DateTransactionDuedate } from './DateTransactionDuedate';
import { CredManBlockingCalcBase } from './CredManBlockingCalcBase';
import { CredManAutoPost } from './CredManAutoPost';
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
export class CreditManagementParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CreditManagementParameters<DeSerializersT>, DeSerializersT>
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
  ): CreditManagementParametersApi<DeSerializersT> {
    return new CreditManagementParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CreditManagementParameters;

  requestBuilder(): CreditManagementParametersRequestBuilder<DeSerializersT> {
    return new CreditManagementParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CreditManagementParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CreditManagementParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditManagementParameters<DeSerializersT>,
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
    typeof CreditManagementParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditManagementParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_ID: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_CREDIT_LIMIT_WITH_POST_LOAD_VALIDATION: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_ALLOW_MANUAL_EDITING: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TARGET_DATE_TRANSACTION_DUE_DATE: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      DateTransactionDuedate,
      true,
      true
    >;
    COD_PAYM_TERM: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_AGEING: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARGIN_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_REASON_READY: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_FROM: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AVG_BAL_ONE_MONTH: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RELEASE_REASON_CANCEL: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_AT_PICKING_LIST: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_CREDIT_CHECK_WHEN_REDUCING_PACKING_SLIP: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_CREDIT_CHECK: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CROSS_COMPANY_CREDIT_CHECK: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_SALES_ORDER_LESS_THAN: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DAY_SALES_OUTSTANDING_TWO: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_CONFIRMATION: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DAY_SALES_OUTSTANDING_ONE: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SKIP_CREDIT_CHECK_WHEN_CANCELING_PACKING_SLIP: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_ACCOUNT_LESS_THAN: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCLUDE_CREDIT_BALANCE: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_EXCH_RATE_TYPE_NAME: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVG_CREDIT_LIMIT_PERCENT_MONTHS: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RELEASE_REASON_ORDER_MODIFIED: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_PAYM_TERM_INCREASE: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BLOCKING_CALC_BASE: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      CredManBlockingCalcBase,
      true,
      true
    >;
    DELETE_BLOCKED_LOAD_LINES: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_CASH_DISC_INCREASE: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_OVERDUE_LESS_THAN: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AVG_BAL_TWO_MONTHS: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_BLANK_CREDIT_LIMIT_EXPIRY_DATE: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AVG_EXPOSURE_PERCENT_MONTHS: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD_TO: OrderableEdmTypeField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AUTO_POST: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      CredManAutoPost,
      true,
      true
    >;
    ALLOW_EDIT_SALES_ORDER: EnumField<
      CreditManagementParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CreditManagementParameters<DeSerializers>>;
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
         * Static representation of the {@link periodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkCreditLimitWithPostLoadValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_CREDIT_LIMIT_WITH_POST_LOAD_VALIDATION:
          fieldBuilder.buildEnumField(
            'CheckCreditLimitWithPostLoadValidation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link creditLimitAllowManualEditing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_ALLOW_MANUAL_EDITING: fieldBuilder.buildEnumField(
          'CreditLimitAllowManualEditing',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link targetDateTransactionDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_DATE_TRANSACTION_DUE_DATE: fieldBuilder.buildEnumField(
          'TargetDateTransactionDueDate',
          DateTransactionDuedate,
          true
        ),
        /**
         * Static representation of the {@link codPaymTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COD_PAYM_TERM: fieldBuilder.buildEdmTypeField(
          'CODPaymTerm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link targetAgeing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_AGEING: fieldBuilder.buildEdmTypeField(
          'TargetAgeing',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marginCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARGIN_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'MarginCategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseReasonReady} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_REASON_READY: fieldBuilder.buildEdmTypeField(
          'ReleaseReasonReady',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_FROM: fieldBuilder.buildEdmTypeField(
          'PeriodFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link avgBalOneMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVG_BAL_ONE_MONTH: fieldBuilder.buildEdmTypeField(
          'AvgBalOneMonth',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link releaseReasonCancel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_REASON_CANCEL: fieldBuilder.buildEdmTypeField(
          'ReleaseReasonCancel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkAtPickingList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_AT_PICKING_LIST: fieldBuilder.buildEnumField(
          'CheckAtPickingList',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link skipCreditCheckWhenReducingPackingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREDIT_CHECK_WHEN_REDUCING_PACKING_SLIP:
          fieldBuilder.buildEnumField(
            'SkipCreditCheckWhenReducingPackingSlip',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link skipCreditCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREDIT_CHECK: fieldBuilder.buildEnumField(
          'SkipCreditCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link crossCompanyCreditCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_COMPANY_CREDIT_CHECK: fieldBuilder.buildEnumField(
          'CrossCompanyCreditCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link excludeSalesOrderLessThan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_SALES_ORDER_LESS_THAN: fieldBuilder.buildEdmTypeField(
          'ExcludeSalesOrderLessThan',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link daySalesOutstandingTwo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY_SALES_OUTSTANDING_TWO: fieldBuilder.buildEdmTypeField(
          'DaySalesOutstandingTwo',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowConfirmation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CONFIRMATION: fieldBuilder.buildEnumField(
          'AllowConfirmation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link daySalesOutstandingOne} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY_SALES_OUTSTANDING_ONE: fieldBuilder.buildEdmTypeField(
          'DaySalesOutstandingOne',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link skipCreditCheckWhenCancelingPackingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREDIT_CHECK_WHEN_CANCELING_PACKING_SLIP:
          fieldBuilder.buildEnumField(
            'SkipCreditCheckWhenCancelingPackingSlip',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link excludeAccountLessThan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_ACCOUNT_LESS_THAN: fieldBuilder.buildEdmTypeField(
          'ExcludeAccountLessThan',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link excludeCreditBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_CREDIT_BALANCE: fieldBuilder.buildEnumField(
          'ExcludeCreditBalance',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditLimitExchRateTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_EXCH_RATE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'CreditLimitExchRateTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link avgCreditLimitPercentMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVG_CREDIT_LIMIT_PERCENT_MONTHS: fieldBuilder.buildEdmTypeField(
          'AvgCreditLimitPercentMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link releaseReasonOrderModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_REASON_ORDER_MODIFIED: fieldBuilder.buildEdmTypeField(
          'ReleaseReasonOrderModified',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkPaymTermIncrease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_PAYM_TERM_INCREASE: fieldBuilder.buildEnumField(
          'CheckPaymTermIncrease',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link blockingCalcBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCKING_CALC_BASE: fieldBuilder.buildEnumField(
          'BlockingCalcBase',
          CredManBlockingCalcBase,
          true
        ),
        /**
         * Static representation of the {@link deleteBlockedLoadLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_BLOCKED_LOAD_LINES: fieldBuilder.buildEnumField(
          'DeleteBlockedLoadLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkCashDiscIncrease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_CASH_DISC_INCREASE: fieldBuilder.buildEnumField(
          'CheckCashDiscIncrease',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link excludeOverdueLessThan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_OVERDUE_LESS_THAN: fieldBuilder.buildEdmTypeField(
          'ExcludeOverdueLessThan',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link avgBalTwoMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVG_BAL_TWO_MONTHS: fieldBuilder.buildEdmTypeField(
          'AvgBalTwoMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowBlankCreditLimitExpiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_BLANK_CREDIT_LIMIT_EXPIRY_DATE: fieldBuilder.buildEnumField(
          'AllowBlankCreditLimitExpiryDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link avgExposurePercentMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVG_EXPOSURE_PERCENT_MONTHS: fieldBuilder.buildEdmTypeField(
          'AvgExposurePercentMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link periodTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TO: fieldBuilder.buildEdmTypeField(
          'PeriodTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link autoPost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_POST: fieldBuilder.buildEnumField(
          'AutoPost',
          CredManAutoPost,
          true
        ),
        /**
         * Static representation of the {@link allowEditSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EDIT_SALES_ORDER: fieldBuilder.buildEnumField(
          'AllowEditSalesOrder',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CreditManagementParameters)
      };
    }

    return this._schema;
  }
}
