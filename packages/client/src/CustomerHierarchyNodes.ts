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
import type { CustomerHierarchyNodesApi } from './CustomerHierarchyNodesApi';
import { CustHierarchyNodeRole } from './CustHierarchyNodeRole';
import { CustHierarchyNodeType } from './CustHierarchyNodeType';
import {
  CustomerHiearchies,
  CustomerHiearchiesType
} from './CustomerHiearchies';
import { CdsParties, CdsPartiesType } from './CdsParties';

/**
 * This class represents the entity "CustomerHierarchyNodes" of service "d365_metadata".
 */
export class CustomerHierarchyNodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerHierarchyNodesType<T>
{
  /**
   * Technical entity name for CustomerHierarchyNodes.
   */
  static override _entityName = 'CustomerHierarchyNodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerHierarchyNodes entity.
   */
  static _keys = ['CustomerHierarchyId', 'NodePartyNumber'];
  /**
   * Customer Hierarchy Id.
   */
  declare customerHierarchyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Node Party Number.
   */
  declare nodePartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Role.
   * @nullable
   */
  declare role?: CustHierarchyNodeRole | null;
  /**
   * Node Type.
   * @nullable
   */
  declare nodeType?: CustHierarchyNodeType | null;
  /**
   * Version Added.
   */
  declare versionAdded: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Version Removed.
   */
  declare versionRemoved: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link CustomerHiearchies} entity.
   */
  declare customerHierarchy?: CustomerHiearchies<T> | null;
  /**
   * One-to-one navigation property to the {@link CdsParties} entity.
   */
  declare cdsParty?: CdsParties<T> | null;

  constructor(_entityApi: CustomerHierarchyNodesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerHierarchyNodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customerHierarchyId: DeserializedType<T, 'Edm.String'>;
  nodePartyNumber: DeserializedType<T, 'Edm.String'>;
  role?: CustHierarchyNodeRole | null;
  nodeType?: CustHierarchyNodeType | null;
  versionAdded: DeserializedType<T, 'Edm.Int32'>;
  versionRemoved: DeserializedType<T, 'Edm.Int32'>;
  customerHierarchy?: CustomerHiearchiesType<T> | null;
  cdsParty?: CdsPartiesType<T> | null;
}
