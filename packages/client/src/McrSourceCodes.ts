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
import type { McrSourceCodesApi } from './McrSourceCodesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "MCRSourceCodes" of service "d365_metadata".
 */
export class McrSourceCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements McrSourceCodesType<T>
{
  /**
   * Technical entity name for McrSourceCodes.
   */
  static override _entityName = 'MCRSourceCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrSourceCodes entity.
   */
  static _keys = ['dataAreaId', 'SourceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Id.
   */
  declare sourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Projected Orders.
   */
  declare projectedOrders: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Other Cost.
   */
  declare otherCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Future Order Date.
   */
  declare futureOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Projected Returns.
   */
  declare projectedReturns: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Projected First Order Date.
   */
  declare projectedFirstOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Actual Cost.
   */
  declare actualCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Target Id.
   * @nullable
   */
  declare targetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Quantity.
   */
  declare distributionQuantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Catalog Number.
   * @nullable
   */
  declare catalogNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Projected Sales.
   */
  declare projectedSales: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mailing Costs.
   */
  declare mailingCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Only Catalog Plans.
   * @nullable
   */
  declare onlyCatalogPlans?: NoYes | null;
  /**
   * Mail Date.
   */
  declare mailDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Printing Costs.
   */
  declare printingCosts: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: McrSourceCodesApi<T>) {
    super(_entityApi);
  }
}

export interface McrSourceCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceId: DeserializedType<T, 'Edm.String'>;
  projectedOrders: DeserializedType<T, 'Edm.Int32'>;
  otherCost: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  futureOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectedReturns: DeserializedType<T, 'Edm.Decimal'>;
  projectedFirstOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  actualCost: DeserializedType<T, 'Edm.Decimal'>;
  targetId?: DeserializedType<T, 'Edm.String'> | null;
  distributionQuantity: DeserializedType<T, 'Edm.Int32'>;
  catalogNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectedSales: DeserializedType<T, 'Edm.Decimal'>;
  mailingCosts: DeserializedType<T, 'Edm.Decimal'>;
  onlyCatalogPlans?: NoYes | null;
  mailDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  printingCosts: DeserializedType<T, 'Edm.Decimal'>;
}
