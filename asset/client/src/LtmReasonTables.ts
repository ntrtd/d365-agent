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
import type { LtmReasonTablesApi } from './LtmReasonTablesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMReasonTables" of service "d365_metadata".
 */
export class LtmReasonTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmReasonTablesType<T>
{
  /**
   * Technical entity name for LtmReasonTables.
   */
  static override _entityName = 'LTMReasonTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmReasonTables entity.
   */
  static _keys = ['dataAreaId', 'ReasonCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cpd.
   * @nullable
   */
  declare cpd?: NoYes | null;

  constructor(_entityApi: LtmReasonTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmReasonTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  cpd?: NoYes | null;
}
