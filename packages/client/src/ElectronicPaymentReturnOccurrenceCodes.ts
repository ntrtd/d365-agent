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
import type { ElectronicPaymentReturnOccurrenceCodesApi } from './ElectronicPaymentReturnOccurrenceCodesApi';
import { EpRetOccCodeBr } from './EpRetOccCodeBr';

/**
 * This class represents the entity "ElectronicPaymentReturnOccurrenceCodes" of service "d365_metadata".
 */
export class ElectronicPaymentReturnOccurrenceCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicPaymentReturnOccurrenceCodesType<T>
{
  /**
   * Technical entity name for ElectronicPaymentReturnOccurrenceCodes.
   */
  static override _entityName = 'ElectronicPaymentReturnOccurrenceCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicPaymentReturnOccurrenceCodes entity.
   */
  static _keys = ['dataAreaId', 'LayoutGroupId', 'LayoutReturnOccurrenceCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Group Id.
   */
  declare layoutGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Return Occurrence Code.
   */
  declare layoutReturnOccurrenceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Return Occurrence Code.
   * @nullable
   */
  declare returnOccurrenceCode?: EpRetOccCodeBr | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ElectronicPaymentReturnOccurrenceCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicPaymentReturnOccurrenceCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  layoutGroupId: DeserializedType<T, 'Edm.String'>;
  layoutReturnOccurrenceCode: DeserializedType<T, 'Edm.String'>;
  returnOccurrenceCode?: EpRetOccCodeBr | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
