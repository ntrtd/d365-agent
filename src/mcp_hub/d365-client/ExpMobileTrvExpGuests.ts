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
import type { ExpMobileTrvExpGuestsApi } from './ExpMobileTrvExpGuestsApi';

/**
 * This class represents the entity "ExpMobileTrvExpGuests" of service "d365_metadata".
 */
export class ExpMobileTrvExpGuests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileTrvExpGuestsType<T>
{
  /**
   * Technical entity name for ExpMobileTrvExpGuests.
   */
  static override _entityName = 'ExpMobileTrvExpGuests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileTrvExpGuests entity.
   */
  static _keys = ['EntRecId'];
  /**
   * Ent Rec Id.
   */
  declare entRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exp Trans Number.
   * @nullable
   */
  declare expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guest Id.
   * @nullable
   */
  declare guestId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileTrvExpGuestsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileTrvExpGuestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  guestId?: DeserializedType<T, 'Edm.String'> | null;
}
