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
import type { ReservationLineAgreementLinesApi } from './ReservationLineAgreementLinesApi';

/**
 * This class represents the entity "ReservationLineAgreementLines" of service "d365_metadata".
 */
export class ReservationLineAgreementLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReservationLineAgreementLinesType<T>
{
  /**
   * Technical entity name for ReservationLineAgreementLines.
   */
  static override _entityName = 'ReservationLineAgreementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReservationLineAgreementLines entity.
   */
  static _keys = [
    'dataAreaId',
    'PurchaseNumberSequence',
    'AgreementLineNumber',
    'BudgetReservationDocumentNumber',
    'BudgetReservationLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Number Sequence.
   */
  declare purchaseNumberSequence: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Line Number.
   */
  declare agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Reservation Document Number.
   */
  declare budgetReservationDocumentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Reservation Line Number.
   */
  declare budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Buying Legal Entity Id.
   * @nullable
   */
  declare buyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ReservationLineAgreementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ReservationLineAgreementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseNumberSequence: DeserializedType<T, 'Edm.String'>;
  agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  budgetReservationDocumentNumber: DeserializedType<T, 'Edm.String'>;
  budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  buyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
