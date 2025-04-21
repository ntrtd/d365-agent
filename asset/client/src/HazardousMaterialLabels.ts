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
import type { HazardousMaterialLabelsApi } from './HazardousMaterialLabelsApi';

/**
 * This class represents the entity "HazardousMaterialLabels" of service "d365_metadata".
 */
export class HazardousMaterialLabels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialLabelsType<T>
{
  /**
   * Technical entity name for HazardousMaterialLabels.
   */
  static override _entityName = 'HazardousMaterialLabels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialLabels entity.
   */
  static _keys = ['LabelCode'];
  /**
   * Label Code.
   */
  declare labelCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousMaterialLabelsApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialLabelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  labelCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
