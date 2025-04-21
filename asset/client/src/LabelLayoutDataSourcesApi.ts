/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LabelLayoutDataSources } from './LabelLayoutDataSources';
import { LabelLayoutDataSourcesRequestBuilder } from './LabelLayoutDataSourcesRequestBuilder';
import { WhsLabelLayoutType } from './WhsLabelLayoutType';
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
  EdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LabelLayoutDataSourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LabelLayoutDataSources<DeSerializersT>, DeSerializersT>
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
  ): LabelLayoutDataSourcesApi<DeSerializersT> {
    return new LabelLayoutDataSourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LabelLayoutDataSources;

  requestBuilder(): LabelLayoutDataSourcesRequestBuilder<DeSerializersT> {
    return new LabelLayoutDataSourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LabelLayoutDataSources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LabelLayoutDataSources<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LabelLayoutDataSources<DeSerializersT>,
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
    typeof LabelLayoutDataSources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LabelLayoutDataSources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LabelLayoutDataSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LABEL_LAYOUT_DATA_SOURCE_ID: OrderableEdmTypeField<
      LabelLayoutDataSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_SOURCE_QUERY: EdmTypeField<
      LabelLayoutDataSources<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LabelLayoutDataSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAYOUT_TYPE: EnumField<
      LabelLayoutDataSources<DeSerializers>,
      DeSerializersT,
      WhsLabelLayoutType,
      true,
      true
    >;
    CUSTOM_LABEL_ROOT_DATA_SOURCE_TABLE_NAME: OrderableEdmTypeField<
      LabelLayoutDataSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LabelLayoutDataSources<DeSerializers>>;
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
         * Static representation of the {@link labelLayoutDataSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_LAYOUT_DATA_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'LabelLayoutDataSourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dataSourceQuery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE_QUERY: fieldBuilder.buildEdmTypeField(
          'DataSourceQuery',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link layoutType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_TYPE: fieldBuilder.buildEnumField(
          'LayoutType',
          WhsLabelLayoutType,
          true
        ),
        /**
         * Static representation of the {@link customLabelRootDataSourceTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_LABEL_ROOT_DATA_SOURCE_TABLE_NAME:
          fieldBuilder.buildEdmTypeField(
            'CustomLabelRootDataSourceTableName',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LabelLayoutDataSources)
      };
    }

    return this._schema;
  }
}
