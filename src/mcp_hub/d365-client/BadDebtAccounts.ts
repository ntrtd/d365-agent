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
import type { BadDebtAccountsApi } from './BadDebtAccountsApi';

/**
 * This class represents the entity "BadDebtAccounts" of service "d365_metadata".
 */
export class BadDebtAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BadDebtAccountsType<T>
{
  /**
   * Technical entity name for BadDebtAccounts.
   */
  static override _entityName = 'BadDebtAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BadDebtAccounts entity.
   */
  static _keys = ['Company'];
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Bad Debt Main Account Display Value.
   * @nullable
   */
  declare badDebtMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Collected Bad Debt Main Account Display Value.
   * @nullable
   */
  declare collectedBadDebtMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: BadDebtAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface BadDebtAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  company: DeserializedType<T, 'Edm.String'>;
  badDebtMainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  collectedBadDebtMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
