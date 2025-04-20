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
import type { ReasonsApi } from './ReasonsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "Reasons" of service "d365_metadata".
 */
export class Reasons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReasonsType<T>
{
  /**
   * Technical entity name for Reasons.
   */
  static override _entityName = 'Reasons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Reasons entity.
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
   * Fixed Assets.
   * @nullable
   */
  declare fixedAssets?: NoYes | null;
  /**
   * Default Comment.
   * @nullable
   */
  declare defaultComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger.
   * @nullable
   */
  declare ledger?: NoYes | null;

  constructor(_entityApi: ReasonsApi<T>) {
    super(_entityApi);
  }
}

export interface ReasonsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  fixedAssets?: NoYes | null;
  defaultComment?: DeserializedType<T, 'Edm.String'> | null;
  ledger?: NoYes | null;
}
