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
import type { RetailTmpChannelProductMediasApi } from './RetailTmpChannelProductMediasApi';
import { RetailMediaAssociationStatus } from './RetailMediaAssociationStatus';

/**
 * This class represents the entity "RetailTmpChannelProductMedias" of service "d365_metadata".
 */
export class RetailTmpChannelProductMedias<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTmpChannelProductMediasType<T>
{
  /**
   * Technical entity name for RetailTmpChannelProductMedias.
   */
  static override _entityName = 'RetailTmpChannelProductMedias';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTmpChannelProductMedias entity.
   */
  static _keys = ['InternalOrganization', 'FileName'];
  /**
   * Internal Organization.
   */
  declare internalOrganization: DeserializedType<T, 'Edm.Int64'>;
  /**
   * File Name.
   */
  declare fileName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product.
   * @nullable
   */
  declare product?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Association Status.
   * @nullable
   */
  declare associationStatus?: RetailMediaAssociationStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTmpChannelProductMediasApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTmpChannelProductMediasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  internalOrganization: DeserializedType<T, 'Edm.Int64'>;
  fileName: DeserializedType<T, 'Edm.String'>;
  product?: DeserializedType<T, 'Edm.String'> | null;
  associationStatus?: RetailMediaAssociationStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
