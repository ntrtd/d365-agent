/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCdxFileStorageProviders } from './RetailCdxFileStorageProviders';
import { RetailCdxFileStorageProvidersRequestBuilder } from './RetailCdxFileStorageProvidersRequestBuilder';
import { RetailCdxPackageStoreType } from './RetailCdxPackageStoreType';
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
export class RetailCdxFileStorageProvidersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailCdxFileStorageProviders<DeSerializersT>, DeSerializersT>
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
  ): RetailCdxFileStorageProvidersApi<DeSerializersT> {
    return new RetailCdxFileStorageProvidersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailCdxFileStorageProviders;

  requestBuilder(): RetailCdxFileStorageProvidersRequestBuilder<DeSerializersT> {
    return new RetailCdxFileStorageProvidersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailCdxFileStorageProviders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailCdxFileStorageProviders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailCdxFileStorageProviders<DeSerializersT>,
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
    typeof RetailCdxFileStorageProviders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCdxFileStorageProviders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RetailCdxFileStorageProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHARE_DOWNLOAD_PATH: OrderableEdmTypeField<
      RetailCdxFileStorageProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKAGE_STORE_TYPE: EnumField<
      RetailCdxFileStorageProviders<DeSerializers>,
      DeSerializersT,
      RetailCdxPackageStoreType,
      true,
      true
    >;
    SHARE_UPLOAD_PATH: OrderableEdmTypeField<
      RetailCdxFileStorageProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailCdxFileStorageProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailCdxFileStorageProviders<DeSerializers>>;
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
         * Static representation of the {@link shareDownloadPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARE_DOWNLOAD_PATH: fieldBuilder.buildEdmTypeField(
          'ShareDownloadPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packageStoreType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_STORE_TYPE: fieldBuilder.buildEnumField(
          'PackageStoreType',
          RetailCdxPackageStoreType,
          true
        ),
        /**
         * Static representation of the {@link shareUploadPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARE_UPLOAD_PATH: fieldBuilder.buildEdmTypeField(
          'ShareUploadPath',
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
        ALL_FIELDS: new AllFields('*', RetailCdxFileStorageProviders)
      };
    }

    return this._schema;
  }
}
