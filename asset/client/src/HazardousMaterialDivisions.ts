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
import type { HazardousMaterialDivisionsApi } from './HazardousMaterialDivisionsApi';

/**
 * This class represents the entity "HazardousMaterialDivisions" of service "d365_metadata".
 */
export class HazardousMaterialDivisions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialDivisionsType<T>
{
  /**
   * Technical entity name for HazardousMaterialDivisions.
   */
  static override _entityName = 'HazardousMaterialDivisions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialDivisions entity.
   */
  static _keys = ['DivisionCode'];
  /**
   * Division Code.
   */
  declare divisionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Class Code.
   * @nullable
   */
  declare classCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousMaterialDivisionsApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialDivisionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  divisionCode: DeserializedType<T, 'Edm.String'>;
  classCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
