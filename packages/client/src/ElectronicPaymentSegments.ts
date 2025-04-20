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
import type { ElectronicPaymentSegmentsApi } from './ElectronicPaymentSegmentsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ElectronicPaymentSegments" of service "d365_metadata".
 */
export class ElectronicPaymentSegments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicPaymentSegmentsType<T>
{
  /**
   * Technical entity name for ElectronicPaymentSegments.
   */
  static override _entityName = 'ElectronicPaymentSegments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicPaymentSegments entity.
   */
  static _keys = ['dataAreaId', 'Segment'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Segment.
   */
  declare segment: DeserializedType<T, 'Edm.String'>;
  /**
   * Nextsegment.
   * @nullable
   */
  declare nextsegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mandatory.
   * @nullable
   */
  declare mandatory?: NoYes | null;

  constructor(_entityApi: ElectronicPaymentSegmentsApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicPaymentSegmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  segment: DeserializedType<T, 'Edm.String'>;
  nextsegment?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mandatory?: NoYes | null;
}
