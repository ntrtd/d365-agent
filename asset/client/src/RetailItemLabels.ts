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
import type { RetailItemLabelsApi } from './RetailItemLabelsApi';
import { RetailLabelFutureLabelBase } from './RetailLabelFutureLabelBase';
import { NoYes } from './NoYes';
import { RetailLabelTypeBase } from './RetailLabelTypeBase';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "RetailItemLabels" of service "d365_metadata".
 */
export class RetailItemLabels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailItemLabelsType<T>
{
  /**
   * Technical entity name for RetailItemLabels.
   */
  static override _entityName = 'RetailItemLabels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailItemLabels entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemId',
    'StoreNumber',
    'UnitOfMeasureSymbol',
    'ValidOnDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Of Measure Symbol.
   */
  declare unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid On Date.
   */
  declare validOnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Size.
   * @nullable
   */
  declare size?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Color.
   * @nullable
   */
  declare color?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Bar Code.
   * @nullable
   */
  declare itemBarCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Config Id.
   * @nullable
   */
  declare configId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comparison Price On Shelf Label.
   */
  declare comparisonPriceOnShelfLabel: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Report Name.
   * @nullable
   */
  declare reportName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailLabelFutureLabelBase | null;
  /**
   * Printed.
   * @nullable
   */
  declare printed?: NoYes | null;
  /**
   * Text 1.
   * @nullable
   */
  declare text1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text 2.
   * @nullable
   */
  declare text2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Style.
   * @nullable
   */
  declare style?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Key.
   * @nullable
   */
  declare primaryKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label Type.
   * @nullable
   */
  declare labelType?: RetailLabelTypeBase | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: RetailItemLabelsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailItemLabelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>;
  validOnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  size?: DeserializedType<T, 'Edm.String'> | null;
  color?: DeserializedType<T, 'Edm.String'> | null;
  itemBarCode?: DeserializedType<T, 'Edm.String'> | null;
  configId?: DeserializedType<T, 'Edm.String'> | null;
  comparisonPriceOnShelfLabel: DeserializedType<T, 'Edm.Decimal'>;
  reportName?: DeserializedType<T, 'Edm.String'> | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  type?: RetailLabelFutureLabelBase | null;
  printed?: NoYes | null;
  text1?: DeserializedType<T, 'Edm.String'> | null;
  text2?: DeserializedType<T, 'Edm.String'> | null;
  style?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  primaryKey?: DeserializedType<T, 'Edm.String'> | null;
  labelType?: RetailLabelTypeBase | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
}
