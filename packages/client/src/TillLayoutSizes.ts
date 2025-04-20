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
import type { TillLayoutSizesApi } from './TillLayoutSizesApi';
import { RetailLayoutType } from './RetailLayoutType';
import {
  RetailTillLayoutButtonGridZones,
  RetailTillLayoutButtonGridZonesType
} from './RetailTillLayoutButtonGridZones';
import {
  TillLayoutConfigurations,
  TillLayoutConfigurationsType
} from './TillLayoutConfigurations';
import {
  RetailTillLayoutImageZones,
  RetailTillLayoutImageZonesType
} from './RetailTillLayoutImageZones';
import {
  RetailTillLayoutReportZones,
  RetailTillLayoutReportZonesType
} from './RetailTillLayoutReportZones';

/**
 * This class represents the entity "TillLayoutSizes" of service "d365_metadata".
 */
export class TillLayoutSizes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TillLayoutSizesType<T>
{
  /**
   * Technical entity name for TillLayoutSizes.
   */
  static override _entityName = 'TillLayoutSizes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TillLayoutSizes entity.
   */
  static _keys = ['LayoutSizeId'];
  /**
   * Layout Size Id.
   */
  declare layoutSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Height.
   */
  declare height: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Layout Type.
   * @nullable
   */
  declare layoutType?: RetailLayoutType | null;
  /**
   * Width.
   */
  declare width: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutButtonGridZones} entity.
   */
  declare retailTillLayoutButtonGridZone: RetailTillLayoutButtonGridZones<T>[];
  /**
   * One-to-many navigation property to the {@link TillLayoutConfigurations} entity.
   */
  declare tillLayoutConfiguration: TillLayoutConfigurations<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutImageZones} entity.
   */
  declare retailTillLayoutImageZone: RetailTillLayoutImageZones<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutReportZones} entity.
   */
  declare retailTillLayoutReportZone: RetailTillLayoutReportZones<T>[];

  constructor(_entityApi: TillLayoutSizesApi<T>) {
    super(_entityApi);
  }
}

export interface TillLayoutSizesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutSizeId: DeserializedType<T, 'Edm.String'>;
  height: DeserializedType<T, 'Edm.Int32'>;
  layoutType?: RetailLayoutType | null;
  width: DeserializedType<T, 'Edm.Int32'>;
  retailTillLayoutButtonGridZone: RetailTillLayoutButtonGridZonesType<T>[];
  tillLayoutConfiguration: TillLayoutConfigurationsType<T>[];
  retailTillLayoutImageZone: RetailTillLayoutImageZonesType<T>[];
  retailTillLayoutReportZone: RetailTillLayoutReportZonesType<T>[];
}
