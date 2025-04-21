/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalIntegrationDocumentProviderTables } from './FiscalIntegrationDocumentProviderTables';
import { FiscalIntegrationDocumentProviderTablesRequestBuilder } from './FiscalIntegrationDocumentProviderTablesRequestBuilder';
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
export class FiscalIntegrationDocumentProviderTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalIntegrationDocumentProviderTables<DeSerializersT>,
      DeSerializersT
    >
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
  ): FiscalIntegrationDocumentProviderTablesApi<DeSerializersT> {
    return new FiscalIntegrationDocumentProviderTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalIntegrationDocumentProviderTables;

  requestBuilder(): FiscalIntegrationDocumentProviderTablesRequestBuilder<DeSerializersT> {
    return new FiscalIntegrationDocumentProviderTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalIntegrationDocumentProviderTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalIntegrationDocumentProviderTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalIntegrationDocumentProviderTables<DeSerializersT>,
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
    typeof FiscalIntegrationDocumentProviderTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalIntegrationDocumentProviderTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOCUMENT_PROVIDER_NAME: OrderableEdmTypeField<
      FiscalIntegrationDocumentProviderTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANIFEST: OrderableEdmTypeField<
      FiscalIntegrationDocumentProviderTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalIntegrationDocumentProviderTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      FiscalIntegrationDocumentProviderTables<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link documentProviderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_PROVIDER_NAME: fieldBuilder.buildEdmTypeField(
          'DocumentProviderName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link manifest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANIFEST: fieldBuilder.buildEdmTypeField(
          'Manifest',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalIntegrationDocumentProviderTables)
      };
    }

    return this._schema;
  }
}
