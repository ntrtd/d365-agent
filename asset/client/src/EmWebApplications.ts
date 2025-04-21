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
import type { EmWebApplicationsApi } from './EmWebApplicationsApi';

/**
 * This class represents the entity "EMWebApplications" of service "d365_metadata".
 */
export class EmWebApplications<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmWebApplicationsType<T>
{
  /**
   * Technical entity name for EmWebApplications.
   */
  static override _entityName = 'EMWebApplications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmWebApplications entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Refresh Token Str.
   * @nullable
   */
  declare refreshTokenStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Access Token Validity Period.
   */
  declare accessTokenValidityPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Base Url.
   * @nullable
   */
  declare baseUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Server Token Str.
   * @nullable
   */
  declare serverTokenStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scope.
   * @nullable
   */
  declare scope?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Redirect Url.
   * @nullable
   */
  declare redirectUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Token Url Path.
   * @nullable
   */
  declare tokenUrlPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Import Token Model Mapping Guid.
   */
  declare importTokenModelMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Client Id Str.
   * @nullable
   */
  declare clientIdStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Access Token Receipt Date Time.
   */
  declare accessTokenReceiptDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Web Request Content Type.
   * @nullable
   */
  declare webRequestContentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Format Mapping Guid.
   */
  declare authorizationFormatMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Client Secret Str.
   * @nullable
   */
  declare clientSecretStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Access Token Str.
   * @nullable
   */
  declare accessTokenStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorized By.
   * @nullable
   */
  declare authorizedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorisation Url Path.
   * @nullable
   */
  declare authorisationUrlPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Web Request Accept.
   * @nullable
   */
  declare webRequestAccept?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EmWebApplicationsApi<T>) {
    super(_entityApi);
  }
}

export interface EmWebApplicationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  refreshTokenStr?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  accessTokenValidityPeriod: DeserializedType<T, 'Edm.Int32'>;
  baseUrl?: DeserializedType<T, 'Edm.String'> | null;
  serverTokenStr?: DeserializedType<T, 'Edm.String'> | null;
  scope?: DeserializedType<T, 'Edm.String'> | null;
  redirectUrl?: DeserializedType<T, 'Edm.String'> | null;
  tokenUrlPath?: DeserializedType<T, 'Edm.String'> | null;
  importTokenModelMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  clientIdStr?: DeserializedType<T, 'Edm.String'> | null;
  accessTokenReceiptDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  webRequestContentType?: DeserializedType<T, 'Edm.String'> | null;
  authorizationFormatMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  clientSecretStr?: DeserializedType<T, 'Edm.String'> | null;
  accessTokenStr?: DeserializedType<T, 'Edm.String'> | null;
  authorizedBy?: DeserializedType<T, 'Edm.String'> | null;
  authorisationUrlPath?: DeserializedType<T, 'Edm.String'> | null;
  webRequestAccept?: DeserializedType<T, 'Edm.String'> | null;
}
