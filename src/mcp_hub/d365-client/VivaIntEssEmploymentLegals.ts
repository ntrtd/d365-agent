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
import type { VivaIntEssEmploymentLegalsApi } from './VivaIntEssEmploymentLegalsApi';

/**
 * This class represents the entity "VivaIntEssEmploymentLegals" of service "d365_metadata".
 */
export class VivaIntEssEmploymentLegals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VivaIntEssEmploymentLegalsType<T>
{
  /**
   * Technical entity name for VivaIntEssEmploymentLegals.
   */
  static override _entityName = 'VivaIntEssEmploymentLegals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VivaIntEssEmploymentLegals entity.
   */
  static _keys = ['PersonnelNumber', 'ValidFrom'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Name.
   * @nullable
   */
  declare legalEntityName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VivaIntEssEmploymentLegalsApi<T>) {
    super(_entityApi);
  }
}

export interface VivaIntEssEmploymentLegalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityName?: DeserializedType<T, 'Edm.String'> | null;
}
