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
import type { BranchesApi } from './BranchesApi';
import { NoYes } from './NoYes';
import {
  OperationalSitesV2,
  OperationalSitesV2Type
} from './OperationalSitesV2';

/**
 * This class represents the entity "Branches" of service "d365_metadata".
 */
export class Branches<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BranchesType<T>
{
  /**
   * Technical entity name for Branches.
   */
  static override _entityName = 'Branches';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Branches entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Logistics Location Location Id.
   * @nullable
   */
  declare logisticsLocationLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Head Office.
   * @nullable
   */
  declare headOffice?: NoYes | null;
  /**
   * Address.
   * @nullable
   */
  declare address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OperationalSitesV2} entity.
   */
  declare operationalSites: OperationalSitesV2<T>[];

  constructor(_entityApi: BranchesApi<T>) {
    super(_entityApi);
  }
}

export interface BranchesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  logisticsLocationLocationId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  headOffice?: NoYes | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  operationalSites: OperationalSitesV2Type<T>[];
}
