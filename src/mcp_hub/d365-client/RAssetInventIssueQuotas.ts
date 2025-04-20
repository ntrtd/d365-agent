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
import type { RAssetInventIssueQuotasApi } from './RAssetInventIssueQuotasApi';
import { RAssetTableAll } from './RAssetTableAll';

/**
 * This class represents the entity "RAssetInventIssueQuotas" of service "d365_metadata".
 */
export class RAssetInventIssueQuotas<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RAssetInventIssueQuotasType<T>
{
  /**
   * Technical entity name for RAssetInventIssueQuotas.
   */
  static override _entityName = 'RAssetInventIssueQuotas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetInventIssueQuotas entity.
   */
  static _keys = [
    'dataAreaId',
    'TypeOfRate',
    'ItemGroup',
    'Item',
    'TitleRelationType',
    'Title',
    'TypeOfWorksRelationType',
    'TypeOfWorks',
    'DepartmentRelationType',
    'Department'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Of Rate.
   */
  declare typeOfRate: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Group.
   */
  declare itemGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Item.
   */
  declare item: DeserializedType<T, 'Edm.String'>;
  /**
   * Title Relation Type.
   * @nullable
   */
  declare titleRelationType?: RAssetTableAll | null;
  /**
   * Title.
   */
  declare title: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Of Works Relation Type.
   * @nullable
   */
  declare typeOfWorksRelationType?: RAssetTableAll | null;
  /**
   * Type Of Works.
   */
  declare typeOfWorks: DeserializedType<T, 'Edm.String'>;
  /**
   * Department Relation Type.
   * @nullable
   */
  declare departmentRelationType?: RAssetTableAll | null;
  /**
   * Department.
   */
  declare department: DeserializedType<T, 'Edm.String'>;
  /**
   * Lifetime.
   */
  declare lifetime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Rate.
   */
  declare rate: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RAssetInventIssueQuotasApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetInventIssueQuotasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  typeOfRate: DeserializedType<T, 'Edm.String'>;
  itemGroup: DeserializedType<T, 'Edm.String'>;
  item: DeserializedType<T, 'Edm.String'>;
  titleRelationType?: RAssetTableAll | null;
  title: DeserializedType<T, 'Edm.String'>;
  typeOfWorksRelationType?: RAssetTableAll | null;
  typeOfWorks: DeserializedType<T, 'Edm.String'>;
  departmentRelationType?: RAssetTableAll | null;
  department: DeserializedType<T, 'Edm.String'>;
  lifetime: DeserializedType<T, 'Edm.Int32'>;
  rate: DeserializedType<T, 'Edm.Int32'>;
}
