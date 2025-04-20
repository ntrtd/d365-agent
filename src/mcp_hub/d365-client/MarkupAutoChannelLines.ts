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
import type { MarkupAutoChannelLinesApi } from './MarkupAutoChannelLinesApi';

/**
 * This class represents the entity "MarkupAutoChannelLines" of service "d365_metadata".
 */
export class MarkupAutoChannelLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MarkupAutoChannelLinesType<T>
{
  /**
   * Technical entity name for MarkupAutoChannelLines.
   */
  static override _entityName = 'MarkupAutoChannelLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MarkupAutoChannelLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OMInternalOrganization_PartyNumber',
    'OMHierarchyType_Name',
    'RetailChannelRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Internal Organization Party Number.
   */
  declare omInternalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Hierarchy Type Name.
   */
  declare omHierarchyTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Channel Relation.
   */
  declare retailChannelRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit 1 Party Number.
   * @nullable
   */
  declare omOperatingUnit1PartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: MarkupAutoChannelLinesApi<T>) {
    super(_entityApi);
  }
}

export interface MarkupAutoChannelLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  omInternalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  omHierarchyTypeName: DeserializedType<T, 'Edm.String'>;
  retailChannelRelation: DeserializedType<T, 'Edm.String'>;
  omOperatingUnit1PartyNumber?: DeserializedType<T, 'Edm.String'> | null;
}
