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
import type { EfDocAuthorityStatesApi } from './EfDocAuthorityStatesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EFDocAuthorityStates" of service "d365_metadata".
 */
export class EfDocAuthorityStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EfDocAuthorityStatesType<T>
{
  /**
   * Technical entity name for EfDocAuthorityStates.
   */
  static override _entityName = 'EFDocAuthorityStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EfDocAuthorityStates entity.
   */
  static _keys = ['Authority', 'State'];
  /**
   * Authority.
   */
  declare authority: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * Add Exempt.
   * @nullable
   */
  declare addExempt?: NoYes | null;
  /**
   * Validate Benefit Codes.
   * @nullable
   */
  declare validateBenefitCodes?: NoYes | null;

  constructor(_entityApi: EfDocAuthorityStatesApi<T>) {
    super(_entityApi);
  }
}

export interface EfDocAuthorityStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  authority: DeserializedType<T, 'Edm.String'>;
  state: DeserializedType<T, 'Edm.String'>;
  addExempt?: NoYes | null;
  validateBenefitCodes?: NoYes | null;
}
