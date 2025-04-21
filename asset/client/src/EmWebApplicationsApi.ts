/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmWebApplications } from './EmWebApplications';
import { EmWebApplicationsRequestBuilder } from './EmWebApplicationsRequestBuilder';
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
export class EmWebApplicationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmWebApplications<DeSerializersT>, DeSerializersT>
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
  ): EmWebApplicationsApi<DeSerializersT> {
    return new EmWebApplicationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EmWebApplications;

  requestBuilder(): EmWebApplicationsRequestBuilder<DeSerializersT> {
    return new EmWebApplicationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmWebApplications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmWebApplications<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmWebApplications<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof EmWebApplications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmWebApplications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFRESH_TOKEN_STR: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCESS_TOKEN_VALIDITY_PERIOD: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BASE_URL: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVER_TOKEN_STR: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCOPE: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REDIRECT_URL: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOKEN_URL_PATH: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORT_TOKEN_MODEL_MAPPING_GUID: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CLIENT_ID_STR: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCESS_TOKEN_RECEIPT_DATE_TIME: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WEB_REQUEST_CONTENT_TYPE: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_FORMAT_MAPPING_GUID: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CLIENT_SECRET_STR: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCESS_TOKEN_STR: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZED_BY: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORISATION_URL_PATH: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEB_REQUEST_ACCEPT: OrderableEdmTypeField<
      EmWebApplications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EmWebApplications<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link refreshTokenStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFRESH_TOKEN_STR: fieldBuilder.buildEdmTypeField(
          'RefreshTokenStr',
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
        /**
         * Static representation of the {@link accessTokenValidityPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESS_TOKEN_VALIDITY_PERIOD: fieldBuilder.buildEdmTypeField(
          'AccessTokenValidityPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link baseUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_URL: fieldBuilder.buildEdmTypeField('BaseURL', 'Edm.String', true),
        /**
         * Static representation of the {@link serverTokenStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVER_TOKEN_STR: fieldBuilder.buildEdmTypeField(
          'ServerTokenStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE: fieldBuilder.buildEdmTypeField('Scope', 'Edm.String', true),
        /**
         * Static representation of the {@link redirectUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDIRECT_URL: fieldBuilder.buildEdmTypeField(
          'RedirectURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tokenUrlPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOKEN_URL_PATH: fieldBuilder.buildEdmTypeField(
          'TokenURLPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link importTokenModelMappingGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_TOKEN_MODEL_MAPPING_GUID: fieldBuilder.buildEdmTypeField(
          'ImportTokenModelMappingGUID',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link clientIdStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_ID_STR: fieldBuilder.buildEdmTypeField(
          'ClientIdStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accessTokenReceiptDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESS_TOKEN_RECEIPT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'AccessTokenReceiptDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link webRequestContentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_REQUEST_CONTENT_TYPE: fieldBuilder.buildEdmTypeField(
          'WebRequestContentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationFormatMappingGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_FORMAT_MAPPING_GUID: fieldBuilder.buildEdmTypeField(
          'AuthorizationFormatMappingGUID',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link clientSecretStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_SECRET_STR: fieldBuilder.buildEdmTypeField(
          'ClientSecretStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accessTokenStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESS_TOKEN_STR: fieldBuilder.buildEdmTypeField(
          'AccessTokenStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZED_BY: fieldBuilder.buildEdmTypeField(
          'AuthorizedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorisationUrlPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORISATION_URL_PATH: fieldBuilder.buildEdmTypeField(
          'AuthorisationURLPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link webRequestAccept} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_REQUEST_ACCEPT: fieldBuilder.buildEdmTypeField(
          'WebRequestAccept',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmWebApplications)
      };
    }

    return this._schema;
  }
}
