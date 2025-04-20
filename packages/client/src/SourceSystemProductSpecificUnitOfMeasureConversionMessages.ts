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
import type { SourceSystemProductSpecificUnitOfMeasureConversionMessagesApi } from './SourceSystemProductSpecificUnitOfMeasureConversionMessagesApi';
import { UnitOfMeasureConversionRounding } from './UnitOfMeasureConversionRounding';
import { WhsSourceSystemProductMessageProcessingStatus } from './WhsSourceSystemProductMessageProcessingStatus';

/**
 * This class represents the entity "SourceSystemProductSpecificUnitOfMeasureConversionMessages" of service "d365_metadata".
 */
export class SourceSystemProductSpecificUnitOfMeasureConversionMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SourceSystemProductSpecificUnitOfMeasureConversionMessagesType<T>
{
  /**
   * Technical entity name for SourceSystemProductSpecificUnitOfMeasureConversionMessages.
   */
  static override _entityName =
    'SourceSystemProductSpecificUnitOfMeasureConversionMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceSystemProductSpecificUnitOfMeasureConversionMessages entity.
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
   * Rounding.
   * @nullable
   */
  declare rounding?: UnitOfMeasureConversionRounding | null;
  /**
   * Numerator.
   */
  declare numerator: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: WhsSourceSystemProductMessageProcessingStatus | null;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Denominator.
   */
  declare denominator: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fields With Value.
   * @nullable
   */
  declare fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * To Unit Symbol.
   * @nullable
   */
  declare toUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Unit Symbol.
   * @nullable
   */
  declare fromUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: SourceSystemProductSpecificUnitOfMeasureConversionMessagesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface SourceSystemProductSpecificUnitOfMeasureConversionMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  rounding?: UnitOfMeasureConversionRounding | null;
  numerator: DeserializedType<T, 'Edm.Int32'>;
  processingStatus?: WhsSourceSystemProductMessageProcessingStatus | null;
  factor: DeserializedType<T, 'Edm.Decimal'>;
  denominator: DeserializedType<T, 'Edm.Int32'>;
  fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
  toUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  fromUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
}
