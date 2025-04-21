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
import type { PriceComponentCodeCombinationsApi } from './PriceComponentCodeCombinationsApi';
import { NoYes } from './NoYes';
import { GupGroupAll } from './GupGroupAll';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
import { GupPriceComponent } from './GupPriceComponent';

/**
 * This class represents the entity "PriceComponentCodeCombinations" of service "d365_metadata".
 */
export class PriceComponentCodeCombinations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceComponentCodeCombinationsType<T>
{
  /**
   * Technical entity name for PriceComponentCodeCombinations.
   */
  static override _entityName = 'PriceComponentCodeCombinations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceComponentCodeCombinations entity.
   */
  static _keys = ['dataAreaId', 'Name', 'PriceAttributeGroupCombinationName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Attribute Group Combination Name.
   */
  declare priceAttributeGroupCombinationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Price Attribute Group All Enabled.
   * @nullable
   */
  declare headerPriceAttributeGroupAllEnabled?: NoYes | null;
  /**
   * Header Group All.
   * @nullable
   */
  declare headerGroupAll?: GupGroupAll | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concurrency Mode.
   * @nullable
   */
  declare concurrencyMode?: RetailDiscountConcurrency | null;
  /**
   * Price Component Code Group.
   * @nullable
   */
  declare priceComponentCodeGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Price Attribute Group.
   * @nullable
   */
  declare linePriceAttributeGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Price Attribute Group.
   * @nullable
   */
  declare headerPriceAttributeGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component.
   * @nullable
   */
  declare priceComponent?: GupPriceComponent | null;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Price Attribute Group All Enabled.
   * @nullable
   */
  declare linePriceAttributeGroupAllEnabled?: NoYes | null;
  /**
   * Line Group All.
   * @nullable
   */
  declare lineGroupAll?: GupGroupAll | null;

  constructor(_entityApi: PriceComponentCodeCombinationsApi<T>) {
    super(_entityApi);
  }
}

export interface PriceComponentCodeCombinationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  priceAttributeGroupCombinationName: DeserializedType<T, 'Edm.String'>;
  headerPriceAttributeGroupAllEnabled?: NoYes | null;
  headerGroupAll?: GupGroupAll | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  concurrencyMode?: RetailDiscountConcurrency | null;
  priceComponentCodeGroup?: DeserializedType<T, 'Edm.String'> | null;
  linePriceAttributeGroup?: DeserializedType<T, 'Edm.String'> | null;
  headerPriceAttributeGroup?: DeserializedType<T, 'Edm.String'> | null;
  priceComponent?: GupPriceComponent | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
  linePriceAttributeGroupAllEnabled?: NoYes | null;
  lineGroupAll?: GupGroupAll | null;
}
