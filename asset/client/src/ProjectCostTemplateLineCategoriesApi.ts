/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectCostTemplateLineCategories } from './ProjectCostTemplateLineCategories';
import { ProjectCostTemplateLineCategoriesRequestBuilder } from './ProjectCostTemplateLineCategoriesRequestBuilder';
import { ProjCostType } from './ProjCostType';
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
export class ProjectCostTemplateLineCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjectCostTemplateLineCategories<DeSerializersT>, DeSerializersT>
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
  ): ProjectCostTemplateLineCategoriesApi<DeSerializersT> {
    return new ProjectCostTemplateLineCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectCostTemplateLineCategories;

  requestBuilder(): ProjectCostTemplateLineCategoriesRequestBuilder<DeSerializersT> {
    return new ProjectCostTemplateLineCategoriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjectCostTemplateLineCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectCostTemplateLineCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectCostTemplateLineCategories<DeSerializersT>,
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
    typeof ProjectCostTemplateLineCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectCostTemplateLineCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectCostTemplateLineCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTROL_ID: OrderableEdmTypeField<
      ProjectCostTemplateLineCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_GROUP_ID: OrderableEdmTypeField<
      ProjectCostTemplateLineCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      ProjectCostTemplateLineCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      ProjectCostTemplateLineCategories<DeSerializers>,
      DeSerializersT,
      ProjCostType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectCostTemplateLineCategories<DeSerializers>>;
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
         * Static representation of the {@link controlId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_ID: fieldBuilder.buildEdmTypeField(
          'ControlId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CostGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          ProjCostType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectCostTemplateLineCategories)
      };
    }

    return this._schema;
  }
}
