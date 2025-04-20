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
import type { TaxDeclarationSetupsApi } from './TaxDeclarationSetupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TaxDeclarationSetups" of service "d365_metadata".
 */
export class TaxDeclarationSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxDeclarationSetupsType<T>
{
  /**
   * Technical entity name for TaxDeclarationSetups.
   */
  static override _entityName = 'TaxDeclarationSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxDeclarationSetups entity.
   */
  static _keys = ['dataAreaId', 'ID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Of Proxy Server.
   * @nullable
   */
  declare useOfProxyServer?: NoYes | null;
  /**
   * Proxy Server Authentication Required.
   * @nullable
   */
  declare proxyServerAuthenticationRequired?: NoYes | null;
  /**
   * Authentication.
   * @nullable
   */
  declare authentication?: NoYes | null;
  /**
   * Proxy Server Port Number.
   */
  declare proxyServerPortNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proxy Server Ip Address.
   * @nullable
   */
  declare proxyServerIpAddress?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxDeclarationSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxDeclarationSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int32'>;
  useOfProxyServer?: NoYes | null;
  proxyServerAuthenticationRequired?: NoYes | null;
  authentication?: NoYes | null;
  proxyServerPortNumber: DeserializedType<T, 'Edm.Int32'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  proxyServerIpAddress?: DeserializedType<T, 'Edm.String'> | null;
}
