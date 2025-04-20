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
import type { PurchReqTableBiEntitiesApi } from './PurchReqTableBiEntitiesApi';
import { PurchReqType } from './PurchReqType';
import { PurchReqRequisitionStatus } from './PurchReqRequisitionStatus';
import { NoYes } from './NoYes';
import { RequisitionPurpose } from './RequisitionPurpose';

/**
 * This class represents the entity "PurchReqTableBiEntities" of service "d365_metadata".
 */
export class PurchReqTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchReqTableBiEntitiesType<T>
{
  /**
   * Technical entity name for PurchReqTableBiEntities.
   */
  static override _entityName = 'PurchReqTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchReqTableBiEntities entity.
   */
  static _keys = ['PurchReqId'];
  /**
   * Purch Req Id.
   */
  declare purchReqId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Req Name.
   * @nullable
   */
  declare purchReqName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Submitted By.
   * @nullable
   */
  declare submittedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Originator.
   */
  declare originator: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purch Req Type.
   * @nullable
   */
  declare purchReqType?: PurchReqType | null;
  /**
   * Required Date.
   */
  declare requiredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Requisition Status.
   * @nullable
   */
  declare requisitionStatus?: PurchReqRequisitionStatus | null;
  /**
   * Submitted Date Time.
   */
  declare submittedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Business Justification.
   */
  declare businessJustification: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Workflow To Be Resubmitted.
   * @nullable
   */
  declare isWorkflowToBeResubmitted?: NoYes | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Requisition Purpose.
   * @nullable
   */
  declare requisitionPurpose?: RequisitionPurpose | null;
  /**
   * Is Modified.
   * @nullable
   */
  declare isModified?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * On Hold.
   * @nullable
   */
  declare onHold?: NoYes | null;
  /**
   * Hold Explanation.
   * @nullable
   */
  declare holdExplanation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id Data Area.
   * @nullable
   */
  declare projIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Info Default.
   */
  declare companyInfoDefault: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: PurchReqTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchReqTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchReqId: DeserializedType<T, 'Edm.String'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  purchReqName?: DeserializedType<T, 'Edm.String'> | null;
  submittedBy?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  originator: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchReqType?: PurchReqType | null;
  requiredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  requisitionStatus?: PurchReqRequisitionStatus | null;
  submittedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  businessJustification: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  isWorkflowToBeResubmitted?: NoYes | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requisitionPurpose?: RequisitionPurpose | null;
  isModified?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  onHold?: NoYes | null;
  holdExplanation?: DeserializedType<T, 'Edm.String'> | null;
  projIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  companyInfoDefault: DeserializedType<T, 'Edm.Int64'>;
}
