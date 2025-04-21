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
import type { ElectronicPaymentRemittanceOccurrenceCodesApi } from './ElectronicPaymentRemittanceOccurrenceCodesApi';
import { EpRemitOccCodeBr } from './EpRemitOccCodeBr';

/**
 * This class represents the entity "ElectronicPaymentRemittanceOccurrenceCodes" of service "d365_metadata".
 */
export class ElectronicPaymentRemittanceOccurrenceCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicPaymentRemittanceOccurrenceCodesType<T>
{
  /**
   * Technical entity name for ElectronicPaymentRemittanceOccurrenceCodes.
   */
  static override _entityName = 'ElectronicPaymentRemittanceOccurrenceCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicPaymentRemittanceOccurrenceCodes entity.
   */
  static _keys = [
    'dataAreaId',
    'LayoutGroupId',
    'LayoutRemittanceOccurrenceCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Group Id.
   */
  declare layoutGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Remittance Occurrence Code.
   */
  declare layoutRemittanceOccurrenceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Remittance Occurrence Code.
   * @nullable
   */
  declare remittanceOccurrenceCode?: EpRemitOccCodeBr | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ElectronicPaymentRemittanceOccurrenceCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicPaymentRemittanceOccurrenceCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  layoutGroupId: DeserializedType<T, 'Edm.String'>;
  layoutRemittanceOccurrenceCode: DeserializedType<T, 'Edm.String'>;
  remittanceOccurrenceCode?: EpRemitOccCodeBr | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
