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
import type { RetailBuyersPushesApi } from './RetailBuyersPushesApi';
import { RetailDistributionTypeEx1 } from './RetailDistributionTypeEx1';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailBuyersPushes" of service "d365_metadata".
 */
export class RetailBuyersPushes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailBuyersPushesType<T>
{
  /**
   * Technical entity name for RetailBuyersPushes.
   */
  static override _entityName = 'RetailBuyersPushes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailBuyersPushes entity.
   */
  static _keys = ['dataAreaId', 'BuyersPushId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Buyers Push Id.
   */
  declare buyersPushId: DeserializedType<T, 'Edm.String'>;
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
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
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
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: RetailBuyersPushesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailBuyersPushesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  buyersPushId: DeserializedType<T, 'Edm.String'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentHierarchyValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  distributionType?: RetailDistributionTypeEx1 | null;
  transferOrderCreated?: NoYes | null;
  replenishmentHierarchyValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  respectAssortments?: NoYes | null;
  site?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentHierarchyTypeName?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentOrganizationPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  journalCreated?: NoYes | null;
}
