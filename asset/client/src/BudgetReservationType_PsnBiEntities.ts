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
import type { BudgetReservationType_PsnBiEntitiesApi } from './BudgetReservationType_PsnBiEntitiesApi';
import { NoYes } from './NoYes';
import { BudgetReservationRelievingDocumentPsn } from './BudgetReservationRelievingDocumentPsn';

/**
 * This class represents the entity "BudgetReservationType_PSNBiEntities" of service "d365_metadata".
 */
export class BudgetReservationType_PsnBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetReservationType_PsnBiEntitiesType<T>
{
  /**
   * Technical entity name for BudgetReservationType_PsnBiEntities.
   */
  static override _entityName = 'BudgetReservationType_PSNBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetReservationType_PsnBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Reduce Carry Forward Budget.
   * @nullable
   */
  declare reduceCarryForwardBudget?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Table.
   */
  declare numberSequenceTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Workflow Table Sequence Number.
   * @nullable
   */
  declare workflowTableSequenceNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Relieving Document.
   * @nullable
   */
  declare relievingDocument?: BudgetReservationRelievingDocumentPsn | null;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: BudgetReservationType_PsnBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetReservationType_PsnBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  reduceCarryForwardBudget?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceTable: DeserializedType<T, 'Edm.Int64'>;
  workflowTableSequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  relievingDocument?: BudgetReservationRelievingDocumentPsn | null;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
}
