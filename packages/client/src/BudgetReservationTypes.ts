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
import type { BudgetReservationTypesApi } from './BudgetReservationTypesApi';
import { NoYes } from './NoYes';
import { BudgetReservationRelievingDocumentPsn } from './BudgetReservationRelievingDocumentPsn';

/**
 * This class represents the entity "BudgetReservationTypes" of service "d365_metadata".
 */
export class BudgetReservationTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetReservationTypesType<T>
{
  /**
   * Technical entity name for BudgetReservationTypes.
   */
  static override _entityName = 'BudgetReservationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetReservationTypes entity.
   */
  static _keys = ['dataAreaId', 'ReservationType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reservation Type.
   */
  declare reservationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Reduce Carry Forward Budget.
   * @nullable
   */
  declare reduceCarryForwardBudget?: NoYes | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow.
   * @nullable
   */
  declare workflow?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relieving Document.
   * @nullable
   */
  declare relievingDocument?: BudgetReservationRelievingDocumentPsn | null;

  constructor(_entityApi: BudgetReservationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetReservationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reservationType: DeserializedType<T, 'Edm.String'>;
  reduceCarryForwardBudget?: NoYes | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  workflow?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  relievingDocument?: BudgetReservationRelievingDocumentPsn | null;
}
