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
import type { HazardousMaterialDivisionsV2Api } from './HazardousMaterialDivisionsV2Api';

/**
 * This class represents the entity "HazardousMaterialDivisionsV2" of service "d365_metadata".
 */
export class HazardousMaterialDivisionsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HazardousMaterialDivisionsV2Type<T>
{
  /**
   * Technical entity name for HazardousMaterialDivisionsV2.
   */
  static override _entityName = 'HazardousMaterialDivisionsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HazardousMaterialDivisionsV2 entity.
   */
  static _keys = ['ClassCode', 'DivisionCode'];
  /**
   * Class Code.
   */
  declare classCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Division Code.
   */
  declare divisionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HazardousMaterialDivisionsV2Api<T>) {
    super(_entityApi);
  }
}

export interface HazardousMaterialDivisionsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  classCode: DeserializedType<T, 'Edm.String'>;
  divisionCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
