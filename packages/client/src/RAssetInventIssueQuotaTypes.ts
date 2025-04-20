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
import type { RAssetInventIssueQuotaTypesApi } from './RAssetInventIssueQuotaTypesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RAssetInventIssueQuotaTypes" of service "d365_metadata".
 */
export class RAssetInventIssueQuotaTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RAssetInventIssueQuotaTypesType<T>
{
  /**
   * Technical entity name for RAssetInventIssueQuotaTypes.
   */
  static override _entityName = 'RAssetInventIssueQuotaTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetInventIssueQuotaTypes entity.
   */
  static _keys = ['dataAreaId', 'TypeOfRate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Of Rate.
   */
  declare typeOfRate: DeserializedType<T, 'Edm.String'>;
  /**
   * Over Rate.
   * @nullable
   */
  declare overRate?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RAssetInventIssueQuotaTypesApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetInventIssueQuotaTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  typeOfRate: DeserializedType<T, 'Edm.String'>;
  overRate?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
