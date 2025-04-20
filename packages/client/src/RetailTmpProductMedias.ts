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
import type { RetailTmpProductMediasApi } from './RetailTmpProductMediasApi';
import { RetailMediaAssociationStatus } from './RetailMediaAssociationStatus';

/**
 * This class represents the entity "RetailTmpProductMedias" of service "d365_metadata".
 */
export class RetailTmpProductMedias<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTmpProductMediasType<T>
{
  /**
   * Technical entity name for RetailTmpProductMedias.
   */
  static override _entityName = 'RetailTmpProductMedias';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTmpProductMedias entity.
   */
  static _keys = ['Product', 'FileName'];
  /**
   * Product.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * File Name.
   */
  declare fileName: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: RetailTmpProductMediasApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTmpProductMediasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  fileName: DeserializedType<T, 'Edm.String'>;
  associationStatus?: RetailMediaAssociationStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
