/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailUserDefinedCertificateProfileSettings } from './RetailUserDefinedCertificateProfileSettings';
import { RetailUserDefinedCertificateProfileSettingsRequestBuilder } from './RetailUserDefinedCertificateProfileSettingsRequestBuilder';
import { RetailUserDefinedCertificateProfileLineLocationType } from './RetailUserDefinedCertificateProfileLineLocationType';
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
export class RetailUserDefinedCertificateProfileSettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailUserDefinedCertificateProfileSettings<DeSerializersT>,
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
  ): RetailUserDefinedCertificateProfileSettingsApi<DeSerializersT> {
    return new RetailUserDefinedCertificateProfileSettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailUserDefinedCertificateProfileSettings;

  requestBuilder(): RetailUserDefinedCertificateProfileSettingsRequestBuilder<DeSerializersT> {
    return new RetailUserDefinedCertificateProfileSettingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailUserDefinedCertificateProfileSettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailUserDefinedCertificateProfileSettings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailUserDefinedCertificateProfileSettings<DeSerializersT>,
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
    typeof RetailUserDefinedCertificateProfileSettings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailUserDefinedCertificateProfileSettings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CERTIFICATE_PROFILE: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    KEY_VAULT_CERTIFICATE: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORE_NAME: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORE_LOCATION: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_TYPE: EnumField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      RetailUserDefinedCertificateProfileLineLocationType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THUMBPRINT: OrderableEdmTypeField<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailUserDefinedCertificateProfileSettings<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link certificateProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_PROFILE: fieldBuilder.buildEdmTypeField(
          'CertificateProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link keyVaultCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_VAULT_CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'KeyVaultCertificate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link storeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NAME: fieldBuilder.buildEdmTypeField(
          'StoreName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storeLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_LOCATION: fieldBuilder.buildEdmTypeField(
          'StoreLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_TYPE: fieldBuilder.buildEnumField(
          'LocationType',
          RetailUserDefinedCertificateProfileLineLocationType,
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
         * Static representation of the {@link thumbprint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THUMBPRINT: fieldBuilder.buildEdmTypeField(
          'Thumbprint',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RetailUserDefinedCertificateProfileSettings
        )
      };
    }

    return this._schema;
  }
}
