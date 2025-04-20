/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EfDocSchemas } from './EfDocSchemas';
import { EfDocSchemasRequestBuilder } from './EfDocSchemasRequestBuilder';
import { EfDocSchemaTypeBr } from './EfDocSchemaTypeBr';
import { EFiscalDocVersionBr } from './EFiscalDocVersionBr';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class EfDocSchemasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EfDocSchemas<DeSerializersT>, DeSerializersT>
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
  ): EfDocSchemasApi<DeSerializersT> {
    return new EfDocSchemasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EfDocSchemas;

  requestBuilder(): EfDocSchemasRequestBuilder<DeSerializersT> {
    return new EfDocSchemasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EfDocSchemas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EfDocSchemas<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EfDocSchemas<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EfDocSchemas, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EfDocSchemas, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SCHEMA_TYPE: EnumField<
      EfDocSchemas<DeSerializers>,
      DeSerializersT,
      EfDocSchemaTypeBr,
      true,
      true
    >;
    VERSION: EnumField<
      EfDocSchemas<DeSerializers>,
      DeSerializersT,
      EFiscalDocVersionBr,
      true,
      true
    >;
    SCHEMA_FILE_PATH: OrderableEdmTypeField<
      EfDocSchemas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EfDocSchemas<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link schemaType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEMA_TYPE: fieldBuilder.buildEnumField(
          'SchemaType',
          EfDocSchemaTypeBr,
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEnumField(
          'Version',
          EFiscalDocVersionBr,
          true
        ),
        /**
         * Static representation of the {@link schemaFilePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEMA_FILE_PATH: fieldBuilder.buildEdmTypeField(
          'SchemaFilePath',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EfDocSchemas)
      };
    }

    return this._schema;
  }
}
