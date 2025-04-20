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
import type { SmaServiceOrderTableBiEntitiesApi } from './SmaServiceOrderTableBiEntitiesApi';
import { SmmActivityPriority } from './SmmActivityPriority';
import { SmaLogStatus } from './SmaLogStatus';
import { SmaServiceOrderProgress } from './SmaServiceOrderProgress';
import { NoYes } from './NoYes';
import { SmaServiceOrderOrigin } from './SmaServiceOrderOrigin';

/**
 * This class represents the entity "SMAServiceOrderTableBiEntities" of service "d365_metadata".
 */
export class SmaServiceOrderTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SmaServiceOrderTableBiEntitiesType<T>
{
  /**
   * Technical entity name for SmaServiceOrderTableBiEntities.
   */
  static override _entityName = 'SMAServiceOrderTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SmaServiceOrderTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ServiceOrderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Order Id.
   */
  declare serviceOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority.
   * @nullable
   */
  declare priority?: SmmActivityPriority | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compliance.
   */
  declare compliance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type Id.
   * @nullable
   */
  declare activityTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sign Off Date Time.
   */
  declare signOffDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Ref Table Id.
   */
  declare addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address Ref Rec Id.
   */
  declare addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Service Level Agreement Status.
   * @nullable
   */
  declare serviceLevelAgreementStatus?: SmaLogStatus | null;
  /**
   * Service Address Name.
   * @nullable
   */
  declare serviceAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Progress.
   * @nullable
   */
  declare progress?: SmaServiceOrderProgress | null;
  /**
   * Service Date Time.
   */
  declare serviceDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Calendar Conflict.
   * @nullable
   */
  declare calendarConflict?: NoYes | null;
  /**
   * Stage Id.
   * @nullable
   */
  declare stageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certified Payroll.
   * @nullable
   */
  declare certifiedPayroll?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sign Off.
   * @nullable
   */
  declare signOff?: NoYes | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Postal Address.
   */
  declare servicePostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Incoming Web Order.
   * @nullable
   */
  declare incomingWebOrder?: NoYes | null;
  /**
   * Worker Preferred Technician.
   */
  declare workerPreferredTechnician: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Id.
   * @nullable
   */
  declare agreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: SmaServiceOrderOrigin | null;
  /**
   * Service Level Agreement.
   * @nullable
   */
  declare serviceLevelAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Responsible.
   */
  declare workerResponsible: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: SmaServiceOrderTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SmaServiceOrderTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceOrderId: DeserializedType<T, 'Edm.String'>;
  priority?: SmmActivityPriority | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  compliance: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  activityTypeId?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  signOffDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  serviceLevelAgreementStatus?: SmaLogStatus | null;
  serviceAddressName?: DeserializedType<T, 'Edm.String'> | null;
  progress?: SmaServiceOrderProgress | null;
  serviceDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calendarConflict?: NoYes | null;
  stageId?: DeserializedType<T, 'Edm.String'> | null;
  certifiedPayroll?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  signOff?: NoYes | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  servicePostalAddress: DeserializedType<T, 'Edm.Int64'>;
  incomingWebOrder?: NoYes | null;
  workerPreferredTechnician: DeserializedType<T, 'Edm.Int64'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  agreementId?: DeserializedType<T, 'Edm.String'> | null;
  origin?: SmaServiceOrderOrigin | null;
  serviceLevelAgreement?: DeserializedType<T, 'Edm.String'> | null;
  workerResponsible: DeserializedType<T, 'Edm.Int64'>;
}
