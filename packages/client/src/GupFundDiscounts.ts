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
import type { GupFundDiscountsApi } from './GupFundDiscountsApi';

/**
 * This class represents the entity "GUPFundDiscounts" of service "d365_metadata".
 */
export class GupFundDiscounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GupFundDiscountsType<T>
{
  /**
   * Technical entity name for GupFundDiscounts.
   */
  static override _entityName = 'GUPFundDiscounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GupFundDiscounts entity.
   */
  static _keys = ['dataAreaId', 'FundID', 'OfferId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fund Id.
   */
  declare fundId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: GupFundDiscountsApi<T>) {
    super(_entityApi);
  }
}

export interface GupFundDiscountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fundId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
}
