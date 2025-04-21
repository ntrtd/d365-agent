/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanHeaders } from './BudgetPlanHeaders';
import { BudgetPlanHeadersRequestBuilder } from './BudgetPlanHeadersRequestBuilder';
import { BudgetPlanWorkflowStatus } from './BudgetPlanWorkflowStatus';
import { BudgetPlanStatus } from './BudgetPlanStatus';
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
export class BudgetPlanHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanHeaders<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanHeadersApi<DeSerializersT> {
    return new BudgetPlanHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanHeaders;

  requestBuilder(): BudgetPlanHeadersRequestBuilder<DeSerializersT> {
    return new BudgetPlanHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlanHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetPlanHeaders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BudgetPlanHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      BudgetPlanWorkflowStatus,
      true,
      true
    >;
    PARENT_BUDGET_PLAN: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAYOUT: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      BudgetPlanStatus,
      true,
      true
    >;
    STAGE: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPARER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBILITY_CENTER_PARTY_NUMBER: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_HISTORICAL: EnumField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGETING_ORGANIZATION_NAME: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_NAME: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RANK: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USER_GROUP: OrderableEdmTypeField<
      BudgetPlanHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'WorkflowStatus',
          BudgetPlanWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link parentBudgetPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_BUDGET_PLAN: fieldBuilder.buildEdmTypeField(
          'ParentBudgetPlan',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link layout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT: fieldBuilder.buildEdmTypeField('Layout', 'Edm.String', true),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'DocumentStatus',
          BudgetPlanStatus,
          true
        ),
        /**
         * Static representation of the {@link stage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGE: fieldBuilder.buildEdmTypeField('Stage', 'Edm.String', true),
        /**
         * Static representation of the {@link preparerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPARER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PreparerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link responsibilityCenterPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBILITY_CENTER_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResponsibilityCenterPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isHistorical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HISTORICAL: fieldBuilder.buildEnumField('IsHistorical', NoYes, true),
        /**
         * Static representation of the {@link inUseBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE_BY: fieldBuilder.buildEdmTypeField(
          'InUseBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetingOrganizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGETING_ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetingOrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personnelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NAME: fieldBuilder.buildEdmTypeField(
          'PersonnelName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link process} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS: fieldBuilder.buildEdmTypeField('Process', 'Edm.String', true),
        /**
         * Static representation of the {@link rank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANK: fieldBuilder.buildEdmTypeField('Rank', 'Edm.Int32', false),
        /**
         * Static representation of the {@link userGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP: fieldBuilder.buildEdmTypeField(
          'UserGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanHeaders)
      };
    }

    return this._schema;
  }
}
