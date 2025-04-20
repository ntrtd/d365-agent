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
import type { OutboundShipmentProcessingPoliciesApi } from './OutboundShipmentProcessingPoliciesApi';
import { WhsFillEntireShipment } from './WhsFillEntireShipment';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "OutboundShipmentProcessingPolicies" of service "d365_metadata".
 */
export class OutboundShipmentProcessingPolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentProcessingPoliciesType<T>
{
  /**
   * Technical entity name for OutboundShipmentProcessingPolicies.
   */
  static override _entityName = 'OutboundShipmentProcessingPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentProcessingPolicies entity.
   */
  static _keys = ['dataAreaId', 'PolicyName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Should Fill Entire Shipment.
   * @nullable
   */
  declare shouldFillEntireShipment?: WhsFillEntireShipment | null;
  /**
   * Should Enforce Shipment To Order Matching.
   * @nullable
   */
  declare shouldEnforceShipmentToOrderMatching?: NoYes | null;
  /**
   * Policy Description.
   * @nullable
   */
  declare policyDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: OutboundShipmentProcessingPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentProcessingPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyName: DeserializedType<T, 'Edm.String'>;
  shouldFillEntireShipment?: WhsFillEntireShipment | null;
  shouldEnforceShipmentToOrderMatching?: NoYes | null;
  policyDescription?: DeserializedType<T, 'Edm.String'> | null;
}
