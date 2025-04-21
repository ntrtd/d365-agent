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
import type { StandardMainAccountsApi } from './StandardMainAccountsApi';
import { StandardMainAccountTypeW } from './StandardMainAccountTypeW';

/**
 * This class represents the entity "StandardMainAccounts" of service "d365_metadata".
 */
export class StandardMainAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements StandardMainAccountsType<T>
{
  /**
   * Technical entity name for StandardMainAccounts.
   */
  static override _entityName = 'StandardMainAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StandardMainAccounts entity.
   */
  static _keys = ['dataAreaId', 'StandardAccount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Standard Account.
   */
  declare standardAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Type.
   * @nullable
   */
  declare mainAccountType?: StandardMainAccountTypeW | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StandardMainAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface StandardMainAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  standardAccount: DeserializedType<T, 'Edm.String'>;
  mainAccountType?: StandardMainAccountTypeW | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
