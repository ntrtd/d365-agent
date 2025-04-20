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
import type { ShipConsolidationPoliciesV3Api } from './ShipConsolidationPoliciesV3Api';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';
import { NoYes } from './NoYes';
import { WhsShipConsolidationPolicyValidationStatus } from './WhsShipConsolidationPolicyValidationStatus';

/**
 * This class represents the entity "ShipConsolidationPoliciesV3" of service "d365_metadata".
 */
export class ShipConsolidationPoliciesV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipConsolidationPoliciesV3Type<T>
{
  /**
   * Technical entity name for ShipConsolidationPoliciesV3.
   */
  static override _entityName = 'ShipConsolidationPoliciesV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipConsolidationPoliciesV3 entity.
   */
  static _keys = [
    'dataAreaId',
    'ShipConsolidationPolicyType',
    'ShipConsolidationPolicyName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Consolidation Policy Type.
   * @nullable
   */
  declare shipConsolidationPolicyType?: WhsShipConsolidationPolicyType | null;
  /**
   * Ship Consolidation Policy Name.
   */
  declare shipConsolidationPolicyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Consolidation Policy Seq Num.
   */
  declare shipConsolidationPolicySeqNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ship Consolidation Policy Query Json.
   * @nullable
   */
  declare shipConsolidationPolicyQueryJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consolidate With Existing Shipments.
   * @nullable
   */
  declare consolidateWithExistingShipments?: NoYes | null;
  /**
   * Ship Consolidation Policy Desc.
   * @nullable
   */
  declare shipConsolidationPolicyDesc?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Valid.
   * @nullable
   */
  declare valid?: WhsShipConsolidationPolicyValidationStatus | null;
  /**
   * Ship Consolidation Policy Query.
   * @nullable
   */
  declare shipConsolidationPolicyQuery?: DeserializedType<
    T,
    'Edm.Binary'
  > | null;

  constructor(_entityApi: ShipConsolidationPoliciesV3Api<T>) {
    super(_entityApi);
  }
}

export interface ShipConsolidationPoliciesV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipConsolidationPolicyType?: WhsShipConsolidationPolicyType | null;
  shipConsolidationPolicyName: DeserializedType<T, 'Edm.String'>;
  shipConsolidationPolicySeqNum: DeserializedType<T, 'Edm.Int32'>;
  shipConsolidationPolicyQueryJson?: DeserializedType<T, 'Edm.String'> | null;
  consolidateWithExistingShipments?: NoYes | null;
  shipConsolidationPolicyDesc?: DeserializedType<T, 'Edm.String'> | null;
  valid?: WhsShipConsolidationPolicyValidationStatus | null;
  shipConsolidationPolicyQuery?: DeserializedType<T, 'Edm.Binary'> | null;
}
