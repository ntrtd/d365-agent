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
import type { RetailSalesPricePointsApi } from './RetailSalesPricePointsApi';

/**
 * This class represents the entity "RetailSalesPricePoints" of service "d365_metadata".
 */
export class RetailSalesPricePoints<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSalesPricePointsType<T>
{
  /**
   * Technical entity name for RetailSalesPricePoints.
   */
  static override _entityName = 'RetailSalesPricePoints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSalesPricePoints entity.
   */
  static _keys = ['dataAreaId', 'GroupId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailSalesPricePointsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSalesPricePointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
}
