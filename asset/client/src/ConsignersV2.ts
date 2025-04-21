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
import type { ConsignersV2Api } from './ConsignersV2Api';
import { ConsignerGroups, ConsignerGroupsType } from './ConsignerGroups';
import {
  WarehouseIntegrationSourceSystems,
  WarehouseIntegrationSourceSystemsType
} from './WarehouseIntegrationSourceSystems';

/**
 * This class represents the entity "ConsignersV2" of service "d365_metadata".
 */
export class ConsignersV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ConsignersV2Type<T>
{
  /**
   * Technical entity name for ConsignersV2.
   */
  static override _entityName = 'ConsignersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConsignersV2 entity.
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
   * Consigner Group Id.
   * @nullable
   */
  declare consignerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link ConsignerGroups} entity.
   */
  declare consignerGroup?: ConsignerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseIntegrationSourceSystems} entity.
   */
  declare sourceSystem?: WarehouseIntegrationSourceSystems<T> | null;

  constructor(_entityApi: ConsignersV2Api<T>) {
    super(_entityApi);
  }
}

export interface ConsignersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  internalAccountNumber: DeserializedType<T, 'Edm.String'>;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  consignerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemId: DeserializedType<T, 'Edm.Int64'>;
  consignerGroup?: ConsignerGroupsType<T> | null;
  sourceSystem?: WarehouseIntegrationSourceSystemsType<T> | null;
}
