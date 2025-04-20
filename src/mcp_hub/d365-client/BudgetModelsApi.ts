/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetModels } from './BudgetModels';
import { BudgetModelsRequestBuilder } from './BudgetModelsRequestBuilder';
import { BudgetRegisterEntriesApi } from './BudgetRegisterEntriesApi';
import { BudgetSubModelsApi } from './BudgetSubModelsApi';
import { BudgetRegisterEntryHeadersApi } from './BudgetRegisterEntryHeadersApi';
import { BudgetTrackingWorkspaceParametersApi } from './BudgetTrackingWorkspaceParametersApi';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetModels<DeSerializersT>, DeSerializersT>
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
  ): BudgetModelsApi<DeSerializersT> {
    return new BudgetModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryBudgetModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_BUDGET_MODEL: OneToOneLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetSubmodelBudgetModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SUBMODEL_BUDGET_MODEL: OneToManyLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetSubModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetSubmodel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SUBMODEL: OneToManyLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetSubModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeaderBudgetModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADER_BUDGET_MODEL: OneToOneLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersBudgetModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_BUDGET_MODEL: OneToManyLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetRegisterEntriesApi<DeSerializersT>,
      BudgetSubModelsApi<DeSerializersT>,
      BudgetSubModelsApi<DeSerializersT>,
      BudgetRegisterEntryHeadersApi<DeSerializersT>,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_REGISTER_ENTRY_BUDGET_MODEL: new OneToOneLink(
        'BudgetRegisterEntryBudgetModel',
        this,
        linkedApis[0]
      ),
      BUDGET_SUBMODEL_BUDGET_MODEL: new OneToManyLink(
        'BudgetSubmodelBudgetModel',
        this,
        linkedApis[1]
      ),
      BUDGET_SUBMODEL: new OneToManyLink('BudgetSubmodel', this, linkedApis[2]),
      BUDGET_REGISTER_ENTRY_HEADER_BUDGET_MODEL: new OneToOneLink(
        'BudgetRegisterEntryHeaderBudgetModel',
        this,
        linkedApis[3]
      ),
      BUDGET_TRACKING_WORKSPACE_PARAMETERS_BUDGET_MODEL: new OneToManyLink(
        'BudgetTrackingWorkspaceParametersBudgetModel',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = BudgetModels;

  requestBuilder(): BudgetModelsRequestBuilder<DeSerializersT> {
    return new BudgetModelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetModels<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetModels<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BudgetModels, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BudgetModels, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_MODEL: OrderableEdmTypeField<
      BudgetModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STOPPED: EnumField<
      BudgetModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BudgetModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_FLOW_FORECASTS: EnumField<
      BudgetModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryBudgetModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_BUDGET_MODEL: OneToOneLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetSubmodelBudgetModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SUBMODEL_BUDGET_MODEL: OneToManyLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetSubModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetSubmodel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SUBMODEL: OneToManyLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetSubModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeaderBudgetModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADER_BUDGET_MODEL: OneToOneLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersBudgetModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_BUDGET_MODEL: OneToManyLink<
      BudgetModels<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetModels<DeSerializers>>;
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
         * Static representation of the {@link budgetModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_MODEL: fieldBuilder.buildEdmTypeField(
          'BudgetModel',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOPPED: fieldBuilder.buildEnumField('Stopped', NoYes, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link cashFlowForecasts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_FORECASTS: fieldBuilder.buildEnumField(
          'CashFlowForecasts',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetModels)
      };
    }

    return this._schema;
  }
}
