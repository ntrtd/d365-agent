/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConfiguratorDefinitionGroupTables } from './ConfiguratorDefinitionGroupTables';
import { ConfiguratorDefinitionGroupTablesRequestBuilder } from './ConfiguratorDefinitionGroupTablesRequestBuilder';
import { ConfiguratorDefinitionGroupsApi } from './ConfiguratorDefinitionGroupsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ConfiguratorDefinitionGroupTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ConfiguratorDefinitionGroupTables<DeSerializersT>, DeSerializersT>
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
  ): ConfiguratorDefinitionGroupTablesApi<DeSerializersT> {
    return new ConfiguratorDefinitionGroupTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      ConfiguratorDefinitionGroupTables<DeSerializersT>,
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

  entityConstructor = ConfiguratorDefinitionGroupTables;

  requestBuilder(): ConfiguratorDefinitionGroupTablesRequestBuilder<DeSerializersT> {
    return new ConfiguratorDefinitionGroupTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ConfiguratorDefinitionGroupTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ConfiguratorDefinitionGroupTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConfiguratorDefinitionGroupTables<DeSerializersT>,
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
    typeof ConfiguratorDefinitionGroupTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConfiguratorDefinitionGroupTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFINITION_GROUP_ID: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_SOURCE_NUMBER: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RELATED_TABLE_NAME: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_RELATION: EnumField<
      ConfiguratorDefinitionGroupTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      ConfiguratorDefinitionGroupTables<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConfiguratorDefinitionGroupTables<DeSerializers>>;
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
         * Static representation of the {@link dataSourceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DataSourceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link relatedTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'RelatedTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_RELATION: fieldBuilder.buildEnumField('SysRelation', NoYes, true),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConfiguratorDefinitionGroupTables)
      };
    }

    return this._schema;
  }
}
