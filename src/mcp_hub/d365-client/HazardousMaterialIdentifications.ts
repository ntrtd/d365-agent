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
import type { HazardousMaterialIdentificationsApi } from './HazardousMaterialIdentificationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "HazardousMaterialIdentifications" of service "d365_metadata".
 */
export class HazardousMaterialIdentifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialIdentificationsType<T>
{
  /**
   * Technical entity name for HazardousMaterialIdentifications.
   */
  static override _entityName = 'HazardousMaterialIdentifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialIdentifications entity.
   */
  static _keys = ['IdentificationCode'];
  /**
   * Identification Code.
   */
  declare identificationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Restrict Sea.
   * @nullable
   */
  declare restrictSea?: NoYes | null;
  /**
   * Restrict Air.
   * @nullable
   */
  declare restrictAir?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousMaterialIdentificationsApi<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialIdentificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  identificationCode: DeserializedType<T, 'Edm.String'>;
  restrictSea?: NoYes | null;
  restrictAir?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
