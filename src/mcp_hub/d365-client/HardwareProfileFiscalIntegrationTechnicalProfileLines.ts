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
import type { HardwareProfileFiscalIntegrationTechnicalProfileLinesApi } from './HardwareProfileFiscalIntegrationTechnicalProfileLinesApi';

/**
 * This class represents the entity "HardwareProfileFiscalIntegrationTechnicalProfileLines" of service "d365_metadata".
 */
export class HardwareProfileFiscalIntegrationTechnicalProfileLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HardwareProfileFiscalIntegrationTechnicalProfileLinesType<T>
{
  /**
   * Technical entity name for HardwareProfileFiscalIntegrationTechnicalProfileLines.
   */
  static override _entityName =
    'HardwareProfileFiscalIntegrationTechnicalProfileLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HardwareProfileFiscalIntegrationTechnicalProfileLines entity.
   */
  static _keys = ['HardwareProfileId', 'FiscalTechnicalProfileId'];
  /**
   * Hardware Profile Id.
   */
  declare hardwareProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Technical Profile Id.
   */
  declare fiscalTechnicalProfileId: DeserializedType<T, 'Edm.String'>;

  constructor(
    _entityApi: HardwareProfileFiscalIntegrationTechnicalProfileLinesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface HardwareProfileFiscalIntegrationTechnicalProfileLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hardwareProfileId: DeserializedType<T, 'Edm.String'>;
  fiscalTechnicalProfileId: DeserializedType<T, 'Edm.String'>;
}
