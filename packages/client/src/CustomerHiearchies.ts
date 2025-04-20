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
import type { CustomerHiearchiesApi } from './CustomerHiearchiesApi';
import { CustHierarchyPurpose } from './CustHierarchyPurpose';
import {
  CustomerHierarchyNodes,
  CustomerHierarchyNodesType
} from './CustomerHierarchyNodes';
import { CdsParties, CdsPartiesType } from './CdsParties';
import {
  CustomerHierarchyCatalogs,
  CustomerHierarchyCatalogsType
} from './CustomerHierarchyCatalogs';

/**
 * This class represents the entity "CustomerHiearchies" of service "d365_metadata".
 */
export class CustomerHiearchies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerHiearchiesType<T>
{
  /**
   * Technical entity name for CustomerHiearchies.
   */
  static override _entityName = 'CustomerHiearchies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerHiearchies entity.
   */
  static _keys = ['CustomerHierarchyId'];
  /**
   * Customer Hierarchy Id.
   */
  declare customerHierarchyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Seller Channel.
   * @nullable
   */
  declare sellerChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Version.
   */
  declare currentVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: CustHierarchyPurpose | null;
  /**
   * Organization Party Number.
   * @nullable
   */
  declare organizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CustomerHierarchyNodes} entity.
   */
  declare customerHierarchyNode: CustomerHierarchyNodes<T>[];
  /**
   * One-to-one navigation property to the {@link CdsParties} entity.
   */
  declare cdsParty?: CdsParties<T> | null;
  /**
   * One-to-many navigation property to the {@link CustomerHierarchyCatalogs} entity.
   */
  declare customerHierarchyCatalog: CustomerHierarchyCatalogs<T>[];

  constructor(_entityApi: CustomerHiearchiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerHiearchiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customerHierarchyId: DeserializedType<T, 'Edm.String'>;
  sellerChannel?: DeserializedType<T, 'Edm.String'> | null;
  currentVersion: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: CustHierarchyPurpose | null;
  organizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerHierarchyNode: CustomerHierarchyNodesType<T>[];
  cdsParty?: CdsPartiesType<T> | null;
  customerHierarchyCatalog: CustomerHierarchyCatalogsType<T>[];
}
