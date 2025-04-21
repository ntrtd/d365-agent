/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollParameters } from './PayrollParameters';
import { PayrollParametersRequestBuilder } from './PayrollParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { PayrollAccrualDateBasis } from './PayrollAccrualDateBasis';
import { PayrollEarningAccountingDate } from './PayrollEarningAccountingDate';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayrollParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayrollParameters<DeSerializersT>, DeSerializersT>
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
  ): PayrollParametersApi<DeSerializersT> {
    return new PayrollParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      PayrollParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PayrollParameters;

  requestBuilder(): PayrollParametersRequestBuilder<DeSerializersT> {
    return new PayrollParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayrollParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayrollParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayrollParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PayrollParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_MODE: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARREAR_THRESHOLD_OVERRIDE: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALARY_CLEARING_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOVER_ARREAR_IN_ALL_RUN_TYPES: EnumField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    KEY: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    APPLY_RETIREMENT_ANNUAL_WAGE_LIMIT: EnumField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCRUAL_DATE_BASIS: EnumField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      PayrollAccrualDateBasis,
      true,
      true
    >;
    APPLY_GROUP_TERM_LIFE: EnumField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_JOURNAL_NAME: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_SLIP_CONTRIBUTIONS: EnumField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EARNING_ACCOUNTING_DATE: EnumField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      PayrollEarningAccountingDate,
      true,
      true
    >;
    PAYMENT_TASK_GROUPING_COUNT: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ELECTRONIC_PAYMENT_MODE: OrderableEdmTypeField<
      PayrollParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      PayrollParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollParameters<DeSerializers>>;
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
         * Static representation of the {@link paymentMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_MODE: fieldBuilder.buildEdmTypeField(
          'PaymentMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arrearThresholdOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARREAR_THRESHOLD_OVERRIDE: fieldBuilder.buildEdmTypeField(
          'ArrearThresholdOverride',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salaryClearingAccountLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_CLEARING_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'SalaryClearingAccountLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recoverArrearInAllRunTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOVER_ARREAR_IN_ALL_RUN_TYPES: fieldBuilder.buildEnumField(
          'RecoverArrearInAllRunTypes',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link applyRetirementAnnualWageLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_RETIREMENT_ANNUAL_WAGE_LIMIT: fieldBuilder.buildEnumField(
          'ApplyRetirementAnnualWageLimit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accrualDateBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_DATE_BASIS: fieldBuilder.buildEnumField(
          'AccrualDateBasis',
          PayrollAccrualDateBasis,
          true
        ),
        /**
         * Static representation of the {@link applyGroupTermLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_GROUP_TERM_LIFE: fieldBuilder.buildEnumField(
          'ApplyGroupTermLife',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paySlipContributions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_SLIP_CONTRIBUTIONS: fieldBuilder.buildEnumField(
          'PaySlipContributions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link earningAccountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_ACCOUNTING_DATE: fieldBuilder.buildEnumField(
          'EarningAccountingDate',
          PayrollEarningAccountingDate,
          true
        ),
        /**
         * Static representation of the {@link paymentTaskGroupingCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TASK_GROUPING_COUNT: fieldBuilder.buildEdmTypeField(
          'PaymentTaskGroupingCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link electronicPaymentMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT_MODE: fieldBuilder.buildEdmTypeField(
          'ElectronicPaymentMode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayrollParameters)
      };
    }

    return this._schema;
  }
}
