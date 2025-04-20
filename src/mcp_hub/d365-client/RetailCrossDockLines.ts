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
import type { RetailCrossDockLinesApi } from './RetailCrossDockLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailCrossDockLines" of service "d365_metadata".
 */
export class RetailCrossDockLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCrossDockLinesType<T>
{
  /**
   * Technical entity name for RetailCrossDockLines.
   */
  static override _entityName = 'RetailCrossDockLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCrossDockLines entity.
   */
  static _keys = ['dataAreaId', 'CrossDockId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cross Dock Id.
   */
  declare crossDockId: DeserializedType<T, 'Edm.String'>;
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
   * Purchase Line Inventory Transfer Id.
   * @nullable
   */
  declare purchaseLineInventoryTransferId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * User Specified Quantity.
   */
  declare userSpecifiedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailCrossDockLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCrossDockLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  crossDockId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  inventoryDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  userSpecified?: NoYes | null;
  purchaseLineInventoryTransferId?: DeserializedType<T, 'Edm.String'> | null;
  userSpecifiedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
}
