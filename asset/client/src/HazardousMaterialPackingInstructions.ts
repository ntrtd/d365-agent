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
import type { HazardousMaterialPackingInstructionsApi } from './HazardousMaterialPackingInstructionsApi';

/**
 * This class represents the entity "HazardousMaterialPackingInstructions" of service "d365_metadata".
 */
export class HazardousMaterialPackingInstructions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialPackingInstructionsType<T>
{
  /**
   * Technical entity name for HazardousMaterialPackingInstructions.
   */
  static override _entityName = 'HazardousMaterialPackingInstructions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialPackingInstructions entity.
   */
  static _keys = ['PackInstCode'];
  /**
   * Pack Inst Code.
   */
  declare packInstCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousMaterialPackingInstructionsApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialPackingInstructionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  packInstCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
