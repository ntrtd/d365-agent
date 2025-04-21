/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTerminalCustomFields } from './RetailTerminalCustomFields';
import { RetailTerminalCustomFieldsRequestBuilder } from './RetailTerminalCustomFieldsRequestBuilder';
import { RetailTerminalCustomFieldTypeBase } from './RetailTerminalCustomFieldTypeBase';
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
export class RetailTerminalCustomFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTerminalCustomFields<DeSerializersT>, DeSerializersT>
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
  ): RetailTerminalCustomFieldsApi<DeSerializersT> {
    return new RetailTerminalCustomFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTerminalCustomFields;

  requestBuilder(): RetailTerminalCustomFieldsRequestBuilder<DeSerializersT> {
    return new RetailTerminalCustomFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTerminalCustomFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTerminalCustomFields<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTerminalCustomFields<DeSerializersT>,
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
    typeof RetailTerminalCustomFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTerminalCustomFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RetailTerminalCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: EnumField<
      RetailTerminalCustomFields<DeSerializers>,
      DeSerializersT,
      RetailTerminalCustomFieldTypeBase,
      true,
      true
    >;
    CAPTION_TEXT_ID: OrderableEdmTypeField<
      RetailTerminalCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TYPE_AS_INT: OrderableEdmTypeField<
      RetailTerminalCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTerminalCustomFields<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          RetailTerminalCustomFieldTypeBase,
          true
        ),
        /**
         * Static representation of the {@link captionTextId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTION_TEXT_ID: fieldBuilder.buildEdmTypeField(
          'CaptionTextId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link typeAsInt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_AS_INT: fieldBuilder.buildEdmTypeField(
          'TypeAsInt',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTerminalCustomFields)
      };
    }

    return this._schema;
  }
}
