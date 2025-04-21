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
import type { FormatCodesApi } from './FormatCodesApi';
import { PaymentFormatCodeTypeW } from './PaymentFormatCodeTypeW';

/**
 * This class represents the entity "FormatCodes" of service "d365_metadata".
 */
export class FormatCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FormatCodesType<T>
{
  /**
   * Technical entity name for FormatCodes.
   */
  static override _entityName = 'FormatCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FormatCodes entity.
   */
  static _keys = ['dataAreaId', 'Code', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: PaymentFormatCodeTypeW | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FormatCodesApi<T>) {
    super(_entityApi);
  }
}

export interface FormatCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  type?: PaymentFormatCodeTypeW | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
