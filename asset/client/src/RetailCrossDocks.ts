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
import type { RetailCrossDocksApi } from './RetailCrossDocksApi';
import { RetailDistributionTypeEx1 } from './RetailDistributionTypeEx1';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailCrossDocks" of service "d365_metadata".
 */
export class RetailCrossDocks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailCrossDocksType<T>
{
  /**
   * Technical entity name for RetailCrossDocks.
   */
  static override _entityName = 'RetailCrossDocks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCrossDocks entity.
   */
  static _keys = ['dataAreaId', 'CrossDockId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cross Dock Id.
   */
  declare crossDockId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replenishment Hierarchy Valid To.
   */
  declare replenishmentHierarchyValidTo: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Distribution Type.
   * @nullable
   */
  declare distributionType?: RetailDistributionTypeEx1 | null;
  /**
   * Transfer Order Created.
   * @nullable
   */
  declare transferOrderCreated?: NoYes | null;
  /**
   * Purchase Id.
   * @nullable
   */
  declare purchaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replenishment Hierarchy Valid From.
   */
  declare replenishmentHierarchyValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Respect Assortments.
   * @nullable
   */
  declare respectAssortments?: NoYes | null;
  /**
   * Replenishment Hierarchy Type Name.
   * @nullable
   */
  declare replenishmentHierarchyTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Replenishment Organization Party Number.
   * @nullable
   */
  declare replenishmentOrganizationPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Journal Created.
   * @nullable
   */
  declare journalCreated?: NoYes | null;

  constructor(_entityApi: RetailCrossDocksApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCrossDocksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  crossDockId: DeserializedType<T, 'Edm.String'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentHierarchyValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  distributionType?: RetailDistributionTypeEx1 | null;
  transferOrderCreated?: NoYes | null;
  purchaseId?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentHierarchyValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  respectAssortments?: NoYes | null;
  replenishmentHierarchyTypeName?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentOrganizationPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  journalCreated?: NoYes | null;
}
