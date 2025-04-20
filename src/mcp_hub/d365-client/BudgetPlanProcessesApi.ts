/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanProcesses } from './BudgetPlanProcesses';
import { BudgetPlanProcessesRequestBuilder } from './BudgetPlanProcessesRequestBuilder';
import { BudgetTrackingWorkspaceParametersApi } from './BudgetTrackingWorkspaceParametersApi';
import { BudgetPlanningApprovalProcessState } from './BudgetPlanningApprovalProcessState';
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
export class BudgetPlanProcessesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanProcesses<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanProcessesApi<DeSerializersT> {
    return new BudgetPlanProcessesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersBudgetPlanProcess} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_BUDGET_PLAN_PROCESS: OneToManyLink<
      BudgetPlanProcesses<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BudgetTrackingWorkspaceParametersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_TRACKING_WORKSPACE_PARAMETERS_BUDGET_PLAN_PROCESS:
        new OneToManyLink(
          'BudgetTrackingWorkspaceParametersBudgetPlanProcess',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = BudgetPlanProcesses;

  requestBuilder(): BudgetPlanProcessesRequestBuilder<DeSerializersT> {
    return new BudgetPlanProcessesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanProcesses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlanProcesses<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanProcesses<DeSerializersT>,
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
    typeof BudgetPlanProcesses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanProcesses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      BudgetPlanProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BudgetPlanProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_PROCESS_STATE: EnumField<
      BudgetPlanProcesses<DeSerializers>,
      DeSerializersT,
      BudgetPlanningApprovalProcessState,
      true,
      true
    >;
    ORGANIZATIONT_HIERARCHY_TYPE: OrderableEdmTypeField<
      BudgetPlanProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CYCLE_TIME_SPAN: OrderableEdmTypeField<
      BudgetPlanProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      BudgetPlanProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR_ID: OrderableEdmTypeField<
      BudgetPlanProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER: OrderableEdmTypeField<
      BudgetPlanProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CYCLE: OrderableEdmTypeField<
      BudgetPlanProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersBudgetPlanProcess} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_BUDGET_PLAN_PROCESS: OneToManyLink<
      BudgetPlanProcesses<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetPlanProcesses<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvalProcessState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_PROCESS_STATE: fieldBuilder.buildEnumField(
          'ApprovalProcessState',
          BudgetPlanningApprovalProcessState,
          true
        ),
        /**
         * Static representation of the {@link organizationtHierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATIONT_HIERARCHY_TYPE: fieldBuilder.buildEdmTypeField(
          'OrganizationtHierarchyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetCycleTimeSpan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_TIME_SPAN: fieldBuilder.buildEdmTypeField(
          'BudgetCycleTimeSpan',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'AccountStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER: fieldBuilder.buildEdmTypeField('Ledger', 'Edm.String', true),
        /**
         * Static representation of the {@link budgetCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE: fieldBuilder.buildEdmTypeField(
          'BudgetCycle',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanProcesses)
      };
    }

    return this._schema;
  }
}
