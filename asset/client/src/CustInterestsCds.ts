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
import type { CustInterestsCdsApi } from './CustInterestsCdsApi';
import { CustInterestType } from './CustInterestType';

/**
 * This class represents the entity "CustInterestsCds" of service "d365_metadata".
 */
export class CustInterestsCds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustInterestsCdsType<T>
{
  /**
   * Technical entity name for CustInterestsCds.
   */
  static override _entityName = 'CustInterestsCds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustInterestsCds entity.
   */
  static _keys = ['dataAreaId', 'InterestCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Interest Code.
   */
  declare interestCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Interest Type.
   * @nullable
   */
  declare interestType?: CustInterestType | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustInterestsCdsApi<T>) {
    super(_entityApi);
  }
}

export interface CustInterestsCdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  interestCode: DeserializedType<T, 'Edm.String'>;
  interestType?: CustInterestType | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
}
