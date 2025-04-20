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
import type { RetailReturnPolicyLinesApi } from './RetailReturnPolicyLinesApi';
import { NoYes } from './NoYes';
import {
  RetailReturnPolicies,
  RetailReturnPoliciesType
} from './RetailReturnPolicies';

/**
 * This class represents the entity "RetailReturnPolicyLines" of service "d365_metadata".
 */
export class RetailReturnPolicyLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailReturnPolicyLinesType<T>
{
  /**
   * Technical entity name for RetailReturnPolicyLines.
   */
  static override _entityName = 'RetailReturnPolicyLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailReturnPolicyLines entity.
   */
  static _keys = ['dataAreaId', 'PolicyNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Number.
   */
  declare policyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Block Item.
   * @nullable
   */
  declare blockItem?: NoYes | null;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operating Unit Number.
   * @nullable
   */
  declare operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pallet Id.
   * @nullable
   */
  declare palletId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailReturnPolicies} entity.
   */
  declare retailReturnPolicy?: RetailReturnPolicies<T> | null;

  constructor(_entityApi: RetailReturnPolicyLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailReturnPolicyLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  blockItem?: NoYes | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  palletId?: DeserializedType<T, 'Edm.String'> | null;
  retailReturnPolicy?: RetailReturnPoliciesType<T> | null;
}
