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
import type { RetailSalesAgreementFulfillmentsApi } from './RetailSalesAgreementFulfillmentsApi';
import { CommitmentType } from './CommitmentType';

/**
 * This class represents the entity "RetailSalesAgreementFulfillments" of service "d365_metadata".
 */
export class RetailSalesAgreementFulfillments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSalesAgreementFulfillmentsType<T>
{
  /**
   * Technical entity name for RetailSalesAgreementFulfillments.
   */
  static override _entityName = 'RetailSalesAgreementFulfillments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSalesAgreementFulfillments entity.
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
   * Commitment Type.
   * @nullable
   */
  declare commitmentType?: CommitmentType | null;
  /**
   * Used Quantity.
   */
  declare usedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Used Amount.
   */
  declare usedAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailSalesAgreementFulfillmentsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSalesAgreementFulfillmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  commitmentType?: CommitmentType | null;
  usedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  usedAmount: DeserializedType<T, 'Edm.Decimal'>;
}
