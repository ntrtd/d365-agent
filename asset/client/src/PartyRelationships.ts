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
import type { PartyRelationshipsApi } from './PartyRelationshipsApi';
import { RelationshipTypes, RelationshipTypesType } from './RelationshipTypes';

/**
 * This class represents the entity "PartyRelationships" of service "d365_metadata".
 */
export class PartyRelationships<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PartyRelationshipsType<T>
{
  /**
   * Technical entity name for PartyRelationships.
   */
  static override _entityName = 'PartyRelationships';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PartyRelationships entity.
   */
  static _keys = [
    'RelationshipType',
    'ParentPartyId',
    'ChildPartyId',
    'LegalEntityDataArea',
    'ValidTo',
    'ValidFrom'
  ];
  /**
   * Relationship Type.
   */
  declare relationshipType: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Party Id.
   */
  declare parentPartyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Child Party Id.
   */
  declare childPartyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Data Area.
   */
  declare legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link RelationshipTypes} entity.
   */
  declare dirRelationshipType?: RelationshipTypes<T> | null;

  constructor(_entityApi: PartyRelationshipsApi<T>) {
    super(_entityApi);
  }
}

export interface PartyRelationshipsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  relationshipType: DeserializedType<T, 'Edm.String'>;
  parentPartyId: DeserializedType<T, 'Edm.String'>;
  childPartyId: DeserializedType<T, 'Edm.String'>;
  legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dirRelationshipType?: RelationshipTypesType<T> | null;
}
