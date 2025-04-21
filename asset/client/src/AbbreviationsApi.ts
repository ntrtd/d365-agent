/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Abbreviations } from './Abbreviations';
import { AbbreviationsRequestBuilder } from './AbbreviationsRequestBuilder';
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
export class AbbreviationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Abbreviations<DeSerializersT>, DeSerializersT>
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
  ): AbbreviationsApi<DeSerializersT> {
    return new AbbreviationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Abbreviations;

  requestBuilder(): AbbreviationsRequestBuilder<DeSerializersT> {
    return new AbbreviationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Abbreviations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Abbreviations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Abbreviations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Abbreviations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Abbreviations, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDR_TYPE_CODE: OrderableEdmTypeField<
      Abbreviations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDR_TYPE_LEVEL: OrderableEdmTypeField<
      Abbreviations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDR_TYPE_NAME: OrderableEdmTypeField<
      Abbreviations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDR_TYPE_FULL_NAME: OrderableEdmTypeField<
      Abbreviations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Abbreviations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link addrTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDR_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'AddrTypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addrTypeLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDR_TYPE_LEVEL: fieldBuilder.buildEdmTypeField(
          'AddrTypeLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link addrTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDR_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'AddrTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addrTypeFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDR_TYPE_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'AddrTypeFullName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Abbreviations)
      };
    }

    return this._schema;
  }
}
