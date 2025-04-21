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
import type { SalesTableRuBiEntitiesApi } from './SalesTableRuBiEntitiesApi';
import { SalesInvoicePostingTypeRu } from './SalesInvoicePostingTypeRu';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SalesTableRUBiEntities" of service "d365_metadata".
 */
export class SalesTableRuBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesTableRuBiEntitiesType<T>
{
  /**
   * Technical entity name for SalesTableRuBiEntities.
   */
  static override _entityName = 'SalesTableRUBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTableRuBiEntities entity.
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
   * Price Agreement Date Ru.
   */
  declare priceAgreementDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consignee Account Ru.
   * @nullable
   */
  declare consigneeAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Profile Id Ru.
   * @nullable
   */
  declare inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignor Account Ru.
   * @nullable
   */
  declare consignorAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Posting Type Ru.
   * @nullable
   */
  declare invoicePostingTypeRu?: SalesInvoicePostingTypeRu | null;
  /**
   * Invent Profile Type Ru.
   * @nullable
   */
  declare inventProfileTypeRu?: InventProfileTypeRu | null;
  /**
   * Invent Profile Use Related Ru.
   * @nullable
   */
  declare inventProfileUseRelatedRu?: NoYes | null;

  constructor(_entityApi: SalesTableRuBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTableRuBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  priceAgreementDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consigneeAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  consignorAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  invoicePostingTypeRu?: SalesInvoicePostingTypeRu | null;
  inventProfileTypeRu?: InventProfileTypeRu | null;
  inventProfileUseRelatedRu?: NoYes | null;
}
