/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AuthorityOkato_Ru } from './AuthorityOkato_Ru';
import { AuthorityOkato_RuRequestBuilder } from './AuthorityOkato_RuRequestBuilder';
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
export class AuthorityOkato_RuApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AuthorityOkato_Ru<DeSerializersT>, DeSerializersT>
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
  ): AuthorityOkato_RuApi<DeSerializersT> {
    return new AuthorityOkato_RuApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AuthorityOkato_Ru;

  requestBuilder(): AuthorityOkato_RuRequestBuilder<DeSerializersT> {
    return new AuthorityOkato_RuRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AuthorityOkato_Ru<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AuthorityOkato_Ru<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AuthorityOkato_Ru<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AuthorityOkato_Ru,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AuthorityOkato_Ru,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AuthorityOkato_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OKATO: OrderableEdmTypeField<
      AuthorityOkato_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_AUTHORITY: OrderableEdmTypeField<
      AuthorityOkato_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AuthorityOkato_Ru<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AuthorityOkato_Ru<DeSerializers>>;
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
         * Static representation of the {@link okato} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OKATO: fieldBuilder.buildEdmTypeField('OKATO', 'Edm.String', false),
        /**
         * Static representation of the {@link taxAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'TaxAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AuthorityOkato_Ru)
      };
    }

    return this._schema;
  }
}
