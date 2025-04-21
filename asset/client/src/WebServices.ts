/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { WebServicesApi } from './WebServicesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WebServices" of service "d365_metadata".
 */
export class WebServices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WebServicesType<T>
{
  /**
   * Technical entity name for WebServices.
   */
  static override _entityName = 'WebServices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WebServices entity.
   */
  static _keys = ['dataAreaId', 'WebService'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Web Service.
   */
  declare webService: DeserializedType<T, 'Edm.String'>;
  /**
   * Soap Path Request.
   * @nullable
   */
  declare soapPathRequest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Headers.
   * @nullable
   */
  declare requestHeaders?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Successful Response Codes.
   * @nullable
   */
  declare additionalSuccessfulResponseCodes?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Request Content Type.
   * @nullable
   */
  declare requestContentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sign Xml Uri Path.
   * @nullable
   */
  declare signXmlUriPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Method.
   * @nullable
   */
  declare requestMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Accept Encoding.
   * @nullable
   */
  declare requestAcceptEncoding?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Web Application Name.
   * @nullable
   */
  declare webApplicationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Successful Response Code.
   */
  declare successfulResponseCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sign Xml Use Rsa 256.
   * @nullable
   */
  declare signXmlUseRsa256?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sign Xml Uri Format.
   * @nullable
   */
  declare signXmlUriFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sign Xml Path.
   * @nullable
   */
  declare signXmlPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Soap Path Response.
   * @nullable
   */
  declare soapPathResponse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Soap Envelope.
   * @nullable
   */
  declare soapEnvelope?: NoYes | null;
  /**
   * Soap Pattern Request.
   * @nullable
   */
  declare soapPatternRequest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Headers Format Mapping Guid.
   */
  declare requestHeadersFormatMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Request Type Xml.
   * @nullable
   */
  declare requestTypeXml?: NoYes | null;
  /**
   * Sign Xml.
   * @nullable
   */
  declare signXml?: NoYes | null;
  /**
   * Use Advanced Parameters.
   * @nullable
   */
  declare useAdvancedParameters?: NoYes | null;
  /**
   * Internet Address.
   * @nullable
   */
  declare internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Accept.
   * @nullable
   */
  declare requestAccept?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WebServicesApi<T>) {
    super(_entityApi);
  }
}

export interface WebServicesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  webService: DeserializedType<T, 'Edm.String'>;
  soapPathRequest?: DeserializedType<T, 'Edm.String'> | null;
  requestHeaders?: DeserializedType<T, 'Edm.String'> | null;
  additionalSuccessfulResponseCodes?: DeserializedType<T, 'Edm.String'> | null;
  requestContentType?: DeserializedType<T, 'Edm.String'> | null;
  signXmlUriPath?: DeserializedType<T, 'Edm.String'> | null;
  requestMethod?: DeserializedType<T, 'Edm.String'> | null;
  requestAcceptEncoding?: DeserializedType<T, 'Edm.String'> | null;
  webApplicationName?: DeserializedType<T, 'Edm.String'> | null;
  successfulResponseCode: DeserializedType<T, 'Edm.Int32'>;
  signXmlUseRsa256?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  signXmlUriFormat?: DeserializedType<T, 'Edm.String'> | null;
  signXmlPath?: DeserializedType<T, 'Edm.String'> | null;
  soapPathResponse?: DeserializedType<T, 'Edm.String'> | null;
  soapEnvelope?: NoYes | null;
  soapPatternRequest?: DeserializedType<T, 'Edm.String'> | null;
  requestHeadersFormatMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  requestTypeXml?: NoYes | null;
  signXml?: NoYes | null;
  useAdvancedParameters?: NoYes | null;
  internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  requestAccept?: DeserializedType<T, 'Edm.String'> | null;
}
