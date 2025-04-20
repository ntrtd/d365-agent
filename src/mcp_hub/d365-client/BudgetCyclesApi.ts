/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetCycles } from './BudgetCycles';
import { BudgetCyclesRequestBuilder } from './BudgetCyclesRequestBuilder';
import { BudgetControlCycleModelsApi } from './BudgetControlCycleModelsApi';
import { BudgetTrackingWorkspaceParametersApi } from './BudgetTrackingWorkspaceParametersApi';
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
export class BudgetCyclesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetCycles<DeSerializersT>, DeSerializersT>
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
  ): BudgetCyclesApi<DeSerializersT> {
    return new BudgetCyclesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlCycleModelBudgetCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CYCLE_MODEL_BUDGET_CYCLE: OneToManyLink<
      BudgetCycles<DeSerializersT>,
      DeSerializersT,
      BudgetControlCycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersBudgetCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_BUDGET_CYCLE: OneToManyLink<
      BudgetCycles<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetControlCycleModelsApi<DeSerializersT>,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CONTROL_CYCLE_MODEL_BUDGET_CYCLE: new OneToManyLink(
        'BudgetControlCycleModelBudgetCycle',
        this,
        linkedApis[0]
      ),
      BUDGET_TRACKING_WORKSPACE_PARAMETERS_BUDGET_CYCLE: new OneToManyLink(
        'BudgetTrackingWorkspaceParametersBudgetCycle',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BudgetCycles;

  requestBuilder(): BudgetCyclesRequestBuilder<DeSerializersT> {
    return new BudgetCyclesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetCycles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetCycles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetCycles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BudgetCycles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BudgetCycles, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BUDGET_CYCLE_TIME_SPAN_NAME: OrderableEdmTypeField<
      BudgetCycles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_CALENDAR: OrderableEdmTypeField<
      BudgetCycles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_CYCLE_NAME: OrderableEdmTypeField<
      BudgetCycles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LENGTH_OF_BUDGET_CYCLE: EnumField<
      BudgetCycles<DeSerializers>,
      DeSerializersT,
      BudgetCycleLengthOption,
      true,
      true
    >;
    NUMBER_OF_FISCAL_PERIODS: OrderableEdmTypeField<
      BudgetCycles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      BudgetCycles<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      BudgetCycles<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlCycleModelBudgetCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CYCLE_MODEL_BUDGET_CYCLE: OneToManyLink<
      BudgetCycles<DeSerializersT>,
      DeSerializersT,
      BudgetControlCycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersBudgetCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_BUDGET_CYCLE: OneToManyLink<
      BudgetCycles<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetCycles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link budgetCycleTimeSpanName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_TIME_SPAN_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetCycleTimeSpanName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link budgetCycleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetCycleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lengthOfBudgetCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_OF_BUDGET_CYCLE: fieldBuilder.buildEnumField(
          'LengthOfBudgetCycle',
          BudgetCycleLengthOption,
          true
        ),
        /**
         * Static representation of the {@link numberOfFiscalPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_FISCAL_PERIODS: fieldBuilder.buildEdmTypeField(
          'NumberOfFiscalPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetCycles)
      };
    }

    return this._schema;
  }
}
