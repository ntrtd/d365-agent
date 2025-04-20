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
import type { TradeAllowanceAgreementMerchandisingEventProductsApi } from './TradeAllowanceAgreementMerchandisingEventProductsApi';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  TradeAllowanceAgreementMerchandisingEvents,
  TradeAllowanceAgreementMerchandisingEventsType
} from './TradeAllowanceAgreementMerchandisingEvents';

/**
 * This class represents the entity "TradeAllowanceAgreementMerchandisingEventProducts" of service "d365_metadata".
 */
export class TradeAllowanceAgreementMerchandisingEventProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAllowanceAgreementMerchandisingEventProductsType<T>
{
  /**
   * Technical entity name for TradeAllowanceAgreementMerchandisingEventProducts.
   */
  static override _entityName =
    'TradeAllowanceAgreementMerchandisingEventProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAllowanceAgreementMerchandisingEventProducts entity.
   */
  static _keys = [
    'dataAreaId',
    'TradeAllowanceAgreementMerchandisingEventId',
    'CustomerAccountNumber',
    'TradeAllowanceAgreementId',
    'ItemNumber',
    'PromotionalProductUnitSymbol',
    'ProductColorId',
    'ProductStyleId',
    'ProductSizeId',
    'ProductConfigurationId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Allowance Agreement Merchandising Event Id.
   */
  declare tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Allowance Agreement Id.
   */
  declare tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Promotional Product Unit Symbol.
   */
  declare promotionalProductUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Weighting Factor.
   */
  declare weightingFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare promotionalProductUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProduct?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementMerchandisingEvents} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEvents<T> | null;

  constructor(
    _entityApi: TradeAllowanceAgreementMerchandisingEventProductsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TradeAllowanceAgreementMerchandisingEventProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
    T,
    'Edm.String'
  >;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  promotionalProductUnitSymbol: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  weightingFactor: DeserializedType<T, 'Edm.Decimal'>;
  promotionalProductUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
  tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEventsType<T> | null;
}
