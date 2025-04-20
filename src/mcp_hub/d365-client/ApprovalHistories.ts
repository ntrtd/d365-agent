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
import type { ApprovalHistoriesApi } from './ApprovalHistoriesApi';
import { WorkflowTrackingType } from './WorkflowTrackingType';
import { WorkflowTrackingContext } from './WorkflowTrackingContext';

/**
 * This class represents the entity "ApprovalHistories" of service "d365_metadata".
 */
export class ApprovalHistories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApprovalHistoriesType<T>
{
  /**
   * Technical entity name for ApprovalHistories.
   */
  static override _entityName = 'ApprovalHistories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApprovalHistories entity.
   */
  static _keys = ['TrackingRecId'];
  /**
   * Tracking Rec Id.
   */
  declare trackingRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tracking Type.
   * @nullable
   */
  declare trackingType?: WorkflowTrackingType | null;
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tracking Context.
   * @nullable
   */
  declare trackingContext?: WorkflowTrackingContext | null;
  /**
   * Action User.
   * @nullable
   */
  declare actionUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval User.
   * @nullable
   */
  declare approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action User Object Id.
   */
  declare actionUserObjectId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Action Time.
   */
  declare actionTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tracking Message.
   * @nullable
   */
  declare trackingMessage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApprovalHistoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ApprovalHistoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  trackingRecId: DeserializedType<T, 'Edm.Int64'>;
  trackingType?: WorkflowTrackingType | null;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  trackingContext?: WorkflowTrackingContext | null;
  actionUser?: DeserializedType<T, 'Edm.String'> | null;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  actionUserObjectId: DeserializedType<T, 'Edm.Guid'>;
  actionTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  trackingMessage?: DeserializedType<T, 'Edm.String'> | null;
}
