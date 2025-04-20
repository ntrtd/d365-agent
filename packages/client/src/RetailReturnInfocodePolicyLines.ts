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
import type { RetailReturnInfocodePolicyLinesApi } from './RetailReturnInfocodePolicyLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailReturnInfocodePolicyLines" of service "d365_metadata".
 */
export class RetailReturnInfocodePolicyLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailReturnInfocodePolicyLinesType<T>
{
  /**
   * Technical entity name for RetailReturnInfocodePolicyLines.
   */
  static override _entityName = 'RetailReturnInfocodePolicyLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailReturnInfocodePolicyLines entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
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
   * Subcode Id.
   * @nullable
   */
  declare subcodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Infocode Id.
   * @nullable
   */
  declare infocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pallet Id.
   * @nullable
   */
  declare palletId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailReturnInfocodePolicyLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailReturnInfocodePolicyLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  blockItem?: NoYes | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  subcodeId?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  infocodeId?: DeserializedType<T, 'Edm.String'> | null;
  palletId?: DeserializedType<T, 'Edm.String'> | null;
}
