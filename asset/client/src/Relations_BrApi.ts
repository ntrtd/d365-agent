/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Relations_Br } from './Relations_Br';
import { Relations_BrRequestBuilder } from './Relations_BrRequestBuilder';
import { ConfiguratorDefinitionGroupsApi } from './ConfiguratorDefinitionGroupsApi';
import { ConfRelationshipsBr } from './ConfRelationshipsBr';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class Relations_BrApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Relations_Br<DeSerializersT>, DeSerializersT>
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
  ): Relations_BrApi<DeSerializersT> {
    return new Relations_BrApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      Relations_Br<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ConfiguratorDefinitionGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CONFIGURATOR_DEFINITION_GROUP: new OneToOneLink(
        'ConfiguratorDefinitionGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = Relations_Br;

  requestBuilder(): Relations_BrRequestBuilder<DeSerializersT> {
    return new Relations_BrRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Relations_Br<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Relations_Br<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Relations_Br<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Relations_Br, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Relations_Br, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Relations_Br<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFINITION_GROUP_ID: OrderableEdmTypeField<
      Relations_Br<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_VALUE: OrderableEdmTypeField<
      Relations_Br<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RELATED_FIELD: OrderableEdmTypeField<
      Relations_Br<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELATED_TABLE: OrderableEdmTypeField<
      Relations_Br<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELATIONSHIP_TYPE: EnumField<
      Relations_Br<DeSerializers>,
      DeSerializersT,
      ConfRelationshipsBr,
      true,
      true
    >;
    SOURCE_FIELD_NAME: OrderableEdmTypeField<
      Relations_Br<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_TABLE_NAME: OrderableEdmTypeField<
      Relations_Br<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      Relations_Br<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Relations_Br<DeSerializers>>;
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
         * Static representation of the {@link definitionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFINITION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'DefinitionGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fixedValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_VALUE: fieldBuilder.buildEdmTypeField(
          'FixedValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link relatedField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_FIELD: fieldBuilder.buildEdmTypeField(
          'RelatedField',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link relatedTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_TABLE: fieldBuilder.buildEdmTypeField(
          'RelatedTable',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link relationshipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_TYPE: fieldBuilder.buildEnumField(
          'RelationshipType',
          ConfRelationshipsBr,
          true
        ),
        /**
         * Static representation of the {@link sourceFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'SourceFieldName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'SourceTableName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Relations_Br)
      };
    }

    return this._schema;
  }
}
