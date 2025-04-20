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
import type { ExpMobileTrvCoworkersApi } from './ExpMobileTrvCoworkersApi';

/**
 * This class represents the entity "ExpMobileTrvCoworkers" of service "d365_metadata".
 */
export class ExpMobileTrvCoworkers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileTrvCoworkersType<T>
{
  /**
   * Technical entity name for ExpMobileTrvCoworkers.
   */
  static override _entityName = 'ExpMobileTrvCoworkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileTrvCoworkers entity.
   */
  static _keys = ['Company', 'Name', 'Title'];
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   */
  declare title: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ExpMobileTrvCoworkersApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileTrvCoworkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  company: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  title: DeserializedType<T, 'Edm.String'>;
}
