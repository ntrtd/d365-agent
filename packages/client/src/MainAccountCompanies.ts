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
import type { MainAccountCompaniesApi } from './MainAccountCompaniesApi';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';

/**
 * This class represents the entity "MainAccountCompanies" of service "d365_metadata".
 */
export class MainAccountCompanies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MainAccountCompaniesType<T>
{
  /**
   * Technical entity name for MainAccountCompanies.
   */
  static override _entityName = 'MainAccountCompanies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MainAccountCompanies entity.
   */
  static _keys = ['MainAccountId', 'LegalEntityId'];
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;

  constructor(_entityApi: MainAccountCompaniesApi<T>) {
    super(_entityApi);
  }
}

export interface MainAccountCompaniesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity?: LegalEntitiesType<T> | null;
}
