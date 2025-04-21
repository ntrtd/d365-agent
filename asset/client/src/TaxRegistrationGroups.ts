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
import type { TaxRegistrationGroupsApi } from './TaxRegistrationGroupsApi';
import { TaxTypeRegistrationGroupIn } from './TaxTypeRegistrationGroupIn';

/**
 * This class represents the entity "TaxRegistrationGroups" of service "d365_metadata".
 */
export class TaxRegistrationGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxRegistrationGroupsType<T>
{
  /**
   * Technical entity name for TaxRegistrationGroups.
   */
  static override _entityName = 'TaxRegistrationGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxRegistrationGroups entity.
   */
  static _keys = ['dataAreaId', 'TaxRegistrationGroup', 'TaxType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Registration Group.
   */
  declare taxRegistrationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeRegistrationGroupIn | null;
  /**
   * Tax Registration Number.
   * @nullable
   */
  declare taxRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registraton Number Description.
   * @nullable
   */
  declare registratonNumberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxRegistrationGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxRegistrationGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxRegistrationGroup: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxTypeRegistrationGroupIn | null;
  taxRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  registratonNumberDescription?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
