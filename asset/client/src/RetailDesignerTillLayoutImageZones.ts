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
import type { RetailDesignerTillLayoutImageZonesApi } from './RetailDesignerTillLayoutImageZonesApi';

/**
 * This class represents the entity "RetailDesignerTillLayoutImageZones" of service "d365_metadata".
 */
export class RetailDesignerTillLayoutImageZones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDesignerTillLayoutImageZonesType<T>
{
  /**
   * Technical entity name for RetailDesignerTillLayoutImageZones.
   */
  static override _entityName = 'RetailDesignerTillLayoutImageZones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDesignerTillLayoutImageZones entity.
   */
  static _keys = ['LayoutId', 'Zone'];
  /**
   * Layout Id.
   */
  declare layoutId: DeserializedType<T, 'Edm.String'>;
  /**
   * Zone.
   */
  declare zone: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ax Rec Id.
   */
  declare axRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Picture Id.
   */
  declare pictureId: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailDesignerTillLayoutImageZonesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDesignerTillLayoutImageZonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  zone: DeserializedType<T, 'Edm.Int64'>;
  axRecId: DeserializedType<T, 'Edm.Int64'>;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  pictureId: DeserializedType<T, 'Edm.Int32'>;
}
