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
import type { PurchaseRequisitionHeadersApi } from './PurchaseRequisitionHeadersApi';
import { PurchReqRequisitionStatus } from './PurchReqRequisitionStatus';
import { NoYes } from './NoYes';
import { RequisitionPurpose } from './RequisitionPurpose';
import {
  PurchaseRequisitionLinesV2,
  PurchaseRequisitionLinesV2Type
} from './PurchaseRequisitionLinesV2';
import {
  PurchaseRequisitionLines,
  PurchaseRequisitionLinesType
} from './PurchaseRequisitionLines';

/**
 * This class represents the entity "PurchaseRequisitionHeaders" of service "d365_metadata".
 */
export class PurchaseRequisitionHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseRequisitionHeadersType<T>
{
  /**
   * Technical entity name for PurchaseRequisitionHeaders.
   */
  static override _entityName = 'PurchaseRequisitionHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseRequisitionHeaders entity.
   */
  static _keys = ['RequisitionNumber'];
  /**
   * Requisition Number.
   */
  declare requisitionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Requisition Status.
   * @nullable
   */
  declare requisitionStatus?: PurchReqRequisitionStatus | null;
  /**
   * Default Accounting Date.
   */
  declare defaultAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Business Justification Details.
   * @nullable
   */
  declare defaultBusinessJustificationDetails?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Project Id.
   * @nullable
   */
  declare defaultProjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Requested Date.
   */
  declare defaultRequestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Buying Legal Entity Id.
   * @nullable
   */
  declare projectBuyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preparer Personnel Number.
   * @nullable
   */
  declare preparerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Business Justification Code.
   * @nullable
   */
  declare defaultBusinessJustificationCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Requisition Name.
   * @nullable
   */
  declare requisitionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Hold Explanation.
   * @nullable
   */
  declare onHoldExplanation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Purchase Requisition On Hold.
   * @nullable
   */
  declare isPurchaseRequisitionOnHold?: NoYes | null;
  /**
   * Requisition Purpose.
   * @nullable
   */
  declare requisitionPurpose?: RequisitionPurpose | null;
  /**
   * One-to-many navigation property to the {@link PurchaseRequisitionLinesV2} entity.
   */
  declare purchaseRequisitionLinesV2: PurchaseRequisitionLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequisitionLines} entity.
   */
  declare purchaseRequisitionLines: PurchaseRequisitionLines<T>[];

  constructor(_entityApi: PurchaseRequisitionHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseRequisitionHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requisitionNumber: DeserializedType<T, 'Edm.String'>;
  requisitionStatus?: PurchReqRequisitionStatus | null;
  defaultAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultBusinessJustificationDetails?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultProjectId?: DeserializedType<T, 'Edm.String'> | null;
  defaultRequestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectBuyingLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  preparerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultBusinessJustificationCode?: DeserializedType<T, 'Edm.String'> | null;
  requisitionName?: DeserializedType<T, 'Edm.String'> | null;
  onHoldExplanation?: DeserializedType<T, 'Edm.String'> | null;
  isPurchaseRequisitionOnHold?: NoYes | null;
  requisitionPurpose?: RequisitionPurpose | null;
  purchaseRequisitionLinesV2: PurchaseRequisitionLinesV2Type<T>[];
  purchaseRequisitionLines: PurchaseRequisitionLinesType<T>[];
}
