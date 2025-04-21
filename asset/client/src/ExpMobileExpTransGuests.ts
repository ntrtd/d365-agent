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
import type { ExpMobileExpTransGuestsApi } from './ExpMobileExpTransGuestsApi';

/**
 * This class represents the entity "ExpMobileExpTransGuests" of service "d365_metadata".
 */
export class ExpMobileExpTransGuests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileExpTransGuestsType<T>
{
  /**
   * Technical entity name for ExpMobileExpTransGuests.
   */
  static override _entityName = 'ExpMobileExpTransGuests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileExpTransGuests entity.
   */
  static _keys = ['EntRecId'];
  /**
   * Ent Rec Id.
   */
  declare entRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Remaining Amount.
   */
  declare remainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Itemized Cost Amount.
   */
  declare itemizedCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guest Id.
   * @nullable
   */
  declare guestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trv Exp Guest.
   */
  declare trvExpGuest: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Curr.
   */
  declare amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trv Exp Trans.
   */
  declare trvExpTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exp Trans Number Attach.
   * @nullable
   */
  declare expTransNumberAttach?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileExpTransGuestsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileExpTransGuestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  remainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  itemizedCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  guestId?: DeserializedType<T, 'Edm.String'> | null;
  trvExpGuest: DeserializedType<T, 'Edm.Int64'>;
  amountCurr: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  trvExpTrans: DeserializedType<T, 'Edm.Int64'>;
  expTransNumberAttach?: DeserializedType<T, 'Edm.String'> | null;
}
