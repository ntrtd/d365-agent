/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebServices } from './WebServices';
import { WebServicesRequestBuilder } from './WebServicesRequestBuilder';
import { NoYes } from './NoYes';
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
export class WebServicesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WebServices<DeSerializersT>, DeSerializersT>
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
  ): WebServicesApi<DeSerializersT> {
    return new WebServicesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WebServices;

  requestBuilder(): WebServicesRequestBuilder<DeSerializersT> {
    return new WebServicesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WebServices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WebServices<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WebServices<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WebServices, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(WebServices, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEB_SERVICE: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOAP_PATH_REQUEST: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_HEADERS: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_SUCCESSFUL_RESPONSE_CODES: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_CONTENT_TYPE: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGN_XML_URI_PATH: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_METHOD: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_ACCEPT_ENCODING: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEB_APPLICATION_NAME: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUCCESSFUL_RESPONSE_CODE: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SIGN_XML_USE_RSA_256: EnumField<
      WebServices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGN_XML_URI_FORMAT: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGN_XML_PATH: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOAP_PATH_RESPONSE: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOAP_ENVELOPE: EnumField<
      WebServices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOAP_PATTERN_REQUEST: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_HEADERS_FORMAT_MAPPING_GUID: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    REQUEST_TYPE_XML: EnumField<
      WebServices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SIGN_XML: EnumField<
      WebServices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_ADVANCED_PARAMETERS: EnumField<
      WebServices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERNET_ADDRESS: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_ACCEPT: OrderableEdmTypeField<
      WebServices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WebServices<DeSerializers>>;
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
         * Static representation of the {@link webService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_SERVICE: fieldBuilder.buildEdmTypeField(
          'WebService',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link soapPathRequest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOAP_PATH_REQUEST: fieldBuilder.buildEdmTypeField(
          'SOAPPathRequest',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestHeaders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_HEADERS: fieldBuilder.buildEdmTypeField(
          'RequestHeaders',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalSuccessfulResponseCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_SUCCESSFUL_RESPONSE_CODES: fieldBuilder.buildEdmTypeField(
          'AdditionalSuccessfulResponseCodes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestContentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_CONTENT_TYPE: fieldBuilder.buildEdmTypeField(
          'RequestContentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signXmlUriPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_XML_URI_PATH: fieldBuilder.buildEdmTypeField(
          'SignXMLUriPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_METHOD: fieldBuilder.buildEdmTypeField(
          'RequestMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestAcceptEncoding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ACCEPT_ENCODING: fieldBuilder.buildEdmTypeField(
          'RequestAcceptEncoding',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link webApplicationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_APPLICATION_NAME: fieldBuilder.buildEdmTypeField(
          'WebApplicationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link successfulResponseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUCCESSFUL_RESPONSE_CODE: fieldBuilder.buildEdmTypeField(
          'SuccessfulResponseCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link signXmlUseRsa256} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_XML_USE_RSA_256: fieldBuilder.buildEnumField(
          'SignXMLUseRSA256',
          NoYes,
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
         * Static representation of the {@link signXmlUriFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_XML_URI_FORMAT: fieldBuilder.buildEdmTypeField(
          'SignXMLUriFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signXmlPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_XML_PATH: fieldBuilder.buildEdmTypeField(
          'SignXMLPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link soapPathResponse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOAP_PATH_RESPONSE: fieldBuilder.buildEdmTypeField(
          'SOAPPathResponse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link soapEnvelope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOAP_ENVELOPE: fieldBuilder.buildEnumField('SOAPEnvelope', NoYes, true),
        /**
         * Static representation of the {@link soapPatternRequest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOAP_PATTERN_REQUEST: fieldBuilder.buildEdmTypeField(
          'SOAPPatternRequest',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestHeadersFormatMappingGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_HEADERS_FORMAT_MAPPING_GUID: fieldBuilder.buildEdmTypeField(
          'RequestHeadersFormatMappingGUID',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link requestTypeXml} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_TYPE_XML: fieldBuilder.buildEnumField(
          'RequestTypeXML',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link signXml} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_XML: fieldBuilder.buildEnumField('SignXML', NoYes, true),
        /**
         * Static representation of the {@link useAdvancedParameters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ADVANCED_PARAMETERS: fieldBuilder.buildEnumField(
          'UseAdvancedParameters',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link internetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InternetAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestAccept} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ACCEPT: fieldBuilder.buildEdmTypeField(
          'RequestAccept',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WebServices)
      };
    }

    return this._schema;
  }
}
