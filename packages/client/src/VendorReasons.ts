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
import type { VendorReasonsApi } from './VendorReasonsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "VendorReasons" of service "d365_metadata".
 */
export class VendorReasons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorReasonsType<T>
{
  /**
   * Technical entity name for VendorReasons.
   */
  static override _entityName = 'VendorReasons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorReasons entity.
   */
  static _keys = ['dataAreaId', 'ReasonCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Purpose Code.
   * @nullable
   */
  declare purposeCode?: NoYes | null;
  /**
   * For Vendor Transaction Type.
   * @nullable
   */
  declare forVendorTransactionType?: NoYes | null;
  /**
   * Default Comment.
   * @nullable
   */
  declare defaultComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancellation Reason.
   * @nullable
   */
  declare cancellationReason?: NoYes | null;

  constructor(_entityApi: VendorReasonsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorReasonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  purposeCode?: NoYes | null;
  forVendorTransactionType?: NoYes | null;
  defaultComment?: DeserializedType<T, 'Edm.String'> | null;
  cancellationReason?: NoYes | null;
}
