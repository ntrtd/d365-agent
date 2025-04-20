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
import type { RetailSalesPricePointGroupsApi } from './RetailSalesPricePointGroupsApi';
import { RetailRoundingTypeBase } from './RetailRoundingTypeBase';

/**
 * This class represents the entity "RetailSalesPricePointGroups" of service "d365_metadata".
 */
export class RetailSalesPricePointGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSalesPricePointGroupsType<T>
{
  /**
   * Technical entity name for RetailSalesPricePointGroups.
   */
  static override _entityName = 'RetailSalesPricePointGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSalesPricePointGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Point Group Id Del.
   * @nullable
   */
  declare pricePointGroupIdDel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Type.
   * @nullable
   */
  declare roundingType?: RetailRoundingTypeBase | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailSalesPricePointGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSalesPricePointGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  pricePointGroupIdDel?: DeserializedType<T, 'Edm.String'> | null;
  roundingType?: RetailRoundingTypeBase | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
