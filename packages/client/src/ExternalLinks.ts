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
import type { ExternalLinksApi } from './ExternalLinksApi';
import { HcmExternalLinksDisplayContext } from './HcmExternalLinksDisplayContext';
import {
  ExternalLinksGroups,
  ExternalLinksGroupsType
} from './ExternalLinksGroups';

/**
 * This class represents the entity "ExternalLinks" of service "d365_metadata".
 */
export class ExternalLinks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExternalLinksType<T>
{
  /**
   * Technical entity name for ExternalLinks.
   */
  static override _entityName = 'ExternalLinks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExternalLinks entity.
   */
  static _keys = ['dataAreaId', 'DisplayText', 'GroupName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Text.
   */
  declare displayText: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Name.
   */
  declare groupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Context.
   * @nullable
   */
  declare displayContext?: HcmExternalLinksDisplayContext | null;
  /**
   * Address.
   * @nullable
   */
  declare address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ExternalLinksGroups} entity.
   */
  declare externalLinksGroups?: ExternalLinksGroups<T> | null;

  constructor(_entityApi: ExternalLinksApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalLinksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  displayText: DeserializedType<T, 'Edm.String'>;
  groupName: DeserializedType<T, 'Edm.String'>;
  displayContext?: HcmExternalLinksDisplayContext | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  externalLinksGroups?: ExternalLinksGroupsType<T> | null;
}
