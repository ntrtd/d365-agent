/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetCycleTimeSpans } from './BudgetCycleTimeSpans';
import { BudgetCycleTimeSpansRequestBuilder } from './BudgetCycleTimeSpansRequestBuilder';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { BudgetControlRulesApi } from './BudgetControlRulesApi';
import { BudgetControlGroupsApi } from './BudgetControlGroupsApi';
import { BudgetCycleLengthOption } from './BudgetCycleLengthOption';
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
export class BudgetCycleTimeSpansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetCycleTimeSpans<DeSerializersT>, DeSerializersT>
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
  ): BudgetCycleTimeSpansApi<DeSerializersT> {
    return new BudgetCycleTimeSpansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link budgetCycleTimeSpan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CYCLE_TIME_SPAN: OneToManyLink<
      BudgetCycleTimeSpans<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleBudgetCycleTimeSpan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_BUDGET_CYCLE_TIME_SPAN: OneToManyLink<
      BudgetCycleTimeSpans<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupBudgetCycleTimeSpan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_BUDGET_CYCLE_TIME_SPAN: OneToManyLink<
      BudgetCycleTimeSpans<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetControlConfigurationsApi<DeSerializersT>,
      BudgetControlRulesApi<DeSerializersT>,
      BudgetControlGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CYCLE_TIME_SPAN: new OneToManyLink(
        'BudgetCycleTimeSpan',
        this,
        linkedApis[0]
      ),
      BUDGET_CONTROL_RULE_BUDGET_CYCLE_TIME_SPAN: new OneToManyLink(
        'BudgetControlRuleBudgetCycleTimeSpan',
        this,
        linkedApis[1]
      ),
      BUDGET_CONTROL_GROUP_BUDGET_CYCLE_TIME_SPAN: new OneToManyLink(
        'BudgetControlGroupBudgetCycleTimeSpan',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = BudgetCycleTimeSpans;

  requestBuilder(): BudgetCycleTimeSpansRequestBuilder<DeSerializersT> {
    return new BudgetCycleTimeSpansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetCycleTimeSpans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetCycleTimeSpans<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetCycleTimeSpans<DeSerializersT>,
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
    typeof BudgetCycleTimeSpans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetCycleTimeSpans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      BudgetCycleTimeSpans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_CALENDAR_ID: OrderableEdmTypeField<
      BudgetCycleTimeSpans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_NUMBER_OF_ACCOUNTING_PERIODS: OrderableEdmTypeField<
      BudgetCycleTimeSpans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BUDGET_CYCLE_LENGTH_OPTION: EnumField<
      BudgetCycleTimeSpans<DeSerializers>,
      DeSerializersT,
      BudgetCycleLengthOption,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetCycleTimeSpan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CYCLE_TIME_SPAN: OneToManyLink<
      BudgetCycleTimeSpans<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleBudgetCycleTimeSpan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_BUDGET_CYCLE_TIME_SPAN: OneToManyLink<
      BudgetCycleTimeSpans<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupBudgetCycleTimeSpan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_BUDGET_CYCLE_TIME_SPAN: OneToManyLink<
      BudgetCycleTimeSpans<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetCycleTimeSpans<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link fiscalCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultNumberOfAccountingPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_NUMBER_OF_ACCOUNTING_PERIODS: fieldBuilder.buildEdmTypeField(
          'DefaultNumberOfAccountingPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link budgetCycleLengthOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_LENGTH_OPTION: fieldBuilder.buildEnumField(
          'BudgetCycleLengthOption',
          BudgetCycleLengthOption,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetCycleTimeSpans)
      };
    }

    return this._schema;
  }
}
