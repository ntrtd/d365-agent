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
import type { PriceComponentCodesApi } from './PriceComponentCodesApi';
import { GupPricingAttributeSourceLevel } from './GupPricingAttributeSourceLevel';
import { GupPriceComponent } from './GupPriceComponent';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
import { NoYes } from './NoYes';
import { GupAutoChargeConcurrency } from './GupAutoChargeConcurrency';

/**
 * This class represents the entity "PriceComponentCodes" of service "d365_metadata".
 */
export class PriceComponentCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PriceComponentCodesType<T>
{
  /**
   * Technical entity name for PriceComponentCodes.
   */
  static override _entityName = 'PriceComponentCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceComponentCodes entity.
   */
  static _keys = ['dataAreaId', 'Name', 'PriceAttributeGroup', 'SourceLevel'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Attribute Group.
   */
  declare priceAttributeGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Level.
   * @nullable
   */
  declare sourceLevel?: GupPricingAttributeSourceLevel | null;
  /**
   * Price Component Code Group.
   * @nullable
   */
  declare priceComponentCodeGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component.
   * @nullable
   */
  declare priceComponent?: GupPriceComponent | null;
  /**
   * Concurrency Mode.
   * @nullable
   */
  declare concurrencyMode?: RetailDiscountConcurrency | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Header Price Attribute Group All Enabled.
   * @nullable
   */
  declare headerPriceAttributeGroupAllEnabled?: NoYes | null;
  /**
   * Auto Charges Concurrency Mode.
   * @nullable
   */
  declare autoChargesConcurrencyMode?: GupAutoChargeConcurrency | null;
  /**
   * Line Price Attribute Group All Enabled.
   * @nullable
   */
  declare linePriceAttributeGroupAllEnabled?: NoYes | null;

  constructor(_entityApi: PriceComponentCodesApi<T>) {
    super(_entityApi);
  }
}

export interface PriceComponentCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  priceAttributeGroup: DeserializedType<T, 'Edm.String'>;
  sourceLevel?: GupPricingAttributeSourceLevel | null;
  priceComponentCodeGroup?: DeserializedType<T, 'Edm.String'> | null;
  priceComponent?: GupPriceComponent | null;
  concurrencyMode?: RetailDiscountConcurrency | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
  headerPriceAttributeGroupAllEnabled?: NoYes | null;
  autoChargesConcurrencyMode?: GupAutoChargeConcurrency | null;
  linePriceAttributeGroupAllEnabled?: NoYes | null;
}
