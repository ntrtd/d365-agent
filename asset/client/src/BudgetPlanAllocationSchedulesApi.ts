/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanAllocationSchedules } from './BudgetPlanAllocationSchedules';
import { BudgetPlanAllocationSchedulesRequestBuilder } from './BudgetPlanAllocationSchedulesRequestBuilder';
import { BudgetPlanAllocateType } from './BudgetPlanAllocateType';
import { NoYes } from './NoYes';
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
export class BudgetPlanAllocationSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetPlanAllocationSchedules<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanAllocationSchedulesApi<DeSerializersT> {
    return new BudgetPlanAllocationSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanAllocationSchedules;

  requestBuilder(): BudgetPlanAllocationSchedulesRequestBuilder<DeSerializersT> {
    return new BudgetPlanAllocationSchedulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanAllocationSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetPlanAllocationSchedules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanAllocationSchedules<DeSerializersT>,
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
    typeof BudgetPlanAllocationSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanAllocationSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ALLOCATION_SCHEDULE: OrderableEdmTypeField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FACTOR: OrderableEdmTypeField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESTINATION_SCENARIO: OrderableEdmTypeField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOCATION_RULE: OrderableEdmTypeField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SCENARIO: OrderableEdmTypeField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_ALLOCATION_TERM: OrderableEdmTypeField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOCATION_METHOD: EnumField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      BudgetPlanAllocateType,
      true,
      true
    >;
    BASIS_SCENARIO: OrderableEdmTypeField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_KEY: OrderableEdmTypeField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_SOURCE_EFFECTIVE_DATE: EnumField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPEND_LINES: EnumField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEDGER: OrderableEdmTypeField<
      BudgetPlanAllocationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanAllocationSchedules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link allocationSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'AllocationSchedule',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link factor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR: fieldBuilder.buildEdmTypeField('Factor', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link destinationScenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_SCENARIO: fieldBuilder.buildEdmTypeField(
          'DestinationScenario',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allocationRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_RULE: fieldBuilder.buildEdmTypeField(
          'AllocationRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceScenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SCENARIO: fieldBuilder.buildEdmTypeField(
          'SourceScenario',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetAllocationTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_ALLOCATION_TERM: fieldBuilder.buildEdmTypeField(
          'BudgetAllocationTerm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'AllocationMethod',
          BudgetPlanAllocateType,
          true
        ),
        /**
         * Static representation of the {@link basisScenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIS_SCENARIO: fieldBuilder.buildEdmTypeField(
          'BasisScenario',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_KEY: fieldBuilder.buildEdmTypeField(
          'PeriodKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useSourceEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SOURCE_EFFECTIVE_DATE: fieldBuilder.buildEnumField(
          'UseSourceEffectiveDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link appendLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPEND_LINES: fieldBuilder.buildEnumField('AppendLines', NoYes, true),
        /**
         * Static representation of the {@link ledger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER: fieldBuilder.buildEdmTypeField('Ledger', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanAllocationSchedules)
      };
    }

    return this._schema;
  }
}
