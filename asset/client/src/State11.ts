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
import type { State11Api } from './State11Api';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "State11" of service "d365_metadata".
 */
export class State11<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements State11Type<T>
{
  /**
   * Technical entity name for State11.
   */
  static override _entityName = 'State11';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the State11 entity.
   */
  static _keys = ['dataAreaId', 'BankAccount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Account.
   */
  declare bankAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   * @nullable
   */
  declare sequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report On State 11.
   * @nullable
   */
  declare reportOnState11?: NoYes | null;

  constructor(_entityApi: State11Api<T>) {
    super(_entityApi);
  }
}

export interface State11Type<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankAccount: DeserializedType<T, 'Edm.String'>;
  sequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  reportOnState11?: NoYes | null;
}
