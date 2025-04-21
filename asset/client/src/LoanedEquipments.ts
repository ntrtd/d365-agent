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
import type { LoanedEquipmentsApi } from './LoanedEquipmentsApi';
import { LoanItems, LoanItemsType } from './LoanItems';
import { People, PeopleType } from './People';

/**
 * This class represents the entity "LoanedEquipments" of service "d365_metadata".
 */
export class LoanedEquipments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LoanedEquipmentsType<T>
{
  /**
   * Technical entity name for LoanedEquipments.
   */
  static override _entityName = 'LoanedEquipments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoanedEquipments entity.
   */
  static _keys = ['PersonId', 'LoanItemId', 'Loaned'];
  /**
   * Person Id.
   */
  declare personId: DeserializedType<T, 'Edm.String'>;
  /**
   * Loan Item Id.
   */
  declare loanItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Loaned.
   */
  declare loaned: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Actual Return.
   */
  declare actualReturn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Planned Return.
   */
  declare plannedReturn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link LoanItems} entity.
   */
  declare loanItem?: LoanItems<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare dirPerson?: People<T> | null;

  constructor(_entityApi: LoanedEquipmentsApi<T>) {
    super(_entityApi);
  }
}

export interface LoanedEquipmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personId: DeserializedType<T, 'Edm.String'>;
  loanItemId: DeserializedType<T, 'Edm.String'>;
  loaned: DeserializedType<T, 'Edm.DateTimeOffset'>;
  actualReturn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  plannedReturn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loanItem?: LoanItemsType<T> | null;
  dirPerson?: PeopleType<T> | null;
}
