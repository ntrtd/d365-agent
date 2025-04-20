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
import type { JourneyLegTablesApi } from './JourneyLegTablesApi';

/**
 * This class represents the entity "JourneyLegTables" of service "d365_metadata".
 */
export class JourneyLegTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JourneyLegTablesType<T>
{
  /**
   * Technical entity name for JourneyLegTables.
   */
  static override _entityName = 'JourneyLegTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JourneyLegTables entity.
   */
  static _keys = ['dataAreaId', 'LegId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leg Id.
   */
  declare legId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Shipping Port Id.
   * @nullable
   */
  declare fromShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Shipping Port Id.
   * @nullable
   */
  declare toShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leg Description.
   * @nullable
   */
  declare legDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: JourneyLegTablesApi<T>) {
    super(_entityApi);
  }
}

export interface JourneyLegTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legId: DeserializedType<T, 'Edm.String'>;
  fromShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  toShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  legDescription?: DeserializedType<T, 'Edm.String'> | null;
}
