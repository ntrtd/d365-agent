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
import type { RDeferralsBookTablesApi } from './RDeferralsBookTablesApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "RDeferralsBookTables" of service "d365_metadata".
 */
export class RDeferralsBookTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RDeferralsBookTablesType<T>
{
  /**
   * Technical entity name for RDeferralsBookTables.
   */
  static override _entityName = 'RDeferralsBookTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RDeferralsBookTables entity.
   */
  static _keys = ['dataAreaId', 'ModelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Number.
   */
  declare modelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;

  constructor(_entityApi: RDeferralsBookTablesApi<T>) {
    super(_entityApi);
  }
}

export interface RDeferralsBookTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  modelNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
}
