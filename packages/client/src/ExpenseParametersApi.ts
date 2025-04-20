/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseParameters } from './ExpenseParameters';
import { ExpenseParametersRequestBuilder } from './ExpenseParametersRequestBuilder';
import { NoYes } from './NoYes';
import { TrvPerDiemCalculation } from './TrvPerDiemCalculation';
import { TrvPersonalPaidBy } from './TrvPersonalPaidBy';
import { TrvEvaluateExpensePolicies } from './TrvEvaluateExpensePolicies';
import { TrvPerDiemRounding } from './TrvPerDiemRounding';
import { TrvMealReductionType } from './TrvMealReductionType';
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
export class ExpenseParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseParameters<DeSerializersT>, DeSerializersT>
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
  ): ExpenseParametersApi<DeSerializersT> {
    return new ExpenseParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpenseParameters;

  requestBuilder(): ExpenseParametersRequestBuilder<DeSerializersT> {
    return new ExpenseParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpenseParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ExpenseParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_TRAVEL_REQUISITION_MANDATORY_FOR_EXPENSE: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PER_DIEM_CALCULATION: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      TrvPerDiemCalculation,
      true,
      true
    >;
    PERSONAL_PAID_BY: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      TrvPersonalPaidBy,
      true,
      true
    >;
    IS_ALLOW_UPDATE_ACCOUNTING_DATE: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ALLOW_SUBMIT_REQUISITION_ON_BUDGET_FAIL: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OTHER_REDUCTION_DEF: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KM_PRICE: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_EDIT_DISTRIBUTIONS: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MIN_HOURS: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEDUCT_LUNCH: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCLUDE_USER_ID_IN_BARCODE: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HOTEL_REDUCTION_DEF: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCLUDE_OVERVIEW_IN_COVER_PAGE: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_ENTIRE_EXPENSE_ON_DRILL_BACK: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEDUCT_BREAKF: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENABLE_TAX_RECOVERY: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WHEN_TO_EVALUATE_POLICY: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      TrvEvaluateExpensePolicies,
      true,
      true
    >;
    IS_ALLOW_APPROVE_EXPENSE_ON_BUDGET_FAIL: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BAR_CODE_SETUP_ID: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_IMMEDIATELY: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_TRAVEL_PURPOSE: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PER_DIEM_ROUNDING: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      TrvPerDiemRounding,
      true,
      true
    >;
    USE_ANTI_CORRUPTION: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MEAL_REDUCTION_DEF: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_ALLOW_SUBMIT_EXPENSE_ON_BUDGET_FAIL: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_INTER_COMPANY_EXPENSE: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INCLUDED: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_RELEASE_ENCUMBRANCES_ON_CLOSE_REQUISITION: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEDUCT_DINNER: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONVERT_PBS_EXCH_TO_INTERNAL: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MEAL_REDUCTION_TYPE: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      TrvMealReductionType,
      true,
      true
    >;
    ALLOW_EDIT_CREDIT_CARD_EXCH_RATE: EnumField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GL_WORK_SHEET: OrderableEdmTypeField<
      ExpenseParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpenseParameters<DeSerializers>>;
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
         * Static representation of the {@link isTravelRequisitionMandatoryForExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRAVEL_REQUISITION_MANDATORY_FOR_EXPENSE:
          fieldBuilder.buildEnumField(
            'IsTravelRequisitionMandatoryForExpense',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link perDiemCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PER_DIEM_CALCULATION: fieldBuilder.buildEnumField(
          'PerDiemCalculation',
          TrvPerDiemCalculation,
          true
        ),
        /**
         * Static representation of the {@link personalPaidBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_PAID_BY: fieldBuilder.buildEnumField(
          'PersonalPaidBy',
          TrvPersonalPaidBy,
          true
        ),
        /**
         * Static representation of the {@link isAllowUpdateAccountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_UPDATE_ACCOUNTING_DATE: fieldBuilder.buildEnumField(
          'IsAllowUpdateAccountingDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAllowSubmitRequisitionOnBudgetFail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_SUBMIT_REQUISITION_ON_BUDGET_FAIL: fieldBuilder.buildEnumField(
          'IsAllowSubmitRequisitionOnBudgetFail',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link otherReductionDef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_REDUCTION_DEF: fieldBuilder.buildEdmTypeField(
          'OtherReductionDef',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link kmPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KM_PRICE: fieldBuilder.buildEdmTypeField(
          'KmPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowEditDistributions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EDIT_DISTRIBUTIONS: fieldBuilder.buildEnumField(
          'AllowEditDistributions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link minHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_HOURS: fieldBuilder.buildEdmTypeField(
          'MinHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deductLunch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_LUNCH: fieldBuilder.buildEdmTypeField(
          'DeductLunch',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link includeUserIdInBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_USER_ID_IN_BARCODE: fieldBuilder.buildEnumField(
          'IncludeUserIDInBarcode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hotelReductionDef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOTEL_REDUCTION_DEF: fieldBuilder.buildEdmTypeField(
          'HotelReductionDef',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link includeOverviewInCoverPage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_OVERVIEW_IN_COVER_PAGE: fieldBuilder.buildEnumField(
          'IncludeOverviewInCoverPage',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayEntireExpenseOnDrillBack} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ENTIRE_EXPENSE_ON_DRILL_BACK: fieldBuilder.buildEnumField(
          'DisplayEntireExpenseOnDrillBack',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deductBreakf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_BREAKF: fieldBuilder.buildEdmTypeField(
          'DeductBreakf',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link enableTaxRecovery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_TAX_RECOVERY: fieldBuilder.buildEnumField(
          'EnableTaxRecovery',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link whenToEvaluatePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHEN_TO_EVALUATE_POLICY: fieldBuilder.buildEnumField(
          'WhenToEvaluatePolicy',
          TrvEvaluateExpensePolicies,
          true
        ),
        /**
         * Static representation of the {@link isAllowApproveExpenseOnBudgetFail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_APPROVE_EXPENSE_ON_BUDGET_FAIL: fieldBuilder.buildEnumField(
          'IsAllowApproveExpenseOnBudgetFail',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link barCodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'BarCodeSetupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postImmediately} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_IMMEDIATELY: fieldBuilder.buildEnumField(
          'PostImmediately',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateTravelPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_TRAVEL_PURPOSE: fieldBuilder.buildEnumField(
          'ValidateTravelPurpose',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link perDiemRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PER_DIEM_ROUNDING: fieldBuilder.buildEnumField(
          'PerDiemRounding',
          TrvPerDiemRounding,
          true
        ),
        /**
         * Static representation of the {@link useAntiCorruption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ANTI_CORRUPTION: fieldBuilder.buildEnumField(
          'UseAntiCorruption',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mealReductionDef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEAL_REDUCTION_DEF: fieldBuilder.buildEdmTypeField(
          'MealReductionDef',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isAllowSubmitExpenseOnBudgetFail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_SUBMIT_EXPENSE_ON_BUDGET_FAIL: fieldBuilder.buildEnumField(
          'IsAllowSubmitExpenseOnBudgetFail',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useInterCompanyExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_INTER_COMPANY_EXPENSE: fieldBuilder.buildEnumField(
          'UseInterCompanyExpense',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ledgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INCLUDED: fieldBuilder.buildEnumField('TaxIncluded', NoYes, true),
        /**
         * Static representation of the {@link isReleaseEncumbrancesOnCloseRequisition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RELEASE_ENCUMBRANCES_ON_CLOSE_REQUISITION:
          fieldBuilder.buildEnumField(
            'IsReleaseEncumbrancesOnCloseRequisition',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link deductDinner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_DINNER: fieldBuilder.buildEdmTypeField(
          'DeductDinner',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link convertPbsExchToInternal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONVERT_PBS_EXCH_TO_INTERNAL: fieldBuilder.buildEnumField(
          'ConvertPBSExchToInternal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mealReductionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEAL_REDUCTION_TYPE: fieldBuilder.buildEnumField(
          'MealReductionType',
          TrvMealReductionType,
          true
        ),
        /**
         * Static representation of the {@link allowEditCreditCardExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EDIT_CREDIT_CARD_EXCH_RATE: fieldBuilder.buildEnumField(
          'AllowEditCreditCardExchRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link glWorkSheet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_WORK_SHEET: fieldBuilder.buildEdmTypeField(
          'GlWorkSheet',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseParameters)
      };
    }

    return this._schema;
  }
}
