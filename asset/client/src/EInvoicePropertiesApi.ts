/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EInvoiceProperties } from './EInvoiceProperties';
import { EInvoicePropertiesRequestBuilder } from './EInvoicePropertiesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class EInvoicePropertiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EInvoiceProperties<DeSerializersT>, DeSerializersT>
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
  ): EInvoicePropertiesApi<DeSerializersT> {
    return new EInvoicePropertiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EInvoiceProperties;

  requestBuilder(): EInvoicePropertiesRequestBuilder<DeSerializersT> {
    return new EInvoicePropertiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EInvoiceProperties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EInvoiceProperties<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EInvoiceProperties<DeSerializersT>,
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
    typeof EInvoiceProperties,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EInvoiceProperties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TABLE_NAME: OrderableEdmTypeField<
      EInvoiceProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_FIELD_NAME: OrderableEdmTypeField<
      EInvoiceProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_FIELD_VALUE: OrderableEdmTypeField<
      EInvoiceProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: OrderableEdmTypeField<
      EInvoiceProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      EInvoiceProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      EInvoiceProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      EInvoiceProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<EInvoiceProperties<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link tableFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'TableFieldName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tableFieldValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_FIELD_VALUE: fieldBuilder.buildEdmTypeField(
          'TableFieldValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', false),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EInvoiceProperties)
      };
    }

    return this._schema;
  }
}
