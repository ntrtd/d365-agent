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
import type { TradingPartnerCodesApi } from './TradingPartnerCodesApi';

/**
 * This class represents the entity "TradingPartnerCodes" of service "d365_metadata".
 */
export class TradingPartnerCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TradingPartnerCodesType<T>
{
  /**
   * Technical entity name for TradingPartnerCodes.
   */
  static override _entityName = 'TradingPartnerCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradingPartnerCodes entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TradingPartnerCodesApi<T>) {
    super(_entityApi);
  }
}

export interface TradingPartnerCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
