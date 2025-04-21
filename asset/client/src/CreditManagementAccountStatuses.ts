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
import type { CreditManagementAccountStatusesApi } from './CreditManagementAccountStatusesApi';
import { CredManAccountHeldType } from './CredManAccountHeldType';

/**
 * This class represents the entity "CreditManagementAccountStatuses" of service "d365_metadata".
 */
export class CreditManagementAccountStatuses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementAccountStatusesType<T>
{
  /**
   * Technical entity name for CreditManagementAccountStatuses.
   */
  static override _entityName = 'CreditManagementAccountStatuses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementAccountStatuses entity.
   */
  static _keys = ['dataAreaId', 'CustAccountStatusId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account Status Id.
   */
  declare custAccountStatusId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account Status Description.
   * @nullable
   */
  declare custAccountStatusDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Blocked.
   * @nullable
   */
  declare custBlocked?: CredManAccountHeldType | null;

  constructor(_entityApi: CreditManagementAccountStatusesApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementAccountStatusesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  custAccountStatusId: DeserializedType<T, 'Edm.String'>;
  custAccountStatusDescription?: DeserializedType<T, 'Edm.String'> | null;
  custBlocked?: CredManAccountHeldType | null;
}
