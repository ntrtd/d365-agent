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
import type { RetailLoyaltiesApi } from './RetailLoyaltiesApi';
import { NoYes } from './NoYes';
import {
  RetailLoyaltyPriceGroups,
  RetailLoyaltyPriceGroupsType
} from './RetailLoyaltyPriceGroups';

/**
 * This class represents the entity "RetailLoyalties" of service "d365_metadata".
 */
export class RetailLoyalties<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailLoyaltiesType<T>
{
  /**
   * Technical entity name for RetailLoyalties.
   */
  static override _entityName = 'RetailLoyalties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyalties entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Pool Related Cards.
   * @nullable
   */
  declare poolRelatedCards?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RetailLoyaltyPriceGroups} entity.
   */
  declare retailLoyaltyPriceGroup: RetailLoyaltyPriceGroups<T>[];

  constructor(_entityApi: RetailLoyaltiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  poolRelatedCards?: NoYes | null;
  retailLoyaltyPriceGroup: RetailLoyaltyPriceGroupsType<T>[];
}
