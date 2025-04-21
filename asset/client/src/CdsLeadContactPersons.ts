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
import type { CdsLeadContactPersonsApi } from './CdsLeadContactPersonsApi';

/**
 * This class represents the entity "CDSLeadContactPersons" of service "d365_metadata".
 */
export class CdsLeadContactPersons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsLeadContactPersonsType<T>
{
  /**
   * Technical entity name for CdsLeadContactPersons.
   */
  static override _entityName = 'CDSLeadContactPersons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsLeadContactPersons entity.
   */
  static _keys = ['dataAreaId', 'ContactPersonPartyNumber', 'LeadId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Person Party Number.
   */
  declare contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Lead Id.
   */
  declare leadId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CdsLeadContactPersonsApi<T>) {
    super(_entityApi);
  }
}

export interface CdsLeadContactPersonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  leadId: DeserializedType<T, 'Edm.String'>;
}
