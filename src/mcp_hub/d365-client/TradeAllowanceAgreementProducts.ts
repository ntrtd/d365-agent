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
import type { TradeAllowanceAgreementProductsApi } from './TradeAllowanceAgreementProductsApi';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  TradeAllowanceAgreementHeaders,
  TradeAllowanceAgreementHeadersType
} from './TradeAllowanceAgreementHeaders';

/**
 * This class represents the entity "TradeAllowanceAgreementProducts" of service "d365_metadata".
 */
export class TradeAllowanceAgreementProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAllowanceAgreementProductsType<T>
{
  /**
   * Technical entity name for TradeAllowanceAgreementProducts.
   */
  static override _entityName = 'TradeAllowanceAgreementProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAllowanceAgreementProducts entity.
   */
  static _keys = [
    'dataAreaId',
    'TradeAllowanceAgreementId',
    'CustomerAccountNumber',
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
   * Trade Allowance Agreement Id.
   */
  declare tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link TradeAllowanceAgreementHeaders} entity.
   */
  declare tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeaders<T> | null;

  constructor(_entityApi: TradeAllowanceAgreementProductsApi<T>) {
    super(_entityApi);
  }
}

export interface TradeAllowanceAgreementProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  promotionalProductUnitSymbol: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  weightingFactor: DeserializedType<T, 'Edm.Decimal'>;
  promotionalProductUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
  tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeadersType<T> | null;
}
