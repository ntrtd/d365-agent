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
import type { FunctionalityProfileFiscalIntegrationTechnicalProfileLinesApi } from './FunctionalityProfileFiscalIntegrationTechnicalProfileLinesApi';

/**
 * This class represents the entity "FunctionalityProfileFiscalIntegrationTechnicalProfileLines" of service "d365_metadata".
 */
export class FunctionalityProfileFiscalIntegrationTechnicalProfileLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FunctionalityProfileFiscalIntegrationTechnicalProfileLinesType<T>
{
  /**
   * Technical entity name for FunctionalityProfileFiscalIntegrationTechnicalProfileLines.
   */
  static override _entityName =
    'FunctionalityProfileFiscalIntegrationTechnicalProfileLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FunctionalityProfileFiscalIntegrationTechnicalProfileLines entity.
   */
  static _keys = ['FunctionalityProfileId', 'FiscalTechnicalProfileId'];
  /**
   * Functionality Profile Id.
   */
  declare functionalityProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Technical Profile Id.
   */
  declare fiscalTechnicalProfileId: DeserializedType<T, 'Edm.String'>;

  constructor(
    _entityApi: FunctionalityProfileFiscalIntegrationTechnicalProfileLinesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface FunctionalityProfileFiscalIntegrationTechnicalProfileLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  functionalityProfileId: DeserializedType<T, 'Edm.String'>;
  fiscalTechnicalProfileId: DeserializedType<T, 'Edm.String'>;
}
