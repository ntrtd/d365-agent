/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConfiguratorDefinitionGroups } from './ConfiguratorDefinitionGroups';
import { ConfiguratorDefinitionGroupsRequestBuilder } from './ConfiguratorDefinitionGroupsRequestBuilder';
import { ConfiguratorDefinitionGroupFieldRangesApi } from './ConfiguratorDefinitionGroupFieldRangesApi';
import { Relations_BrApi } from './Relations_BrApi';
import { ConfiguratorDefinitionGroupFieldsApi } from './ConfiguratorDefinitionGroupFieldsApi';
import { ConfiguratorDefinitionGroupTablesApi } from './ConfiguratorDefinitionGroupTablesApi';
import { ConfiguratorDefinitionGroupSortOrdersApi } from './ConfiguratorDefinitionGroupSortOrdersApi';
import { ConfiguratorLayoutGroupsApi } from './ConfiguratorLayoutGroupsApi';
import { ConfiguratorDefinitionGroupSummationsApi } from './ConfiguratorDefinitionGroupSummationsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ConfiguratorDefinitionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ConfiguratorDefinitionGroups<DeSerializersT>, DeSerializersT>
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
  ): ConfiguratorDefinitionGroupsApi<DeSerializersT> {
    return new ConfiguratorDefinitionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupFieldRange} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_FIELD_RANGE: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupFieldRangesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relationsBr} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATIONS_BR: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      Relations_BrApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupField} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_FIELD: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupFieldsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_TABLE: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupSortOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_SORT_ORDER: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupSortOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorLayoutGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_GROUP: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorLayoutGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupSummation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_SUMMATION: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupSummationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ConfiguratorDefinitionGroupFieldRangesApi<DeSerializersT>,
      Relations_BrApi<DeSerializersT>,
      ConfiguratorDefinitionGroupFieldsApi<DeSerializersT>,
      ConfiguratorDefinitionGroupTablesApi<DeSerializersT>,
      ConfiguratorDefinitionGroupSortOrdersApi<DeSerializersT>,
      ConfiguratorLayoutGroupsApi<DeSerializersT>,
      ConfiguratorDefinitionGroupSummationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CONFIGURATOR_DEFINITION_GROUP_FIELD_RANGE: new OneToManyLink(
        'ConfiguratorDefinitionGroupFieldRange',
        this,
        linkedApis[0]
      ),
      RELATIONS_BR: new OneToManyLink('Relations_BR', this, linkedApis[1]),
      CONFIGURATOR_DEFINITION_GROUP_FIELD: new OneToManyLink(
        'ConfiguratorDefinitionGroupField',
        this,
        linkedApis[2]
      ),
      CONFIGURATOR_DEFINITION_GROUP_TABLE: new OneToManyLink(
        'ConfiguratorDefinitionGroupTable',
        this,
        linkedApis[3]
      ),
      CONFIGURATOR_DEFINITION_GROUP_SORT_ORDER: new OneToManyLink(
        'ConfiguratorDefinitionGroupSortOrder',
        this,
        linkedApis[4]
      ),
      CONFIGURATOR_LAYOUT_GROUP: new OneToManyLink(
        'ConfiguratorLayoutGroup',
        this,
        linkedApis[5]
      ),
      CONFIGURATOR_DEFINITION_GROUP_SUMMATION: new OneToManyLink(
        'ConfiguratorDefinitionGroupSummation',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = ConfiguratorDefinitionGroups;

  requestBuilder(): ConfiguratorDefinitionGroupsRequestBuilder<DeSerializersT> {
    return new ConfiguratorDefinitionGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConfiguratorDefinitionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConfiguratorDefinitionGroups<DeSerializersT>,
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
    typeof ConfiguratorDefinitionGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConfiguratorDefinitionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConfiguratorDefinitionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFINITION_GROUP_ID: OrderableEdmTypeField<
      ConfiguratorDefinitionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUERY_TITLE: OrderableEdmTypeField<
      ConfiguratorDefinitionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ConfiguratorDefinitionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUERY_BASED: EnumField<
      ConfiguratorDefinitionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupFieldRange} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_FIELD_RANGE: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupFieldRangesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relationsBr} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATIONS_BR: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      Relations_BrApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupField} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_FIELD: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupFieldsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_TABLE: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupSortOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_SORT_ORDER: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupSortOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorLayoutGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_GROUP: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorLayoutGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configuratorDefinitionGroupSummation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP_SUMMATION: OneToManyLink<
      ConfiguratorDefinitionGroups<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupSummationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConfiguratorDefinitionGroups<DeSerializers>>;
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
         * Static representation of the {@link queryTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_TITLE: fieldBuilder.buildEdmTypeField(
          'QueryTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link isQueryBased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUERY_BASED: fieldBuilder.buildEnumField(
          'IsQueryBased',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConfiguratorDefinitionGroups)
      };
    }

    return this._schema;
  }
}
