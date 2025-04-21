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
import type { SourceSystemProductGlobalTradeItemNumberMessagesApi } from './SourceSystemProductGlobalTradeItemNumberMessagesApi';
import { GtinSetup } from './GtinSetup';
import { WhsSourceSystemProductMessageProcessingStatus } from './WhsSourceSystemProductMessageProcessingStatus';

/**
 * This class represents the entity "SourceSystemProductGlobalTradeItemNumberMessages" of service "d365_metadata".
 */
export class SourceSystemProductGlobalTradeItemNumberMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SourceSystemProductGlobalTradeItemNumberMessagesType<T>
{
  /**
   * Technical entity name for SourceSystemProductGlobalTradeItemNumberMessages.
   */
  static override _entityName =
    'SourceSystemProductGlobalTradeItemNumberMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceSystemProductGlobalTradeItemNumberMessages entity.
   */
  static _keys = ['dataAreaId', 'MessageId', 'SourceSystemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Global Trade Item Number Description.
   * @nullable
   */
  declare globalTradeItemNumberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Global Trade Item Number.
   * @nullable
   */
  declare globalTradeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Global Trade Item Number Code Type.
   * @nullable
   */
  declare globalTradeItemNumberCodeType?: GtinSetup | null;
  /**
   * Fields With Value.
   * @nullable
   */
  declare fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: WhsSourceSystemProductMessageProcessingStatus | null;

  constructor(
    _entityApi: SourceSystemProductGlobalTradeItemNumberMessagesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface SourceSystemProductGlobalTradeItemNumberMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  globalTradeItemNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  globalTradeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  globalTradeItemNumberCodeType?: GtinSetup | null;
  fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
  processingStatus?: WhsSourceSystemProductMessageProcessingStatus | null;
}
