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
import type { ExpMobilePerDiemDataForReportApprovalsApi } from './ExpMobilePerDiemDataForReportApprovalsApi';

/**
 * This class represents the entity "ExpMobilePerDiemDataForReportApprovals" of service "d365_metadata".
 */
export class ExpMobilePerDiemDataForReportApprovals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobilePerDiemDataForReportApprovalsType<T>
{
  /**
   * Technical entity name for ExpMobilePerDiemDataForReportApprovals.
   */
  static override _entityName = 'ExpMobilePerDiemDataForReportApprovals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobilePerDiemDataForReportApprovals entity.
   */
  static _keys = ['WorkflowItemRecId'];
  /**
   * Workflow Item Rec Id.
   */
  declare workflowItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Assigned To.
   * @nullable
   */
  declare assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Data Area Id.
   * @nullable
   */
  declare referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exp Trans Number.
   * @nullable
   */
  declare expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Breakfast.
   */
  declare numberOfBreakfast: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Workflow Ref Table Name.
   * @nullable
   */
  declare workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trv Exp Trans.
   */
  declare trvExpTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Meal Deduction.
   */
  declare mealDeduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exchange Code.
   * @nullable
   */
  declare exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Number Of Lunch.
   */
  declare numberOfLunch: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Number Of Dinner.
   */
  declare numberOfDinner: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mealsand Incidentals Mst.
   */
  declare mealsandIncidentalsMst: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ExpMobilePerDiemDataForReportApprovalsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobilePerDiemDataForReportApprovalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workflowItemRecId: DeserializedType<T, 'Edm.Int64'>;
  assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  numberOfBreakfast: DeserializedType<T, 'Edm.Int32'>;
  workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  trvExpTrans: DeserializedType<T, 'Edm.Int64'>;
  mealDeduction: DeserializedType<T, 'Edm.Decimal'>;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numberOfLunch: DeserializedType<T, 'Edm.Int32'>;
  numberOfDinner: DeserializedType<T, 'Edm.Int32'>;
  mealsandIncidentalsMst: DeserializedType<T, 'Edm.Decimal'>;
}
