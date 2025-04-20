/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConfiguratorLayoutLines } from './ConfiguratorLayoutLines';
import { ConfiguratorLayoutLinesRequestBuilder } from './ConfiguratorLayoutLinesRequestBuilder';
import { ConfiguratorLayoutGroupsApi } from './ConfiguratorLayoutGroupsApi';
import { ConfLayoutLineTypeBr } from './ConfLayoutLineTypeBr';
import { NoYes } from './NoYes';
import { ConfBatchLayoutLineTypeBr } from './ConfBatchLayoutLineTypeBr';
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
export class ConfiguratorLayoutLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConfiguratorLayoutLines<DeSerializersT>, DeSerializersT>
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
  ): ConfiguratorLayoutLinesApi<DeSerializersT> {
    return new ConfiguratorLayoutLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link configuratorLayoutGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_GROUP: OneToOneLink<
      ConfiguratorLayoutLines<DeSerializersT>,
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

  entityConstructor = ConfiguratorLayoutLines;

  requestBuilder(): ConfiguratorLayoutLinesRequestBuilder<DeSerializersT> {
    return new ConfiguratorLayoutLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConfiguratorLayoutLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ConfiguratorLayoutLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConfiguratorLayoutLines<DeSerializersT>,
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
    typeof ConfiguratorLayoutLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConfiguratorLayoutLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_GROUP_ID: OrderableEdmTypeField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECORD_TYPE: EnumField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      ConfLayoutLineTypeBr,
      true,
      true
    >;
    RECORD_NAME: OrderableEdmTypeField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECORD_SIZE: OrderableEdmTypeField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HIDE: EnumField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEGMENT: OrderableEdmTypeField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_ID: OrderableEdmTypeField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_RECORD_TYPE: EnumField<
      ConfiguratorLayoutLines<DeSerializers>,
      DeSerializersT,
      ConfBatchLayoutLineTypeBr,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link configuratorLayoutGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATOR_LAYOUT_GROUP: OneToOneLink<
      ConfiguratorLayoutLines<DeSerializersT>,
      DeSerializersT,
      ConfiguratorLayoutGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConfiguratorLayoutLines<DeSerializers>>;
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
         * Static representation of the {@link recordType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_TYPE: fieldBuilder.buildEnumField(
          'RecordType',
          ConfLayoutLineTypeBr,
          true
        ),
        /**
         * Static representation of the {@link recordName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_NAME: fieldBuilder.buildEdmTypeField(
          'RecordName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recordSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_SIZE: fieldBuilder.buildEdmTypeField(
          'RecordSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link hide} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE: fieldBuilder.buildEnumField('Hide', NoYes, true),
        /**
         * Static representation of the {@link segment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT: fieldBuilder.buildEdmTypeField('Segment', 'Edm.String', true),
        /**
         * Static representation of the {@link batchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ID: fieldBuilder.buildEdmTypeField('BatchId', 'Edm.String', true),
        /**
         * Static representation of the {@link batchRecordType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_RECORD_TYPE: fieldBuilder.buildEnumField(
          'BatchRecordType',
          ConfBatchLayoutLineTypeBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConfiguratorLayoutLines)
      };
    }

    return this._schema;
  }
}
