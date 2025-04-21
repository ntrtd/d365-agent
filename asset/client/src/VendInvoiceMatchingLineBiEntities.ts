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
import type { VendInvoiceMatchingLineBiEntitiesApi } from './VendInvoiceMatchingLineBiEntitiesApi';
import { PurchMatchingPolicyOption } from './PurchMatchingPolicyOption';

/**
 * This class represents the entity "VendInvoiceMatchingLineBiEntities" of service "d365_metadata".
 */
export class VendInvoiceMatchingLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceMatchingLineBiEntitiesType<T>
{
  /**
   * Technical entity name for VendInvoiceMatchingLineBiEntities.
   */
  static override _entityName = 'VendInvoiceMatchingLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceMatchingLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'RefTableId', 'RefRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Extended Price Tolerance Percentage.
   */
  declare extendedPriceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Multi Ln Percent.
   */
  declare expectedMultiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expected Qty.
   */
  declare expectedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Extended Price Variance Amount.
   */
  declare extendedPriceVarianceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Extended Price Variance Amount Mst.
   */
  declare extendedPriceVarianceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Tolerance Percentage.
   */
  declare priceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Line Amount.
   */
  declare expectedLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Matching Policy.
   * @nullable
   */
  declare matchingPolicy?: PurchMatchingPolicyOption | null;
  /**
   * Expected Line Percent.
   */
  declare expectedLinePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Multi Ln Disc.
   */
  declare expectedMultiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Extended Price Tolerance Amount.
   */
  declare extendedPriceToleranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Price Unit.
   */
  declare expectedPriceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Price.
   */
  declare expectedPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Currency Code.
   * @nullable
   */
  declare expectedCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Line Disc.
   */
  declare expectedLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Markup.
   */
  declare expectedMarkup: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: VendInvoiceMatchingLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceMatchingLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  extendedPriceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  expectedMultiLnPercent: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  expectedQty: DeserializedType<T, 'Edm.Decimal'>;
  extendedPriceVarianceAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  extendedPriceVarianceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  priceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  expectedLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  matchingPolicy?: PurchMatchingPolicyOption | null;
  expectedLinePercent: DeserializedType<T, 'Edm.Decimal'>;
  expectedMultiLnDisc: DeserializedType<T, 'Edm.Decimal'>;
  extendedPriceToleranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  expectedPriceUnit: DeserializedType<T, 'Edm.Decimal'>;
  expectedPrice: DeserializedType<T, 'Edm.Decimal'>;
  expectedCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  expectedLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  expectedMarkup: DeserializedType<T, 'Edm.Decimal'>;
}
