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
import type { FmlaEligibilityDatePrioritiesApi } from './FmlaEligibilityDatePrioritiesApi';
import { HcmFmlaPriorityCategory } from './HcmFmlaPriorityCategory';
import { HcmFmlaEligibilityPriorityDateType } from './HcmFmlaEligibilityPriorityDateType';

/**
 * This class represents the entity "FMLAEligibilityDatePriorities" of service "d365_metadata".
 */
export class FmlaEligibilityDatePriorities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FmlaEligibilityDatePrioritiesType<T>
{
  /**
   * Technical entity name for FmlaEligibilityDatePriorities.
   */
  static override _entityName = 'FMLAEligibilityDatePriorities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FmlaEligibilityDatePriorities entity.
   */
  static _keys = [
    'dataAreaId',
    'Priority',
    'PriorityCategory',
    'PriorityDateType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Priority Category.
   * @nullable
   */
  declare priorityCategory?: HcmFmlaPriorityCategory | null;
  /**
   * Priority Date Type.
   * @nullable
   */
  declare priorityDateType?: HcmFmlaEligibilityPriorityDateType | null;

  constructor(_entityApi: FmlaEligibilityDatePrioritiesApi<T>) {
    super(_entityApi);
  }
}

export interface FmlaEligibilityDatePrioritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  priority: DeserializedType<T, 'Edm.Int32'>;
  priorityCategory?: HcmFmlaPriorityCategory | null;
  priorityDateType?: HcmFmlaEligibilityPriorityDateType | null;
}
