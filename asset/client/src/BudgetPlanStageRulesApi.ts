/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanStageRules } from './BudgetPlanStageRules';
import { BudgetPlanStageRulesRequestBuilder } from './BudgetPlanStageRulesRequestBuilder';
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
export class BudgetPlanStageRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanStageRules<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanStageRulesApi<DeSerializersT> {
    return new BudgetPlanStageRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanStageRules;

  requestBuilder(): BudgetPlanStageRulesRequestBuilder<DeSerializersT> {
    return new BudgetPlanStageRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanStageRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlanStageRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanStageRules<DeSerializersT>,
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
    typeof BudgetPlanStageRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanStageRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS: OrderableEdmTypeField<
      BudgetPlanStageRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKFLOW: OrderableEdmTypeField<
      BudgetPlanStageRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STAGE: OrderableEdmTypeField<
      BudgetPlanStageRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAN_ADD_BUDGET_PLAN_LINES: EnumField<
      BudgetPlanStageRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAYOUT: OrderableEdmTypeField<
      BudgetPlanStageRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_ADD_CHILD_BUDGET_PLANS: EnumField<
      BudgetPlanStageRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAN_MODIFY_BUDGET_PLAN_LINES: EnumField<
      BudgetPlanStageRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanStageRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link process} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS: fieldBuilder.buildEdmTypeField('Process', 'Edm.String', false),
        /**
         * Static representation of the {@link workflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW: fieldBuilder.buildEdmTypeField(
          'Workflow',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGE: fieldBuilder.buildEdmTypeField('Stage', 'Edm.String', false),
        /**
         * Static representation of the {@link canAddBudgetPlanLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_ADD_BUDGET_PLAN_LINES: fieldBuilder.buildEnumField(
          'CanAddBudgetPlanLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link layout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT: fieldBuilder.buildEdmTypeField('Layout', 'Edm.String', true),
        /**
         * Static representation of the {@link canAddChildBudgetPlans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_ADD_CHILD_BUDGET_PLANS: fieldBuilder.buildEnumField(
          'CanAddChildBudgetPlans',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link canModifyBudgetPlanLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_MODIFY_BUDGET_PLAN_LINES: fieldBuilder.buildEnumField(
          'CanModifyBudgetPlanLines',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanStageRules)
      };
    }

    return this._schema;
  }
}
