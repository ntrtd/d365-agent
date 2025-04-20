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
import type { SeparateDivisionsApi } from './SeparateDivisionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SeparateDivisions" of service "d365_metadata".
 */
export class SeparateDivisions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SeparateDivisionsType<T>
{
  /**
   * Technical entity name for SeparateDivisions.
   */
  static override _entityName = 'SeparateDivisions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SeparateDivisions entity.
   */
  static _keys = ['dataAreaId', 'SeparateDivisionID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Separate Division Id.
   */
  declare separateDivisionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Independent.
   * @nullable
   */
  declare independent?: NoYes | null;
  /**
   * Alcohol Regulation Authority.
   * @nullable
   */
  declare alcoholRegulationAuthority?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SeparateDivisionsApi<T>) {
    super(_entityApi);
  }
}

export interface SeparateDivisionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  separateDivisionId: DeserializedType<T, 'Edm.String'>;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  independent?: NoYes | null;
  alcoholRegulationAuthority?: DeserializedType<T, 'Edm.String'> | null;
}
