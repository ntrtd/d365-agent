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
import type { RetailButtonGridsApi } from './RetailButtonGridsApi';
import { RetailFontStyleBase } from './RetailFontStyleBase';
import { RetailButtonColorBase } from './RetailButtonColorBase';
import {
  RetailTillLayoutButtonGridZones,
  RetailTillLayoutButtonGridZonesType
} from './RetailTillLayoutButtonGridZones';

/**
 * This class represents the entity "RetailButtonGrids" of service "d365_metadata".
 */
export class RetailButtonGrids<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailButtonGridsType<T>
{
  /**
   * Technical entity name for RetailButtonGrids.
   */
  static override _entityName = 'RetailButtonGrids';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailButtonGrids entity.
   */
  static _keys = ['ButtonGridId'];
  /**
   * Button Grid Id.
   */
  declare buttonGridId: DeserializedType<T, 'Edm.String'>;
  /**
   * Space Between Buttons.
   */
  declare spaceBetweenButtons: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Font.
   * @nullable
   */
  declare font?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Font Style.
   * @nullable
   */
  declare defaultFontStyle?: RetailFontStyleBase | null;
  /**
   * Default Font Size.
   */
  declare defaultFontSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Color.
   * @nullable
   */
  declare defaultColor?: RetailButtonColorBase | null;
  /**
   * Keyboard Used.
   * @nullable
   */
  declare keyboardUsed?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutButtonGridZones} entity.
   */
  declare retailTillLayoutButtonGridZone: RetailTillLayoutButtonGridZones<T>[];

  constructor(_entityApi: RetailButtonGridsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailButtonGridsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  buttonGridId: DeserializedType<T, 'Edm.String'>;
  spaceBetweenButtons: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  font?: DeserializedType<T, 'Edm.String'> | null;
  defaultFontStyle?: RetailFontStyleBase | null;
  defaultFontSize: DeserializedType<T, 'Edm.Int32'>;
  defaultColor?: RetailButtonColorBase | null;
  keyboardUsed?: DeserializedType<T, 'Edm.String'> | null;
  retailTillLayoutButtonGridZone: RetailTillLayoutButtonGridZonesType<T>[];
}
