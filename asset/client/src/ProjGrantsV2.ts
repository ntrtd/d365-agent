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
import type { ProjGrantsV2Api } from './ProjGrantsV2Api';
import { NoYes } from './NoYes';
import { ProjGrantStatus } from './ProjGrantStatus';

/**
 * This class represents the entity "ProjGrantsV2" of service "d365_metadata".
 */
export class ProjGrantsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjGrantsV2Type<T>
{
  /**
   * Technical entity name for ProjGrantsV2.
   */
  static override _entityName = 'ProjGrantsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjGrantsV2 entity.
   */
  static _keys = ['dataAreaId', 'GrantId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Grant Id.
   */
  declare grantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Grant Name.
   * @nullable
   */
  declare grantName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Submitted Date.
   */
  declare applicationSubmittedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Grantor Type Grantor Type.
   * @nullable
   */
  declare projGrantorTypeGrantorType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Grantor.
   * @nullable
   */
  declare subGrantor?: NoYes | null;
  /**
   * Rejection Notification.
   */
  declare rejectionNotification: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pass Through.
   * @nullable
   */
  declare passThrough?: NoYes | null;
  /**
   * Actual Expiration Date.
   */
  declare actualExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Federal Mandate.
   * @nullable
   */
  declare federalMandate?: NoYes | null;
  /**
   * Estimated Award Date.
   */
  declare estimatedAwardDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Renewal Action Date.
   */
  declare renewalActionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Actual Award Date.
   */
  declare actualAwardDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Grant Matching Comments.
   * @nullable
   */
  declare grantMatchingComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Unit Id.
   * @nullable
   */
  declare organizationUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Awarded Amount.
   */
  declare awardedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Grant Status.
   * @nullable
   */
  declare grantStatus?: ProjGrantStatus | null;
  /**
   * Proj Grant Type Grant Type.
   * @nullable
   */
  declare projGrantTypeGrantType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Due Date.
   */
  declare applicationDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cfda.
   * @nullable
   */
  declare cfda?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Grant Application Id.
   * @nullable
   */
  declare grantApplicationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Contact Personnel Number.
   * @nullable
   */
  declare workerContactPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Matching Percentage.
   */
  declare matchingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Grant Description.
   * @nullable
   */
  declare grantDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matching Amount.
   */
  declare matchingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Grantor Agency.
   * @nullable
   */
  declare grantorAgency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Local Tracking Id.
   * @nullable
   */
  declare projLocalTrackingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Grant Matching Matching Type Code.
   * @nullable
   */
  declare projGrantMatchingMatchingTypeCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Grant Purpose.
   * @nullable
   */
  declare grantPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Board Approval Date.
   */
  declare boardApprovalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Requested Amount.
   */
  declare requestedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Grant Manager Worker Personnel Number.
   * @nullable
   */
  declare grantManagerWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Actual Start Date.
   */
  declare actualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * State Mandate.
   * @nullable
   */
  declare stateMandate?: NoYes | null;
  /**
   * Grant Parent Id.
   * @nullable
   */
  declare grantParentId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjGrantsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProjGrantsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  grantId: DeserializedType<T, 'Edm.String'>;
  grantName?: DeserializedType<T, 'Edm.String'> | null;
  applicationSubmittedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projGrantorTypeGrantorType?: DeserializedType<T, 'Edm.String'> | null;
  subGrantor?: NoYes | null;
  rejectionNotification: DeserializedType<T, 'Edm.DateTimeOffset'>;
  passThrough?: NoYes | null;
  actualExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  federalMandate?: NoYes | null;
  estimatedAwardDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  renewalActionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  actualAwardDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  grantMatchingComments?: DeserializedType<T, 'Edm.String'> | null;
  organizationUnitId?: DeserializedType<T, 'Edm.String'> | null;
  awardedAmount: DeserializedType<T, 'Edm.Decimal'>;
  grantStatus?: ProjGrantStatus | null;
  projGrantTypeGrantType?: DeserializedType<T, 'Edm.String'> | null;
  applicationDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cfda?: DeserializedType<T, 'Edm.String'> | null;
  grantApplicationId?: DeserializedType<T, 'Edm.String'> | null;
  workerContactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  matchingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  grantDescription?: DeserializedType<T, 'Edm.String'> | null;
  matchingAmount: DeserializedType<T, 'Edm.Decimal'>;
  grantorAgency?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  projLocalTrackingId?: DeserializedType<T, 'Edm.String'> | null;
  projGrantMatchingMatchingTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  grantPurpose?: DeserializedType<T, 'Edm.String'> | null;
  boardApprovalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestedAmount: DeserializedType<T, 'Edm.Decimal'>;
  grantManagerWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  actualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  stateMandate?: NoYes | null;
  grantParentId?: DeserializedType<T, 'Edm.String'> | null;
}
