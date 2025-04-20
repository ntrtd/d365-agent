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
import type { RetailRecoListsApi } from './RetailRecoListsApi';
import { RetailRecoListTypeBase } from './RetailRecoListTypeBase';

/**
 * This class represents the entity "RetailRecoLists" of service "d365_metadata".
 */
export class RetailRecoLists<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailRecoListsType<T>
{
  /**
   * Technical entity name for RetailRecoLists.
   */
  static override _entityName = 'RetailRecoLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailRecoLists entity.
   */
  static _keys = ['ListId'];
  /**
   * List Id.
   */
  declare listId: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Modified Date Time.
   */
  declare lastModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * List Title.
   * @nullable
   */
  declare listTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Type.
   * @nullable
   */
  declare listType?: RetailRecoListTypeBase | null;

  constructor(_entityApi: RetailRecoListsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailRecoListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  listId: DeserializedType<T, 'Edm.String'>;
  lastModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  listTitle?: DeserializedType<T, 'Edm.String'> | null;
  listType?: RetailRecoListTypeBase | null;
}
