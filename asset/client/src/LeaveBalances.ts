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
import type { LeaveBalancesApi } from './LeaveBalancesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeaveBalances" of service "d365_metadata".
 */
export class LeaveBalances<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaveBalancesType<T>
{
  /**
   * Technical entity name for LeaveBalances.
   */
  static override _entityName = 'LeaveBalances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveBalances entity.
   */
  static _keys = [
    'dataAreaId',
    'BalanceType',
    'FirstName',
    'LastName',
    'MiddleName',
    'PersonnelNumber',
    'Worker'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Balance Type.
   */
  declare balanceType: DeserializedType<T, 'Edm.String'>;
  /**
   * First Name.
   */
  declare firstName: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Name.
   */
  declare lastName: DeserializedType<T, 'Edm.String'>;
  /**
   * Middle Name.
   */
  declare middleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker.
   */
  declare worker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Hide Leave Balances.
   * @nullable
   */
  declare hideLeaveBalances?: NoYes | null;
  /**
   * Accrual Start Date.
   */
  declare accrualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Balance Remaining.
   */
  declare balanceRemaining: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LeaveBalancesApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveBalancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  balanceType: DeserializedType<T, 'Edm.String'>;
  firstName: DeserializedType<T, 'Edm.String'>;
  lastName: DeserializedType<T, 'Edm.String'>;
  middleName: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  worker: DeserializedType<T, 'Edm.Int64'>;
  hideLeaveBalances?: NoYes | null;
  accrualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  balanceRemaining: DeserializedType<T, 'Edm.Decimal'>;
}
