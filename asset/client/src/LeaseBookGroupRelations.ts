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
import type { LeaseBookGroupRelationsApi } from './LeaseBookGroupRelationsApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "LeaseBookGroupRelations" of service "d365_metadata".
 */
export class LeaseBookGroupRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseBookGroupRelationsType<T>
{
  /**
   * Technical entity name for LeaseBookGroupRelations.
   */
  static override _entityName = 'LeaseBookGroupRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseBookGroupRelations entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Group.
   * @nullable
   */
  declare leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Book Type.
   * @nullable
   */
  declare bookType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;

  constructor(_entityApi: LeaseBookGroupRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseBookGroupRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  bookType?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
}
