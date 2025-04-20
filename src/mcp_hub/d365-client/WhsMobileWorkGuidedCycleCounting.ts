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
import type { WhsMobileWorkGuidedCycleCountingApi } from './WhsMobileWorkGuidedCycleCountingApi';
import {
  WhsMobileWorkSessions,
  WhsMobileWorkSessionsType
} from './WhsMobileWorkSessions';

/**
 * This class represents the entity "WHSMobileWorkGuidedCycleCounting" of service "d365_metadata".
 */
export class WhsMobileWorkGuidedCycleCounting<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WhsMobileWorkGuidedCycleCountingType<T>
{
  /**
   * Technical entity name for WhsMobileWorkGuidedCycleCounting.
   */
  static override _entityName = 'WHSMobileWorkGuidedCycleCounting';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WhsMobileWorkGuidedCycleCounting entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Session Rec Id.
   */
  declare sessionRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Submission Type.
   * @nullable
   */
  declare submissionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Status Id Options.
   * @nullable
   */
  declare inventStatusIdOptions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error.
   * @nullable
   */
  declare error?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mutable Properties.
   * @nullable
   */
  declare mutableProperties?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cycle Count Qty 1.
   * @nullable
   */
  declare cycleCountQty1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wms Location Id.
   * @nullable
   */
  declare wmsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cycle Count Uom 1.
   * @nullable
   */
  declare cycleCountUom1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cycle Count Uom 1 Options.
   * @nullable
   */
  declare cycleCountUom1Options?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Id.
   * @nullable
   */
  declare licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Status Id.
   * @nullable
   */
  declare inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rf Description 1.
   * @nullable
   */
  declare rfDescription1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WhsMobileWorkSessions} entity.
   */
  declare session?: WhsMobileWorkSessions<T> | null;

  constructor(_entityApi: WhsMobileWorkGuidedCycleCountingApi<T>) {
    super(_entityApi);
  }
}

export interface WhsMobileWorkGuidedCycleCountingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  sessionRecId: DeserializedType<T, 'Edm.Int64'>;
  submissionType?: DeserializedType<T, 'Edm.String'> | null;
  inventStatusIdOptions?: DeserializedType<T, 'Edm.String'> | null;
  error?: DeserializedType<T, 'Edm.String'> | null;
  mutableProperties?: DeserializedType<T, 'Edm.String'> | null;
  cycleCountQty1?: DeserializedType<T, 'Edm.String'> | null;
  wmsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  cycleCountUom1?: DeserializedType<T, 'Edm.String'> | null;
  cycleCountUom1Options?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  rfDescription1?: DeserializedType<T, 'Edm.String'> | null;
  session?: WhsMobileWorkSessionsType<T> | null;
}
