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
import type { QualityOrderLineResultsApi } from './QualityOrderLineResultsApi';
import { NoYes } from './NoYes';
import { InventTestOutcomeStatus } from './InventTestOutcomeStatus';

/**
 * This class represents the entity "QualityOrderLineResults" of service "d365_metadata".
 */
export class QualityOrderLineResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements QualityOrderLineResultsType<T>
{
  /**
   * Technical entity name for QualityOrderLineResults.
   */
  static override _entityName = 'QualityOrderLineResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the QualityOrderLineResults entity.
   */
  static _keys = [
    'dataAreaId',
    'QualityOrderNumber',
    'QualityOrderSequenceNumber',
    'QualityTestId',
    'ResultLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quality Order Number.
   */
  declare qualityOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Quality Order Sequence Number.
   */
  declare qualityOrderSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Quality Test Id.
   */
  declare qualityTestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Result Line Number.
   */
  declare resultLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Result Value.
   */
  declare resultValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quality Test Variable Outcome Id.
   * @nullable
   */
  declare qualityTestVariableOutcomeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Result Inventory Quantity.
   */
  declare resultInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Test Validation Including Result.
   * @nullable
   */
  declare isTestValidationIncludingResult?: NoYes | null;
  /**
   * Test Result.
   * @nullable
   */
  declare testResult?: InventTestOutcomeStatus | null;
  /**
   * Result Catch Weight Quantity.
   */
  declare resultCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: QualityOrderLineResultsApi<T>) {
    super(_entityApi);
  }
}

export interface QualityOrderLineResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  qualityOrderNumber: DeserializedType<T, 'Edm.String'>;
  qualityOrderSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  qualityTestId: DeserializedType<T, 'Edm.String'>;
  resultLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  resultValue: DeserializedType<T, 'Edm.Decimal'>;
  qualityTestVariableOutcomeId?: DeserializedType<T, 'Edm.String'> | null;
  resultInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isTestValidationIncludingResult?: NoYes | null;
  testResult?: InventTestOutcomeStatus | null;
  resultCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
