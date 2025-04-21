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
import type { RetailItemLabelSetupsApi } from './RetailItemLabelSetupsApi';
import { RetailLabelTypeBase } from './RetailLabelTypeBase';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailItemLabelSetups" of service "d365_metadata".
 */
export class RetailItemLabelSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailItemLabelSetupsType<T>
{
  /**
   * Technical entity name for RetailItemLabelSetups.
   */
  static override _entityName = 'RetailItemLabelSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailItemLabelSetups entity.
   */
  static _keys = [
    'dataAreaId',
    'LabelType',
    'ItemId',
    'OrganizationHierarchyTypeName',
    'OrganizationPartyNumber',
    'ReportName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Label Type.
   * @nullable
   */
  declare labelType?: RetailLabelTypeBase | null;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Hierarchy Type Name.
   */
  declare organizationHierarchyTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Party Number.
   */
  declare organizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Name.
   */
  declare reportName: DeserializedType<T, 'Edm.String'>;
  /**
   * Text 1 Is Item Description.
   * @nullable
   */
  declare text1IsItemDescription?: NoYes | null;
  /**
   * Text 1.
   * @nullable
   */
  declare text1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text 2.
   * @nullable
   */
  declare text2?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailItemLabelSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailItemLabelSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  labelType?: RetailLabelTypeBase | null;
  itemId: DeserializedType<T, 'Edm.String'>;
  organizationHierarchyTypeName: DeserializedType<T, 'Edm.String'>;
  organizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  reportName: DeserializedType<T, 'Edm.String'>;
  text1IsItemDescription?: NoYes | null;
  text1?: DeserializedType<T, 'Edm.String'> | null;
  text2?: DeserializedType<T, 'Edm.String'> | null;
}
