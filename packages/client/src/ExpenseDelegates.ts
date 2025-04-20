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
import type { ExpenseDelegatesApi } from './ExpenseDelegatesApi';

/**
 * This class represents the entity "ExpenseDelegates" of service "d365_metadata".
 */
export class ExpenseDelegates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseDelegatesType<T>
{
  /**
   * Technical entity name for ExpenseDelegates.
   */
  static override _entityName = 'ExpenseDelegates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseDelegates entity.
   */
  static _keys = [
    'dataAreaId',
    'DelegatedUser',
    'DelegatingPersonnelNumber',
    'FromDateUTC',
    'ToDateUTC'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delegated User.
   */
  declare delegatedUser: DeserializedType<T, 'Edm.String'>;
  /**
   * Delegating Personnel Number.
   */
  declare delegatingPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date Utc.
   */
  declare fromDateUtc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date Utc.
   */
  declare toDateUtc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delegated Personnel Number.
   * @nullable
   */
  declare delegatedPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpenseDelegatesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseDelegatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  delegatedUser: DeserializedType<T, 'Edm.String'>;
  delegatingPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  fromDateUtc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDateUtc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  delegatedPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
}
