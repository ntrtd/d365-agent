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
import type { RetailTillLayoutStaffsApi } from './RetailTillLayoutStaffsApi';
import { RetailTillLayouts, RetailTillLayoutsType } from './RetailTillLayouts';

/**
 * This class represents the entity "RetailTillLayoutStaffs" of service "d365_metadata".
 */
export class RetailTillLayoutStaffs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTillLayoutStaffsType<T>
{
  /**
   * Technical entity name for RetailTillLayoutStaffs.
   */
  static override _entityName = 'RetailTillLayoutStaffs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTillLayoutStaffs entity.
   */
  static _keys = ['LayoutId', 'StaffId'];
  /**
   * Layout Id.
   */
  declare layoutId: DeserializedType<T, 'Edm.String'>;
  /**
   * Staff Id.
   */
  declare staffId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link RetailTillLayouts} entity.
   */
  declare retailTillLayout?: RetailTillLayouts<T> | null;

  constructor(_entityApi: RetailTillLayoutStaffsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTillLayoutStaffsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  staffId: DeserializedType<T, 'Edm.String'>;
  retailTillLayout?: RetailTillLayoutsType<T> | null;
}
