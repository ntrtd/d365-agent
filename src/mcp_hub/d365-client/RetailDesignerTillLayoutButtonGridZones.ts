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
import type { RetailDesignerTillLayoutButtonGridZonesApi } from './RetailDesignerTillLayoutButtonGridZonesApi';

/**
 * This class represents the entity "RetailDesignerTillLayoutButtonGridZones" of service "d365_metadata".
 */
export class RetailDesignerTillLayoutButtonGridZones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDesignerTillLayoutButtonGridZonesType<T>
{
  /**
   * Technical entity name for RetailDesignerTillLayoutButtonGridZones.
   */
  static override _entityName = 'RetailDesignerTillLayoutButtonGridZones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDesignerTillLayoutButtonGridZones entity.
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
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Button Grid Id.
   * @nullable
   */
  declare buttonGridId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailDesignerTillLayoutButtonGridZonesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDesignerTillLayoutButtonGridZonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  zone: DeserializedType<T, 'Edm.Int64'>;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  buttonGridId?: DeserializedType<T, 'Edm.String'> | null;
}
