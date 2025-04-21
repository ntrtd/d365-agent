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
import type { InventTransOriginCdsEntitiesApi } from './InventTransOriginCdsEntitiesApi';
import { NoYes } from './NoYes';
import { InventTransType } from './InventTransType';

/**
 * This class represents the entity "InventTransOriginCDSEntities" of service "d365_metadata".
 */
export class InventTransOriginCdsEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventTransOriginCdsEntitiesType<T>
{
  /**
   * Technical entity name for InventTransOriginCdsEntities.
   */
  static override _entityName = 'InventTransOriginCDSEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventTransOriginCdsEntities entity.
   */
  static _keys = ['dataAreaId', 'InventTransId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Trans Id.
   */
  declare inventTransId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Invent Dim Id.
   * @nullable
   */
  declare itemInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Excluded From Inventory Value.
   * @nullable
   */
  declare isExcludedFromInventoryValue?: NoYes | null;
  /**
   * Reference Id.
   * @nullable
   */
  declare referenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party.
   */
  declare party: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Company Code.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Category.
   * @nullable
   */
  declare referenceCategory?: InventTransType | null;

  constructor(_entityApi: InventTransOriginCdsEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventTransOriginCdsEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventTransId: DeserializedType<T, 'Edm.String'>;
  itemInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  isExcludedFromInventoryValue?: NoYes | null;
  referenceId?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  party: DeserializedType<T, 'Edm.Int64'>;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  referenceCategory?: InventTransType | null;
}
