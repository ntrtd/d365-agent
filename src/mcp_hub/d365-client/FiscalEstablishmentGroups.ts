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
import type { FiscalEstablishmentGroupsApi } from './FiscalEstablishmentGroupsApi';

/**
 * This class represents the entity "FiscalEstablishmentGroups" of service "d365_metadata".
 */
export class FiscalEstablishmentGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalEstablishmentGroupsType<T>
{
  /**
   * Technical entity name for FiscalEstablishmentGroups.
   */
  static override _entityName = 'FiscalEstablishmentGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalEstablishmentGroups entity.
   */
  static _keys = ['dataAreaId', 'FiscalEstablishmentGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Establishment Group.
   */
  declare fiscalEstablishmentGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalEstablishmentGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalEstablishmentGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalEstablishmentGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
