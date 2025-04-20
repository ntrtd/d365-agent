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
import type { EssLoaRequestDetailApproversApi } from './EssLoaRequestDetailApproversApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EssLoaRequestDetailApprovers" of service "d365_metadata".
 */
export class EssLoaRequestDetailApprovers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssLoaRequestDetailApproversType<T>
{
  /**
   * Technical entity name for EssLoaRequestDetailApprovers.
   */
  static override _entityName = 'EssLoaRequestDetailApprovers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLoaRequestDetailApprovers entity.
   */
  static _keys = ['RequestId', 'StartDate', 'EndDate'];
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Leave Type Id.
   * @nullable
   */
  declare leaveTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Half Of End Date.
   * @nullable
   */
  declare firstHalfOfEndDate?: NoYes | null;
  /**
   * Workflow Personnel Number.
   * @nullable
   */
  declare workflowPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Half Of Start Date.
   * @nullable
   */
  declare secondHalfOfStartDate?: NoYes | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Id.
   * @nullable
   */
  declare companyId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EssLoaRequestDetailApproversApi<T>) {
    super(_entityApi);
  }
}

export interface EssLoaRequestDetailApproversType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requestId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaveTypeId?: DeserializedType<T, 'Edm.String'> | null;
  firstHalfOfEndDate?: NoYes | null;
  workflowPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  secondHalfOfStartDate?: NoYes | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  companyId?: DeserializedType<T, 'Edm.String'> | null;
}
