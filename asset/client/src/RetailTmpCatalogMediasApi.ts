/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTmpCatalogMedias } from './RetailTmpCatalogMedias';
import { RetailTmpCatalogMediasRequestBuilder } from './RetailTmpCatalogMediasRequestBuilder';
import { RetailMediaAssociationStatus } from './RetailMediaAssociationStatus';
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
export class RetailTmpCatalogMediasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTmpCatalogMedias<DeSerializersT>, DeSerializersT>
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
  ): RetailTmpCatalogMediasApi<DeSerializersT> {
    return new RetailTmpCatalogMediasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTmpCatalogMedias;

  requestBuilder(): RetailTmpCatalogMediasRequestBuilder<DeSerializersT> {
    return new RetailTmpCatalogMediasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTmpCatalogMedias<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTmpCatalogMedias<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTmpCatalogMedias<DeSerializersT>,
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
    typeof RetailTmpCatalogMedias,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTmpCatalogMedias,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATALOG: OrderableEdmTypeField<
      RetailTmpCatalogMedias<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      RetailTmpCatalogMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSOCIATION_STATUS: EnumField<
      RetailTmpCatalogMedias<DeSerializers>,
      DeSerializersT,
      RetailMediaAssociationStatus,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailTmpCatalogMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      RetailTmpCatalogMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATALOG_NAME: OrderableEdmTypeField<
      RetailTmpCatalogMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailTmpCatalogMedias<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link catalog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG: fieldBuilder.buildEdmTypeField('Catalog', 'Edm.Int64', false),
        /**
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'FileName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link associationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATION_STATUS: fieldBuilder.buildEnumField(
          'AssociationStatus',
          RetailMediaAssociationStatus,
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
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('Url', 'Edm.String', true),
        /**
         * Static representation of the {@link catalogName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_NAME: fieldBuilder.buildEdmTypeField(
          'CatalogName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTmpCatalogMedias)
      };
    }

    return this._schema;
  }
}
