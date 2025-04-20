/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectDefaultDimensionRules } from './ProjectDefaultDimensionRules';
import { ProjectDefaultDimensionRulesRequestBuilder } from './ProjectDefaultDimensionRulesRequestBuilder';
import { TableAll } from './TableAll';
import { TableGroupAll } from './TableGroupAll';
import { ProjDefaultDimensionPriority } from './ProjDefaultDimensionPriority';
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
export class ProjectDefaultDimensionRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjectDefaultDimensionRules<DeSerializersT>, DeSerializersT>
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
  ): ProjectDefaultDimensionRulesApi<DeSerializersT> {
    return new ProjectDefaultDimensionRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectDefaultDimensionRules;

  requestBuilder(): ProjectDefaultDimensionRulesRequestBuilder<DeSerializersT> {
    return new ProjectDefaultDimensionRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectDefaultDimensionRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectDefaultDimensionRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectDefaultDimensionRules<DeSerializersT>,
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
    typeof ProjectDefaultDimensionRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectDefaultDimensionRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTRACT_LINE_GROUP_RELATION: EnumField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      TableAll,
      true,
      true
    >;
    CONTRACT_LINE_GROUP_ID: OrderableEdmTypeField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REVENUE_PROFILE_RELATION: EnumField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      TableAll,
      true,
      true
    >;
    REVENUE_PROFILE_ID: OrderableEdmTypeField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTRACT_RELATION: EnumField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      TableAll,
      true,
      true
    >;
    CONTRACT_ID: OrderableEdmTypeField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_RELATION: EnumField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    PROJECT_RELATION_ID: OrderableEdmTypeField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_DIMENSION_PRIORITY: EnumField<
      ProjectDefaultDimensionRules<DeSerializers>,
      DeSerializersT,
      ProjDefaultDimensionPriority,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectDefaultDimensionRules<DeSerializers>>;
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
         * Static representation of the {@link contractLineGroupRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE_GROUP_RELATION: fieldBuilder.buildEnumField(
          'ContractLineGroupRelation',
          TableAll,
          true
        ),
        /**
         * Static representation of the {@link contractLineGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ContractLineGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link revenueProfileRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_PROFILE_RELATION: fieldBuilder.buildEnumField(
          'RevenueProfileRelation',
          TableAll,
          true
        ),
        /**
         * Static representation of the {@link revenueProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'RevenueProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contractRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_RELATION: fieldBuilder.buildEnumField(
          'ContractRelation',
          TableAll,
          true
        ),
        /**
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ContractId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_RELATION: fieldBuilder.buildEnumField(
          'ProjectRelation',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link projectRelationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_RELATION_ID: fieldBuilder.buildEdmTypeField(
          'ProjectRelationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_PRIORITY: fieldBuilder.buildEnumField(
          'DefaultDimensionPriority',
          ProjDefaultDimensionPriority,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectDefaultDimensionRules)
      };
    }

    return this._schema;
  }
}
