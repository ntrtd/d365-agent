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
import type { ApprovalUsersApi } from './ApprovalUsersApi';

/**
 * This class represents the entity "ApprovalUsers" of service "d365_metadata".
 */
export class ApprovalUsers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApprovalUsersType<T>
{
  /**
   * Technical entity name for ApprovalUsers.
   */
  static override _entityName = 'ApprovalUsers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApprovalUsers entity.
   */
  static _keys = ['UserId'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * User Company.
   * @nullable
   */
  declare userCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Object Id.
   */
  declare userObjectId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * User Name.
   * @nullable
   */
  declare userName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApprovalUsersApi<T>) {
    super(_entityApi);
  }
}

export interface ApprovalUsersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  userCompany?: DeserializedType<T, 'Edm.String'> | null;
  userObjectId: DeserializedType<T, 'Edm.Guid'>;
  userName?: DeserializedType<T, 'Edm.String'> | null;
}
