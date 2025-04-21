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
import type { RetailReturnPoliciesApi } from './RetailReturnPoliciesApi';
import { NoYes } from './NoYes';
import {
  RetailReturnPolicyLines,
  RetailReturnPolicyLinesType
} from './RetailReturnPolicyLines';

/**
 * This class represents the entity "RetailReturnPolicies" of service "d365_metadata".
 */
export class RetailReturnPolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailReturnPoliciesType<T>
{
  /**
   * Technical entity name for RetailReturnPolicies.
   */
  static override _entityName = 'RetailReturnPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailReturnPolicies entity.
   */
  static _keys = ['dataAreaId', 'PolicyNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Number.
   */
  declare policyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Block In Default Return Location.
   * @nullable
   */
  declare blockInDefaultReturnLocation?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Print Labels.
   * @nullable
   */
  declare policyPrintLabels?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RetailReturnPolicyLines} entity.
   */
  declare retailReturnPolicyLine: RetailReturnPolicyLines<T>[];

  constructor(_entityApi: RetailReturnPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailReturnPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyNumber: DeserializedType<T, 'Edm.String'>;
  blockInDefaultReturnLocation?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  policyPrintLabels?: NoYes | null;
  retailReturnPolicyLine: RetailReturnPolicyLinesType<T>[];
}
