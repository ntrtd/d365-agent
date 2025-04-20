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
import type { JournalSettingsApi } from './JournalSettingsApi';
import { OverdueJournalTypeW } from './OverdueJournalTypeW';
import { ComparisonConditionW } from './ComparisonConditionW';
import { NoYes } from './NoYes';
import { OverdueCalcTypeW } from './OverdueCalcTypeW';

/**
 * This class represents the entity "JournalSettings" of service "d365_metadata".
 */
export class JournalSettings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JournalSettingsType<T>
{
  /**
   * Technical entity name for JournalSettings.
   */
  static override _entityName = 'JournalSettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JournalSettings entity.
   */
  static _keys = ['dataAreaId', 'LineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Paym Term Days.
   */
  declare paymTermDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: OverdueJournalTypeW | null;
  /**
   * Minimum Number Of Days.
   */
  declare minimumNumberOfDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Number Of Days.
   */
  declare maximumNumberOfDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Condition.
   * @nullable
   */
  declare condition?: ComparisonConditionW | null;
  /**
   * Is Validate Enabled.
   * @nullable
   */
  declare isValidateEnabled?: NoYes | null;
  /**
   * Calculation Type.
   * @nullable
   */
  declare calculationType?: OverdueCalcTypeW | null;

  constructor(_entityApi: JournalSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface JournalSettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  paymTermDays: DeserializedType<T, 'Edm.Int32'>;
  journalType?: OverdueJournalTypeW | null;
  minimumNumberOfDays: DeserializedType<T, 'Edm.Int32'>;
  maximumNumberOfDays: DeserializedType<T, 'Edm.Int32'>;
  condition?: ComparisonConditionW | null;
  isValidateEnabled?: NoYes | null;
  calculationType?: OverdueCalcTypeW | null;
}
