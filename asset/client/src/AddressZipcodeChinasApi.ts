/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressZipcodeChinas } from './AddressZipcodeChinas';
import { AddressZipcodeChinasRequestBuilder } from './AddressZipcodeChinasRequestBuilder';
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
export class AddressZipcodeChinasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressZipcodeChinas<DeSerializersT>, DeSerializersT>
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
  ): AddressZipcodeChinasApi<DeSerializersT> {
    return new AddressZipcodeChinasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AddressZipcodeChinas;

  requestBuilder(): AddressZipcodeChinasRequestBuilder<DeSerializersT> {
    return new AddressZipcodeChinasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressZipcodeChinas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressZipcodeChinas<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressZipcodeChinas<DeSerializersT>,
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
    typeof AddressZipcodeChinas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressZipcodeChinas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    YZBM: OrderableEdmTypeField<
      AddressZipcodeChinas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JD_4: OrderableEdmTypeField<
      AddressZipcodeChinas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JD_3: OrderableEdmTypeField<
      AddressZipcodeChinas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JD_2: OrderableEdmTypeField<
      AddressZipcodeChinas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JD_1: OrderableEdmTypeField<
      AddressZipcodeChinas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    XZQH: OrderableEdmTypeField<
      AddressZipcodeChinas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    XZQU: OrderableEdmTypeField<
      AddressZipcodeChinas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JD_5: OrderableEdmTypeField<
      AddressZipcodeChinas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AddressZipcodeChinas<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link yzbm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YZBM: fieldBuilder.buildEdmTypeField('yzbm', 'Edm.String', false),
        /**
         * Static representation of the {@link jd4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JD_4: fieldBuilder.buildEdmTypeField('jd4', 'Edm.String', true),
        /**
         * Static representation of the {@link jd3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JD_3: fieldBuilder.buildEdmTypeField('jd3', 'Edm.String', true),
        /**
         * Static representation of the {@link jd2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JD_2: fieldBuilder.buildEdmTypeField('jd2', 'Edm.String', true),
        /**
         * Static representation of the {@link jd1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JD_1: fieldBuilder.buildEdmTypeField('jd1', 'Edm.String', true),
        /**
         * Static representation of the {@link xzqh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        XZQH: fieldBuilder.buildEdmTypeField('xzqh', 'Edm.String', true),
        /**
         * Static representation of the {@link xzqu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        XZQU: fieldBuilder.buildEdmTypeField('xzqu', 'Edm.String', true),
        /**
         * Static representation of the {@link jd5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JD_5: fieldBuilder.buildEdmTypeField('jd5', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressZipcodeChinas)
      };
    }

    return this._schema;
  }
}
