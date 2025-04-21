/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanWorkflowStages } from './BudgetPlanWorkflowStages';
import { BudgetPlanWorkflowStagesRequestBuilder } from './BudgetPlanWorkflowStagesRequestBuilder';
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
export class BudgetPlanWorkflowStagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanWorkflowStages<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanWorkflowStagesApi<DeSerializersT> {
    return new BudgetPlanWorkflowStagesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanWorkflowStages;

  requestBuilder(): BudgetPlanWorkflowStagesRequestBuilder<DeSerializersT> {
    return new BudgetPlanWorkflowStagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanWorkflowStages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetPlanWorkflowStages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanWorkflowStages<DeSerializersT>,
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
    typeof BudgetPlanWorkflowStages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanWorkflowStages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORKFLOW_NAME: OrderableEdmTypeField<
      BudgetPlanWorkflowStages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STAGE_NAME: OrderableEdmTypeField<
      BudgetPlanWorkflowStages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKFLOW_ID: OrderableEdmTypeField<
      BudgetPlanWorkflowStages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICT_RESET_BUDGET_PLAN: EnumField<
      BudgetPlanWorkflowStages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIOR_BUDGET_PLANNING_WORKFLOW_NAME: OrderableEdmTypeField<
      BudgetPlanWorkflowStages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICT_DELETE_BUDGET_PLAN: EnumField<
      BudgetPlanWorkflowStages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIOR_BUDGET_PLANNING_STAGE_NAME: OrderableEdmTypeField<
      BudgetPlanWorkflowStages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PARENT_BUDGET_PLAN_REQUIRED: EnumField<
      BudgetPlanWorkflowStages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanWorkflowStages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workflowName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_NAME: fieldBuilder.buildEdmTypeField(
          'WorkflowName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stageName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGE_NAME: fieldBuilder.buildEdmTypeField(
          'StageName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workflowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ID: fieldBuilder.buildEdmTypeField(
          'WorkflowId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link restrictResetBudgetPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICT_RESET_BUDGET_PLAN: fieldBuilder.buildEnumField(
          'RestrictResetBudgetPlan',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priorBudgetPlanningWorkflowName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIOR_BUDGET_PLANNING_WORKFLOW_NAME: fieldBuilder.buildEdmTypeField(
          'PriorBudgetPlanningWorkflowName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link restrictDeleteBudgetPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICT_DELETE_BUDGET_PLAN: fieldBuilder.buildEnumField(
          'RestrictDeleteBudgetPlan',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priorBudgetPlanningStageName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIOR_BUDGET_PLANNING_STAGE_NAME: fieldBuilder.buildEdmTypeField(
          'PriorBudgetPlanningStageName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isParentBudgetPlanRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PARENT_BUDGET_PLAN_REQUIRED: fieldBuilder.buildEnumField(
          'IsParentBudgetPlanRequired',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanWorkflowStages)
      };
    }

    return this._schema;
  }
}
