/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetSubModels } from './BudgetSubModels';
import { BudgetSubModelsRequestBuilder } from './BudgetSubModelsRequestBuilder';
import { BudgetModelsApi } from './BudgetModelsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetSubModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetSubModels<DeSerializersT>, DeSerializersT>
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
  ): BudgetSubModelsApi<DeSerializersT> {
    return new BudgetSubModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetModelSubmodels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MODEL_SUBMODELS: OneToOneLink<
      BudgetSubModels<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetSubmodelBudgetModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SUBMODEL_BUDGET_MODELS: OneToOneLink<
      BudgetSubModels<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetModelsApi<DeSerializersT>,
      BudgetModelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_MODEL_SUBMODELS: new OneToOneLink(
        'BudgetModelSubmodels',
        this,
        linkedApis[0]
      ),
      BUDGET_SUBMODEL_BUDGET_MODELS: new OneToOneLink(
        'BudgetSubmodelBudgetModels',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BudgetSubModels;

  requestBuilder(): BudgetSubModelsRequestBuilder<DeSerializersT> {
    return new BudgetSubModelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetSubModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetSubModels<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetSubModels<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BudgetSubModels, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetSubModels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetSubModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_MODEL: OrderableEdmTypeField<
      BudgetSubModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBMODEL: OrderableEdmTypeField<
      BudgetSubModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetModelSubmodels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MODEL_SUBMODELS: OneToOneLink<
      BudgetSubModels<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetSubmodelBudgetModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SUBMODEL_BUDGET_MODELS: OneToOneLink<
      BudgetSubModels<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetSubModels<DeSerializers>>;
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
         * Static representation of the {@link submodel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMODEL: fieldBuilder.buildEdmTypeField(
          'Submodel',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetSubModels)
      };
    }

    return this._schema;
  }
}
