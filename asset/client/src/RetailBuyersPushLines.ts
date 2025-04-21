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
import type { RetailBuyersPushLinesApi } from './RetailBuyersPushLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailBuyersPushLines" of service "d365_metadata".
 */
export class RetailBuyersPushLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailBuyersPushLinesType<T>
{
  /**
   * Technical entity name for RetailBuyersPushLines.
   */
  static override _entityName = 'RetailBuyersPushLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailBuyersPushLines entity.
   */
  static _keys = ['dataAreaId', 'BuyersPushId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Buyers Push Id.
   */
  declare buyersPushId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Dimension Id.
   * @nullable
   */
  declare inventoryDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure Symbol.
   * @nullable
   */
  declare unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Specified.
   * @nullable
   */
  declare userSpecified?: NoYes | null;
  /**
   * User Specified Quantity.
   */
  declare userSpecifiedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailBuyersPushLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailBuyersPushLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  buyersPushId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  inventoryDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  userSpecified?: NoYes | null;
  userSpecifiedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
}
