/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanProjects } from './BudgetPlanProjects';
import { BudgetPlanProjectsRequestBuilder } from './BudgetPlanProjectsRequestBuilder';
import { ProjStatusRule } from './ProjStatusRule';
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
export class BudgetPlanProjectsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanProjects<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanProjectsApi<DeSerializersT> {
    return new BudgetPlanProjectsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanProjects;

  requestBuilder(): BudgetPlanProjectsRequestBuilder<DeSerializersT> {
    return new BudgetPlanProjectsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanProjects<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlanProjects<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanProjects<DeSerializersT>,
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
    typeof BudgetPlanProjects,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanProjects,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetPlanProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      BudgetPlanProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_STATUS_RULE: EnumField<
      BudgetPlanProjects<DeSerializers>,
      DeSerializersT,
      ProjStatusRule,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BudgetPlanProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanProjects<DeSerializers>>;
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectStatusRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_STATUS_RULE: fieldBuilder.buildEnumField(
          'ProjectStatusRule',
          ProjStatusRule,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanProjects)
      };
    }

    return this._schema;
  }
}
