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
import type { PurchaseAgreementLineFulfillmentApi } from './PurchaseAgreementLineFulfillmentApi';
import {
  PurchaseAgreementLines,
  PurchaseAgreementLinesType
} from './PurchaseAgreementLines';
import {
  PurchaseAgreementLinesV2,
  PurchaseAgreementLinesV2Type
} from './PurchaseAgreementLinesV2';

/**
 * This class represents the entity "PurchaseAgreementLineFulfillment" of service "d365_metadata".
 */
export class PurchaseAgreementLineFulfillment<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseAgreementLineFulfillmentType<T>
{
  /**
   * Technical entity name for PurchaseAgreementLineFulfillment.
   */
  static override _entityName = 'PurchaseAgreementLineFulfillment';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseAgreementLineFulfillment entity.
   */
  static _keys = ['dataAreaId', 'PurchaseAgreementId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Agreement Id.
   */
  declare purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
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
   * Received Quantity.
   */
  declare receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Quantity.
   */
  declare remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoiced Catch Weight Quantity.
   */
  declare invoicedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Received Amount.
   */
  declare receivedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Catch Weight Quantity.
   */
  declare remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Released Quantity.
   */
  declare releasedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Received Catch Weight Quantity.
   */
  declare receivedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Agreement Legal Entity Id.
   * @nullable
   */
  declare purchaseAgreementLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Released Amount.
   */
  declare releasedAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * One-to-one navigation property to the {@link PurchaseAgreementLines} entity.
   */
  declare purchaseAgreementLine?: PurchaseAgreementLines<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseAgreementLinesV2} entity.
   */
  declare purchPurchaseAgreementLineV2?: PurchaseAgreementLinesV2<T> | null;

  constructor(_entityApi: PurchaseAgreementLineFulfillmentApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseAgreementLineFulfillmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  remainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  releasedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  invoicedAmount: DeserializedType<T, 'Edm.Decimal'>;
  committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  invoicedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivedAmount: DeserializedType<T, 'Edm.Decimal'>;
  remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  releasedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchaseAgreementLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  releasedAmount: DeserializedType<T, 'Edm.Decimal'>;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  committedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  invoicedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  purchaseAgreementLine?: PurchaseAgreementLinesType<T> | null;
  purchPurchaseAgreementLineV2?: PurchaseAgreementLinesV2Type<T> | null;
}
