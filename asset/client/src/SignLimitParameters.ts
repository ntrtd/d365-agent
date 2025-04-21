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
import type { SignLimitParametersApi } from './SignLimitParametersApi';
import { NoYes } from './NoYes';
import { HrpAuthorityBasis } from './HrpAuthorityBasis';

/**
 * This class represents the entity "SignLimitParameters" of service "d365_metadata".
 */
export class SignLimitParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SignLimitParametersType<T>
{
  /**
   * Technical entity name for SignLimitParameters.
   */
  static override _entityName = 'SignLimitParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SignLimitParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Signing Limits For Employees Only.
   * @nullable
   */
  declare signingLimitsForEmployeesOnly?: NoYes | null;
  /**
   * Limit Basis.
   * @nullable
   */
  declare limitBasis?: HrpAuthorityBasis | null;
  /**
   * Require Explicit Signing Limit Request.
   * @nullable
   */
  declare requireExplicitSigningLimitRequest?: NoYes | null;

  constructor(_entityApi: SignLimitParametersApi<T>) {
    super(_entityApi);
  }
}

export interface SignLimitParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  signingLimitsForEmployeesOnly?: NoYes | null;
  limitBasis?: HrpAuthorityBasis | null;
  requireExplicitSigningLimitRequest?: NoYes | null;
}
