/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailBarcodeMaskCharacters } from './RetailBarcodeMaskCharacters';
import { RetailBarcodeMaskCharactersRequestBuilder } from './RetailBarcodeMaskCharactersRequestBuilder';
import { RetailBarcodeMaskCharacterTypeBase } from './RetailBarcodeMaskCharacterTypeBase';
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
export class RetailBarcodeMaskCharactersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailBarcodeMaskCharacters<DeSerializersT>, DeSerializersT>
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
  ): RetailBarcodeMaskCharactersApi<DeSerializersT> {
    return new RetailBarcodeMaskCharactersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailBarcodeMaskCharacters;

  requestBuilder(): RetailBarcodeMaskCharactersRequestBuilder<DeSerializersT> {
    return new RetailBarcodeMaskCharactersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailBarcodeMaskCharacters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailBarcodeMaskCharacters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailBarcodeMaskCharacters<DeSerializersT>,
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
    typeof RetailBarcodeMaskCharacters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailBarcodeMaskCharacters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailBarcodeMaskCharacters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARACTER_TYPE: EnumField<
      RetailBarcodeMaskCharacters<DeSerializers>,
      DeSerializersT,
      RetailBarcodeMaskCharacterTypeBase,
      true,
      true
    >;
    CHARACTER: OrderableEdmTypeField<
      RetailBarcodeMaskCharacters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      RetailBarcodeMaskCharacters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailBarcodeMaskCharacters<DeSerializers>>;
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
         * Static representation of the {@link characterType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARACTER_TYPE: fieldBuilder.buildEnumField(
          'CharacterType',
          RetailBarcodeMaskCharacterTypeBase,
          true
        ),
        /**
         * Static representation of the {@link character} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARACTER: fieldBuilder.buildEdmTypeField(
          'Character',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailBarcodeMaskCharacters)
      };
    }

    return this._schema;
  }
}
