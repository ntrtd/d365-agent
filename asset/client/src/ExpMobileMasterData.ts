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
import type { ExpMobileMasterDataApi } from './ExpMobileMasterDataApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ExpMobileMasterData" of service "d365_metadata".
 */
export class ExpMobileMasterData<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpMobileMasterDataType<T>
{
  /**
   * Technical entity name for ExpMobileMasterData.
   */
  static override _entityName = 'ExpMobileMasterData';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileMasterData entity.
   */
  static _keys = ['UserId'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Default Tax Group.
   * @nullable
   */
  declare workerDefaultTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Preferred Help Language.
   * @nullable
   */
  declare userPreferredHelpLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Preferred Language.
   * @nullable
   */
  declare userPreferredLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Preferred Time Zone Id.
   * @nullable
   */
  declare userPreferredTimeZoneId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Network Alias.
   * @nullable
   */
  declare userNetworkAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Preferred Time Zone.
   * @nullable
   */
  declare userPreferredTimeZone?: Timezone | null;
  /**
   * Is Re Imagined Per Diem Enabled.
   * @nullable
   */
  declare isReImaginedPerDiemEnabled?: NoYes | null;
  /**
   * Apply Pre Ops Filter.
   * @nullable
   */
  declare applyPreOpsFilter?: NoYes | null;
  /**
   * User Preferred Legal Entity.
   * @nullable
   */
  declare userPreferredLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Ability To Itemize Recurring Expenses Quickly Enabled.
   * @nullable
   */
  declare isAbilityToItemizeRecurringExpensesQuicklyEnabled?: NoYes | null;
  /**
   * Is Expense Ocr Enabled.
   * @nullable
   */
  declare isExpenseOcrEnabled?: NoYes | null;
  /**
   * User Name.
   * @nullable
   */
  declare userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Reimagined Ui Enabled.
   * @nullable
   */
  declare isReimaginedUiEnabled?: NoYes | null;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * User Preferred Locale.
   * @nullable
   */
  declare userPreferredLocale?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileMasterDataApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileMasterDataType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  workerDefaultTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  userPreferredHelpLanguage?: DeserializedType<T, 'Edm.String'> | null;
  userPreferredLanguage?: DeserializedType<T, 'Edm.String'> | null;
  userPreferredTimeZoneId?: DeserializedType<T, 'Edm.String'> | null;
  userNetworkAlias?: DeserializedType<T, 'Edm.String'> | null;
  userPreferredTimeZone?: Timezone | null;
  isReImaginedPerDiemEnabled?: NoYes | null;
  applyPreOpsFilter?: NoYes | null;
  userPreferredLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  isAbilityToItemizeRecurringExpensesQuicklyEnabled?: NoYes | null;
  isExpenseOcrEnabled?: NoYes | null;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  isReimaginedUiEnabled?: NoYes | null;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  userPreferredLocale?: DeserializedType<T, 'Edm.String'> | null;
}
