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
import type { PolicyLinesApi } from './PolicyLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PolicyLines" of service "d365_metadata".
 */
export class PolicyLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PolicyLinesType<T>
{
  /**
   * Technical entity name for PolicyLines.
   */
  static override _entityName = 'PolicyLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyLines entity.
   */
  static _keys = ['dataAreaId', 'PolicyName', 'MDIdentifier'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Md Identifier.
   */
  declare mdIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Identifier.
   * @nullable
   */
  declare identifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Overwrite.
   * @nullable
   */
  declare allowOverwrite?: NoYes | null;
  /**
   * Sorting.
   */
  declare sorting: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: PolicyLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyName: DeserializedType<T, 'Edm.String'>;
  mdIdentifier: DeserializedType<T, 'Edm.String'>;
  identifier?: DeserializedType<T, 'Edm.String'> | null;
  allowOverwrite?: NoYes | null;
  sorting: DeserializedType<T, 'Edm.Int32'>;
}
