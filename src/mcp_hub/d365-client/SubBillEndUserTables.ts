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
import type { SubBillEndUserTablesApi } from './SubBillEndUserTablesApi';

/**
 * This class represents the entity "SubBillEndUserTables" of service "d365_metadata".
 */
export class SubBillEndUserTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillEndUserTablesType<T>
{
  /**
   * Technical entity name for SubBillEndUserTables.
   */
  static override _entityName = 'SubBillEndUserTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillEndUserTables entity.
   */
  static _keys = ['dataAreaId', 'EndUserAccount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * End User Account.
   */
  declare endUserAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Customer Account.
   * @nullable
   */
  declare parentCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SubBillEndUserTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillEndUserTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  endUserAccount: DeserializedType<T, 'Edm.String'>;
  parentCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
}
