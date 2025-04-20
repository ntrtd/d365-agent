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
import type { TaxTransRuBiEntitiesApi } from './TaxTransRuBiEntitiesApi';
import { NoYes } from './NoYes';
import { TaxSourceTypeRu } from './TaxSourceTypeRu';

/**
 * This class represents the entity "TaxTransRUBiEntities" of service "d365_metadata".
 */
export class TaxTransRuBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxTransRuBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransRuBiEntities.
   */
  static override _entityName = 'TaxTransRUBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransRuBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vat Tax Agent Vend Account Ru.
   * @nullable
   */
  declare vatTaxAgentVendAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods In Route To Delivery Ru.
   * @nullable
   */
  declare goodsInRouteToDeliveryRu?: NoYes | null;
  /**
   * Vat Operation Code Ru.
   * @nullable
   */
  declare vatOperationCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Unround Amount Ru.
   */
  declare taxUnroundAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Trans.
   */
  declare taxTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Unround Amount Cur Ru.
   */
  declare taxUnroundAmountCurRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Vend Trans Posting Log Ru.
   */
  declare custVendTransPostingLogRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Markup Trans Rec Id Ru.
   */
  declare markupTransRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Source Type Ru.
   * @nullable
   */
  declare taxSourceTypeRu?: TaxSourceTypeRu | null;
  /**
   * Goods In Route Id Ru.
   * @nullable
   */
  declare goodsInRouteIdRu?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxTransRuBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTransRuBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  vatTaxAgentVendAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  goodsInRouteToDeliveryRu?: NoYes | null;
  vatOperationCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  taxUnroundAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  taxTrans: DeserializedType<T, 'Edm.Int64'>;
  taxUnroundAmountCurRu: DeserializedType<T, 'Edm.Decimal'>;
  custVendTransPostingLogRu: DeserializedType<T, 'Edm.Int64'>;
  markupTransRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  taxSourceTypeRu?: TaxSourceTypeRu | null;
  goodsInRouteIdRu?: DeserializedType<T, 'Edm.String'> | null;
}
