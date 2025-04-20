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
import type { ExpenseTravelRequisitionsApi } from './ExpenseTravelRequisitionsApi';
import { TrvRequisitionReconciliationStatus } from './TrvRequisitionReconciliationStatus';
import { TrvRequisitionApprovalStatus } from './TrvRequisitionApprovalStatus';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ExpenseTravelRequisitions" of service "d365_metadata".
 */
export class ExpenseTravelRequisitions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpenseTravelRequisitionsType<T>
{
  /**
   * Technical entity name for ExpenseTravelRequisitions.
   */
  static override _entityName = 'ExpenseTravelRequisitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseTravelRequisitions entity.
   */
  static _keys = ['dataAreaId', 'TravelRequisitionNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Travel Requisition Number.
   */
  declare travelRequisitionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Destination.
   * @nullable
   */
  declare destination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconciliation Status.
   * @nullable
   */
  declare reconciliationStatus?: TrvRequisitionReconciliationStatus | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Business Purpose.
   * @nullable
   */
  declare businessPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Travel Description.
   * @nullable
   */
  declare travelDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TrvRequisitionApprovalStatus | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ExpenseTravelRequisitionsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseTravelRequisitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  travelRequisitionNumber: DeserializedType<T, 'Edm.String'>;
  destination?: DeserializedType<T, 'Edm.String'> | null;
  reconciliationStatus?: TrvRequisitionReconciliationStatus | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  businessPurpose?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  travelDescription?: DeserializedType<T, 'Edm.String'> | null;
  approvalStatus?: TrvRequisitionApprovalStatus | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
