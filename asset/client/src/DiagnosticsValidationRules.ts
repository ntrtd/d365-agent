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
import type { DiagnosticsValidationRulesApi } from './DiagnosticsValidationRulesApi';
import { DiagnosticsArea } from './DiagnosticsArea';
import { DiagnosticsRuleStatus } from './DiagnosticsRuleStatus';
import { DiagnosticsRunFrequency } from './DiagnosticsRunFrequency';

/**
 * This class represents the entity "DiagnosticsValidationRules" of service "d365_metadata".
 */
export class DiagnosticsValidationRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiagnosticsValidationRulesType<T>
{
  /**
   * Technical entity name for DiagnosticsValidationRules.
   */
  static override _entityName = 'DiagnosticsValidationRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiagnosticsValidationRules entity.
   */
  static _keys = ['ClassName'];
  /**
   * Class Name.
   */
  declare className: DeserializedType<T, 'Edm.String'>;
  /**
   * Area.
   * @nullable
   */
  declare area?: DiagnosticsArea | null;
  /**
   * Framework Version.
   */
  declare frameworkVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: DiagnosticsRuleStatus | null;
  /**
   * Rule Description.
   * @nullable
   */
  declare ruleDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Run Frequency.
   * @nullable
   */
  declare runFrequency?: DiagnosticsRunFrequency | null;
  /**
   * Rule Name.
   * @nullable
   */
  declare ruleName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DiagnosticsValidationRulesApi<T>) {
    super(_entityApi);
  }
}

export interface DiagnosticsValidationRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  className: DeserializedType<T, 'Edm.String'>;
  area?: DiagnosticsArea | null;
  frameworkVersion: DeserializedType<T, 'Edm.Int32'>;
  status?: DiagnosticsRuleStatus | null;
  ruleDescription?: DeserializedType<T, 'Edm.String'> | null;
  runFrequency?: DiagnosticsRunFrequency | null;
  ruleName?: DeserializedType<T, 'Edm.String'> | null;
}
