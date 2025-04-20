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
import type { LedgerTransRulesApi } from './LedgerTransRulesApi';
import { RtslNoneNoYes } from './RtslNoneNoYes';

/**
 * This class represents the entity "LedgerTransRules" of service "d365_metadata".
 */
export class LedgerTransRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LedgerTransRulesType<T>
{
  /**
   * Technical entity name for LedgerTransRules.
   */
  static override _entityName = 'LedgerTransRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerTransRules entity.
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
   * Dimension Rule Group Id.
   * @nullable
   */
  declare dimensionRuleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account.
   * @nullable
   */
  declare offsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Crediting.
   * @nullable
   */
  declare crediting?: RtslNoneNoYes | null;
  /**
   * To Account.
   * @nullable
   */
  declare toAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Num.
   * @nullable
   */
  declare mainAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Rule Group Id.
   * @nullable
   */
  declare currencyRuleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Num Offset.
   * @nullable
   */
  declare mainAccountNumOffset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account.
   * @nullable
   */
  declare mainAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rule Group Id.
   * @nullable
   */
  declare ruleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Main Account Num.
   * @nullable
   */
  declare toMainAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: LedgerTransRulesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerTransRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  dimensionRuleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  crediting?: RtslNoneNoYes | null;
  toAccount?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  currencyRuleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountNumOffset?: DeserializedType<T, 'Edm.String'> | null;
  mainAccount?: DeserializedType<T, 'Edm.String'> | null;
  ruleGroupId?: DeserializedType<T, 'Edm.String'> | null;
  toMainAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
}
