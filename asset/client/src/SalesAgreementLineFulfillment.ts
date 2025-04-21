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
import type { SalesAgreementLineFulfillmentApi } from './SalesAgreementLineFulfillmentApi';
import {
  SalesAgreementLines,
  SalesAgreementLinesType
} from './SalesAgreementLines';

/**
 * This class represents the entity "SalesAgreementLineFulfillment" of service "d365_metadata".
 */
export class SalesAgreementLineFulfillment<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAgreementLineFulfillmentType<T>
{
  /**
   * Technical entity name for SalesAgreementLineFulfillment.
   */
  static override _entityName = 'SalesAgreementLineFulfillment';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAgreementLineFulfillment entity.
   */
  static _keys = ['dataAreaId', 'SalesAgreementId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Agreement Id.
   */
  declare salesAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Amount.
   */
  declare remainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Released Catch Weight Quantity.
   */
  declare releasedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoiced Amount.
   */
  declare invoicedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Committed Quantity.
   */
  declare committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivered Amount.
   */
  declare deliveredAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Quantity.
   */
  declare remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoiced Catch Weight Quantity.
   */
  declare invoicedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivered Quantity.
   */
  declare deliveredQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Catch Weight Quantity.
   */
  declare remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Released Quantity.
   */
  declare releasedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Released Amount.
   */
  declare releasedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivered Catch Weight Quantity.
   */
  declare deliveredCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Agreement Legal Entity Id.
   * @nullable
   */
  declare salesAgreementLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Committed Catch Weight Quantity.
   */
  declare committedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoiced Quantity.
   */
  declare invoicedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Committed Amount.
   */
  declare committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link SalesAgreementLines} entity.
   */
  declare salesAgreementLine?: SalesAgreementLines<T> | null;

  constructor(_entityApi: SalesAgreementLineFulfillmentApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAgreementLineFulfillmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  remainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  releasedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  invoicedAmount: DeserializedType<T, 'Edm.Decimal'>;
  committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveredAmount: DeserializedType<T, 'Edm.Decimal'>;
  remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  invoicedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveredQuantity: DeserializedType<T, 'Edm.Decimal'>;
  remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  releasedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  releasedAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveredCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesAgreementLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  committedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  invoicedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesAgreementLine?: SalesAgreementLinesType<T> | null;
}
