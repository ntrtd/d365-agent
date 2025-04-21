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
import type { GroupDatasApi } from './GroupDatasApi';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';

/**
 * This class represents the entity "GroupDatas" of service "d365_metadata".
 */
export class GroupDatas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GroupDatasType<T>
{
  /**
   * Technical entity name for GroupDatas.
   */
  static override _entityName = 'GroupDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GroupDatas entity.
   */
  static _keys = ['GroupName', 'WarrantyDataLineStatus', 'LineIdentifier'];
  /**
   * Group Name.
   */
  declare groupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Data Line Status.
   * @nullable
   */
  declare warrantyDataLineStatus?: WarrantyGroupStatusType | null;
  /**
   * Line Identifier.
   */
  declare lineIdentifier: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: GroupDatasApi<T>) {
    super(_entityApi);
  }
}

export interface GroupDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupName: DeserializedType<T, 'Edm.String'>;
  warrantyDataLineStatus?: WarrantyGroupStatusType | null;
  lineIdentifier: DeserializedType<T, 'Edm.Decimal'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
}
