/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanAlternateLayouts } from './BudgetPlanAlternateLayouts';
import { BudgetPlanAlternateLayoutsRequestBuilder } from './BudgetPlanAlternateLayoutsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class BudgetPlanAlternateLayoutsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetPlanAlternateLayouts<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanAlternateLayoutsApi<DeSerializersT> {
    return new BudgetPlanAlternateLayoutsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanAlternateLayouts;

  requestBuilder(): BudgetPlanAlternateLayoutsRequestBuilder<DeSerializersT> {
    return new BudgetPlanAlternateLayoutsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanAlternateLayouts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetPlanAlternateLayouts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanAlternateLayouts<DeSerializersT>,
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
    typeof BudgetPlanAlternateLayouts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanAlternateLayouts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BUDGET_PLAN_LAYOUT: OrderableEdmTypeField<
      BudgetPlanAlternateLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_PLANNING_PROCESS: OrderableEdmTypeField<
      BudgetPlanAlternateLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_PLANNING_WORKFLOW: OrderableEdmTypeField<
      BudgetPlanAlternateLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_PLANNING_STAGE: OrderableEdmTypeField<
      BudgetPlanAlternateLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanAlternateLayouts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link budgetPlanLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_PLAN_LAYOUT: fieldBuilder.buildEdmTypeField(
          'BudgetPlanLayout',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link budgetPlanningProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_PLANNING_PROCESS: fieldBuilder.buildEdmTypeField(
          'BudgetPlanningProcess',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link budgetPlanningWorkflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_PLANNING_WORKFLOW: fieldBuilder.buildEdmTypeField(
          'BudgetPlanningWorkflow',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link budgetPlanningStage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_PLANNING_STAGE: fieldBuilder.buildEdmTypeField(
          'BudgetPlanningStage',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanAlternateLayouts)
      };
    }

    return this._schema;
  }
}
