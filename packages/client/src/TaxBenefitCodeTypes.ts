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
import type { TaxBenefitCodeTypesApi } from './TaxBenefitCodeTypesApi';

/**
 * This class represents the entity "TaxBenefitCodeTypes" of service "d365_metadata".
 */
export class TaxBenefitCodeTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxBenefitCodeTypesType<T>
{
  /**
   * Technical entity name for TaxBenefitCodeTypes.
   */
  static override _entityName = 'TaxBenefitCodeTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxBenefitCodeTypes entity.
   */
  static _keys = ['dataAreaId', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Taxation Code.
   * @nullable
   */
  declare taxationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxBenefitCodeTypesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxBenefitCodeTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  taxationCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
