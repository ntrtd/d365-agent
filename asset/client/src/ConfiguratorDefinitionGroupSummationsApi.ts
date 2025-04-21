/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConfiguratorDefinitionGroupSummations } from './ConfiguratorDefinitionGroupSummations';
import { ConfiguratorDefinitionGroupSummationsRequestBuilder } from './ConfiguratorDefinitionGroupSummationsRequestBuilder';
import { ConfiguratorDefinitionGroupsApi } from './ConfiguratorDefinitionGroupsApi';
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
export class ConfiguratorDefinitionGroupSummationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ConfiguratorDefinitionGroupSummations<DeSerializersT>,
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
  ): ConfiguratorDefinitionGroupSummationsApi<DeSerializersT> {
    return new ConfiguratorDefinitionGroupSummationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      ConfiguratorDefinitionGroupSummations<DeSerializersT>,
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

  entityConstructor = ConfiguratorDefinitionGroupSummations;

  requestBuilder(): ConfiguratorDefinitionGroupSummationsRequestBuilder<DeSerializersT> {
    return new ConfiguratorDefinitionGroupSummationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ConfiguratorDefinitionGroupSummations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ConfiguratorDefinitionGroupSummations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConfiguratorDefinitionGroupSummations<DeSerializersT>,
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
    typeof ConfiguratorDefinitionGroupSummations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConfiguratorDefinitionGroupSummations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFINITION_GROUP_ID: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNT_ALL: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AVERAGE_SELECTED: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COUNT_SELECTED: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AVERAGE: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUM_SELECTED: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUM_ALL: OrderableEdmTypeField<
      ConfiguratorDefinitionGroupSummations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link configuratorDefinitionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_DEFINITION_GROUP: OneToOneLink<
      ConfiguratorDefinitionGroupSummations<DeSerializersT>,
      DeSerializersT,
      ConfiguratorDefinitionGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConfiguratorDefinitionGroupSummations<DeSerializers>>;
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
         * Static representation of the {@link countAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNT_ALL: fieldBuilder.buildEdmTypeField(
          'CountAll',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link averageSelected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_SELECTED: fieldBuilder.buildEdmTypeField(
          'AverageSelected',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link countSelected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNT_SELECTED: fieldBuilder.buildEdmTypeField(
          'CountSelected',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link average} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE: fieldBuilder.buildEdmTypeField(
          'Average',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sumSelected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_SELECTED: fieldBuilder.buildEdmTypeField(
          'SumSelected',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sumAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_ALL: fieldBuilder.buildEdmTypeField('SumAll', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConfiguratorDefinitionGroupSummations)
      };
    }

    return this._schema;
  }
}
