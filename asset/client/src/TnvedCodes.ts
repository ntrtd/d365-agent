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
import type { TnvedCodesApi } from './TnvedCodesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TNVEDCodes" of service "d365_metadata".
 */
export class TnvedCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TnvedCodesType<T>
{
  /**
   * Technical entity name for TnvedCodes.
   */
  static override _entityName = 'TNVEDCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TnvedCodes entity.
   */
  static _keys = ['dataAreaId', 'TnVedCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tn Ved Code.
   */
  declare tnVedCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blocked.
   * @nullable
   */
  declare blocked?: NoYes | null;

  constructor(_entityApi: TnvedCodesApi<T>) {
    super(_entityApi);
  }
}

export interface TnvedCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tnVedCode: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  blocked?: NoYes | null;
}
