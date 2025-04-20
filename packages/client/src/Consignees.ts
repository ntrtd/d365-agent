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
import type { ConsigneesApi } from './ConsigneesApi';
import {
  WarehouseIntegrationSourceSystems,
  WarehouseIntegrationSourceSystemsType
} from './WarehouseIntegrationSourceSystems';

/**
 * This class represents the entity "Consignees" of service "d365_metadata".
 */
export class Consignees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ConsigneesType<T>
{
  /**
   * Technical entity name for Consignees.
   */
  static override _entityName = 'Consignees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Consignees entity.
   */
  static _keys = ['dataAreaId', 'InternalAccountNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Account Number.
   */
  declare internalAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Group Id.
   * @nullable
   */
  declare consigneeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link WarehouseIntegrationSourceSystems} entity.
   */
  declare sourceSystem?: WarehouseIntegrationSourceSystems<T> | null;

  constructor(_entityApi: ConsigneesApi<T>) {
    super(_entityApi);
  }
}

export interface ConsigneesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  internalAccountNumber: DeserializedType<T, 'Edm.String'>;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  consigneeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemId: DeserializedType<T, 'Edm.Int64'>;
  sourceSystem?: WarehouseIntegrationSourceSystemsType<T> | null;
}
