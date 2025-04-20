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
import type { RetailAssortmentChannelLinesApi } from './RetailAssortmentChannelLinesApi';
import { RetailAssortmentStatusType } from './RetailAssortmentStatusType';
import { RetailAssortments, RetailAssortmentsType } from './RetailAssortments';

/**
 * This class represents the entity "RetailAssortmentChannelLines" of service "d365_metadata".
 */
export class RetailAssortmentChannelLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailAssortmentChannelLinesType<T>
{
  /**
   * Technical entity name for RetailAssortmentChannelLines.
   */
  static override _entityName = 'RetailAssortmentChannelLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailAssortmentChannelLines entity.
   */
  static _keys = [
    'AssortmentId',
    'PartyNumber',
    'OrganizationHierarchyType',
    'Status'
  ];
  /**
   * Assortment Id.
   */
  declare assortmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Hierarchy Type.
   */
  declare organizationHierarchyType: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailAssortmentStatusType | null;
  /**
   * Organization Name.
   * @nullable
   */
  declare organizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailAssortments} entity.
   */
  declare retailAssortment?: RetailAssortments<T> | null;

  constructor(_entityApi: RetailAssortmentChannelLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailAssortmentChannelLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  assortmentId: DeserializedType<T, 'Edm.String'>;
  partyNumber: DeserializedType<T, 'Edm.String'>;
  organizationHierarchyType: DeserializedType<T, 'Edm.String'>;
  status?: RetailAssortmentStatusType | null;
  organizationName?: DeserializedType<T, 'Edm.String'> | null;
  retailAssortment?: RetailAssortmentsType<T> | null;
}
