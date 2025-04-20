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
import type { RetailStaffsApi } from './RetailStaffsApi';
import { RetailCashierSalesPersonOther } from './RetailCashierSalesPersonOther';
import { Workers, WorkersType } from './Workers';
import { RetailTillLayouts, RetailTillLayoutsType } from './RetailTillLayouts';

/**
 * This class represents the entity "RetailStaffs" of service "d365_metadata".
 */
export class RetailStaffs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailStaffsType<T>
{
  /**
   * Technical entity name for RetailStaffs.
   */
  static override _entityName = 'RetailStaffs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStaffs entity.
   */
  static _keys = ['PersonnelNumber'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Type.
   * @nullable
   */
  declare employmentType?: RetailCashierSalesPersonOther | null;
  /**
   * Name On Receipt.
   * @nullable
   */
  declare nameOnReceipt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Culture Name.
   * @nullable
   */
  declare cultureName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Identifier.
   * @nullable
   */
  declare externalIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Layout Id.
   * @nullable
   */
  declare layoutId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * @nullable
   */
  declare externalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Sub Identifier.
   * @nullable
   */
  declare externalSubIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Image.
   * @nullable
   */
  declare image?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Identity Alias.
   * @nullable
   */
  declare externalIdentityAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTillLayouts} entity.
   */
  declare retailTillLayout?: RetailTillLayouts<T> | null;

  constructor(_entityApi: RetailStaffsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStaffsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  employmentType?: RetailCashierSalesPersonOther | null;
  nameOnReceipt?: DeserializedType<T, 'Edm.String'> | null;
  cultureName?: DeserializedType<T, 'Edm.String'> | null;
  externalIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  layoutId?: DeserializedType<T, 'Edm.String'> | null;
  externalName?: DeserializedType<T, 'Edm.String'> | null;
  externalSubIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  image?: DeserializedType<T, 'Edm.String'> | null;
  externalIdentityAlias?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
  retailTillLayout?: RetailTillLayoutsType<T> | null;
}
