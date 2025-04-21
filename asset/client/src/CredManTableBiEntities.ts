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
import type { CredManTableBiEntitiesApi } from './CredManTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { CredManTableWorkflowStatus } from './CredManTableWorkflowStatus';
import { CredManDocumentStatusCheck } from './CredManDocumentStatusCheck';
import { CredManHoldType } from './CredManHoldType';
import { CredManReason } from './CredManReason';

/**
 * This class represents the entity "CredManTableBiEntities" of service "d365_metadata".
 */
export class CredManTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CredManTableBiEntitiesType<T>
{
  /**
   * Technical entity name for CredManTableBiEntities.
   */
  static override _entityName = 'CredManTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CredManTableBiEntities entity.
   */
  static _keys = ['CredManId', 'Company'];
  /**
   * Cred Man Id.
   */
  declare credManId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Rejected.
   * @nullable
   */
  declare rejected?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Whs Load Id Data Area.
   * @nullable
   */
  declare whsLoadIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: CredManTableWorkflowStatus | null;
  /**
   * Sales Dead Line.
   */
  declare salesDeadLine: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Review Date.
   */
  declare reviewDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Document Status.
   * @nullable
   */
  declare documentStatus?: CredManDocumentStatusCheck | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Created Date Time.
   */
  declare salesCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Hold Type.
   * @nullable
   */
  declare holdType?: CredManHoldType | null;
  /**
   * Freight Zone.
   * @nullable
   */
  declare freightZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blocked Reason.
   */
  declare blockedReason: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Term.
   * @nullable
   */
  declare paymentTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Released By.
   * @nullable
   */
  declare releasedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Worker Sales Taker.
   */
  declare workerSalesTaker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Changed.
   * @nullable
   */
  declare amountChanged?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Released Date Time.
   */
  declare releasedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Whs Load Id.
   * @nullable
   */
  declare whsLoadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Reason Id.
   * @nullable
   */
  declare releaseReasonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Sales Responsible.
   */
  declare workerSalesResponsible: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Total.
   */
  declare salesTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cred Man Reason.
   * @nullable
   */
  declare credManReason?: CredManReason | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Table Ref Id.
   * @nullable
   */
  declare tableRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cred Man Group Id.
   * @nullable
   */
  declare credManGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Parm Id.
   * @nullable
   */
  declare salesParmId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proforma.
   * @nullable
   */
  declare proforma?: NoYes | null;
  /**
   * Sales Pool Id.
   * @nullable
   */
  declare salesPoolId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CredManTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CredManTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  credManId: DeserializedType<T, 'Edm.String'>;
  company: DeserializedType<T, 'Edm.String'>;
  rejected?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  whsLoadIdDataArea?: DeserializedType<T, 'Edm.String'> | null;
  status?: CredManTableWorkflowStatus | null;
  salesDeadLine: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reviewDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
  documentStatus?: CredManDocumentStatusCheck | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  holdType?: CredManHoldType | null;
  freightZone?: DeserializedType<T, 'Edm.String'> | null;
  blockedReason: DeserializedType<T, 'Edm.Int64'>;
  paymentTerm?: DeserializedType<T, 'Edm.String'> | null;
  releasedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  workerSalesTaker: DeserializedType<T, 'Edm.Int64'>;
  amountChanged?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  releasedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  whsLoadId?: DeserializedType<T, 'Edm.String'> | null;
  releaseReasonId?: DeserializedType<T, 'Edm.String'> | null;
  workerSalesResponsible: DeserializedType<T, 'Edm.Int64'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  salesTotal: DeserializedType<T, 'Edm.Decimal'>;
  credManReason?: CredManReason | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  tableRefId?: DeserializedType<T, 'Edm.String'> | null;
  credManGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesParmId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  proforma?: NoYes | null;
  salesPoolId?: DeserializedType<T, 'Edm.String'> | null;
}
