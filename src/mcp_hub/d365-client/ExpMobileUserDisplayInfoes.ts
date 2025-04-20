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
import type { ExpMobileUserDisplayInfoesApi } from './ExpMobileUserDisplayInfoesApi';

/**
 * This class represents the entity "ExpMobileUserDisplayInfoes" of service "d365_metadata".
 */
export class ExpMobileUserDisplayInfoes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileUserDisplayInfoesType<T>
{
  /**
   * Technical entity name for ExpMobileUserDisplayInfoes.
   */
  static override _entityName = 'ExpMobileUserDisplayInfoes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileUserDisplayInfoes entity.
   */
  static _keys = ['DirPerson_PartyNumber'];
  /**
   * Dir Person Party Number.
   */
  declare dirPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * User.
   * @nullable
   */
  declare user?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Image.
   * @nullable
   */
  declare userImage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileUserDisplayInfoesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileUserDisplayInfoesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dirPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  user?: DeserializedType<T, 'Edm.String'> | null;
  userImage?: DeserializedType<T, 'Edm.String'> | null;
}
