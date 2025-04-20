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
import type { TaxDeclarationServersApi } from './TaxDeclarationServersApi';

/**
 * This class represents the entity "TaxDeclarationServers" of service "d365_metadata".
 */
export class TaxDeclarationServers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxDeclarationServersType<T>
{
  /**
   * Technical entity name for TaxDeclarationServers.
   */
  static override _entityName = 'TaxDeclarationServers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxDeclarationServers entity.
   */
  static _keys = ['dataAreaId', 'InternetAddress'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Internet Address.
   */
  declare internetAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxDeclarationServersApi<T>) {
    super(_entityApi);
  }
}

export interface TaxDeclarationServersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  internetAddress: DeserializedType<T, 'Edm.String'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
}
