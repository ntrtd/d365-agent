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
import type { AdvancedRuleStructureActivationsApi } from './AdvancedRuleStructureActivationsApi';
import { NoYes } from './NoYes';
import {
  LedgerAdvancedRuleStructures,
  LedgerAdvancedRuleStructuresType
} from './LedgerAdvancedRuleStructures';

/**
 * This class represents the entity "AdvancedRuleStructureActivations" of service "d365_metadata".
 */
export class AdvancedRuleStructureActivations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AdvancedRuleStructureActivationsType<T>
{
  /**
   * Technical entity name for AdvancedRuleStructureActivations.
   */
  static override _entityName = 'AdvancedRuleStructureActivations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdvancedRuleStructureActivations entity.
   */
  static _keys = ['AdvancedRuleStructure'];
  /**
   * Advanced Rule Structure.
   */
  declare advancedRuleStructure: DeserializedType<T, 'Edm.String'>;
  /**
   * Do Activate.
   * @nullable
   */
  declare doActivate?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureActivationEntityRelatedRoleLedgerAdvancedRuleStructureEntity?: LedgerAdvancedRuleStructures<T> | null;

  constructor(_entityApi: AdvancedRuleStructureActivationsApi<T>) {
    super(_entityApi);
  }
}

export interface AdvancedRuleStructureActivationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  advancedRuleStructure: DeserializedType<T, 'Edm.String'>;
  doActivate?: NoYes | null;
  ledgerAdvancedRuleStructureActivationEntityRelatedRoleLedgerAdvancedRuleStructureEntity?: LedgerAdvancedRuleStructuresType<T> | null;
}
