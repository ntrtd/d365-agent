/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConfiguratorLayoutFields } from './ConfiguratorLayoutFields';
import { ConfiguratorLayoutFieldsRequestBuilder } from './ConfiguratorLayoutFieldsRequestBuilder';
import { ConfiguratorLayoutGroupsApi } from './ConfiguratorLayoutGroupsApi';
import { DisplayFunctionType } from './DisplayFunctionType';
import { ConfJustifyBr } from './ConfJustifyBr';
import { ConfFieldTypeBr } from './ConfFieldTypeBr';
import { ConfTruncateBr } from './ConfTruncateBr';
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
export class ConfiguratorLayoutFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConfiguratorLayoutFields<DeSerializersT>, DeSerializersT>
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
  ): ConfiguratorLayoutFieldsApi<DeSerializersT> {
    return new ConfiguratorLayoutFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link configuratorLayoutGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_GROUP: OneToOneLink<
      ConfiguratorLayoutFields<DeSerializersT>,
      DeSerializersT,
      ConfiguratorLayoutGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ConfiguratorLayoutGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CONFIGURATOR_LAYOUT_GROUP: new OneToOneLink(
        'ConfiguratorLayoutGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ConfiguratorLayoutFields;

  requestBuilder(): ConfiguratorLayoutFieldsRequestBuilder<DeSerializersT> {
    return new ConfiguratorLayoutFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConfiguratorLayoutFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ConfiguratorLayoutFields<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConfiguratorLayoutFields<DeSerializersT>,
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
    typeof ConfiguratorLayoutFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConfiguratorLayoutFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_GROUP_ID: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIELD_NUMBER: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    METHOD_NAME: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_POSITION: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONTENT: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_OF_METHOD: EnumField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      DisplayFunctionType,
      true,
      true
    >;
    JUSTIFICATION: EnumField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      ConfJustifyBr,
      true,
      true
    >;
    START_POSITION: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TYPE: EnumField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      ConfFieldTypeBr,
      true,
      true
    >;
    FORMAT: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUMMATION_TYPE: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRUNCATE_FIELD: EnumField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      ConfTruncateBr,
      true,
      true
    >;
    FIELD_SIZE: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILL: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_ID: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARRAY_INDEX: OrderableEdmTypeField<
      ConfiguratorLayoutFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link configuratorLayoutGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_GROUP: OneToOneLink<
      ConfiguratorLayoutFields<DeSerializersT>,
      DeSerializersT,
      ConfiguratorLayoutGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConfiguratorLayoutFields<DeSerializers>>;
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
         * Static representation of the {@link layoutGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'LayoutGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fieldNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NUMBER: fieldBuilder.buildEdmTypeField(
          'FieldNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link methodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'MethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_POSITION: fieldBuilder.buildEdmTypeField(
          'EndPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link content} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT: fieldBuilder.buildEdmTypeField('Content', 'Edm.String', true),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link typeOfMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_METHOD: fieldBuilder.buildEnumField(
          'TypeOfMethod',
          DisplayFunctionType,
          true
        ),
        /**
         * Static representation of the {@link justification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JUSTIFICATION: fieldBuilder.buildEnumField(
          'Justification',
          ConfJustifyBr,
          true
        ),
        /**
         * Static representation of the {@link startPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_POSITION: fieldBuilder.buildEdmTypeField(
          'StartPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', ConfFieldTypeBr, true),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEdmTypeField('Format', 'Edm.String', true),
        /**
         * Static representation of the {@link summationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMATION_TYPE: fieldBuilder.buildEdmTypeField(
          'SummationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link truncateField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRUNCATE_FIELD: fieldBuilder.buildEnumField(
          'TruncateField',
          ConfTruncateBr,
          true
        ),
        /**
         * Static representation of the {@link fieldSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_SIZE: fieldBuilder.buildEdmTypeField(
          'FieldSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'FieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fill} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILL: fieldBuilder.buildEdmTypeField('Fill', 'Edm.String', true),
        /**
         * Static representation of the {@link batchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ID: fieldBuilder.buildEdmTypeField('BatchId', 'Edm.String', true),
        /**
         * Static representation of the {@link arrayIndex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARRAY_INDEX: fieldBuilder.buildEdmTypeField(
          'ArrayIndex',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConfiguratorLayoutFields)
      };
    }

    return this._schema;
  }
}
