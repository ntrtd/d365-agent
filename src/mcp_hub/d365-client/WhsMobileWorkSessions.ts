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
import type { WhsMobileWorkSessionsApi } from './WhsMobileWorkSessionsApi';
import {
  WhsMobileWorkLogins,
  WhsMobileWorkLoginsType
} from './WhsMobileWorkLogins';
import {
  WhsMobileWorkMenus,
  WhsMobileWorkMenusType
} from './WhsMobileWorkMenus';
import {
  WhsMobileWorkGuidedCycleCounting,
  WhsMobileWorkGuidedCycleCountingType
} from './WhsMobileWorkGuidedCycleCounting';

/**
 * This class represents the entity "WHSMobileWorkSessions" of service "d365_metadata".
 */
export class WhsMobileWorkSessions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WhsMobileWorkSessionsType<T>
{
  /**
   * Technical entity name for WhsMobileWorkSessions.
   */
  static override _entityName = 'WHSMobileWorkSessions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WhsMobileWorkSessions entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Work Item.
   * @nullable
   */
  declare currentWorkItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WhsMobileWorkLogins} entity.
   */
  declare login?: WhsMobileWorkLogins<T> | null;
  /**
   * One-to-one navigation property to the {@link WhsMobileWorkMenus} entity.
   */
  declare menu?: WhsMobileWorkMenus<T> | null;
  /**
   * One-to-one navigation property to the {@link WhsMobileWorkGuidedCycleCounting} entity.
   */
  declare guidedCycleCounting?: WhsMobileWorkGuidedCycleCounting<T> | null;

  constructor(_entityApi: WhsMobileWorkSessionsApi<T>) {
    super(_entityApi);
  }
}

export interface WhsMobileWorkSessionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  currentWorkItem?: DeserializedType<T, 'Edm.String'> | null;
  login?: WhsMobileWorkLoginsType<T> | null;
  menu?: WhsMobileWorkMenusType<T> | null;
  guidedCycleCounting?: WhsMobileWorkGuidedCycleCountingType<T> | null;
}
