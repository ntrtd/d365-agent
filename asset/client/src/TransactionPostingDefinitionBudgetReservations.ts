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
import type { TransactionPostingDefinitionBudgetReservationsApi } from './TransactionPostingDefinitionBudgetReservationsApi';
import { BudgetReservationJournalizingTypePsn } from './BudgetReservationJournalizingTypePsn';
import { TableAll } from './TableAll';

/**
 * This class represents the entity "TransactionPostingDefinitionBudgetReservations" of service "d365_metadata".
 */
export class TransactionPostingDefinitionBudgetReservations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionPostingDefinitionBudgetReservationsType<T>
{
  /**
   * Technical entity name for TransactionPostingDefinitionBudgetReservations.
   */
  static override _entityName =
    'TransactionPostingDefinitionBudgetReservations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionPostingDefinitionBudgetReservations entity.
   */
  static _keys = [
    'dataAreaId',
    'BudgetReservationTypeName',
    'BudgetReservationJournalizingType',
    'BudgetReservationTypeCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Reservation Type Name.
   */
  declare budgetReservationTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Reservation Journalizing Type.
   * @nullable
   */
  declare budgetReservationJournalizingType?: BudgetReservationJournalizingTypePsn | null;
  /**
   * Budget Reservation Type Code.
   * @nullable
   */
  declare budgetReservationTypeCode?: TableAll | null;
  /**
   * Posting Definition.
   * @nullable
   */
  declare postingDefinition?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: TransactionPostingDefinitionBudgetReservationsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TransactionPostingDefinitionBudgetReservationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  budgetReservationTypeName: DeserializedType<T, 'Edm.String'>;
  budgetReservationJournalizingType?: BudgetReservationJournalizingTypePsn | null;
  budgetReservationTypeCode?: TableAll | null;
  postingDefinition?: DeserializedType<T, 'Edm.String'> | null;
}
