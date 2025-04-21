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
import type { PolicyLanguageTxtsApi } from './PolicyLanguageTxtsApi';

/**
 * This class represents the entity "PolicyLanguageTxts" of service "d365_metadata".
 */
export class PolicyLanguageTxts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PolicyLanguageTxtsType<T>
{
  /**
   * Technical entity name for PolicyLanguageTxts.
   */
  static override _entityName = 'PolicyLanguageTxts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyLanguageTxts entity.
   */
  static _keys = [
    'Policy_Name',
    'PolicyRuleType_Name',
    'PolicyRule_ValidFrom',
    'Language'
  ];
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Rule Type Name.
   */
  declare policyRuleTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Rule Valid From.
   */
  declare policyRuleValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Language.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PolicyLanguageTxtsApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyLanguageTxtsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  policyName: DeserializedType<T, 'Edm.String'>;
  policyRuleTypeName: DeserializedType<T, 'Edm.String'>;
  policyRuleValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  language: DeserializedType<T, 'Edm.String'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
}
