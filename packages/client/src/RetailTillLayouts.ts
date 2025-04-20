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
import type { RetailTillLayoutsApi } from './RetailTillLayoutsApi';
import { RetailStartScreen } from './RetailStartScreen';
import { RetailStaffs, RetailStaffsType } from './RetailStaffs';
import {
  RetailTillLayoutButtonGridZones,
  RetailTillLayoutButtonGridZonesType
} from './RetailTillLayoutButtonGridZones';
import {
  TillLayoutConfigurations,
  TillLayoutConfigurationsType
} from './TillLayoutConfigurations';
import {
  RetailTillLayoutStaffs,
  RetailTillLayoutStaffsType
} from './RetailTillLayoutStaffs';
import {
  RetailTillLayoutImageZones,
  RetailTillLayoutImageZonesType
} from './RetailTillLayoutImageZones';
import { RetailStores, RetailStoresType } from './RetailStores';
import {
  RetailTillLayoutReportZones,
  RetailTillLayoutReportZonesType
} from './RetailTillLayoutReportZones';

/**
 * This class represents the entity "RetailTillLayouts" of service "d365_metadata".
 */
export class RetailTillLayouts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailTillLayoutsType<T>
{
  /**
   * Technical entity name for RetailTillLayouts.
   */
  static override _entityName = 'RetailTillLayouts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTillLayouts entity.
   */
  static _keys = ['LayoutId'];
  /**
   * Layout Id.
   */
  declare layoutId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Screen.
   * @nullable
   */
  declare startScreen?: RetailStartScreen | null;
  /**
   * Retail Device Types Type.
   */
  declare retailDeviceTypesType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link RetailStaffs} entity.
   */
  declare retailStaff?: RetailStaffs<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutButtonGridZones} entity.
   */
  declare retailTillLayoutButtonGridZone: RetailTillLayoutButtonGridZones<T>[];
  /**
   * One-to-many navigation property to the {@link TillLayoutConfigurations} entity.
   */
  declare tillLayoutConfiguration: TillLayoutConfigurations<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutStaffs} entity.
   */
  declare retailTillLayoutStaff: RetailTillLayoutStaffs<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutImageZones} entity.
   */
  declare retailTillLayoutImageZone: RetailTillLayoutImageZones<T>[];
  /**
   * One-to-one navigation property to the {@link RetailStores} entity.
   */
  declare retailStore?: RetailStores<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutReportZones} entity.
   */
  declare retailTillLayoutReportZone: RetailTillLayoutReportZones<T>[];

  constructor(_entityApi: RetailTillLayoutsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTillLayoutsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  startScreen?: RetailStartScreen | null;
  retailDeviceTypesType: DeserializedType<T, 'Edm.Int32'>;
  retailStaff?: RetailStaffsType<T> | null;
  retailTillLayoutButtonGridZone: RetailTillLayoutButtonGridZonesType<T>[];
  tillLayoutConfiguration: TillLayoutConfigurationsType<T>[];
  retailTillLayoutStaff: RetailTillLayoutStaffsType<T>[];
  retailTillLayoutImageZone: RetailTillLayoutImageZonesType<T>[];
  retailStore?: RetailStoresType<T> | null;
  retailTillLayoutReportZone: RetailTillLayoutReportZonesType<T>[];
}
