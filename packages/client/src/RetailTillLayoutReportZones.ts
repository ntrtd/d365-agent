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
import type { RetailTillLayoutReportZonesApi } from './RetailTillLayoutReportZonesApi';
import {
  RetailChannelReports,
  RetailChannelReportsType
} from './RetailChannelReports';
import { TillLayoutSizes, TillLayoutSizesType } from './TillLayoutSizes';
import {
  RetailTillLayoutZones,
  RetailTillLayoutZonesType
} from './RetailTillLayoutZones';
import { RetailTillLayouts, RetailTillLayoutsType } from './RetailTillLayouts';

/**
 * This class represents the entity "RetailTillLayoutReportZones" of service "d365_metadata".
 */
export class RetailTillLayoutReportZones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTillLayoutReportZonesType<T>
{
  /**
   * Technical entity name for RetailTillLayoutReportZones.
   */
  static override _entityName = 'RetailTillLayoutReportZones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTillLayoutReportZones entity.
   */
  static _keys = ['LayoutId', 'DeviceType', 'ZoneId', 'ReportID'];
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
   * Report Id.
   */
  declare reportId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Size Id.
   * @nullable
   */
  declare layoutSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailChannelReports} entity.
   */
  declare retailChannelReport?: RetailChannelReports<T> | null;
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

  constructor(_entityApi: RetailTillLayoutReportZonesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTillLayoutReportZonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  deviceType: DeserializedType<T, 'Edm.Int32'>;
  zoneId: DeserializedType<T, 'Edm.String'>;
  reportId: DeserializedType<T, 'Edm.String'>;
  layoutSizeId?: DeserializedType<T, 'Edm.String'> | null;
  retailChannelReport?: RetailChannelReportsType<T> | null;
  tillLayoutSize?: TillLayoutSizesType<T> | null;
  retailTillLayoutZone?: RetailTillLayoutZonesType<T> | null;
  retailTillLayout?: RetailTillLayoutsType<T> | null;
}
