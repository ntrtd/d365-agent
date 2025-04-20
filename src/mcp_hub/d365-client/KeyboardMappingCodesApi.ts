/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KeyboardMappingCodes } from './KeyboardMappingCodes';
import { KeyboardMappingCodesRequestBuilder } from './KeyboardMappingCodesRequestBuilder';
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
export class KeyboardMappingCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KeyboardMappingCodes<DeSerializersT>, DeSerializersT>
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
  ): KeyboardMappingCodesApi<DeSerializersT> {
    return new KeyboardMappingCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = KeyboardMappingCodes;

  requestBuilder(): KeyboardMappingCodesRequestBuilder<DeSerializersT> {
    return new KeyboardMappingCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KeyboardMappingCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KeyboardMappingCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    KeyboardMappingCodes<DeSerializersT>,
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
    typeof KeyboardMappingCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KeyboardMappingCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEYBOARD_MAPPING_GROUP: OrderableEdmTypeField<
      KeyboardMappingCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASCII_VALUE: OrderableEdmTypeField<
      KeyboardMappingCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPERATION: OrderableEdmTypeField<
      KeyboardMappingCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    KEY_CHARACTER: OrderableEdmTypeField<
      KeyboardMappingCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_PROPERTY: OrderableEdmTypeField<
      KeyboardMappingCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<KeyboardMappingCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link keyboardMappingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYBOARD_MAPPING_GROUP: fieldBuilder.buildEdmTypeField(
          'KeyboardMappingGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link asciiValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASCII_VALUE: fieldBuilder.buildEdmTypeField(
          'AsciiValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link operation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION: fieldBuilder.buildEdmTypeField(
          'Operation',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link keyCharacter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_CHARACTER: fieldBuilder.buildEdmTypeField(
          'KeyCharacter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actionProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_PROPERTY: fieldBuilder.buildEdmTypeField(
          'ActionProperty',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KeyboardMappingCodes)
      };
    }

    return this._schema;
  }
}
