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
import type { BudgetReservationHeader_PsnBiEntitiesApi } from './BudgetReservationHeader_PsnBiEntitiesApi';
import { BudgetReservationWorkflowStatusPsn } from './BudgetReservationWorkflowStatusPsn';
import { BudgetReservationDocumentStatusPsn } from './BudgetReservationDocumentStatusPsn';
import { BudgetReservationRelievingDocumentPsn } from './BudgetReservationRelievingDocumentPsn';

/**
 * This class represents the entity "BudgetReservationHeader_PSNBiEntities" of service "d365_metadata".
 */
export class BudgetReservationHeader_PsnBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetReservationHeader_PsnBiEntitiesType<T>
{
  /**
   * Technical entity name for BudgetReservationHeader_PsnBiEntities.
   */
  static override _entityName = 'BudgetReservationHeader_PSNBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetReservationHeader_PsnBiEntities entity.
   */
  static _keys = ['dataAreaId', 'DocumentNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Number.
   */
  declare documentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: BudgetReservationWorkflowStatusPsn | null;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Document Status.
   * @nullable
   */
  declare documentStatus?: BudgetReservationDocumentStatusPsn | null;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Title.
   * @nullable
   */
  declare documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Reference.
   * @nullable
   */
  declare externalReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Reservation Type Psn.
   */
  declare budgetReservationTypePsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Distribution Template.
   */
  declare accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Carried Forward Budget Transaction Header.
   */
  declare carriedForwardBudgetTransactionHeader: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cancel Date.
   */
  declare cancelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Finalize Closing Date.
   */
  declare finalizeClosingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Relieving Document Type.
   * @nullable
   */
  declare relievingDocumentType?: BudgetReservationRelievingDocumentPsn | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason Table Ref.
   */
  declare reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Department Reference.
   * @nullable
   */
  declare departmentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: BudgetReservationHeader_PsnBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetReservationHeader_PsnBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentNumber: DeserializedType<T, 'Edm.String'>;
  workflowStatus?: BudgetReservationWorkflowStatusPsn | null;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  documentStatus?: BudgetReservationDocumentStatusPsn | null;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  externalReference?: DeserializedType<T, 'Edm.String'> | null;
  budgetReservationTypePsn: DeserializedType<T, 'Edm.Int64'>;
  accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  carriedForwardBudgetTransactionHeader: DeserializedType<T, 'Edm.Int64'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cancelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  finalizeClosingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  relievingDocumentType?: BudgetReservationRelievingDocumentPsn | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  departmentReference?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
