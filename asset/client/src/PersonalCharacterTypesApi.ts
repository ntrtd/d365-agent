/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonalCharacterTypes } from './PersonalCharacterTypes';
import { PersonalCharacterTypesRequestBuilder } from './PersonalCharacterTypesRequestBuilder';
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
export class PersonalCharacterTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonalCharacterTypes<DeSerializersT>, DeSerializersT>
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
  ): PersonalCharacterTypesApi<DeSerializersT> {
    return new PersonalCharacterTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PersonalCharacterTypes;

  requestBuilder(): PersonalCharacterTypesRequestBuilder<DeSerializersT> {
    return new PersonalCharacterTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonalCharacterTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PersonalCharacterTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonalCharacterTypes<DeSerializersT>,
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
    typeof PersonalCharacterTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonalCharacterTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PersonalCharacterTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_NAME: OrderableEdmTypeField<
      PersonalCharacterTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_DESCRIPTION: OrderableEdmTypeField<
      PersonalCharacterTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PersonalCharacterTypes<DeSerializers>>;
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
         * Static representation of the {@link typeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'TypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link typeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TypeDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonalCharacterTypes)
      };
    }

    return this._schema;
  }
}
