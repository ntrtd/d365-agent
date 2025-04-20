/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConfiguratorDefinitionGroupSortOrders } from './ConfiguratorDefinitionGroupSortOrders';
import { ConfiguratorDefinitionGroupSortOrdersRequestBuilder } from './ConfiguratorDefinitionGroupSortOrdersRequestBuilder';
import { ConfiguratorDefinitionGroupsApi } from './ConfiguratorDefinitionGroupsApi';
import { SortOrder } from './SortOrder';
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
export class ConfiguratorDefinitionGroupSortOrdersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ConfiguratorDefinitionGroupSortOrders<DeSerializersT>,
      DeSerializersT
    >
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
  ): ConfiguratorDefinitionGroupSortOrdersApi<DeSerializersT> {
    return new ConfiguratorDefinitionGroupSortOrdersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      ConfiguratorDefinitionGroupSortOrders<DeSerializersT>,
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

  entityConstructor = ConfiguratorDefinitionGroupSortOrders;

  requestBuilder(): ConfiguratorDefinitionGroupSortOrdersRequestBuilder<DeSerializersT> {
    return new ConfiguratorDefinitionGroupSortOrdersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ConfiguratorDefinitionGroupSortOrders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ConfiguratorDefinitionGroupSortOrders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConfiguratorDefinitionGroupSortOrders<DeSerializersT>,
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
    typeof ConfiguratorDefinitionGroupSortOrders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConfiguratorDefinitionGroupSortOrders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSortOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFINITION_GROUP_ID: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSortOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSortOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSortOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SORTING_NUMBER: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSortOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SORT_ORDER: EnumField<
      ConfiguratorDefinitionGroupSortOrders<DeSerializers>,
      DeSerializersT,
      SortOrder,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      ConfiguratorDefinitionGroupSortOrders<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConfiguratorDefinitionGroupSortOrders<DeSerializers>>;
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
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'FieldName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sortingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_NUMBER: fieldBuilder.buildEdmTypeField(
          'SortingNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sortOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_ORDER: fieldBuilder.buildEnumField('SortOrder', SortOrder, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConfiguratorDefinitionGroupSortOrders)
      };
    }

    return this._schema;
  }
}
