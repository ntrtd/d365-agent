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
import type { ConsignersApi } from './ConsignersApi';
import { ConsignerGroups, ConsignerGroupsType } from './ConsignerGroups';

/**
 * This class represents the entity "Consigners" of service "d365_metadata".
 */
export class Consigners<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ConsignersType<T>
{
  /**
   * Technical entity name for Consigners.
   */
  static override _entityName = 'Consigners';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Consigners entity.
   */
  static _keys = ['dataAreaId', 'AccountNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Number.
   */
  declare accountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Group Id.
   * @nullable
   */
  declare consignerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ConsignerGroups} entity.
   */
  declare consignerGroup?: ConsignerGroups<T> | null;

  constructor(_entityApi: ConsignersApi<T>) {
    super(_entityApi);
  }
}

export interface ConsignersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  consignerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  consignerGroup?: ConsignerGroupsType<T> | null;
}
