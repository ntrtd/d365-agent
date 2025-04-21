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
import type { TaxAllowedExemptCodesForIpiEntitiesApi } from './TaxAllowedExemptCodesForIpiEntitiesApi';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';

/**
 * This class represents the entity "TaxAllowedExemptCodesForIPIEntities" of service "d365_metadata".
 */
export class TaxAllowedExemptCodesForIpiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxAllowedExemptCodesForIpiEntitiesType<T>
{
  /**
   * Technical entity name for TaxAllowedExemptCodesForIpiEntities.
   */
  static override _entityName = 'TaxAllowedExemptCodesForIPIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxAllowedExemptCodesForIpiEntities entity.
   */
  static _keys = ['dataAreaId', 'ExemptCode', 'TaxationCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Exempt Code.
   */
  declare exemptCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Taxation Code.
   */
  declare taxationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Value.
   * @nullable
   */
  declare fiscalValue?: TaxFiscalValueBr | null;

  constructor(_entityApi: TaxAllowedExemptCodesForIpiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxAllowedExemptCodesForIpiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  exemptCode: DeserializedType<T, 'Edm.String'>;
  taxationCode: DeserializedType<T, 'Edm.String'>;
  fiscalValue?: TaxFiscalValueBr | null;
}
