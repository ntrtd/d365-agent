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
import type { RetailTillLayoutButtonGridZonesApi } from './RetailTillLayoutButtonGridZonesApi';
import { TillLayoutSizes, TillLayoutSizesType } from './TillLayoutSizes';
import {
  RetailTillLayoutZones,
  RetailTillLayoutZonesType
} from './RetailTillLayoutZones';
import { RetailTillLayouts, RetailTillLayoutsType } from './RetailTillLayouts';
import { RetailButtonGrids, RetailButtonGridsType } from './RetailButtonGrids';

/**
 * This class represents the entity "RetailTillLayoutButtonGridZones" of service "d365_metadata".
 */
export class RetailTillLayoutButtonGridZones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTillLayoutButtonGridZonesType<T>
{
  /**
   * Technical entity name for RetailTillLayoutButtonGridZones.
   */
  static override _entityName = 'RetailTillLayoutButtonGridZones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTillLayoutButtonGridZones entity.
   */
  static _keys = [
    'LayoutId',
    'DeviceType',
    'ZoneId',
    'ButtonGridId',
    'LayoutSizeId'
  ];
  /**
   * Layout Id.
   */
  declare layoutId: DeserializedType<T, 'Edm.String'>;
  /**
   * Device Type.
   */
  declare deviceType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Zone Id.
   */
  declare zoneId: DeserializedType<T, 'Edm.String'>;
  /**
   * Button Grid Id.
   */
  declare buttonGridId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Size Id.
   */
  declare layoutSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link TillLayoutSizes} entity.
   */
  declare tillLayoutSize?: TillLayoutSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTillLayoutZones} entity.
   */
  declare retailTillLayoutZone?: RetailTillLayoutZones<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTillLayouts} entity.
   */
  declare retailTillLayout?: RetailTillLayouts<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailButtonGrids} entity.
   */
  declare retailButtonGrid?: RetailButtonGrids<T> | null;

  constructor(_entityApi: RetailTillLayoutButtonGridZonesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTillLayoutButtonGridZonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  deviceType: DeserializedType<T, 'Edm.Int32'>;
  zoneId: DeserializedType<T, 'Edm.String'>;
  buttonGridId: DeserializedType<T, 'Edm.String'>;
  layoutSizeId: DeserializedType<T, 'Edm.String'>;
  tillLayoutSize?: TillLayoutSizesType<T> | null;
  retailTillLayoutZone?: RetailTillLayoutZonesType<T> | null;
  retailTillLayout?: RetailTillLayoutsType<T> | null;
  retailButtonGrid?: RetailButtonGridsType<T> | null;
}
