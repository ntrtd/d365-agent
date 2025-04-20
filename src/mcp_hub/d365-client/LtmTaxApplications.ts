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
import type { LtmTaxApplicationsApi } from './LtmTaxApplicationsApi';

/**
 * This class represents the entity "LTMTaxApplications" of service "d365_metadata".
 */
export class LtmTaxApplications<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmTaxApplicationsType<T>
{
  /**
   * Technical entity name for LtmTaxApplications.
   */
  static override _entityName = 'LTMTaxApplications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmTaxApplications entity.
   */
  static _keys = ['dataAreaId', 'TaxApplicationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Application Id.
   */
  declare taxApplicationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Application Description.
   * @nullable
   */
  declare taxApplicationDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmTaxApplicationsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmTaxApplicationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxApplicationId: DeserializedType<T, 'Edm.String'>;
  taxApplicationDescription?: DeserializedType<T, 'Edm.String'> | null;
}
