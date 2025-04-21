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
import type { McrHoldCodeTransBiEntitiesApi } from './McrHoldCodeTransBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "MCRHoldCodeTransBiEntities" of service "d365_metadata".
 */
export class McrHoldCodeTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements McrHoldCodeTransBiEntitiesType<T>
{
  /**
   * Technical entity name for McrHoldCodeTransBiEntities.
   */
  static override _entityName = 'MCRHoldCodeTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrHoldCodeTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Reason Code.
   * @nullable
   */
  declare mcrReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr User.
   * @nullable
   */
  declare mcrUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Hold User.
   * @nullable
   */
  declare mcrHoldUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Ref Id.
   * @nullable
   */
  declare inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Hold Code Comment.
   * @nullable
   */
  declare mcrHoldCodeComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Checked Out Date Time.
   */
  declare mcrCheckedOutDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mcr Hold Code.
   * @nullable
   */
  declare mcrHoldCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Hold Clear Date Time.
   */
  declare mcrHoldClearDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mcr Comment.
   * @nullable
   */
  declare mcrComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asoh Following Hold.
   * @nullable
   */
  declare asohFollowingHold?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Checked Out To.
   * @nullable
   */
  declare mcrCheckedOutTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Transaction Id.
   */
  declare sysTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mcr Cleared.
   * @nullable
   */
  declare mcrCleared?: NoYes | null;
  /**
   * Mcr Cleared User.
   * @nullable
   */
  declare mcrClearedUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mcr Hold Date Time.
   */
  declare mcrHoldDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Infocode Id.
   * @nullable
   */
  declare retailInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Checked Out.
   * @nullable
   */
  declare mcrCheckedOut?: NoYes | null;

  constructor(_entityApi: McrHoldCodeTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface McrHoldCodeTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  mcrReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  mcrUser?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  mcrHoldUser?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  mcrHoldCodeComment?: DeserializedType<T, 'Edm.String'> | null;
  mcrCheckedOutDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  mcrHoldCode?: DeserializedType<T, 'Edm.String'> | null;
  mcrHoldClearDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mcrComment?: DeserializedType<T, 'Edm.String'> | null;
  asohFollowingHold?: DeserializedType<T, 'Edm.String'> | null;
  mcrCheckedOutTo?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  sysTransactionId: DeserializedType<T, 'Edm.Int64'>;
  mcrCleared?: NoYes | null;
  mcrClearedUser?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mcrHoldDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  mcrCheckedOut?: NoYes | null;
}
