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
import type { RetailTillLayoutImageZonesApi } from './RetailTillLayoutImageZonesApi';
import { TillLayoutSizes, TillLayoutSizesType } from './TillLayoutSizes';
import {
  RetailTillLayoutZones,
  RetailTillLayoutZonesType
} from './RetailTillLayoutZones';
import { RetailTillLayouts, RetailTillLayoutsType } from './RetailTillLayouts';
import { RetailImages, RetailImagesType } from './RetailImages';

/**
 * This class represents the entity "RetailTillLayoutImageZones" of service "d365_metadata".
 */
export class RetailTillLayoutImageZones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTillLayoutImageZonesType<T>
{
  /**
   * Technical entity name for RetailTillLayoutImageZones.
   */
  static override _entityName = 'RetailTillLayoutImageZones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTillLayoutImageZones entity.
   */
  static _keys = [
    'LayoutId',
    'DeviceType',
    'ZoneId',
    'PictureId',
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
   * Picture Id.
   */
  declare pictureId: DeserializedType<T, 'Edm.Int32'>;
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
   * One-to-one navigation property to the {@link RetailImages} entity.
   */
  declare retailImages?: RetailImages<T> | null;

  constructor(_entityApi: RetailTillLayoutImageZonesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTillLayoutImageZonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  deviceType: DeserializedType<T, 'Edm.Int32'>;
  zoneId: DeserializedType<T, 'Edm.String'>;
  pictureId: DeserializedType<T, 'Edm.Int32'>;
  layoutSizeId: DeserializedType<T, 'Edm.String'>;
  tillLayoutSize?: TillLayoutSizesType<T> | null;
  retailTillLayoutZone?: RetailTillLayoutZonesType<T> | null;
  retailTillLayout?: RetailTillLayoutsType<T> | null;
  retailImages?: RetailImagesType<T> | null;
}
