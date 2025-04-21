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
import type { ElectronicTimecardActivityRegistrationHeadersApi } from './ElectronicTimecardActivityRegistrationHeadersApi';
import { NoYes } from './NoYes';
import {
  ElectronicTimecardActivityRegistrationLines,
  ElectronicTimecardActivityRegistrationLinesType
} from './ElectronicTimecardActivityRegistrationLines';

/**
 * This class represents the entity "ElectronicTimecardActivityRegistrationHeaders" of service "d365_metadata".
 */
export class ElectronicTimecardActivityRegistrationHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicTimecardActivityRegistrationHeadersType<T>
{
  /**
   * Technical entity name for ElectronicTimecardActivityRegistrationHeaders.
   */
  static override _entityName = 'ElectronicTimecardActivityRegistrationHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicTimecardActivityRegistrationHeaders entity.
   */
  static _keys = ['dataAreaId', 'TimeProfileDate', 'WorkerPersonnelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Profile Date.
   */
  declare timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Transferred.
   * @nullable
   */
  declare isTransferred?: NoYes | null;
  /**
   * Time Profile Id.
   * @nullable
   */
  declare timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ElectronicTimecardActivityRegistrationLines} entity.
   */
  declare electronicTimecardActivityRegistrationLines: ElectronicTimecardActivityRegistrationLines<T>[];

  constructor(_entityApi: ElectronicTimecardActivityRegistrationHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicTimecardActivityRegistrationHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  isTransferred?: NoYes | null;
  timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  electronicTimecardActivityRegistrationLines: ElectronicTimecardActivityRegistrationLinesType<T>[];
}
