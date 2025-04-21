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
import type { EfDocAuthorityWebservicesApi } from './EfDocAuthorityWebservicesApi';
import { EfDocWebServiceBr } from './EfDocWebServiceBr';
import { EfDocEnvironmentBr } from './EfDocEnvironmentBr';

/**
 * This class represents the entity "EFDocAuthorityWebservices" of service "d365_metadata".
 */
export class EfDocAuthorityWebservices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EfDocAuthorityWebservicesType<T>
{
  /**
   * Technical entity name for EfDocAuthorityWebservices.
   */
  static override _entityName = 'EFDocAuthorityWebservices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EfDocAuthorityWebservices entity.
   */
  static _keys = ['WebServiceType', 'EnvironmentType', 'Version', 'Authority'];
  /**
   * Web Service Type.
   * @nullable
   */
  declare webServiceType?: EfDocWebServiceBr | null;
  /**
   * Environment Type.
   * @nullable
   */
  declare environmentType?: EfDocEnvironmentBr | null;
  /**
   * Version.
   */
  declare version: DeserializedType<T, 'Edm.String'>;
  /**
   * Authority.
   */
  declare authority: DeserializedType<T, 'Edm.String'>;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EfDocAuthorityWebservicesApi<T>) {
    super(_entityApi);
  }
}

export interface EfDocAuthorityWebservicesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  webServiceType?: EfDocWebServiceBr | null;
  environmentType?: EfDocEnvironmentBr | null;
  version: DeserializedType<T, 'Edm.String'>;
  authority: DeserializedType<T, 'Edm.String'>;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
